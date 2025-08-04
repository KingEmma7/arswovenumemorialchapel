import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Groups from '@/components/Groups';

const GroupsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Church Groups - Apostles Revelations Society</title>
        <meta name="description" content="Join one of our fellowship groups to grow in faith, build relationships, and serve together in community. Explore our various groups and find where you belong." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        <Navbar />
        
        <main className="page-content">
          <Groups />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GroupsPage;