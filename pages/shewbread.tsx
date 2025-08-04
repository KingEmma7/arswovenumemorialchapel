import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiClock, FiUsers, FiMapPin, FiHeart, FiBookOpen, FiCoffee, FiCalendar, FiStar } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ShewBreadPage: React.FC = () => {
  const serviceElements = [
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: "Holy Preparation",
      description: "A week of spiritual preparation, especially the three days leading to Sunday, maintaining holiness and purity."
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Saturday Evening Fellowship",
      description: "Join us the evening before ShewBread Sunday for fellowship, prayer, and spiritual preparation."
    },
    {
      icon: <FiStar className="w-6 h-6" />,
      title: "White Prayer Gown",
      description: "Recommended to wear your white prayer gown as a symbol of purity and reverence for this holy service."
    },
    {
      icon: <FiBookOpen className="w-6 h-6" />,
      title: "Communion Service",
      description: "A sacred communion service where we partake of the bread and wine in remembrance of Christ's sacrifice."
    },
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: "Prayer & Worship",
      description: "Dedicated time for prayer, worship, and spiritual reflection during this holy communion."
    },
    {
      icon: <FiCoffee className="w-6 h-6" />,
      title: "Fellowship",
      description: "Build relationships and community through shared spiritual experiences and refreshments."
    }
  ];

  return (
    <>
      <Head>
        <title>ShewBread - Apostles Revelations Society</title>
        <meta name="description" content="Join us for ShewBread, our quarterly communion service. A time of holy preparation, fellowship, and remembrance of Christ's sacrifice." />
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
              alt="ShewBread Communion Service"
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
                Our quarterly communion service - a sacred time of holy preparation and remembrance
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-2 text-gold-500">
                  <FiCalendar className="w-6 h-6" />
                  <span className="text-xl font-semibold">Every Three Months</span>
                </div>
                <div className="flex items-center gap-2 text-gold-500">
                  <FiMapPin className="w-6 h-6" />
                  <span className="text-xl font-semibold">Musuku</span>
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
                  Holy Communion Service
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  ShewBread is our quarterly communion service, inspired by the biblical showbread 
                  that was placed in the temple as a continual offering to God. This is a sacred time 
                  where we prepare our hearts, maintain holiness, and partake of the bread and wine 
                  in remembrance of Christ's sacrifice.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                    <span className="text-gray-700">Week of holy preparation required</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                    <span className="text-gray-700">Special focus on the three days before Sunday</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                    <span className="text-gray-700">Saturday evening fellowship</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                    <span className="text-gray-700">White prayer gown recommended</span>
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
                  <h3 className="text-2xl font-bold text-navy-900 mb-6">Preparation Schedule</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium">Week of Preparation</span>
                      <span className="text-gold-600 font-semibold">Monday - Saturday</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium">Three Days Focus</span>
                      <span className="text-gold-600 font-semibold">Thursday - Saturday</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium">Saturday Evening Fellowship</span>
                      <span className="text-gold-600 font-semibold">6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium">ShewBread Sunday Service</span>
                      <span className="text-gold-600 font-semibold">9:00 AM</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-medium">Communion Service</span>
                      <span className="text-gold-600 font-semibold">During Service</span>
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
                Each element is designed to prepare your heart for this sacred communion service
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
                Prepare Your Heart
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Join us for this sacred communion service. Remember to maintain holiness in the week leading up to ShewBread.
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