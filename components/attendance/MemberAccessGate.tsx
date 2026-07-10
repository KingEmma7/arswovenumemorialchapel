import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FiLock } from 'react-icons/fi';
import { supabase } from '@/lib/supabase';

interface MemberAccessGateProps {
  viewerEmail: string;
  portalPath: string;
}

const MemberAccessGate: React.FC<MemberAccessGateProps> = ({ viewerEmail, portalPath }) => {
  const router = useRouter();
  const [passcode, setPasscode] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const { error } = await supabase.auth.signInWithPassword({
      email: viewerEmail,
      password: passcode,
    });

    if (error) {
      setStatus('error');
      return;
    }

    router.push(portalPath);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-center">
      <div className="relative">
        <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400" />
        <input
          type="password"
          required
          value={passcode}
          onChange={(e) => setPasscode(e.target.value)}
          placeholder="Member passcode"
          className="pl-10 pr-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary disabled:opacity-60"
      >
        {status === 'submitting' ? 'Checking...' : 'View Attendance'}
      </button>
      {status === 'error' && (
        <p className="text-church-red text-sm sm:ml-2 self-center">Incorrect passcode.</p>
      )}
    </form>
  );
};

export default MemberAccessGate;
