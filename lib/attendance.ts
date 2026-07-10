import { supabase } from '@/lib/supabase';

export type AttendanceStatus = 'present' | 'absent' | 'excused';
export type RosterStatus = 'active' | 'inactive';

export interface RosterMember {
  id: string;
  full_name: string;
  role_title: string | null;
  status: RosterStatus;
  sort_order: number;
  dues_start_period: string;
}

export interface EventRow {
  id: string;
  date: string;
  type: string;
}

export interface AttendanceStatusRecord {
  event_id: string;
  roster_member_id: string;
  status: AttendanceStatus;
}

export interface AttendanceRecord extends AttendanceStatusRecord {
  note: string | null;
}

function toLocalDateString(d: Date): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function mostRecentSunday(from = new Date()): string {
  const d = new Date(from);
  d.setDate(d.getDate() - d.getDay());
  return toLocalDateString(d);
}

export function addDays(date: string, days: number): string {
  const d = new Date(`${date}T00:00:00`);
  d.setDate(d.getDate() + days);
  return toLocalDateString(d);
}

export async function fetchGroupId(slug: string): Promise<string | null> {
  const { data } = await supabase.from('groups').select('id').eq('slug', slug).single();
  return data?.id ?? null;
}

export async function fetchRoster(groupId: string): Promise<RosterMember[]> {
  const { data, error } = await supabase
    .from('roster_members')
    .select('id, full_name, role_title, status, sort_order, dues_start_period')
    .eq('group_id', groupId)
    .order('status', { ascending: true })
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return data ?? [];
}

export async function fetchEvents(groupId: string, type = 'sunday_service'): Promise<EventRow[]> {
  const { data, error } = await supabase
    .from('events')
    .select('id, date, type')
    .eq('group_id', groupId)
    .eq('type', type)
    .order('date', { ascending: true });

  if (error) throw error;
  return data ?? [];
}

export async function fetchEventByDate(
  groupId: string,
  date: string,
  type = 'sunday_service'
): Promise<EventRow | null> {
  const { data, error } = await supabase
    .from('events')
    .select('id, date, type')
    .eq('group_id', groupId)
    .eq('date', date)
    .eq('type', type)
    .maybeSingle();

  if (error) throw error;
  return data;
}

export async function getOrCreateEvent(
  groupId: string,
  date: string,
  type = 'sunday_service'
): Promise<EventRow> {
  const { data, error } = await supabase
    .from('events')
    .upsert({ group_id: groupId, date, type }, { onConflict: 'group_id,date,type' })
    .select('id, date, type')
    .single();

  if (error) throw error;
  return data;
}

// Member-safe: never returns excused-absence notes over the wire.
export async function fetchAttendanceStatuses(eventIds: string[]): Promise<AttendanceStatusRecord[]> {
  if (eventIds.length === 0) return [];
  const { data, error } = await supabase
    .from('attendance')
    .select('event_id, roster_member_id, status')
    .in('event_id', eventIds);

  if (error) throw error;
  return data ?? [];
}

// Admin-only: includes notes. Callers must gate this behind an admin check.
export async function fetchAttendanceWithNotes(eventIds: string[]): Promise<AttendanceRecord[]> {
  if (eventIds.length === 0) return [];
  const { data, error } = await supabase
    .from('attendance')
    .select('event_id, roster_member_id, status, note')
    .in('event_id', eventIds);

  if (error) throw error;
  return data ?? [];
}

export async function markAttendance(
  eventId: string,
  rosterMemberId: string,
  status: AttendanceStatus,
  note?: string | null
): Promise<void> {
  // marked_by is set server-side by a trigger (auth.uid()) - not client-supplied.
  const { error } = await supabase
    .from('attendance')
    .upsert(
      { event_id: eventId, roster_member_id: rosterMemberId, status, note: note ?? null },
      { onConflict: 'event_id,roster_member_id' }
    );

  if (error) throw error;
}

export async function clearAttendance(eventId: string, rosterMemberId: string): Promise<void> {
  const { error } = await supabase
    .from('attendance')
    .delete()
    .eq('event_id', eventId)
    .eq('roster_member_id', rosterMemberId);

  if (error) throw error;
}

export async function deleteEventIfEmpty(eventId: string): Promise<void> {
  const { count, error: countError } = await supabase
    .from('attendance')
    .select('id', { count: 'exact', head: true })
    .eq('event_id', eventId);

  if (countError) throw countError;
  if (count === 0) {
    const { error } = await supabase.from('events').delete().eq('id', eventId);
    if (error) throw error;
  }
}

export async function updateRosterStatus(rosterMemberId: string, status: RosterStatus): Promise<void> {
  const { error } = await supabase.from('roster_members').update({ status }).eq('id', rosterMemberId);
  if (error) throw error;
}

export async function updateDuesStartPeriod(rosterMemberId: string, period: string): Promise<void> {
  const { error } = await supabase
    .from('roster_members')
    .update({ dues_start_period: period })
    .eq('id', rosterMemberId);
  if (error) throw error;
}
