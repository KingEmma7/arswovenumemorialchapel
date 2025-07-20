import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiHeart, FiBookOpen, FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface ClergyMember {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  email?: string;
  phone?: string;
  location?: string;
  category: 'bishop' | 'deacon' | 'deaconess';
  order: number;
}

const ClergyPage: React.FC = () => {
  const clergyMembers: ClergyMember[] = [
    {
      id: 1,
      name: "Bishop Veliane Wovenu Goka",
      title: "Presiding Bishop",
      description: "Our spiritual leader and shepherd, guiding the congregation with wisdom, compassion, and unwavering faith. Bishop Veliane has dedicated over 35 years to ministry and serves as the head of our church.",
      image: "/images/clergy/Bishop-Veliane-2.jpeg",
      email: "bishop.veliane@wmc.org",
      phone: "+233 24 345 1929",
      location: "Accra, Ghana",
      category: "bishop",
      order: 1
    },
    {
      id: 2,
      name: "Bishop Sinametor Wovenu Tagbor",
      title: "Assistant Bishop",
      description: "Supporting the Presiding Bishop in pastoral care and administrative duties. Bishop Williams specializes in youth ministry and community outreach programs.",
      image: "/images/clergy/assistant-bishop.jpg",
      email: "bishop.williams@wmc.org",
      phone: "+233 24 987 6543",
      location: "Kumasi, Ghana",
      category: "bishop",
      order: 2
    },
    {
      id: 3,
      name: "Bishop Sedenkor Wovenu",
      title: "Regional Bishop",
      description: "Overseeing church operations in the northern region and providing spiritual guidance to multiple congregations.",
      image: "/images/clergy/regional-bishop.jpg",
      email: "bishop.asante@wmc.org",
      phone: "+233 26 456 7890",
      location: "Tamale, Ghana",
      category: "bishop",
      order: 3
    },
    {
      id: 4,
      name: "Deacon Emmanuel Osei",
      title: "Senior Deacon",
      description: "Leading our deacon ministry and serving the congregation through practical service and spiritual support.",
      image: "/images/clergy/senior-deacon.jpg",
      email: "deacon.osei@wmc.org",
      phone: "+233 27 111 2222",
      location: "Accra, Ghana",
      category: "deacon",
      order: 1
    },
    {
      id: 5,
      name: "Deacon David Addo",
      title: "Deacon",
      description: "Supporting church services and providing assistance to families in need within our community.",
      image: "/images/clergy/deacon.jpg",
      email: "deacon.addo@wmc.org",
      phone: "+233 28 333 4444",
      location: "Accra, Ghana",
      category: "deacon",
      order: 2
    },
    {
      id: 6,
      name: "Deaconess Grace Mensah",
      title: "Senior Deaconess",
      description: "Leading our women's ministry and providing pastoral care to women and families in our congregation.",
      image: "/images/clergy/senior-deaconess.jpg",
      email: "deaconess.mensah@wmc.org",
      phone: "+233 29 555 6666",
      location: "Accra, Ghana",
      category: "deaconess",
      order: 1
    },
    {
      id: 7,
      name: "Deaconess Comfort Adjei",
      title: "Deaconess",
      description: "Supporting women's fellowship activities and providing spiritual guidance to young women.",
      image: "/images/clergy/deaconess.jpg",
      email: "deaconess.adjei@wmc.org",
      phone: "+233 30 777 8888",
      location: "Accra, Ghana",
      category: "deaconess",
      order: 2
    }
  ];

  const bishops = clergyMembers.filter(member => member.category === 'bishop');
  const deacons = clergyMembers.filter(member => member.category === 'deacon');
  const deaconesses = clergyMembers.filter(member => member.category === 'deaconess');

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
    hidden: { opacity: 0, y: 30 },
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
        <title>Clergy & Leadership - Apostles Revelations Society</title>
        <meta name="description" content="Meet our spiritual leaders including the Presiding Bishop, Assistant Bishops, Deacons, and Deaconesses who serve our congregation with dedication and faith." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-navy-900 to-navy-800 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/pages/clergy-hero.jpg"
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
                Our Clergy & Leadership
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Meet our dedicated spiritual leaders who serve our congregation with wisdom, compassion, and unwavering faith
              </p>
            </motion.div>
          </div>
        </section>

        {/* Presiding Bishop - Featured */}
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
                Presiding Bishop
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our spiritual shepherd and leader
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={bishops[0].image}
                    alt={bishops[0].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent"></div>
                </div>
                
                <div className="p-8 lg:p-12">
                  <div className="mb-4">
                    <span className="bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {bishops[0].title}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-navy-900 mb-4">
                    {bishops[0].name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {bishops[0].description}
                  </p>
                  
                  <div className="space-y-3">
                    {bishops[0].email && (
                      <div className="flex items-center gap-3 text-gray-600">
                        <FiMail className="w-5 h-5 text-gold-500" />
                        <span>{bishops[0].email}</span>
                      </div>
                    )}
                    {bishops[0].phone && (
                      <div className="flex items-center gap-3 text-gray-600">
                        <FiPhone className="w-5 h-5 text-gold-500" />
                        <span>{bishops[0].phone}</span>
                      </div>
                    )}
                    {bishops[0].location && (
                      <div className="flex items-center gap-3 text-gray-600">
                        <FiMapPin className="w-5 h-5 text-gold-500" />
                        <span>{bishops[0].location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Other Bishops */}
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
                Assistant Bishops
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Supporting our ministry and serving our congregation
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {bishops.slice(1).map((bishop) => (
                <motion.div
                  key={bishop.id}
                  variants={cardVariants}
                  whileHover={{ y: -10 }}
                  className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={bishop.image}
                      alt={bishop.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold-500 text-white px-2 py-1 rounded text-sm font-semibold">
                        {bishop.title}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy-900 mb-3">
                      {bishop.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {bishop.description}
                    </p>
                    
                    <div className="space-y-2">
                      {bishop.email && (
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <FiMail className="w-4 h-4 text-gold-500" />
                          <span>{bishop.email}</span>
                        </div>
                      )}
                      {bishop.location && (
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <FiMapPin className="w-4 h-4 text-gold-500" />
                          <span>{bishop.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Deacons */}
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
                Deacons
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Serving our congregation with dedication and practical support
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {deacons.map((deacon) => (
                <motion.div
                  key={deacon.id}
                  variants={cardVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="relative h-48">
                    <Image
                      src={deacon.image}
                      alt={deacon.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-2 py-1 rounded text-sm font-semibold">
                        {deacon.title}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-navy-900 mb-3">
                      {deacon.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {deacon.description}
                    </p>
                    
                    {deacon.email && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <FiMail className="w-4 h-4 text-primary-600" />
                        <span>{deacon.email}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Deaconesses */}
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
                Deaconesses
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Providing spiritual care and support to women and families
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {deaconesses.map((deaconess) => (
                <motion.div
                  key={deaconess.id}
                  variants={cardVariants}
                  whileHover={{ y: -10 }}
                  className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={deaconess.image}
                      alt={deaconess.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold-500 text-white px-2 py-1 rounded text-sm font-semibold">
                        {deaconess.title}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-navy-900 mb-3">
                      {deaconess.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {deaconess.description}
                    </p>
                    
                    {deaconess.email && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <FiMail className="w-4 h-4 text-gold-500" />
                        <span>{deaconess.email}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
                Connect With Our Leadership
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Our clergy and leadership team is here to serve you. Reach out for prayer, guidance, or to learn more about our ministry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200">
                  Request Prayer
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

export default ClergyPage; 