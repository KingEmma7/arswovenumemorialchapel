import React, { useEffect, useState } from 'react';
import { FiTrash2, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
  AttendanceStatus,
  RosterMember,
  fetchEventByDate,
  getOrCreateEvent,
  fetchAttendanceWithNotes,
  markAttendance,
  clearAttendance,
  deleteEventIfEmpty,
  mostRecentSunday,
  addDays,
} from '@/lib/attendance';

interface AttendanceMarkerProps {
  groupId: string;
  roster: RosterMember[];
  onMarked?: () => void;
}

const STATUS_OPTIONS: { value: AttendanceStatus; label: string; activeClass: string }[] = [
  { value: 'present', label: 'Present', activeClass: 'bg-primary-600 text-white' },
  { value: 'absent', label: 'Absent', activeClass: 'bg-church-red text-white' },
  { value: 'excused', label: 'Excused', activeClass: 'bg-navy-400 text-white' },
];

function formatSunday(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

const AttendanceMarker: React.FC<AttendanceMarkerProps> = ({ groupId, roster, onMarked }) => {
  const [date, setDate] = useState(mostRecentSunday());
  const [eventId, setEventId] = useState<string | null>(null);
  const [marks, setMarks] = useState<Record<string, AttendanceStatus>>({});
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const activeRoster = roster.filter((m) => m.status === 'active');

  // isStale lets a superseded call (e.g. the admin clicked "Next Sunday" again
  // before this fetch resolved) bail out instead of overwriting newer state.
  const refresh = async (isStale: () => boolean = () => false) => {
    const event = await fetchEventByDate(groupId, date);
    if (isStale()) return;
    if (!event) {
      setEventId(null);
      setMarks({});
      setNotes({});
      return;
    }
    const records = await fetchAttendanceWithNotes([event.id]);
    if (isStale()) return;
    setEventId(event.id);
    setMarks(Object.fromEntries(records.map((r) => [r.roster_member_id, r.status])));
    setNotes(Object.fromEntries(records.filter((r) => r.note).map((r) => [r.roster_member_id, r.note as string])));
  };

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      setError('');
      try {
        await refresh(() => cancelled);
      } catch {
        if (!cancelled) setError('Could not load attendance for this date.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupId, date]);

  const resyncAfterFailure = async (message: string) => {
    setError(message);
    try {
      await refresh();
    } catch {
      // best-effort resync; the error above already tells the admin to retry
    }
  };

  const ensureEvent = async (): Promise<string> => {
    if (eventId) return eventId;
    const event = await getOrCreateEvent(groupId, date);
    setEventId(event.id);
    return event.id;
  };

  const handleMark = async (rosterMemberId: string, status: AttendanceStatus) => {
    setMarks((prev) => ({ ...prev, [rosterMemberId]: status }));
    try {
      const id = await ensureEvent();
      await markAttendance(id, rosterMemberId, status, notes[rosterMemberId] ?? null);
      onMarked?.();
    } catch {
      await resyncAfterFailure('Failed to save a mark. Please retry.');
    }
  };

  const handleNoteChange = (rosterMemberId: string, note: string) => {
    setNotes((prev) => ({ ...prev, [rosterMemberId]: note }));
  };

  const handleNoteSave = async (rosterMemberId: string) => {
    if (marks[rosterMemberId] !== 'excused') return;
    try {
      const id = await ensureEvent();
      await markAttendance(id, rosterMemberId, 'excused', notes[rosterMemberId] ?? null);
      onMarked?.();
    } catch {
      await resyncAfterFailure('Failed to save the reason. Please retry.');
    }
  };

  const handleClear = async (rosterMemberId: string) => {
    if (!eventId) return;
    const remainingMarks = { ...marks };
    delete remainingMarks[rosterMemberId];
    setMarks(remainingMarks);
    setNotes((prev) => {
      const next = { ...prev };
      delete next[rosterMemberId];
      return next;
    });
    try {
      await clearAttendance(eventId, rosterMemberId);
      if (Object.keys(remainingMarks).length === 0) {
        await deleteEventIfEmpty(eventId);
        setEventId(null);
      }
      onMarked?.();
    } catch {
      await resyncAfterFailure('Failed to clear the mark. Please retry.');
    }
  };

  return (
    <div className="bg-navy-50 rounded-xl p-6 mb-8">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <h2 className="text-lg font-bold text-navy-900">Mark Attendance</h2>
        <div className="flex items-center gap-1 bg-white border border-navy-200 rounded-lg px-2 py-1.5">
          <button
            type="button"
            onClick={() => setDate((d) => addDays(d, -7))}
            className="text-navy-400 hover:text-primary-600 p-1"
            title="Previous Sunday"
          >
            <FiChevronLeft size={16} />
          </button>
          <span className="text-sm text-navy-700 font-medium px-2 whitespace-nowrap">{formatSunday(date)}</span>
          <button
            type="button"
            onClick={() => setDate((d) => addDays(d, 7))}
            className="text-navy-400 hover:text-primary-600 p-1"
            title="Next Sunday"
          >
            <FiChevronRight size={16} />
          </button>
        </div>
      </div>

      {error && <p className="text-church-red text-sm mb-3">{error}</p>}
      {loading ? (
        <p className="text-navy-500 text-sm">Loading roster...</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {activeRoster.map((member) => (
            <li key={member.id} className="bg-white rounded-lg px-4 py-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-navy-900 font-medium">{member.full_name}</p>
                  {member.role_title && (
                    <p className="text-navy-400 text-xs">{member.role_title}</p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {STATUS_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => handleMark(member.id, opt.value)}
                      className={`text-xs font-medium px-3 py-1.5 rounded-full border border-navy-200 transition-colors duration-150 ${
                        marks[member.id] === opt.value ? opt.activeClass : 'text-navy-500 hover:bg-navy-100'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                  {marks[member.id] && (
                    <button
                      type="button"
                      onClick={() => handleClear(member.id)}
                      title="Clear this mark"
                      className="text-navy-300 hover:text-church-red transition-colors duration-150 p-1"
                    >
                      <FiTrash2 size={14} />
                    </button>
                  )}
                </div>
              </div>

              {marks[member.id] === 'excused' && (
                <input
                  type="text"
                  value={notes[member.id] ?? ''}
                  onChange={(e) => handleNoteChange(member.id, e.target.value)}
                  onBlur={() => handleNoteSave(member.id)}
                  placeholder="Reason for excused absence (e.g. asked permission — travelling)"
                  className="mt-2 w-full text-sm border border-navy-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AttendanceMarker;
