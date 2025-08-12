import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiArrowLeft, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface NewsArticle {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  images: string[];
}

const OutreachDonationPage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Outreach donation article data
  const article: NewsArticle = {
    id: 3,
    title: "WMC Hospital Outreach Donation Program",
    content: `
      <p class="mb-6">The Wovenu Memorial Chapel (WMC) community demonstrated its commitment to serving the broader community through a significant hospital donation program. This outreach initiative reflects our church's dedication to living out the gospel through acts of compassion and service.</p>
      
      <p class="mb-6">The donation program, organized by our Community Service Ministry, focused on supporting local hospitals with essential medical supplies and equipment. This initiative was born from our understanding that true ministry extends beyond our church walls and reaches into the community where people are in need.</p>
      
      <p class="mb-6">Key aspects of the hospital donation program included:</p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>Food supplies and donations to local hospitals</li>
        <li>Toiletries and other essentials for patients</li>
        <li>Prayer and support for patients and their families</li>
        <li>Partnership with hospital administration to identify specific needs</li>
      </ul>
      
      <p class="mb-6">The program was made possible through the generous contributions of our church members, who gave both financially and through their time and talents. This collective effort demonstrates the power of unity in serving others and making a positive impact in our community.</p>
      
      <p class="mb-6">Hospital administrators expressed their gratitude for the donations, noting that such support helps them provide better care to patients, especially those from disadvantaged backgrounds. The food supplies and toiletries donated will directly benefit countless patients and their families.</p>
      
      <p class="mb-6">This outreach program aligns with our church's mission to be a light in the community and to demonstrate God's love through practical acts of service. It serves as a reminder that our faith calls us to care for the physical, emotional, and spiritual needs of those around us.</p>
      
      <p class="mb-6">As we continue to grow in our faith, we remain committed to expanding our community outreach programs and finding new ways to serve and support those in need. This hospital donation program is just one example of how we can make a meaningful difference in our community through organized, compassionate action.</p>
    `,
    author: "Community Service Ministry",
    date: "July 20th, 2025",
    category: "Community Service",
    images: [
      "/images/news/outreach.jpeg",
      "/images/news/outreach14.jpeg",
      "/images/news/outreach16.jpeg",
      "/images/news/outreach32.jpeg",
      "/images/news/outreach44.jpeg",
      "/images/news/outreach98.jpeg"
    ]
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % article.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + article.images.length) % article.images.length);
  };

  return (
    <>
      <Head>
        <title>{article.title} - Apostles Revelation Society</title>
        <meta name="description" content="WMC's hospital outreach donation program demonstrates our commitment to community service and compassionate care for those in need." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        {/* Article Header */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-navy-900 to-navy-800 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={article.images[0]}
              alt={article.title}
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="container-width relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <Link
                href="/news"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors duration-200"
              >
                <FiArrowLeft className="mr-2 w-4 h-4" />
                Back to News
              </Link>
              
              <div className="mb-4">
                <span className="bg-church-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {article.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {article.title}
              </h1>
              
              <div className="flex items-center gap-6 text-lg text-gray-300">
                <div className="flex items-center gap-2">
                  <FiUser className="w-5 h-5" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-5 h-5" />
                  <span>{article.date}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="section-padding">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <h3 className="text-xl font-bold text-navy-900 mb-4">Program Details</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="text-gray-600 text-sm">Date:</span>
                      <p className="font-semibold">{article.date}</p>
                    </div>
                    <div>
                      <span className="text-gray-600 text-sm">Location:</span>
                      <p className="font-semibold">Local Hospitals</p>
                    </div>
                    <div>
                      <span className="text-gray-600 text-sm">Category:</span>
                      <p className="font-semibold">{article.category}</p>
                    </div>
                    <div>
                      <span className="text-gray-600 text-sm">Organizer:</span>
                      <p className="font-semibold">Community Service Ministry</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Outreach Gallery
              </h2>
              <p className="text-gray-600">
                Capturing the moments of service and compassion during our hospital donation program
              </p>
            </motion.div>

            {/* Main Image Display */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative mb-8"
            >
              <div className="relative h-[600px] md:h-[700px] rounded-xl overflow-hidden">
                <Image
                  src={article.images[currentImageIndex]}
                  alt={`Gallery image ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                />
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200"
                >
                  <FiChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200"
                >
                  <FiChevronRight className="w-6 h-6" />
                </button>
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                  {currentImageIndex + 1} / {article.images.length}
                </div>
              </div>
            </motion.div>

            {/* Thumbnail Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            >
              {article.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-32 rounded-lg overflow-hidden transition-all duration-200 ${
                    currentImageIndex === index 
                      ? 'ring-4 ring-church-red' 
                      : 'hover:ring-2 ring-gray-300'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default OutreachDonationPage; 