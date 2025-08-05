import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiMapPin, FiUsers, FiMusic, FiHeart } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Harvest2025Page: React.FC = () => {
  const harvestImages = [
    { src: '/images/news/harvest1.jpeg', alt: 'Harvest celebration gathering' },
    { src: '/images/news/harvest2.jpeg', alt: 'Community parade during harvest' },
    { src: '/images/news/harvest4.jpeg', alt: 'Produce auction at harvest' },
    { src: '/images/news/harvest21.jpeg', alt: 'Harvest singing and worship' },
    { src: '/images/news/harvest29.jpeg', alt: 'Harvest community celebration' },
    { src: '/images/news/harvest33.jpeg', alt: 'Harvest produce display' },
    { src: '/images/news/harvest43.jpeg', alt: 'Harvest auction proceeds' },
    { src: '/images/news/harvest55.jpeg', alt: 'Harvest community gathering' },
    { src: '/images/news/harvest777.jpeg', alt: 'Harvest celebration worship' },
    { src: '/images/news/harvest98.jpeg', alt: 'Harvest community parade' }
  ];

  return (
    <>
      <Head>
        <title>Annual Harvest Celebration 2025 - Apostles Revelation Society</title>
        <meta name="description" content="Celebrating our Annual Harvest Service with singing, community parading, and auctioning produce to raise funds for the church. A joyous celebration of God's blessings." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-navy-900 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/news/harvest1.jpeg"
              alt="Harvest Celebration 2025"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent" />
          </div>
          <div className="container-width relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-3 bg-gold-500 text-white px-6 py-3 rounded-full mb-6">
                <FiCalendar className="w-5 h-5" />
                <span className="font-semibold">Annual Harvest Service</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Annual Harvest Celebration 2025
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                A joyous celebration of God's blessings through singing, community parading, and auctioning produce to raise funds for the church.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <FiUser className="w-4 h-4 text-gold-400" />
                  <span>Harvest Ministry Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-4 h-4 text-gold-400" />
                  <span>October 5th, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMapPin className="w-4 h-4 text-gold-400" />
                  <span>Wovenu Memorial Chapel</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="section-padding">
          <div className="container-width max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The Annual Harvest Service at Wovenu Memorial Chapel is one of the most anticipated events of the year, bringing together our entire community in a celebration of God's faithfulness and provision. This year's celebration was particularly special, as we witnessed the power of unity, worship, and community service.
                </p>
              </div>

              {/* Main Content Sections */}
              <div className="space-y-12">
                {/* Singing and Worship Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-gold-500 pl-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <FiMusic className="w-6 h-6 text-gold-500" />
                    <h2 className="text-3xl font-bold text-navy-900">Singing and Worship</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The celebration began with powerful worship sessions led by our various choirs - the Senior Choir, Junior Choir, and Brass Band. The air was filled with melodious praises as we sang traditional harvest hymns and contemporary worship songs. The congregation joined in wholeheartedly, creating an atmosphere of joy and thanksgiving that could be felt throughout the entire community.
                  </p>
                </motion.div>

                {/* Community Parade Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-primary-500 pl-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <FiUsers className="w-6 h-6 text-primary-500" />
                    <h2 className="text-3xl font-bold text-navy-900">Community Parade</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Following the worship service, our church members, dressed in their finest traditional attire, paraded through the community. This colorful procession, accompanied by the Brass Band, was a beautiful display of our unity and a powerful witness to our neighbors. The parade route took us through the main streets of Musuku, allowing us to share the joy of our harvest celebration with the wider community.
                  </p>
                </motion.div>

                {/* Produce Auction Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-green-500 pl-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <FiHeart className="w-6 h-6 text-green-500" />
                    <h2 className="text-3xl font-bold text-navy-900">Produce Auction</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The highlight of the celebration was the auctioning of produce brought by church members. From fresh vegetables and fruits to grains and other agricultural products, each item was carefully presented and auctioned off to the highest bidder. This unique fundraising method not only raised significant funds for church projects but also fostered a spirit of generosity and community support. The auction was conducted with much enthusiasm and friendly competition, with all proceeds going towards church development and community outreach programs.
                  </p>
                </motion.div>

                {/* Impact and Results */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gold-50 p-8 rounded-xl"
                >
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">Celebration Impact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gold-600 mb-2">500+</div>
                      <div className="text-gray-600">Community Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gold-600 mb-2">₵50,000+</div>
                      <div className="text-gray-600">Funds Raised</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gold-600 mb-2">50+</div>
                      <div className="text-gray-600">Produce Items</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-navy-900 mb-4">Harvest Celebration Gallery</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Capturing the joy, unity, and beautiful moments of our Annual Harvest Celebration 2025.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {harvestImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-navy-900 text-white">
          <div className="container-width text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Join Us Next Year!</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Experience the joy of our Annual Harvest Celebration and be part of this beautiful tradition that brings our community together in worship and thanksgiving.
              </p>
              <button className="btn-primary">
                Learn More About Our Events
              </button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Harvest2025Page; 