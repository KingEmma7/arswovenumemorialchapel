import React, { useEffect, useMemo, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { AttendanceRecord, EventRow, RosterMember, fetchAttendanceForEvents, fetchEvents } from '@/lib/attendance';

interface AttendanceGridProps {
  groupId: string;
  roster: RosterMember[];
  isAdmin?: boolean;
  refreshKey?: number;
}

interface MonthCursor {
  year: number;
  month: number; // 0-11
}

const STATUS_SYMBOL: Record<string, { label: string; className: string }> = {
  present: { label: '✓', className: 'text-primary-600' },
  absent: { label: '✗', className: 'text-church-red' },
  excused: { label: 'E', className: 'text-navy-400' },
};

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

function formatMonth(cursor: MonthCursor) {
  return new Date(cursor.year, cursor.month, 1).toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
}

function isInMonth(date: string, cursor: MonthCursor) {
  const d = new Date(`${date}T00:00:00`);
  return d.getFullYear() === cursor.year && d.getMonth() === cursor.month;
}

function shiftMonth(cursor: MonthCursor, delta: number): MonthCursor {
  const d = new Date(cursor.year, cursor.month + delta, 1);
  return { year: d.getFullYear(), month: d.getMonth() };
}

function dedupeByDate(events: EventRow[]): EventRow[] {
  return Array.from(new Map(events.map((e) => [e.date, e])).values());
}

function computeStreak(events: EventRow[], recordsByMember: Record<string, string>) {
  let streak = 0;
  for (let i = events.length - 1; i >= 0; i--) {
    const status = recordsByMember[events[i].id];
    if (status === 'present') streak++;
    else if (status === 'absent') break;
  }
  return streak;
}

const AttendanceGrid: React.FC<AttendanceGridProps> = ({ groupId, roster, isAdmin, refreshKey }) => {
  const [events, setEvents] = useState<EventRow[]>([]);
  const [records, setRecords] = useState<AttendanceRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [monthCursor, setMonthCursor] = useState<MonthCursor | null>(null);

  const activeRoster = roster.filter((m) => m.status === 'active');

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      setError('');
      try {
        const evts = dedupeByDate(await fetchEvents(groupId));
        const recs = await fetchAttendanceForEvents(evts.map((e) => e.id));
        if (cancelled) return;
        setEvents(evts);
        setRecords(recs);
        setMonthCursor((prev) => {
          if (prev) return prev;
          const anchor = evts.length > 0 ? new Date(`${evts[evts.length - 1].date}T00:00:00`) : new Date();
          return { year: anchor.getFullYear(), month: anchor.getMonth() };
        });
      } catch {
        if (!cancelled) setError('Could not load attendance history.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [groupId, refreshKey]);

  const byMember = useMemo(() => {
    const map: Record<string, Record<string, { status: string; note: string | null }>> = {};
    for (const r of records) {
      if (!map[r.roster_member_id]) map[r.roster_member_id] = {};
      map[r.roster_member_id][r.event_id] = { status: r.status, note: r.note };
    }
    return map;
  }, [records]);

  const monthEvents = monthCursor ? events.filter((e) => isInMonth(e.date, monthCursor)) : [];

  if (loading || !monthCursor) return <p className="text-navy-500 text-sm">Loading attendance history...</p>;

  if (error) return <p className="text-church-red text-sm">{error}</p>;

  const monthNav = (
    <div className="flex items-center gap-1 mb-3">
      <button
        type="button"
        onClick={() => setMonthCursor((c) => shiftMonth(c!, -1))}
        className="text-navy-400 hover:text-primary-600 p-1"
        title="Previous month"
      >
        <FiChevronLeft size={16} />
      </button>
      <span className="text-sm text-navy-700 font-medium px-1 min-w-[140px] text-center">
        {formatMonth(monthCursor)}
      </span>
      <button
        type="button"
        onClick={() => setMonthCursor((c) => shiftMonth(c!, 1))}
        className="text-navy-400 hover:text-primary-600 p-1"
        title="Next month"
      >
        <FiChevronRight size={16} />
      </button>
    </div>
  );

  if (events.length === 0) {
    return <p className="text-navy-500 text-sm">No attendance has been recorded yet.</p>;
  }

  if (monthEvents.length === 0) {
    return (
      <div>
        {monthNav}
        <p className="text-navy-500 text-sm">No attendance recorded for {formatMonth(monthCursor)}.</p>
      </div>
    );
  }

  return (
    <div>
      {monthNav}
      <p className="text-navy-400 text-xs mb-2">% and streak reflect the member&apos;s full attendance history, not just this month.</p>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="sticky left-0 bg-white text-left px-3 py-2 text-navy-500 font-medium">Member</th>
              {monthEvents.map((e) => (
                <th key={e.id} className="px-2 py-2 text-navy-400 font-medium whitespace-nowrap">
                  {formatDate(e.date)}
                </th>
              ))}
              <th className="px-3 py-2 text-navy-500 font-medium">%</th>
              <th className="px-3 py-2 text-navy-500 font-medium">Streak</th>
            </tr>
          </thead>
          <tbody>
            {activeRoster.map((member) => {
              const memberRecords = byMember[member.id] ?? {};
              const statusOnly = Object.fromEntries(
                Object.entries(memberRecords).map(([eventId, r]) => [eventId, r.status])
              );
              const present = Object.values(statusOnly).filter((s) => s === 'present').length;
              const absent = Object.values(statusOnly).filter((s) => s === 'absent').length;
              const total = present + absent;
              const pct = total > 0 ? Math.round((present / total) * 100) : null;
              const streak = computeStreak(events, statusOnly);

              return (
                <tr key={member.id} className="border-t border-navy-100">
                  <td className="sticky left-0 bg-white px-3 py-2 text-navy-900 font-medium whitespace-nowrap">
                    {member.full_name}
                  </td>
                  {monthEvents.map((e) => {
                    const record = memberRecords[e.id];
                    const symbol = record ? STATUS_SYMBOL[record.status] : null;
                    const title = isAdmin && record?.status === 'excused' && record.note ? record.note : undefined;
                    return (
                      <td key={e.id} className="px-2 py-2 text-center" title={title}>
                        <span className={symbol?.className ?? 'text-navy-200'}>
                          {symbol?.label ?? '·'}
                        </span>
                      </td>
                    );
                  })}
                  <td className="px-3 py-2 text-center text-navy-700">{pct === null ? '—' : `${pct}%`}</td>
                  <td className="px-3 py-2 text-center text-navy-700">{streak}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceGrid;
