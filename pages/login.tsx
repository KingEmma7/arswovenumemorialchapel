import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { FiMail, FiLock } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/lib/useAuth';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const redirectTo = typeof router.query.redirect === 'string' ? router.query.redirect : '/';

  useEffect(() => {
    if (router.isReady && !loading && user) {
      router.replace(redirectTo);
    }
  }, [router.isReady, loading, user, redirectTo, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setStatus('error');
      setErrorMessage(error.message);
      return;
    }

    router.replace(redirectTo);
  };

  return (
    <>
      <Head>
        <title>Admin Login | Wovenu Memorial Chapel</title>
      </Head>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-navy-900 px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
        >
          <h1 className="text-2xl font-bold text-navy-900 mb-2 text-center">Admin Login</h1>
          <p className="text-navy-500 text-center mb-6">
            Sign in with your group admin email and password.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {status === 'error' && (
              <p className="text-church-red text-sm">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="bg-primary-600 hover:bg-primary-700 disabled:opacity-60 text-white font-medium py-3 rounded-lg transition-colors duration-200"
            >
              {status === 'submitting' ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
