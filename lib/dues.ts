import { supabase } from '@/lib/supabase';

export interface DuesSettings {
  monthlyAmount: number;
  currency: string;
}

export interface DuesPayment {
  id: string;
  roster_member_id: string;
  period: string; // YYYY-MM-01
  amount: number;
  paid_on: string;
  note: string | null;
}

function toLocalDateString(d: Date): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}-01`;
}

export function periodFor(year: number, month: number): string {
  return toLocalDateString(new Date(year, month, 1));
}

export async function fetchDuesSettings(groupId: string): Promise<DuesSettings> {
  const { data, error } = await supabase
    .from('dues_settings')
    .select('monthly_amount, currency')
    .eq('group_id', groupId)
    .maybeSingle();

  if (error) throw error;
  return { monthlyAmount: Number(data?.monthly_amount ?? 0), currency: data?.currency ?? 'GHS' };
}

export async function updateDuesSettings(groupId: string, monthlyAmount: number): Promise<void> {
  const { error } = await supabase
    .from('dues_settings')
    .upsert({ group_id: groupId, monthly_amount: monthlyAmount }, { onConflict: 'group_id' });

  if (error) throw error;
}

export async function fetchAllPayments(groupId: string): Promise<DuesPayment[]> {
  const { data, error } = await supabase
    .from('dues_payments')
    .select('id, roster_member_id, period, amount, paid_on, note')
    .eq('group_id', groupId)
    .order('period', { ascending: true });

  if (error) throw error;
  return (data ?? []).map((d) => ({ ...d, amount: Number(d.amount) }));
}

export async function recordPayment(
  groupId: string,
  rosterMemberId: string,
  period: string,
  amount: number,
  paidOn: string,
  note?: string | null
): Promise<void> {
  // recorded_by is set server-side by a trigger (auth.uid()) - not client-supplied.
  const { error } = await supabase.from('dues_payments').upsert(
    {
      group_id: groupId,
      roster_member_id: rosterMemberId,
      period,
      amount,
      paid_on: paidOn,
      note: note ?? null,
    },
    { onConflict: 'roster_member_id,period' }
  );

  if (error) throw error;
}

export async function clearPayment(id: string): Promise<void> {
  const { error } = await supabase.from('dues_payments').delete().eq('id', id);
  if (error) throw error;
}
