import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiMusic, FiHeart, FiUsers, FiStar, FiMic, FiAward } from 'react-icons/fi';

const TutudoPage: React.FC = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -30 },
  };

  const features = [
    {
      icon: <FiMusic size={32} className="text-gold-500" />,
      title: "Traditional Drumming",
      description: "Master the art of traditional Ewe drumming with authentic rhythms and techniques passed down through generations.",
    },
    {
      icon: <FiHeart size={32} className="text-gold-500" />,
      title: "Spiritual Expression",
      description: "Use the power of rhythm and music to express praise, worship, and spiritual connection with God.",
    },
    {
      icon: <FiUsers size={32} className="text-gold-500" />,
      title: "Community Building",
      description: "Build strong bonds and unity through the collective experience of creating music together.",
    },
    {
      icon: <FiAward size={32} className="text-gold-500" />,
      title: "Cultural Preservation",
      description: "Preserve and pass on the rich musical traditions of our ancestors to future generations.",
    },
  ];

  const galleryImages = [
    "/images/groups/tutudo-1.jpeg",
    "/images/groups/tutudo-2.jpeg",
    "/images/groups/tutudo-5.jpeg",
    "/images/groups/tutudo-6.jpeg",
  ];

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
      <Head>
        <title>Tutudo - Wovenu Memorial Chapel</title>
        <meta name="description" content="Join Tutudo at Wovenu Memorial Chapel, our traditional drumming group that celebrates our cultural heritage through powerful rhythms and spiritual expression." />
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
            src="/images/groups/tutudo-1.jpeg"
            alt="Tutudo Drumming Performance"
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
                Tutudo
              </h1>
              <p className="text-xl md:text-2xl text-gold-200 max-w-3xl mx-auto">
                The Heartbeat of Our Heritage
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Introduction Section */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-4xl font-bold text-navy-900 mb-6">The Rhythm of Worship</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Tutudo is our traditional drumming group at Wovenu Memorial Chapel, where the ancient art of 
                  Ewe drumming meets contemporary Christian worship. The name "Tutudo" reflects the deep, 
                  resonant sounds that have echoed through our communities for generations.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Through powerful rhythms and synchronized beats, we create an atmosphere of worship that 
                  connects our hearts to God and our souls to our cultural roots. Our drums don't just make 
                  music; they tell stories, convey emotions, and unite our congregation in praise.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Whether you're an experienced drummer or someone who simply feels the call of the rhythm, 
                  Tutudo welcomes all who want to serve God through the gift of traditional music.
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
                  src="/images/groups/tutudo-2.jpeg"
                  alt="Tutudo Drummers in Action"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold-500 rounded-full flex items-center justify-center shadow-lg">
                  <FiMusic className="w-12 h-12 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-navy-50">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the rich world of traditional drumming and its role in worship and cultural expression
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
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
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
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
                Our Drumming Heritage
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the power and beauty of traditional Ewe drumming in worship and celebration
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="relative group cursor-pointer"
                >
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={image}
                      alt={`Tutudo Performance ${index + 1}`}
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

        {/* Instruments & Learning Section */}
        <section className="section-padding bg-gradient-to-br from-gold-50 to-primary-50">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-navy-900 mb-6">Learn Traditional Instruments</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gold-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <FiMusic className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-900 mb-2">Atsimevu</h3>
                      <p className="text-gray-600">The master drum that leads the ensemble with its deep, commanding voice.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-gold-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <FiStar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-900 mb-2">Sogo</h3>
                      <p className="text-gray-600">The supporting drum that provides rhythmic foundation and dialogue.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-gold-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <FiHeart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-900 mb-2">Gankogui</h3>
                      <p className="text-gray-600">The iron bell that keeps time and guides the entire ensemble.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Image
                  src="/images/groups/tutudo-5.jpeg"
                  alt="Traditional Drums"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
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
                Join the Rhythm of Worship
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Whether you're a beginner or experienced drummer, Tutudo welcomes you to be part of 
                our musical ministry. Come and discover the joy of serving God through traditional rhythm.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiMusic className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Practice Sessions</h3>
                  <p className="text-gray-300">Thursdays at 6:00 PM</p>
                </div>
                <div className="text-center">
                  <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiUsers className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">All Skill Levels</h3>
                  <p className="text-gray-300">Beginners to advanced</p>
                </div>
                <div className="text-center">
                  <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiMic className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Performance Opportunities</h3>
                  <p className="text-gray-300">Church services & events</p>
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
                  Join Tutudo Today
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

export default TutudoPage;
