import React, { useEffect, useState } from 'react';
import { FiPlus, FiTrash2, FiTool, FiCheckCircle } from 'react-icons/fi';
import {
  InventoryItem,
  ItemCondition,
  fetchInventory,
  addInventoryItem,
  updateInventoryItem,
  deleteInventoryItem,
} from '@/lib/inventory';

interface InventoryPanelProps {
  groupId: string;
  isAdmin: boolean;
}

const CONDITION_LABEL: Record<ItemCondition, { label: string; className: string }> = {
  good: { label: 'Good condition', className: 'bg-primary-50 text-primary-700' },
  needs_repair: { label: 'Needs repair', className: 'bg-church-red/10 text-church-red' },
};

const InventoryPanel: React.FC<InventoryPanelProps> = ({ groupId, isAdmin }) => {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [notesDraft, setNotesDraft] = useState<Record<string, string>>({});
  const [newName, setNewName] = useState('');
  const [newQty, setNewQty] = useState(1);
  const [newCondition, setNewCondition] = useState<ItemCondition>('good');
  const [adding, setAdding] = useState(false);

  const load = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchInventory(groupId);
      setItems(data);
      setNotesDraft(Object.fromEntries(data.map((i) => [i.id, i.notes ?? ''])));
    } catch {
      setError('Could not load inventory.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupId]);

  const handleQuantityChange = async (item: InventoryItem, quantity: number) => {
    setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, quantity } : i)));
    try {
      await updateInventoryItem(item.id, { quantity });
    } catch {
      setError('Failed to update quantity.');
      await load();
    }
  };

  const handleConditionChange = async (item: InventoryItem, condition: ItemCondition) => {
    setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, condition } : i)));
    try {
      await updateInventoryItem(item.id, { condition });
    } catch {
      setError('Failed to update condition.');
      await load();
    }
  };

  const handleNotesSave = async (item: InventoryItem) => {
    const notes = notesDraft[item.id] ?? '';
    if (notes === (item.notes ?? '')) return;
    setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, notes } : i)));
    try {
      await updateInventoryItem(item.id, { notes });
    } catch {
      setError('Failed to update notes.');
      await load();
    }
  };

  const handleDelete = async (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
    try {
      await deleteInventoryItem(id);
    } catch {
      setError('Failed to delete item.');
      await load();
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;
    setAdding(true);
    try {
      const item = await addInventoryItem(groupId, newName.trim(), newQty, newCondition);
      setItems((prev) => [...prev, item]);
      setNotesDraft((prev) => ({ ...prev, [item.id]: '' }));
      setNewName('');
      setNewQty(1);
      setNewCondition('good');
    } catch {
      setError('Failed to add item.');
    } finally {
      setAdding(false);
    }
  };

  if (loading) return <p className="text-navy-500 text-sm">Loading inventory...</p>;
  if (error) return <p className="text-church-red text-sm">{error}</p>;

  return (
    <div>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full text-sm border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="text-left px-3 py-2 text-navy-500 font-medium">Item</th>
              <th className="px-3 py-2 text-navy-500 font-medium">Quantity</th>
              <th className="px-3 py-2 text-navy-500 font-medium">Condition</th>
              <th className="text-left px-3 py-2 text-navy-500 font-medium">Notes</th>
              {isAdmin && <th className="px-3 py-2" />}
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t border-navy-100">
                <td className="px-3 py-2.5 text-navy-900 font-medium whitespace-nowrap">{item.name}</td>
                <td className="px-3 py-2.5 text-center">
                  {isAdmin ? (
                    <input
                      type="number"
                      min={0}
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item, Number(e.target.value))}
                      className="w-16 text-center border border-navy-200 rounded-lg py-1 text-sm"
                    />
                  ) : (
                    <span className="text-navy-700">{item.quantity}</span>
                  )}
                </td>
                <td className="px-3 py-2.5 text-center">
                  {isAdmin ? (
                    <select
                      value={item.condition}
                      onChange={(e) => handleConditionChange(item, e.target.value as ItemCondition)}
                      className="text-xs border border-navy-200 rounded-full px-2 py-1"
                    >
                      <option value="good">Good condition</option>
                      <option value="needs_repair">Needs repair</option>
                    </select>
                  ) : (
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full inline-flex items-center gap-1 ${CONDITION_LABEL[item.condition].className}`}
                    >
                      {item.condition === 'good' ? <FiCheckCircle size={12} /> : <FiTool size={12} />}
                      {CONDITION_LABEL[item.condition].label}
                    </span>
                  )}
                </td>
                <td className="px-3 py-2.5 min-w-[200px]">
                  {isAdmin ? (
                    <input
                      type="text"
                      value={notesDraft[item.id] ?? ''}
                      onChange={(e) => setNotesDraft((prev) => ({ ...prev, [item.id]: e.target.value }))}
                      onBlur={() => handleNotesSave(item)}
                      placeholder="e.g. 2 need repair, 1 in good condition"
                      className="w-full border border-navy-200 rounded-lg px-2 py-1 text-sm"
                    />
                  ) : (
                    <span className="text-navy-500">{item.notes || '—'}</span>
                  )}
                </td>
                {isAdmin && (
                  <td className="px-3 py-2.5 text-center">
                    <button
                      type="button"
                      onClick={() => handleDelete(item.id)}
                      className="text-navy-300 hover:text-church-red transition-colors duration-150 p-1"
                    >
                      <FiTrash2 size={14} />
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        {items.length === 0 && <p className="text-navy-500 text-sm mt-3">No inventory items yet.</p>}
      </div>

      {isAdmin && (
        <form onSubmit={handleAdd} className="flex flex-wrap items-center gap-2 bg-navy-50 rounded-lg p-3">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Item name (e.g. Tenor Horn)"
            className="flex-1 min-w-[160px] border border-navy-200 rounded-lg px-3 py-2 text-sm"
          />
          <input
            type="number"
            min={0}
            value={newQty}
            onChange={(e) => setNewQty(Number(e.target.value))}
            className="w-20 border border-navy-200 rounded-lg px-3 py-2 text-sm"
          />
          <select
            value={newCondition}
            onChange={(e) => setNewCondition(e.target.value as ItemCondition)}
            className="border border-navy-200 rounded-lg px-3 py-2 text-sm"
          >
            <option value="good">Good condition</option>
            <option value="needs_repair">Needs repair</option>
          </select>
          <button
            type="submit"
            disabled={adding}
            className="flex items-center gap-1 bg-primary-600 hover:bg-primary-700 disabled:opacity-60 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-150"
          >
            <FiPlus size={14} /> Add Item
          </button>
        </form>
      )}
    </div>
  );
};

export default InventoryPanel;
