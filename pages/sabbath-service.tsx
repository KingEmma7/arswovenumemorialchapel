import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiClock, FiUsers, FiMapPin, FiMusic, FiBookOpen, FiHeart } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SabbathServicePage: React.FC = () => {
  const serviceElements = [
    {
      icon: <FiMusic className="w-6 h-6" />,
      title: "Worship & Praise",
      description: "Begin with uplifting hymns and spiritual songs that prepare our hearts for worship."
    },
    {
      icon: <FiBookOpen className="w-6 h-6" />,
      title: "Scripture Reading",
      description: "Listen to God's word as we read from the Bible and reflect on its meaning for our lives."
    },
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: "Prayer & Intercession",
      description: "Join in corporate prayer, lifting up our community, nation, and personal needs to God."
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Sermon & Teaching",
      description: "Receive biblical teaching and practical application for daily Christian living."
    },
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: "Communion",
      description: "Partake in the Lord's Supper, remembering Christ's sacrifice and our unity in Him."
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Fellowship",
      description: "Connect with fellow believers over refreshments and meaningful conversations."
    }
  ];

  return (
    <>
      <Head>
        <title>Sabbath Service - Apostles Revelation Society</title>
        <meta name="description" content="Join us every Sunday at 9:00 AM for our main Sabbath Service. Experience worship, teaching, and fellowship in a welcoming community." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-24 h-1/2 pb-16 bg-gradient-to-br from-navy-900 to-navy-800 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/logos/church-background2.jpeg"
              alt="Sabbath Service"
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
                Sabbath Service
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                Our main worship service where we gather as a community to praise God, hear His word, and fellowship together
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-2 text-gold-400">
                  <FiClock className="w-6 h-6" />
                  <span className="text-xl font-semibold">Every Sunday at 9:00 AM</span>
                </div>
                <div className="flex items-center gap-2 text-gold-400">
                  <FiMapPin className="w-6 h-6" />
                  <span className="text-xl font-semibold"><a href="/contact" className="hover:underline">Musuku</a></span>
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
                  What to Expect
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our Sabbath Service is a time of spiritual renewal, community connection, and deep worship. 
                  Whether you're a long-time member or a first-time visitor, you'll find a warm welcome and 
                  an opportunity to grow in your faith.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                    <span className="text-gray-700">Casual, welcoming atmosphere</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                    <span className="text-gray-700">Traditional and contemporary worship</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                    <span className="text-gray-700">Biblical, practical teaching</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                    <span className="text-gray-700">Children's ministry available</span>
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
                      <span className="font-medium">Welcome & Thanksgiving Prayers</span>
                      <span className="text-gold-600 font-semibold">9:00 AM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium">Song Ministrations by Various Groups</span>
                      <span className="text-gold-600 font-semibold">9:30 AM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium">Sermon</span>
                      <span className="text-gold-600 font-semibold">10:30 AM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium">Offering</span>
                      <span className="text-gold-600 font-semibold">11:00 AM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium">Announcements</span>
                      <span className="text-gold-600 font-semibold">11:30 AM</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-medium">Closing Prayer</span>
                      <span className="text-gold-600 font-semibold">12:00 AM</span>
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
                Elements of Our Service
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each part of our service is designed to draw us closer to God and to one another
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
                Join Us This Sabbath
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Experience the joy of worship and the warmth of community. All are welcome!
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

export default SabbathServicePage; 