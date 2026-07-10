import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { FiClipboard, FiPackage, FiShield, FiDollarSign, FiLogOut } from 'react-icons/fi';
import ProtectedRoute from '@/components/ProtectedRoute';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AttendanceMarker from '@/components/attendance/AttendanceMarker';
import AttendanceGrid from '@/components/attendance/AttendanceGrid';
import RosterList from '@/components/attendance/RosterList';
import InventoryPanel from '@/components/attendance/InventoryPanel';
import RulesPanel from '@/components/attendance/RulesPanel';
import DuesPanel from '@/components/attendance/DuesPanel';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/lib/useAuth';
import { RosterMember, fetchRoster } from '@/lib/attendance';

const GROUP_SLUG = 'brass-band';

interface MembershipInfo {
  role: 'member' | 'admin';
  groupName: string;
}

type Tab = 'attendance' | 'inventory' | 'rules' | 'dues';

const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: 'attendance', label: 'Attendance', icon: <FiClipboard size={16} /> },
  { id: 'dues', label: 'Dues', icon: <FiDollarSign size={16} /> },
  { id: 'inventory', label: 'Inventory', icon: <FiPackage size={16} /> },
  { id: 'rules', label: 'Rules & Regulations', icon: <FiShield size={16} /> },
];

const BrassBandPortalContent: React.FC = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [groupId, setGroupId] = useState<string | null>(null);
  const [membership, setMembership] = useState<MembershipInfo | null>(null);
  const [roster, setRoster] = useState<RosterMember[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'not-a-member' | 'error'>('loading');
  const [attendanceVersion, setAttendanceVersion] = useState(0);
  const [activeTab, setActiveTab] = useState<Tab>('attendance');

  const refreshRoster = async (id: string) => {
    try {
      setRoster(await fetchRoster(id));
    } catch {
      // roster stays as-is; the panel that triggered the refresh already surfaces its own error
    }
  };

  useEffect(() => {
    if (!user) return;

    const load = async () => {
      const { data: group, error: groupError } = await supabase
        .from('groups')
        .select('id, name')
        .eq('slug', GROUP_SLUG)
        .single();

      if (groupError || !group) {
        setStatus('error');
        return;
      }

      const { data: membershipRow, error: membershipError } = await supabase
        .from('memberships')
        .select('role')
        .eq('group_id', group.id)
        .eq('profile_id', user.id)
        .maybeSingle();

      if (membershipError) {
        setStatus('error');
        return;
      }

      if (!membershipRow) {
        setStatus('not-a-member');
        return;
      }

      try {
        const rosterRows = await fetchRoster(group.id);
        setGroupId(group.id);
        setMembership({ role: membershipRow.role, groupName: group.name });
        setRoster(rosterRows);
        setStatus('ready');
      } catch {
        setStatus('error');
      }
    };

    load();
  }, [user]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  const isAdmin = membership?.role === 'admin';

  return (
    <>
      <Head>
        <title>Brass Band Portal | Wovenu Memorial Chapel</title>
      </Head>
      <Navbar />

      <div className="relative min-h-screen">
        <div className="fixed inset-0 -z-10">
          <Image
            src="/images/groups/brassband3.jpeg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-navy-900/85" />
        </div>

        <div className="px-4 pt-32 pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-end mb-6 text-white">
              <div>
                <p className="text-gold-400 text-sm font-medium tracking-wide uppercase mb-1">
                  Brass Band
                </p>
                <h1 className="text-3xl font-bold">Attendance Portal</h1>
                <p className="text-navy-200 text-sm mt-1">{user?.email}</p>
              </div>
              <button
                onClick={handleSignOut}
                className="flex items-center gap-1.5 text-sm text-navy-200 hover:text-white transition-colors duration-200"
              >
                <FiLogOut size={14} /> Sign out
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
              {status === 'loading' && <p className="text-navy-500">Loading your membership...</p>}

              {status === 'not-a-member' && (
                <p className="text-navy-700">
                  You&apos;re signed in, but you aren&apos;t registered as a member of the Brass Band group yet.
                  Contact a group admin to be added.
                </p>
              )}

              {status === 'error' && (
                <p className="text-church-red">
                  Something went wrong loading this page. Please try again later.
                </p>
              )}

              {status === 'ready' && membership && groupId && (
                <div className="text-navy-700">
                  <p className="mb-6 text-sm">
                    Signed in as an <strong className="capitalize">{membership.role}</strong> of {membership.groupName}.
                  </p>

                  <div className="flex gap-1 mb-6 border-b border-navy-100 overflow-x-auto">
                    {TABS.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors duration-150 ${
                          activeTab === tab.id
                            ? 'border-gold-500 text-navy-900'
                            : 'border-transparent text-navy-400 hover:text-navy-600'
                        }`}
                      >
                        {tab.icon}
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      {activeTab === 'attendance' && (
                        <>
                          {isAdmin && (
                            <AttendanceMarker
                              groupId={groupId}
                              roster={roster}
                              userId={user!.id}
                              onMarked={() => setAttendanceVersion((v) => v + 1)}
                            />
                          )}

                          <div className="mb-8">
                            <h2 className="text-lg font-bold text-navy-900 mb-3">Attendance History</h2>
                            <AttendanceGrid
                              groupId={groupId}
                              roster={roster}
                              isAdmin={isAdmin}
                              refreshKey={attendanceVersion}
                            />
                          </div>

                          <div>
                            <h2 className="text-lg font-bold text-navy-900 mb-3">Roster</h2>
                            <RosterList
                              roster={roster}
                              isAdmin={isAdmin}
                              onStatusChange={() => refreshRoster(groupId)}
                            />
                          </div>
                        </>
                      )}

                      {activeTab === 'dues' && (
                        <DuesPanel groupId={groupId} roster={roster} isAdmin={isAdmin} userId={user!.id} />
                      )}

                      {activeTab === 'inventory' && <InventoryPanel groupId={groupId} isAdmin={isAdmin} />}

                      {activeTab === 'rules' && <RulesPanel groupId={groupId} isAdmin={isAdmin} />}
                    </motion.div>
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

const BrassBandPortalPage: React.FC = () => (
  <ProtectedRoute>
    <BrassBandPortalContent />
  </ProtectedRoute>
);

export default BrassBandPortalPage;
