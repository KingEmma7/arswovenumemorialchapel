import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiClock, FiUsers, FiHeart, FiArrowRight, FiBookOpen } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Service {
  id: number;
  title: string;
  description: string;
  time: string;
  day: string;
  image: string;
  href: string;
  icon: React.ReactNode;
}

const ServicesPage: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Sabbath Service",
      description: "Our main worship service where we gather as a community to praise God, hear His word, and fellowship together.",
      time: "9:00 AM",
      day: "Sunday",
      image: "/images/pages/sabbath-service-hero.jpg",
      href: "/sabbath-service",
      icon: <FiUsers className="w-8 h-8" />
    },
    {
      id: 2,
      title: "Wednesday Teachings",
      description: "Deep dive into God's word through Bible study, discussion, and prayer.",
      time: "7:00 PM",
      day: "Wednesday",
      image: "/images/pages/wednesday-teachings-hero.jpg",
      href: "/wednesday-teachings",
      icon: <FiBookOpen className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Friday Prayer Service",
      description: "Join us in prayer for our church, community, and world.",
      time: "6:00 PM",
      day: "Friday",
      image: "/images/pages/friday-prayer-hero.jpg",
      href: "/friday-prayer",
      icon: <FiHeart className="w-8 h-8" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <>
      <Head>
        <title>Services - Apostles Revelation Society</title>
        <meta name="description" content="Join us for our regular services including Sabbath Service and ShewBread. Experience worship, fellowship, and spiritual growth." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-navy-900 to-navy-800 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/pages/services-hero.jpg"
              alt="Church Services"
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
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Join us in worship and fellowship as we gather to praise God and grow in our faith together
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
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
                Regular Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer various services throughout the week to meet the spiritual needs of our congregation and community.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      {service.icon}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-navy-900 mb-4">
                      {service.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <FiClock className="w-4 h-4" />
                        <span>{service.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiUsers className="w-4 h-4" />
                        <span>{service.day}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
                    >
                      Learn More
                      <FiArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Service Times */}
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
                Service Schedule
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Plan your visit with our complete service schedule
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="space-y-6">
                  {services.map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                      <div>
                        <h3 className="font-bold text-lg text-navy-900">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gold-600">{service.time}</div>
                        <div className="text-gray-500">{service.day}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage; 