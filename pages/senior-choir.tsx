import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiMusic, FiMic, FiHeart, FiUsers, FiAward, FiBookOpen } from 'react-icons/fi';

const SeniorChoirPage: React.FC = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -30 },
  };

  const pillars = [
    {
      icon: <FiHeart size={32} className="text-gold-500" />,
      title: "Passionate Worship",
      description: "Leading the congregation into a deeper, more meaningful worship experience through anointed music.",
    },
    {
      icon: <FiMusic size={32} className="text-gold-500" />,
      title: "Musical Excellence",
      description: "Striving for the highest standard of musical artistry to offer God our very best.",
    },
    {
      icon: <FiUsers size={32} className="text-gold-500" />,
      title: "Strong Fellowship",
      description: "Building a close-knit community of singers who support and uplift one another.",
    },
    {
      icon: <FiBookOpen size={32} className="text-gold-500" />,
      title: "Theological Depth",
      description: "Selecting and presenting music that is rich in theological truth and spiritual significance.",
    },
  ];

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
      <Head>
        <title>Senior Choir - Wovenu Memorial Chapel</title>
        <meta name="description" content="Meet the Senior Choir of Wovenu Memorial Chapel, a dedicated group of worshipers leading the church in praise and adoration." />
      </Head>
      <Navbar />

      <main>
        {/* Hero Section */}
        <motion.section
          className="relative h-[50vh] min-h-[400px] pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          <Image
            src="/images/groups/seniorchoir.jpg"
            alt="Senior Choir ministering"
            fill
            className="object-cover object-top opacity-30"
            priority
          />
          <div className="relative z-10 flex h-full items-center justify-center text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3 } }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Senior Choir
              </h1>
              <p className="text-xl md:text-2xl text-gold-200 max-w-3xl mx-auto">
                Lifting Voices, Inspiring Hearts
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Introduction Section */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-4xl font-bold text-navy-900 mb-6">The Heartbeat of Worship</h2>
                <p>
                  The Senior Choir at Wovenu Memorial Chapel is more than just a group of singers; we are a family of worshipers dedicated to glorifying God through music. With a rich heritage of powerful ministration, the choir serves as a cornerstone of our worship services.
                </p>
                <p>
                  Our mission is to lead the congregation into the presence of God through thoughtfully selected anthems, hymns, and contemporary praise songs. We are committed to excellence, spiritual depth, and fostering a spirit of unity and love among our members.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/groups/seniorchoir.jpg"
                  alt="Senior Choir in beautiful robes"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="section-padding bg-primary-50">
          <div className="container-width text-center">
            <h2 className="text-4xl font-bold text-navy-900 mb-12">Our Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">{pillar.icon}</div>
                  <h3 className="text-2xl font-bold text-navy-800 mb-3">{pillar.title}</h3>
                  <p className="text-gray-600">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="section-padding bg-white">
          <div className="container-width text-center">
            <h2 className="text-4xl font-bold text-navy-900 mb-6">Join Your Voice with Ours</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              If you have a passion for singing and a heart for worship, we invite you to audition for the Senior Choir. Come be a part of a ministry that shapes the worship experience of our church.
            </p>
            <div className="bg-gold-50 p-8 rounded-xl shadow-inner max-w-2xl mx-auto border border-gold-200">
              <h3 className="text-2xl font-bold text-navy-800 mb-4">Rehearsal & Audition Info</h3>
              <p className="text-lg text-gray-700">
                <strong>Rehearsals:</strong> Fridays at 6:00 PM<br />
                <strong>Auditions:</strong> Held quarterly. Please contact the choir director for the next date.
              </p>
              <button className="btn-primary mt-6">
                Contact the Choir Director
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default SeniorChoirPage;
