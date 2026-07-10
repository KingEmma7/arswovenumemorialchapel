import { supabase } from '@/lib/supabase';

export type ItemCondition = 'good' | 'needs_repair';

export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  condition: ItemCondition;
  notes: string | null;
  sort_order: number;
}

export async function fetchInventory(groupId: string): Promise<InventoryItem[]> {
  const { data, error } = await supabase
    .from('inventory_items')
    .select('id, name, quantity, condition, notes, sort_order')
    .eq('group_id', groupId)
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return data ?? [];
}

export async function addInventoryItem(
  groupId: string,
  name: string,
  quantity: number,
  condition: ItemCondition
): Promise<InventoryItem> {
  const { data, error } = await supabase
    .from('inventory_items')
    .insert({ group_id: groupId, name, quantity, condition })
    .select('id, name, quantity, condition, notes, sort_order')
    .single();

  if (error) throw error;
  return data;
}

export async function updateInventoryItem(
  id: string,
  fields: Partial<Pick<InventoryItem, 'name' | 'quantity' | 'condition' | 'notes'>>
): Promise<void> {
  const { error } = await supabase.from('inventory_items').update(fields).eq('id', id);
  if (error) throw error;
}

export async function deleteInventoryItem(id: string): Promise<void> {
  const { error } = await supabase.from('inventory_items').delete().eq('id', id);
  if (error) throw error;
}
