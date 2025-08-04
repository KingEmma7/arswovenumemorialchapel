import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiCamera, FiVideo, FiMonitor, FiMic } from 'react-icons/fi';

const features = [
  {
    icon: <FiCamera size={32} className="text-gold-500" />,
    title: 'Photography',
    description: 'Capturing memorable moments and events in the life of the church.'
  },
  {
    icon: <FiVideo size={32} className="text-gold-500" />,
    title: 'Videography',
    description: 'Recording and streaming services, programs, and special occasions.'
  },
  {
    icon: <FiMonitor size={32} className="text-gold-500" />,
    title: 'Media Production',
    description: 'Editing, producing, and sharing content for outreach and engagement.'
  },
  {
    icon: <FiMic size={32} className="text-gold-500" />,
    title: 'Sound & Tech',
    description: 'Managing sound, projection, and technical support for all services.'
  }
];

const MediaTeamPage: React.FC = () => (
  <>
    <Head>
      <title>WMC Media Team - Wovenu Memorial Chapel</title>
      <meta name="description" content="Meet the WMC Media Team at Wovenu Memorial Chapel, dedicated to sharing the church’s story through media and technology." />
    </Head>
    <Navbar />
    <main>
      {/* Hero Section */}
      <motion.section
        className="relative h-[50vh] min-h-[400px] pt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/clergy/reubenopata.jpg"
          alt="WMC Media Team Hero"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3 } }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">WMC Media Team</h1>
            <p className="text-xl md:text-2xl text-gold-200 max-w-3xl mx-auto">
              Sharing Our Story, Spreading the Word
            </p>
          </motion.div>
        </div>
      </motion.section>
      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy-900 mb-6">Who We Are</h2>
            <p className="prose prose-xl max-w-none text-gray-600">
              The WMC Media Team is a passionate group of creatives and tech enthusiasts who serve behind the scenes to ensure every service and event is seen, heard, and remembered. We use our gifts in photography, video, sound, and technology to support the church’s mission and reach a wider audience.
            </p>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="section-padding bg-primary-50">
        <div className="container-width text-center">
          <h2 className="text-4xl font-bold text-navy-900 mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-navy-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Join Us */}
      <section className="section-padding bg-white">
        <div className="container-width text-center">
          <h2 className="text-4xl font-bold text-navy-900 mb-6">Join the Team!</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            If you have a passion for media, technology, or storytelling, we’d love to have you on the team. Training is provided!
          </p>
          <button className="btn-primary">Contact Media Team</button>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default MediaTeamPage;