import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiUsers } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface ClergyCounting {
  id: number;
  name: string;
  title: string;
  role: string;
  phone: string;
  email?: string;
  image: string;
}

const EldersOfTheWeekPage: React.FC = () => {
  const bishops: ClergyCounting[] = [
    {
        id: 1,
        name: "Bishop Veliane Wovenu",
        title: "Bishop",
        role: "Lead Pastor & Spiritual Oversight",
        phone: "+233 24 345 1929",
        email: "bishop.veliane@wmcars.org",
        image: "/images/clergy/Bishop-Veliane-2.jpeg",    
     
    },
    {
        id: 2,
        name: "Bishop Sinametor Wovenu",
        title: "Bishop",
        role: "Associate Bishop",
        phone: "+233 20 546 2448",
        email: "bishop.sina@wmcars.org",
        image: "/images/clergy/bishop-sina.jpeg",
    }
  ];

  const elders: ClergyCounting[] = [
    {
      id: 3,
      name: "Elder Hope Goka",
      title: "Elder",
      role: "Bible Study & Counseling",
      phone: "+233 24 460 1628",
      image: "/images/clergy/elder-hope.jpeg",
    },
    {
      id: 4,
      name: "Professor Senadza",
      title: "Elder",
      role: "Bible Study & Counseling",
      phone: "+233 26 345 6789",
      image: "/images/clergy/prof-senadza.jpeg",
    }
  ];

  const deaconesses: ClergyCounting[] = [
    {
      id: 5,
      name: "Deaconess Dadia",
      title: "Senior Deaconess",
      role: "Women's Ministry & Care",
      phone: "+233 23 456 7890",
      image: "/images/clergy/dadia.jpeg",
    }
  ];

  const supportingClergy: ClergyCounting[] = [
    {
      id: 6,
      name: "Reuben Opata",
      title: "Elder",
      role: "Youth & Media Ministry",
      phone: "+233 25 678 9012",
      image: "/images/clergy/reuben-opata.jpg",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const ClergySectionComponent = ({ 
    title, 
    subtitle, 
    clergy, 
    bgColor = "bg-white" 
  }: { 
    title: string; 
    subtitle: string; 
    clergy: ClergyCounting[]; 
    bgColor?: string;
  }) => (
    <section className={`section-padding ${bgColor}`}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {clergy.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Profile Image */}
              <div className="relative h-64 bg-gradient-to-br from-navy-100 to-primary-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent"></div>
                
                {/* Availability Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <FiClock className="w-3 h-3" />
                    On Duty
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-navy-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold-600 font-semibold mb-2">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.role}
                  </p>
                </div>

                {/* Contact Information */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <FiPhone className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">
                         Contact
                      </p>
                      <a 
                        href={`tel:${member.phone}`}
                        className="text-sm font-semibold text-navy-900 hover:text-primary-600 transition-colors"
                      >
                        {member.phone}
                      </a>
                    </div>
                  </div>

                  {member.email && (
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <FiMail className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">
                          Email
                        </p>
                        <a 
                          href={`mailto:${member.email}`}
                          className="text-sm font-semibold text-navy-900 hover:text-primary-600 transition-colors"
                        >
                          {member.email}
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <div className="bg-gold-100 p-2 rounded-lg">
                      <FiClock className="w-4 h-4 text-gold-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">
                        Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  return (
    <>
      <Head>
        <title>Elders of the Week - Apostles Revelation Society</title>
        <meta 
          name="description" 
          content="Meet our clergy on duty this week. Contact our bishops, elders, deaconesses, and supporting clergy for spiritual guidance,  support, and pastoral care." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-navy-900 to-navy-800 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/church-entrance.jpeg"
              alt="Church Leadership"
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
                Elders of the Week
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Meet our dedicated clergy who are on duty this week, ready to provide spiritual guidance, 
                pastoral care, and  support for our congregation and community.
              </p>
              
              {/* Quick Contact Banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto"
              >
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="bg-green-500 p-2 rounded-full">
                    <FiPhone className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">Available</h3>
                </div>
                <p className="text-gray-300">
                  For urgent spiritual guidance or  pastoral care, 
                  contact any of our bishops below
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Current Week Info */}
        <section className="py-8 bg-white border-b">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-between"
            >
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h2 className="text-2xl font-bold text-navy-900 mb-2">
                  Current Duty Week
                </h2>
                <p className="text-gray-600">
                  September 23 - September 29, 2025
                </p>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMapPin className="w-4 h-4" />
                  <span>Wovenu Memorial Chapel</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bishops Section */}
        <ClergySectionComponent
          title="Bishops"
          subtitle="Our senior leadership providing spiritual oversight and pastoral guidance"
          clergy={bishops}
          bgColor="bg-gradient-to-br from-primary-50 to-blue-50"
        />

        {/* Elders Section */}
        <ClergySectionComponent
          title="Elders"
          subtitle="Experienced leaders offering wisdom, counseling, and biblical teaching"
          clergy={elders}
          bgColor="bg-white"
        />

        {/* Deaconesses Section */}
        <ClergySectionComponent
          title="Deaconesses"
          subtitle="Dedicated women leaders serving in ministry and pastoral care"
          clergy={deaconesses}
          bgColor="bg-gradient-to-br from-gold-50 to-yellow-50"
        />

        {/* Supporting Clergy Section */}
        <ClergySectionComponent
          title="Supporting Clergy"
          subtitle="Assistant pastors and ministry leaders supporting our congregation"
          clergy={supportingClergy}
          bgColor="bg-white"
        />

        {/*  Contact Section */}
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
                Need Immediate Assistance?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Our clergy are here to support you in times of need. Don't hesitate to reach out 
                for prayer, counseling, or  pastoral care.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <motion.a
                  href="tel:+233201234567"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-xl transition-colors duration-200 flex items-center gap-4"
                >
                  <FiPhone className="w-6 h-6" />
                  <div className="text-left">
                    <div className="font-bold"> Line</div>
                    <div className="text-green-200">+233 20 123 4567</div>
                  </div>
                </motion.a>
                
                <motion.a
                  href="mailto:pastoral@wmcars.org"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-xl transition-colors duration-200 flex items-center gap-4"
                >
                  <FiMail className="w-6 h-6" />
                  <div className="text-left">
                    <div className="font-bold">Email Support</div>
                    <div className="text-blue-200">pastoral@wmcars.org</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default EldersOfTheWeekPage;
