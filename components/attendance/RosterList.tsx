import React, { useState } from 'react';
import { FiUserCheck, FiUserX } from 'react-icons/fi';
import { RosterMember, RosterStatus, updateRosterStatus } from '@/lib/attendance';

interface RosterListProps {
  roster: RosterMember[];
  isAdmin?: boolean;
  onStatusChange?: () => void;
}

const RosterList: React.FC<RosterListProps> = ({ roster, isAdmin, onStatusChange }) => {
  const [pendingId, setPendingId] = useState<string | null>(null);

  const handleToggle = async (memberId: string, currentStatus: RosterStatus) => {
    const nextStatus: RosterStatus = currentStatus === 'active' ? 'inactive' : 'active';
    setPendingId(memberId);
    try {
      await updateRosterStatus(memberId, nextStatus);
      onStatusChange?.();
    } finally {
      setPendingId(null);
    }
  };

  return (
    <ul className="flex flex-col gap-1">
      {roster.map((member, index) => (
        <li
          key={member.id}
          className={`flex items-center justify-between px-4 py-2 rounded-lg ${
            member.status === 'inactive' ? 'text-navy-300' : 'text-navy-800'
          }`}
        >
          <span>
            <span className="inline-block w-7 text-navy-400 text-sm">{index + 1}.</span>
            {member.full_name}
            {member.role_title && (
              <span className={`ml-2 text-xs ${member.status === 'inactive' ? 'text-navy-300' : 'text-navy-400'}`}>
                {member.role_title}
              </span>
            )}
          </span>
          <span className="flex items-center gap-2">
            {member.status === 'inactive' && (
              <span className="text-xs uppercase tracking-wide bg-navy-100 text-navy-400 px-2 py-0.5 rounded-full">
                Inactive
              </span>
            )}
            {isAdmin && (
              <button
                type="button"
                disabled={pendingId === member.id}
                onClick={() => handleToggle(member.id, member.status)}
                title={member.status === 'active' ? 'Mark inactive' : 'Mark active'}
                className="text-navy-400 hover:text-primary-600 transition-colors duration-150 disabled:opacity-50 p-1"
              >
                {member.status === 'active' ? <FiUserX size={15} /> : <FiUserCheck size={15} />}
              </button>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default RosterList;
