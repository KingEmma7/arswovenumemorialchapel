import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiUsers, FiHeart, FiShield, FiCoffee, FiChevronsRight } from 'react-icons/fi';

const MensFellowshipPage: React.FC = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -30 },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: <FiUsers size={32} className="text-gold-500" />,
      title: "Brotherhood & Support",
      description: "A strong community of men supporting each other in faith and life.",
    },
    {
      icon: <FiHeart size={32} className="text-gold-500" />,
      title: "Spiritual Growth",
      description: "Deepen your relationship with God through study, prayer, and fellowship.",
    },
    {
      icon: <FiShield size={32} className="text-gold-500" />,
      title: "Leadership & Service",
      description: "Opportunities to lead, serve the church, and make a positive impact.",
    },
    {
      icon: <FiCoffee size={32} className="text-gold-500" />,
      title: "Social Events",
      description: "Engaging social activities and events to foster connection and friendship.",
    },
  ];

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
      <Head>
        <title>Men's Fellowship - Wovenu Memorial Chapel</title>
        <meta name="description" content="Join the Men's Fellowship at Wovenu Memorial Chapel to grow in faith, leadership, and brotherhood with fellow men of God." />
      </Head>
      <Navbar />

      <main>
        {/* Hero Section */}
        <motion.section
          className="relative h-[50vh] min-h-[400px] bg-gray-800 pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/clergy/mens-hope.jpeg"
            alt="Men's Fellowship Gathering"
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
                Men's Fellowship
              </h1>
              <p className="text-xl md:text-2xl text-gold-200 max-w-3xl mx-auto">
                Iron Sharpening Iron: Building Strong Men of Faith
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Introduction Section */}
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
                  A Community of Godly Men
                </h2>
                <p>
                  The Men's Fellowship of Wovenu Memorial Chapel is a vibrant ministry dedicated to uniting the men of our church in Christian fellowship and spiritual growth. We aim to empower men to be godly leaders in their homes, church, and community.
                </p>
                <p>
                  Our fellowship provides a safe and supportive environment where men can share their challenges, celebrate their victories, and encourage one another on their journey of faith. We are committed to building a brotherhood that is rooted in the love of Christ.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/clergy/elder5.jpeg"
                  alt="Men's Fellowship members"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Pillars Section */}
        <section className="section-padding bg-primary-50">
          <div className="container-width text-center">
            <h2 className="text-4xl font-bold text-navy-900 mb-12">Our Pillars</h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg text-center"
                  variants={itemVariants}
                >
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-navy-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="section-padding bg-white">
          <div className="container-width text-center">
            <h2 className="text-4xl font-bold text-navy-900 mb-6">Get Involved</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We welcome all men to join our fellowship. Whether you are a long-time member or new to our church, there is a place for you here.
            </p>
            <div className="bg-gold-50 p-8 rounded-xl shadow-inner max-w-2xl mx-auto border border-gold-200">
              <h3 className="text-2xl font-bold text-navy-800 mb-4">Meeting Information</h3>
              <p className="text-lg text-gray-700">
                <strong>When:</strong> Every first Sunday of the month, after service.<br />
                <strong>Where:</strong> Church Fellowship Hall
              </p>
              <button className="btn-primary mt-6">
                Contact Us For More Info
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default MensFellowshipPage;
