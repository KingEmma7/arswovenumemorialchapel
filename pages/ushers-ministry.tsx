import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiHeart, FiSmile, FiHelpCircle, FiClipboard, FiCheckSquare, FiShield } from 'react-icons/fi';

const UshersMinistryPage: React.FC = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -30 },
  };

  const coreValues = [
    {
      icon: <FiHeart size={28} className="text-gold-500" />,
      title: "Service with Love",
      description: "Every action is performed with a heart full of love for God and His people.",
    },
    {
      icon: <FiSmile size={28} className="text-gold-500" />,
      title: "Warm Welcome",
      description: "We are the first smile that greets you, ensuring everyone feels at home.",
    },
    {
      icon: <FiHelpCircle size={28} className="text-gold-500" />,
      title: "Helpfulness",
      description: "Always ready to assist, answer questions, and provide guidance to all attendees.",
    },
    {
        icon: <FiShield size={28} className="text-gold-500" />,
        title: "Order & Reverence",
        description: "Maintaining a peaceful and orderly atmosphere conducive to worship.",
    },
  ];

  const responsibilities = [
    {
      icon: <FiCheckSquare size={20} className="text-primary-600" />,
      text: "Greeting members and visitors with a warm and friendly smile.",
    },
    {
        icon: <FiCheckSquare size={20} className="text-primary-600" />,
        text: "Assisting with seating to ensure everyone is comfortable.",
    },
    {
        icon: <FiCheckSquare size={20} className="text-primary-600" />,
        text: "Distributing bulletins, literature, and other materials.",
    },
    {
        icon: <FiCheckSquare size={20} className="text-primary-600" />,
        text: "Collecting offerings and ensuring their security.",
    },
    {
        icon: <FiCheckSquare size={20} className="text-primary-600" />,
        text: "Maintaining order and reverence during services.",
    },
    {
        icon: <FiCheckSquare size={20} className="text-primary-600" />,
        text: "Responding to emergencies and providing assistance as needed.",
    },
  ];

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
      <Head>
        <title>Ushers Ministry - Wovenu Memorial Chapel</title>
        <meta name="description" content="Learn about the Ushers Ministry at Wovenu Memorial Chapel, the welcoming face of our church, dedicated to serving with love and ensuring a wonderful worship experience." />
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
            src="/images/groups/ushers1.jpeg"
            alt="Ushers Ministry Team"
            fill
            className="object-cover object-top"
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
                Ushers Ministry
              </h1>
              <p className="text-xl md:text-2xl text-gold-200 max-w-3xl mx-auto">
                The Welcoming Hands and Hearts of Our Church
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Introduction Section */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-navy-900 mb-6">Serving with a Smile</h2>
              <p className="prose prose-xl max-w-none text-gray-600">
                The Ushers Ministry at Wovenu Memorial Chapel is a vital part of our worship experience. As the first representatives of the church that people meet, our ushers are dedicated to creating a warm, welcoming, and safe environment for everyone who enters our doors. We believe that a spirit of service and a welcoming atmosphere can prepare hearts to receive God's word.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="section-padding bg-primary-50">
          <div className="container-width text-center">
            <h2 className="text-4xl font-bold text-navy-900 mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-navy-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Responsibilities Section */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/images/groups/ushers1.jpeg"
                    alt="Ushers serving the congregation"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-2xl"
                  />
                </motion.div>
                <div className="prose prose-lg max-w-none">
                    <h2 className="text-4xl font-bold text-navy-900 mb-6">Our Responsibilities</h2>
                    <ul className="space-y-4">
                    {responsibilities.map((item, index) => (
                        <motion.li
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        >
                        <span className="mr-3 mt-1">{item.icon}</span>
                        <span>{item.text}</span>
                        </motion.li>
                    ))}
                    </ul>
                </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="section-padding bg-gold-50">
          <div className="container-width text-center">
            <h2 className="text-4xl font-bold text-navy-900 mb-6">Become an Usher</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              If you have a heart for service and a desire to make a difference in our church community, we invite you to join the Ushers Ministry.
            </p>
            <button className="btn-primary">
              Join the Ministry
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default UshersMinistryPage;
