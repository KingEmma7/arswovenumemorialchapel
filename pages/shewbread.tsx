import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiClock, FiUsers, FiMapPin, FiHeart, FiBookOpen, FiCoffee } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ShewBreadPage: React.FC = () => {
  const serviceElements = [
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: "Prayer & Meditation",
      description: "Begin with quiet reflection and prayer to prepare our hearts for spiritual nourishment."
    },
    {
      icon: <FiBookOpen className="w-6 h-6" />,
      title: "Scripture Study",
      description: "Deep dive into God's word with focused study and discussion of biblical passages."
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Group Discussion",
      description: "Share insights, ask questions, and learn from one another in a supportive environment."
    },
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: "Testimonies",
      description: "Hear and share personal testimonies of God's work in our lives and community."
    },
    {
      icon: <FiCoffee className="w-6 h-6" />,
      title: "Fellowship",
      description: "Build relationships over refreshments and meaningful conversations."
    },
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: "Closing Prayer",
      description: "End with prayer, committing our week to God and seeking His guidance."
    }
  ];

  return (
    <>
      <Head>
        <title>ShewBread - Apostles Revelations Society</title>
        <meta name="description" content="Join us every Wednesday at 6:00 PM for ShewBread, a special service focused on spiritual nourishment through prayer, meditation, and sharing of God's word." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-navy-900 to-navy-800 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/pages/shewbread-hero.jpg"
              alt="ShewBread Service"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="container-width relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                ShewBread
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                A special service focused on spiritual nourishment through prayer, meditation, and sharing of God's word
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-2 text-gold-400">
                  <FiClock className="w-6 h-6" />
                  <span className="text-xl font-semibold">Every Wednesday at 6:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-gold-400">
                  <FiMapPin className="w-6 h-6" />
                  <span className="text-xl font-semibold">Fellowship Hall</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="section-padding">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                  Spiritual Nourishment
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  ShewBread is our midweek spiritual refreshment service, inspired by the biblical showbread 
                  that was placed in the temple as a continual offering to God. Just as the showbread 
                  sustained the priests, this service sustains our spiritual lives throughout the week.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                    <span className="text-gray-700">Intimate, interactive setting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                    <span className="text-gray-700">Deep biblical study and discussion</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                    <span className="text-gray-700">Personal testimonies and sharing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                    <span className="text-gray-700">Prayer support and encouragement</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-navy-900 mb-6">Service Schedule</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium">Welcome & Opening Prayer</span>
                      <span className="text-gold-600 font-semibold">6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium">Scripture Reading</span>
                      <span className="text-gold-600 font-semibold">6:10 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium">Group Discussion</span>
                      <span className="text-gold-600 font-semibold">6:20 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium">Testimonies</span>
                      <span className="text-gold-600 font-semibold">6:45 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium">Fellowship & Refreshments</span>
                      <span className="text-gold-600 font-semibold">7:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-medium">Closing Prayer</span>
                      <span className="text-gold-600 font-semibold">7:15 PM</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Elements */}
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
                Elements of ShewBread
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each element is designed to nourish your soul and strengthen your faith
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceElements.map((element, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {element.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">
                    {element.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {element.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-700">
          <div className="container-width text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Us This Wednesday
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Experience spiritual nourishment and community support in a warm, welcoming environment
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200">
                  Plan Your Visit
                </button>
                <button className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-lg border-2 border-white/30 transition-colors duration-200">
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ShewBreadPage; 