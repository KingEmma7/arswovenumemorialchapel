import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiHeart, FiUsers, FiBook, FiGift } from 'react-icons/fi';

const WomensFellowshipPage: React.FC = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -30 },
  };

  const features = [
    {
      icon: <FiHeart size={32} className="text-gold-500" />,
      title: "Spiritual Growth",
      description: "Deepening our relationship with God through prayer, Bible study, and fellowship."
    },
    {
      icon: <FiUsers size={32} className="text-gold-500" />,
      title: "Sisterhood",
      description: "Building lasting friendships and support networks among women of faith."
    },
    {
      icon: <FiBook size={32} className="text-gold-500" />,
      title: "Biblical Teaching",
      description: "Learning to apply God's Word to our daily lives as women, mothers, and leaders."
    },
    {
      icon: <FiGift size={32} className="text-gold-500" />,
      title: "Service & Outreach",
      description: "Using our gifts to serve the church and reach out to the community."
    }
  ];

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
      <Head>
        <title>Women's Fellowship - Wovenu Memorial Chapel</title>
        <meta name="description" content="Join the Women's Fellowship at Wovenu Memorial Chapel - a vibrant community of women growing together in faith, service, and fellowship." />
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
            src="/images/groups/womens-fellow.jpeg"
            alt="Women's Fellowship"
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
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                Women's Fellowship
              </h1>
              <p className="text-xl md:text-2xl text-gold-200 max-w-3xl mx-auto">
                Women of Faith, Purpose, and Power
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Introduction Section */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-navy-900 mb-6">Our Mission</h2>
              <p className="prose prose-xl max-w-none text-gray-600">
                The Women's Fellowship of Wovenu Memorial Chapel exists to empower women to grow in their faith, develop their God-given gifts, and serve Christ in the church and community. We are committed to creating a nurturing environment where women can connect with one another, find support in life's challenges, and celebrate God's faithfulness together.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-primary-50">
          <div className="container-width text-center">
            <h2 className="text-4xl font-bold text-navy-900 mb-12">Our Focus Areas</h2>
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

        {/* Activities Section */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none"
              >
                <h2 className="text-4xl font-bold text-navy-900 mb-6">
                  What We Do
                </h2>
                <ul className="space-y-4">
                  <li>Monthly fellowship meetings with prayer, worship, and teaching</li>
                  <li>Bible study groups focused on women's issues and spiritual growth</li>
                  <li>Community outreach projects and charitable initiatives</li>
                  <li>Annual women's retreat for spiritual renewal and bonding</li>
                  <li>Mentorship program for younger women in the church</li>
                  <li>Prayer chain ministry supporting church and community needs</li>
                  <li>Special events celebrating women's achievements and contributions</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/clergy/Bishop-Veliane-6.jpeg"
                  alt="Women's Fellowship activities"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="section-padding bg-gold-50">
          <div className="container-width text-center">
            <h2 className="text-4xl font-bold text-navy-900 mb-6">Join Our Fellowship</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We welcome all women to join our fellowship. Whether you're new to faith or have been walking with the Lord for years, there's a place for you here.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-inner max-w-2xl mx-auto border border-gold-200">
              <h3 className="text-2xl font-bold text-navy-800 mb-4">Meeting Information</h3>
              <p className="text-lg text-gray-700">
                <strong>When:</strong> Every second Saturday of the month at 3:00 PM<br />
                <strong>Where:</strong> Church Fellowship Hall
              </p>
              <button className="btn-primary mt-6">
                Contact Women's Ministry
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default WomensFellowshipPage;