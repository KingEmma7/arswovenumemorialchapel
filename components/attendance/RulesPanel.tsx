import React, { useEffect, useState } from 'react';
import { FiPlus, FiTrash2, FiEdit2, FiCheck, FiX } from 'react-icons/fi';
import { GroupRule, fetchRules, addRule, updateRule, deleteRule } from '@/lib/rules';

interface RulesPanelProps {
  groupId: string;
  isAdmin: boolean;
}

const RulesPanel: React.FC<RulesPanelProps> = ({ groupId, isAdmin }) => {
  const [rules, setRules] = useState<GroupRule[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editRule, setEditRule] = useState('');
  const [editPunishment, setEditPunishment] = useState('');
  const [newRule, setNewRule] = useState('');
  const [newPunishment, setNewPunishment] = useState('');
  const [adding, setAdding] = useState(false);

  const load = async () => {
    setLoading(true);
    setError('');
    try {
      setRules(await fetchRules(groupId));
    } catch {
      setError('Could not load rules.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupId]);

  const startEdit = (rule: GroupRule) => {
    setEditingId(rule.id);
    setEditRule(rule.rule);
    setEditPunishment(rule.punishment ?? '');
  };

  const saveEdit = async (id: string) => {
    setRules((prev) => prev.map((r) => (r.id === id ? { ...r, rule: editRule, punishment: editPunishment } : r)));
    setEditingId(null);
    try {
      await updateRule(id, { rule: editRule, punishment: editPunishment });
    } catch {
      setError('Failed to update rule.');
      await load();
    }
  };

  const handleDelete = async (id: string) => {
    setRules((prev) => prev.filter((r) => r.id !== id));
    try {
      await deleteRule(id);
    } catch {
      setError('Failed to delete rule.');
      await load();
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRule.trim()) return;
    setAdding(true);
    try {
      const rule = await addRule(groupId, newRule.trim(), newPunishment.trim());
      setRules((prev) => [...prev, rule]);
      setNewRule('');
      setNewPunishment('');
    } catch {
      setError('Failed to add rule.');
    } finally {
      setAdding(false);
    }
  };

  if (loading) return <p className="text-navy-500 text-sm">Loading rules...</p>;
  if (error) return <p className="text-church-red text-sm">{error}</p>;

  return (
    <div>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full text-sm border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="w-8 px-3 py-2 text-navy-500 font-medium text-left">#</th>
              <th className="text-left px-3 py-2 text-navy-500 font-medium">Rule</th>
              <th className="text-left px-3 py-2 text-navy-500 font-medium">Consequence</th>
              {isAdmin && <th className="px-3 py-2" />}
            </tr>
          </thead>
          <tbody>
            {rules.map((rule, index) => (
              <tr key={rule.id} className="border-t border-navy-100 align-top">
                {editingId === rule.id ? (
                  <td colSpan={isAdmin ? 4 : 3} className="px-3 py-3">
                    <div className="flex flex-col gap-2">
                      <input
                        type="text"
                        value={editRule}
                        onChange={(e) => setEditRule(e.target.value)}
                        className="border border-navy-200 rounded-lg px-3 py-1.5 text-sm"
                        placeholder="Rule"
                      />
                      <input
                        type="text"
                        value={editPunishment}
                        onChange={(e) => setEditPunishment(e.target.value)}
                        className="border border-navy-200 rounded-lg px-3 py-1.5 text-sm"
                        placeholder="Consequence"
                      />
                      <div className="flex gap-2 justify-end">
                        <button type="button" onClick={() => saveEdit(rule.id)} className="text-primary-600 p-1">
                          <FiCheck size={16} />
                        </button>
                        <button type="button" onClick={() => setEditingId(null)} className="text-navy-400 p-1">
                          <FiX size={16} />
                        </button>
                      </div>
                    </div>
                  </td>
                ) : (
                  <>
                    <td className="px-3 py-3 text-navy-400">{index + 1}</td>
                    <td className="px-3 py-3 text-navy-900">{rule.rule}</td>
                    <td className="px-3 py-3 text-church-red">{rule.punishment || '—'}</td>
                    {isAdmin && (
                      <td className="px-3 py-3">
                        <div className="flex gap-2 justify-end">
                          <button
                            type="button"
                            onClick={() => startEdit(rule)}
                            className="text-navy-300 hover:text-primary-600 transition-colors duration-150 p-1"
                          >
                            <FiEdit2 size={14} />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(rule.id)}
                            className="text-navy-300 hover:text-church-red transition-colors duration-150 p-1"
                          >
                            <FiTrash2 size={14} />
                          </button>
                        </div>
                      </td>
                    )}
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        {rules.length === 0 && <p className="text-navy-500 text-sm mt-3">No rules have been added yet.</p>}
      </div>

      {isAdmin && (
        <form onSubmit={handleAdd} className="flex flex-col gap-2 bg-navy-50 rounded-lg p-3">
          <input
            type="text"
            value={newRule}
            onChange={(e) => setNewRule(e.target.value)}
            placeholder="New rule"
            className="border border-navy-200 rounded-lg px-3 py-2 text-sm"
          />
          <input
            type="text"
            value={newPunishment}
            onChange={(e) => setNewPunishment(e.target.value)}
            placeholder="Consequence for breaking this rule"
            className="border border-navy-200 rounded-lg px-3 py-2 text-sm"
          />
          <button
            type="submit"
            disabled={adding}
            className="self-start flex items-center gap-1 bg-primary-600 hover:bg-primary-700 disabled:opacity-60 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-150"
          >
            <FiPlus size={14} /> Add Rule
          </button>
        </form>
      )}
    </div>
  );
};

export default RulesPanel;
