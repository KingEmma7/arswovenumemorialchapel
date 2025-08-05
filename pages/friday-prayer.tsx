import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiClock, FiUsers, FiMapPin, FiHeart, FiBookOpen, FiCoffee } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FridayPrayerPage: React.FC = () => {
  const serviceElements = [
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: "Corporate Prayer",
      description: "Join together in unified prayer for our church, community, and world."
    },
    {
      icon: <FiBookOpen className="w-6 h-6" />,
      title: "Scripture Reading",
      description: "Meditate on God's word and find strength in His promises."
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Prayer Requests",
      description: "Share personal prayer needs and intercede for one another."
    },
    {
      icon: <FiCoffee className="w-6 h-6" />,
      title: "Fellowship",
      description: "Connect with fellow believers and build prayer partnerships."
    }
  ];

  const prayerFocus = [
    {
      title: "Church & Leadership",
      description: "Praying for our pastors, leaders, and church ministries."
    },
    {
      title: "Community & Nation",
      description: "Interceding for our local community and national needs."
    },
    {
      title: "Families & Relationships",
      description: "Lifting up families, marriages, and personal relationships."
    },
    {
      title: "Global Missions",
      description: "Praying for missionaries and the spread of the Gospel."
    }
  ];

  return (
    <>
      <Head>
        <title>Friday Prayer Service - Apostles Revelation Society</title>
        <meta name="description" content="Join us every Friday at 6:00 PM for our Prayer Service, where we gather to pray for our church, community, and world." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-navy-900 to-navy-800 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/pages/friday-prayer-hero.jpg"
              alt="Friday Prayer Service"
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
                Friday Prayer Service
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join us in prayer for our church, community, and world
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-2 text-gold-400">
                  <FiClock className="w-6 h-6" />
                  <span className="text-xl font-semibold">Every Friday at 6:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-gold-400">
                  <FiMapPin className="w-6 h-6" />
                  <span className="text-xl font-semibold">Prayer Room</span>
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
                  The Power of Prayer
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our Friday Prayer Service is a dedicated time to come together as a community 
                  and lift our voices in prayer. We believe in the power of corporate prayer and 
                  the strength that comes from praying together in unity.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                    <span className="text-gray-700">Intimate prayer atmosphere</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                    <span className="text-gray-700">Personal prayer requests</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                    <span className="text-gray-700">Corporate intercession</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                    <span className="text-gray-700">Spiritual encouragement</span>
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
                      <span className="font-medium">Opening Prayer</span>
                      <span className="text-gold-600 font-semibold">6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium">Scripture Reading</span>
                      <span className="text-gold-600 font-semibold">6:10 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium">Prayer Requests</span>
                      <span className="text-gold-600 font-semibold">6:20 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium">Corporate Prayer</span>
                      <span className="text-gold-600 font-semibold">6:30 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-medium">Fellowship</span>
                      <span className="text-gold-600 font-semibold">7:00 PM</span>
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
                What to Expect
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the power of prayer in a supportive and intimate setting
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Prayer Focus Areas */}
        <section className="section-padding">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                Prayer Focus Areas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We pray for various areas of need in our church, community, and world
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {prayerFocus.map((focus, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="mb-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Prayer Focus
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-navy-900 mb-3">
                    {focus.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {focus.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Prayer Request Form */}
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
                Submit Prayer Request
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Can't join us in person? Submit your prayer request and we'll pray for you
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="prayerRequest" className="block text-sm font-medium text-gray-700 mb-2">
                      Prayer Request *
                    </label>
                    <textarea
                      id="prayerRequest"
                      name="prayerRequest"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="Share your prayer request..."
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-gold-500 focus:ring-gold-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        Keep this request confidential (only shared with prayer team)
                      </span>
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200"
                  >
                    Submit Prayer Request
                  </button>
                </form>
              </motion.div>
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
                Join Us This Friday
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Experience the power of prayer and find strength in community
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200">
                  Plan Your Visit
                </button>
                <button className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-lg border-2 border-white/30 transition-colors duration-200">
                  Submit Prayer Request
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

export default FridayPrayerPage; 