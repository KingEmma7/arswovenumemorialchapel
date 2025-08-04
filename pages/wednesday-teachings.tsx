import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiClock, FiUsers, FiMapPin, FiBookOpen, FiHeart, FiCoffee, FiUser } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const WednesdayTeachingsPage: React.FC = () => {
  const serviceElements = [
    {
      icon: <FiBookOpen className="w-6 h-6" />,
      title: "Bible Study",
      description: "In-depth study of God's word with practical applications for daily living."
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Group Discussion",
      description: "Interactive discussions where participants can ask questions and share insights."
    },
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: "Prayer Time",
      description: "Dedicated time for prayer, intercession, and spiritual reflection."
    },
    {
      icon: <FiCoffee className="w-6 h-6" />,
      title: "Fellowship",
      description: "Building relationships and community through shared learning and refreshments."
    }
  ];

  const upcomingTopics = [
    {
      title: "The Parables of Jesus",
      description: "Understanding the wisdom and teachings of Jesus through His parables.",
      date: "January 24, 2024"
    },
    {
      title: "Walking in the Spirit",
      description: "Learning to live a Spirit-filled life and recognize God's guidance.",
      date: "January 31, 2024"
    },
    {
      title: "Building Strong Families",
      description: "Biblical principles for creating healthy, God-centered family relationships.",
      date: "February 7, 2024"
    }
  ];

  return (
    <>
      <Head>
        <title>Wednesday Teachings - Apostles Revelations Society</title>
        <meta name="description" content="Join us every Wednesday at 7:00 PM for Wednesday Teachings, led by Elder Hope Goka. Deep dive into God's word through Bible study, discussion, and prayer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-navy-900 to-navy-800 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/pages/wednesday-teachings-hero.jpg"
              alt="Wednesday Teachings"
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
                Wednesday Teachings
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                Deep dive into God's word through Bible study, discussion, and prayer
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6">
                <div className="flex items-center gap-2 text-gold-500">
                  <FiClock className="w-6 h-6" />
                  <span className="text-xl font-semibold">Every Wednesday at 7:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-gold-500">
                  <FiMapPin className="w-6 h-6" />
                  <span className="text-xl font-semibold">Musuku</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-gold-500">
                <FiUser className="w-6 h-6" />
                <span className="text-xl font-semibold">Led by Elder Hope Goka</span>
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
                  Deep Biblical Learning
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Wednesday Teachings is our dedicated time for in-depth biblical study and spiritual growth, 
                  led by Elder Hope Goka. This service focuses on equipping believers with a deeper understanding 
                  of God's word and practical applications for daily Christian living.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                    <span className="text-gray-700">Interactive Bible study sessions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                    <span className="text-gray-700">Q&A and group discussions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                    <span className="text-gray-700">Practical life applications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                    <span className="text-gray-700">Prayer and spiritual guidance</span>
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
                      <span className="text-gold-600 font-semibold">7:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium">Bible Study</span>
                      <span className="text-gold-600 font-semibold">7:10 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium">Group Discussion</span>
                      <span className="text-gold-600 font-semibold">7:40 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium">Prayer Time</span>
                      <span className="text-gold-600 font-semibold">8:10 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-medium">Fellowship</span>
                      <span className="text-gold-600 font-semibold">8:30 PM</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-3">
                      <FiUser className="w-5 h-5 text-gold-600" />
                      <div>
                        <span className="font-medium text-gray-700">Led by:</span>
                        <span className="text-gold-600 font-semibold ml-2">Elder Hope Goka</span>
                      </div>
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
                Each Wednesday evening is designed to deepen your understanding and strengthen your faith
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

        {/* Upcoming Topics */}
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
                Upcoming Topics
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join us for these exciting teaching series in the coming weeks
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingTopics.map((topic, index) => (
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
                      {topic.date}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-navy-900 mb-3">
                    {topic.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {topic.description}
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
                Experience the joy of learning God's word in a supportive community environment
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

export default WednesdayTeachingsPage; 