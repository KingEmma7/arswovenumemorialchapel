import React, { useEffect, useMemo, useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiCheck, FiTrash2, FiEdit2 } from 'react-icons/fi';
import { RosterMember, updateDuesStartPeriod } from '@/lib/attendance';
import {
  DuesPayment,
  DuesSettings,
  fetchDuesSettings,
  updateDuesSettings,
  fetchAllPayments,
  recordPayment,
  clearPayment,
  periodFor,
} from '@/lib/dues';

interface DuesPanelProps {
  groupId: string;
  roster: RosterMember[];
  isAdmin: boolean;
  onRosterChange?: () => void;
}

interface MonthCursor {
  year: number;
  month: number; // 0-11
}

function formatMonth(cursor: MonthCursor) {
  return new Date(cursor.year, cursor.month, 1).toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
}

function shiftMonth(cursor: MonthCursor, delta: number): MonthCursor {
  const d = new Date(cursor.year, cursor.month + delta, 1);
  return { year: d.getFullYear(), month: d.getMonth() };
}

function monthsBetween(start: MonthCursor, end: MonthCursor): MonthCursor[] {
  const months: MonthCursor[] = [];
  let cursor = start;
  let guard = 0;
  while ((cursor.year < end.year || (cursor.year === end.year && cursor.month <= end.month)) && guard < 600) {
    months.push(cursor);
    cursor = shiftMonth(cursor, 1);
    guard++;
  }
  return months;
}

