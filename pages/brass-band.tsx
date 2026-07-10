import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MemberAccessGate from '@/components/attendance/MemberAccessGate';
import { useAuth } from '@/lib/useAuth';
import { FiMusic, FiAward, FiUsers, FiFlag, FiSun } from 'react-icons/fi';

const PORTAL_PATH = '/portal/brass-band';
const VIEWER_EMAIL = 'brassband-viewer@wmc-ars.org';

const BrassBandPage: React.FC = () => {
  const { user, loading } = useAuth();
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -30 },
  };

  const aspects = [
    {
      icon: <FiMusic size={32} className="text-gold-500" />,
      title: "Powerful Music",
      description: "Delivering soul-stirring hymns and vibrant marches that uplift the spirit.",
    },
    {
      icon: <FiFlag size={32} className="text-gold-500" />,
      title: "Church Ambassadors",
      description: "Representing the church with pride and dignity at various events and processions.",
    },
    {
      icon: <FiUsers size={32} className="text-gold-500" />,
      title: "Discipline & Unity",
      description: "Fostering a culture of discipline, teamwork, and unity among members.",
    },
    {
      icon: <FiAward size={32} className="text-gold-500" />,
      title: "Musical Development",
      description: "Providing a platform for members to develop their musical talents and skills.",
    },
  ];

  const galleryImages = [
    "/images/groups/brassband.jpeg",
    "/images/groups/brassband1.jpeg",
    "/images/groups/brassband2.jpeg",
    "/images/groups/brassband3.jpeg",
    "/images/groups/brassband4.jpeg",
    "/images/groups/brassband5.jpeg",
  ];

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
      <Head>
        <title>Brass Band - Wovenu Memorial Chapel</title>
        <meta name="description" content="Experience the powerful and majestic sound of the Wovenu Memorial Chapel Brass Band, a core part of our church's processions and celebrations." />
      </Head>
      <Navbar />

      <main>
        {/* Hero Section */}
        <motion.section
          className="relative h-[60vh] min-h-[500px] pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          <Image
            src="/images/groups/brassband5.jpeg"
            alt="Brass Band in full regalia"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Removed overlay here */}
          <div className="relative z-10 flex h-full items-center justify-center text-center p-4">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 120 }}
              className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg backdrop-blur-sm"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                The Brass Band
              </h1>
              <p className="text-xl md:text-2xl text-gold-200 max-w-3xl mx-auto">
                A Majestic Sound of Praise and Worship
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Introduction Section */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-navy-900 mb-6">Music for the King of Kings</h2>
              <p className="prose prose-xl max-w-none text-gray-600">
                The Wovenu Memorial Chapel Brass Band is an integral and cherished part of our church's identity. With a history of powerful musical ministrations, the band brings a unique and majestic dimension to our worship services, processions, and special events. Their sound is one of celebration, reverence, and spiritual warfare.
              </p>
            </div>
          </div>
        </section>

        {/* Aspects Section */}
        <section className="section-padding bg-primary-50">
          <div className="container-width text-center">
            <h2 className="text-4xl font-bold text-navy-900 mb-12">Our Ministry in Music</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aspects.map((aspect, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">{aspect.icon}</div>
                  <h3 className="text-2xl font-bold text-navy-800 mb-3">{aspect.title}</h3>
                  <p className="text-gray-600">{aspect.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <h2 className="text-4xl font-bold text-navy-900 mb-12 text-center">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((src, index) => (
                <motion.div
                  key={index}
                  className="relative h-80 rounded-lg overflow-hidden shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={src}
                    alt={`Brass Band Gallery Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="section-padding bg-gold-50">
          <div className="container-width text-center">
            <h2 className="text-4xl font-bold text-navy-900 mb-6">Become a Member</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Are you a skilled brass or percussion musician with a heart for service? The band is always looking for dedicated individuals to join its ranks.
            </p>
            <button className="btn-primary">
              Enquire About Joining
            </button>
          </div>
        </section>

        {/* Attendance Portal Section */}
        <section id="attendance-portal" className="section-padding bg-navy-900 scroll-mt-24">
          <div className="container-width text-center">
            <h2 className="text-3xl font-bold text-white mb-3">Attendance Portal</h2>
            <p className="text-navy-200 max-w-2xl mx-auto mb-8">
              For band members and admins to view or record Sunday attendance.
            </p>

            {loading ? null : user ? (
              <Link href={PORTAL_PATH} className="btn-primary">
                Go to Attendance Portal
              </Link>
            ) : (
              <div className="flex flex-col items-center gap-6">
                <MemberAccessGate viewerEmail={VIEWER_EMAIL} portalPath={PORTAL_PATH} />
                <Link
                  href={`/login?redirect=${encodeURIComponent(PORTAL_PATH)}`}
                  className="text-navy-300 hover:text-gold-400 text-sm underline transition-colors duration-200"
                >
                  Admin Login
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default BrassBandPage;
