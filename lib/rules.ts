import { supabase } from '@/lib/supabase';

export interface GroupRule {
  id: string;
  rule: string;
  punishment: string | null;
  sort_order: number;
}

export async function fetchRules(groupId: string): Promise<GroupRule[]> {
  const { data, error } = await supabase
    .from('group_rules')
    .select('id, rule, punishment, sort_order')
    .eq('group_id', groupId)
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return data ?? [];
}

export async function addRule(groupId: string, rule: string, punishment: string): Promise<GroupRule> {
  const { data, error } = await supabase
    .from('group_rules')
    .insert({ group_id: groupId, rule, punishment })
    .select('id, rule, punishment, sort_order')
    .single();

  if (error) throw error;
  return data;
}

export async function updateRule(
  id: string,
  fields: Partial<Pick<GroupRule, 'rule' | 'punishment'>>
): Promise<void> {
  const { error } = await supabase.from('group_rules').update(fields).eq('id', id);
  if (error) throw error;
}

export async function deleteRule(id: string): Promise<void> {
  const { error } = await supabase.from('group_rules').delete().eq('id', id);
  if (error) throw error;
}