function todayLocal(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function periodToMonthCursor(period: string): MonthCursor {
  const [y, m] = period.split('-').map(Number);
  return { year: y, month: m - 1 };
}

const DuesPanel: React.FC<DuesPanelProps> = ({ groupId, roster, isAdmin, onRosterChange }) => {
  const [settings, setSettings] = useState<DuesSettings | null>(null);
  const [amountDraft, setAmountDraft] = useState('');
  const [payments, setPayments] = useState<DuesPayment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [monthCursor, setMonthCursor] = useState<MonthCursor>(() => {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() };
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editAmount, setEditAmount] = useState('');
  const [editDate, setEditDate] = useState('');

  const activeRoster = roster.filter((m) => m.status === 'active');

  const load = async () => {
    setLoading(true);
    setError('');
    try {
      const [s, p] = await Promise.all([fetchDuesSettings(groupId), fetchAllPayments(groupId)]);
      setSettings(s);
      setAmountDraft(String(s.monthlyAmount));
      setPayments(p);
    } catch {
      setError('Could not load dues information.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupId]);

  const period = periodFor(monthCursor.year, monthCursor.month);
  const paymentsThisMonth = useMemo(
    () => Object.fromEntries(payments.filter((p) => p.period === period).map((p) => [p.roster_member_id, p])),
    [payments, period]
  );

  const balances = useMemo(() => {
    if (!settings) return null;
    const now = new Date();
    const current: MonthCursor = { year: now.getFullYear(), month: now.getMonth() };

    return activeRoster.map((member) => {
      const start = periodToMonthCursor(member.dues_start_period);
      const months = monthsBetween(start, current);
      const monthSet = new Set(months.map((m) => periodFor(m.year, m.month)));
      const memberPayments = payments.filter((p) => p.roster_member_id === member.id && monthSet.has(p.period));
      const totalPaid = memberPayments.reduce((sum, p) => sum + p.amount, 0);
      const totalOwed = settings.monthlyAmount * months.length;
      return { member, totalOwed, totalPaid, balance: totalOwed - totalPaid, monthsTracked: months.length };
    });
  }, [payments, settings, activeRoster]);

  const handleSaveAmount = async () => {
    const value = Number(amountDraft);
    if (Number.isNaN(value) || !settings) return;
    const previous = settings.monthlyAmount;
    setSettings({ ...settings, monthlyAmount: value });
    try {
      await updateDuesSettings(groupId, value);
    } catch {
      setError('Failed to update the monthly amount.');
      setSettings((s) => (s ? { ...s, monthlyAmount: previous } : s));
      setAmountDraft(String(previous));
    }
  };

  const handleDuesStartChange = async (rosterMemberId: string, monthValue: string) => {
    if (!monthValue) return;
    try {
      await updateDuesStartPeriod(rosterMemberId, `${monthValue}-01`);
      onRosterChange?.();
    } catch {
      setError('Failed to update the dues start month.');
    }
  };

  const handleMarkPaid = async (rosterMemberId: string) => {
    if (!settings) return;
    try {
      await recordPayment(groupId, rosterMemberId, period, settings.monthlyAmount, todayLocal());
      await load();
    } catch {
      setError('Failed to record payment.');
    }
  };

  const startEdit = (payment: DuesPayment) => {
    setEditingId(payment.id);
    setEditAmount(String(payment.amount));
    setEditDate(payment.paid_on);
  };

  const saveEdit = async (rosterMemberId: string) => {
    const value = Number(editAmount);
    if (Number.isNaN(value)) return;
    setEditingId(null);
    try {
      await recordPayment(groupId, rosterMemberId, period, value, editDate);
      await load();
    } catch {
      setError('Failed to update payment.');
    }
  };

  const handleClear = async (paymentId: string) => {
    try {
      await clearPayment(paymentId);
      await load();
    } catch {
      setError('Failed to clear payment.');
    }
  };

  if (loading) return <p className="text-navy-500 text-sm">Loading dues...</p>;
  if (error) return <p className="text-church-red text-sm">{error}</p>;
  if (!settings) return null;

  return (
    <div>
      {isAdmin && (
        <div className="flex items-center gap-2 mb-5 bg-navy-50 rounded-lg p-3">
          <span className="text-sm text-navy-700">Monthly dues amount ({settings.currency}):</span>
          <input
            type="number"
            min={0}
            value={amountDraft}
            onChange={(e) => setAmountDraft(e.target.value)}
            onBlur={handleSaveAmount}
            className="w-24 border border-navy-200 rounded-lg px-2 py-1 text-sm"
          />
        </div>
      )}

      <div className="flex items-center gap-1 mb-3">
        <button
          type="button"
          onClick={() => setMonthCursor((c) => shiftMonth(c, -1))}
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
          onClick={() => setMonthCursor((c) => shiftMonth(c, 1))}
          className="text-navy-400 hover:text-primary-600 p-1"
          title="Next month"
        >
          <FiChevronRight size={16} />
        </button>
      </div>

      <ul className="flex flex-col gap-2 mb-8">
        {activeRoster.map((member) => {
          const payment = paymentsThisMonth[member.id];
          return (
            <li key={member.id} className="bg-white border border-navy-100 rounded-lg px-4 py-3">
              {editingId === payment?.id ? (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-navy-900 font-medium flex-1 min-w-[140px]">{member.full_name}</span>
                  <input
                    type="number"
                    min={0}
                    value={editAmount}
                    onChange={(e) => setEditAmount(e.target.value)}
                    className="w-20 border border-navy-200 rounded-lg px-2 py-1 text-sm"
                  />
                  <input
                    type="date"
                    value={editDate}
                    onChange={(e) => setEditDate(e.target.value)}
                    className="border border-navy-200 rounded-lg px-2 py-1 text-sm"
                  />
                  <button type="button" onClick={() => saveEdit(member.id)} className="text-primary-600 p-1">
                    <FiCheck size={16} />
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <span className="text-navy-900 font-medium">{member.full_name}</span>
                  <div className="flex items-center gap-3">
                    {payment ? (
                      <>
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary-50 text-primary-700">
                          Paid {settings.currency} {payment.amount.toFixed(2)}
                        </span>
                        <span className="text-navy-400 text-xs hidden sm:inline">{payment.paid_on}</span>
                        {isAdmin && (
                          <>
                            <button
                              type="button"
                              onClick={() => startEdit(payment)}
                              className="text-navy-300 hover:text-primary-600 p-1"
                            >
                              <FiEdit2 size={14} />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleClear(payment.id)}
                              className="text-navy-300 hover:text-church-red p-1"
                            >
                              <FiTrash2 size={14} />
                            </button>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-navy-100 text-navy-400">
                          Unpaid
                        </span>
                        {isAdmin && (
                          <button
                            type="button"
                            onClick={() => handleMarkPaid(member.id)}
                            className="text-xs font-medium px-3 py-1.5 rounded-full border border-navy-200 text-navy-500 hover:bg-navy-100 transition-colors duration-150"
                          >
                            Mark Paid
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {balances && (
        <div>
          <h3 className="text-md font-bold text-navy-900 mb-1">Balances</h3>
          <p className="text-navy-400 text-xs mb-3">
            Each member&apos;s balance is tracked from their own dues start month through today.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="text-left px-3 py-2 text-navy-500 font-medium">Member</th>
                  <th className="px-3 py-2 text-navy-500 font-medium">Dues Since</th>
                  <th className="px-3 py-2 text-navy-500 font-medium">Total Paid</th>
                  <th className="px-3 py-2 text-navy-500 font-medium">Balance</th>
                </tr>
              </thead>
              <tbody>
                {balances.map(({ member, totalPaid, balance }) => (
                  <tr key={member.id} className="border-t border-navy-100">
                    <td className="px-3 py-2 text-navy-900 font-medium whitespace-nowrap">{member.full_name}</td>
                    <td className="px-3 py-2 text-center">
                      {isAdmin ? (
                        <input
                          type="month"
                          defaultValue={member.dues_start_period.slice(0, 7)}
                          onChange={(e) => handleDuesStartChange(member.id, e.target.value)}
                          className="border border-navy-200 rounded-lg px-2 py-1 text-xs"
                        />
                      ) : (
                        <span className="text-navy-500 text-xs">{member.dues_start_period.slice(0, 7)}</span>
                      )}
                    </td>
                    <td className="px-3 py-2 text-center text-navy-700">
                      {settings.currency} {totalPaid.toFixed(2)}
                    </td>
                    <td
                      className={`px-3 py-2 text-center font-medium ${
                        balance > 0 ? 'text-church-red' : 'text-primary-600'
                      }`}
                    >
                      {settings.currency} {balance.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default DuesPanel;
