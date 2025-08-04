import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiSmile, FiBook, FiUsers, FiHeart } from 'react-icons/fi';

const features = [
  {
    icon: <FiSmile size={32} className="text-gold-500" />,
    title: 'Fun & Fellowship',
    description: 'Engaging activities and games that help children build friendships and enjoy church.'
  },
  {
    icon: <FiBook size={32} className="text-gold-500" />,
    title: 'Bible Learning',
    description: 'Creative Bible lessons and storytelling to help children know God’s Word.'
  },
  {
    icon: <FiUsers size={32} className="text-gold-500" />,
    title: 'Teamwork',
    description: 'Learning to work together, share, and support one another as part of God’s family.'
  },
  {
    icon: <FiHeart size={32} className="text-gold-500" />,
    title: 'Growing in Faith',
    description: 'Encouraging children to trust Jesus and grow in their relationship with Him.'
  }
];

const ChildrensFellowshipPage: React.FC = () => (
  <>
    <Head>
      <title>Children’s Fellowship - Wovenu Memorial Chapel</title>
      <meta name="description" content="Discover the Children’s Fellowship at Wovenu Memorial Chapel, where kids grow in faith, friendship, and fun!" />
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
          src="/images/clergy/wovenu.jpg"
          alt="Children’s Fellowship Hero"
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
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Children’s Fellowship</h1>
            <p className="text-xl md:text-2xl text-gold-200 max-w-3xl mx-auto">
              Where Every Child is Loved and Valued
            </p>
          </motion.div>
        </div>
      </motion.section>
      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy-900 mb-6">Welcome to Children’s Fellowship</h2>
            <p className="prose prose-xl max-w-none text-gray-600">
              Our Children’s Fellowship is a vibrant ministry dedicated to nurturing the spiritual, social, and emotional growth of our youngest members. Through fun activities, Bible stories, music, and crafts, we help children discover God’s love and their place in His family.
            </p>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="section-padding bg-primary-50">
        <div className="container-width text-center">
          <h2 className="text-4xl font-bold text-navy-900 mb-12">What We Offer</h2>
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
          <h2 className="text-4xl font-bold text-navy-900 mb-6">Join the Fun!</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We welcome all children ages 3-12. Bring your child to experience faith, friendship, and fun every Sunday during service.
          </p>
          <button className="btn-primary">Contact Children’s Ministry</button>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default ChildrensFellowshipPage;