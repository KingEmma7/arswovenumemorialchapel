import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiMusic, FiHeart, FiUsers, FiStar, FiFlag, FiGlobe } from 'react-icons/fi';

const CultureGroupPage: React.FC = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -30 },
  };

  const aspects = [
    {
      icon: <FiGlobe size={32} className="text-gold-500" />,
      title: "Cultural Heritage",
      description: "Preserving and celebrating our rich Ewe cultural traditions and customs within our Christian faith.",
    },
    {
      icon: <FiMusic size={32} className="text-gold-500" />,
      title: "Traditional Music & Dance",
      description: "Performing authentic Ewe music and dances that honor God while celebrating our cultural identity.",
    },
    {
      icon: <FiUsers size={32} className="text-gold-500" />,
      title: "Community Unity",
      description: "Bringing together people of all ages to learn, practice, and share our cultural heritage.",
    },
    {
      icon: <FiFlag size={32} className="text-gold-500" />,
      title: "Cultural Ambassador",
      description: "Representing our church and community at cultural events and festivals with pride and dignity.",
    },
  ];

  const galleryImages = [
    "/images/groups/culture-group-1.jpeg",
    "/images/groups/culture-group-2.jpeg",
    "/images/groups/culture-group-3.jpeg",
    "/images/groups/culture-group-4.jpeg",
    "/images/groups/culture-group-8.jpeg",
  ];

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
      <Head>
        <title>Culture Group - Wovenu Memorial Chapel</title>
        <meta name="description" content="Join our Culture Group at Wovenu Memorial Chapel, where we celebrate and preserve our rich Ewe cultural heritage through music, dance, and traditions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
            src="/images/groups/culture-group-1.jpeg"
            alt="Culture Group Performance"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/30 to-transparent"></div>
          <div className="relative z-10 flex h-full items-center justify-center text-center p-4">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 120 }}
              className="bg-black bg-opacity-50 p-8 rounded-2xl shadow-lg backdrop-blur-sm"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Culture Group
              </h1>
              <p className="text-xl md:text-2xl text-gold-200 max-w-3xl mx-auto">
                Celebrating Our Heritage, Honoring Our God
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Introduction Section */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-4xl font-bold text-navy-900 mb-6">Preserving Our Cultural Identity</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Culture Group at Wovenu Memorial Chapel is a vibrant ministry dedicated to preserving, 
                  celebrating, and sharing our rich Ewe cultural heritage. We believe that our cultural identity 
                  is a gift from God that should be honored and passed down to future generations.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Through traditional music, dance, storytelling, and customs, we create a bridge between 
                  our ancestral heritage and our Christian faith. Our performances are not just entertainment, 
                  but acts of worship that celebrate the diversity and beauty of God's creation.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Whether you're young or old, experienced or a beginner, the Culture Group welcomes everyone 
                  who has a heart to learn and celebrate our beautiful Ewe traditions in a Christian context.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Image
                  src="/images/groups/culture-group-2.jpeg"
                  alt="Culture Group Traditional Performance"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold-500 rounded-full flex items-center justify-center shadow-lg">
                  <FiGlobe className="w-12 h-12 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="section-padding bg-gradient-to-br from-gold-50 to-primary-50">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                What We Do
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our Culture Group engages in various activities that celebrate and preserve our Ewe heritage
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aspects.map((aspect, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gold-100 p-4 rounded-xl flex-shrink-0">
                      {aspect.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-900 mb-3">
                        {aspect.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {aspect.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                Our Cultural Celebrations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the beauty and richness of our cultural performances and celebrations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group cursor-pointer"
                >
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={image}
                      alt={`Culture Group Performance ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="section-padding bg-navy-900 text-white">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Join Our Cultural Family
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Whether you're interested in learning traditional dances, playing cultural music, 
                or simply want to connect with your heritage, we welcome you with open arms.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiMusic className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Practice Sessions</h3>
                  <p className="text-gray-300">Saturdays at 3:00 PM</p>
                </div>
                <div className="text-center">
                  <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiUsers className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">All Ages Welcome</h3>
                  <p className="text-gray-300">From children to elders</p>
                </div>
                <div className="text-center">
                  <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiHeart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cultural Learning</h3>
                  <p className="text-gray-300">Discover your heritage</p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200"
                >
                  Contact Us to Join
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default CultureGroupPage;
