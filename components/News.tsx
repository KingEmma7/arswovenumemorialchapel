import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi';

const News: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="section-padding bg-white"
    >
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Latest News
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with the latest updates and events from our church family
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-full">
              <Image
                src="/images/news/wmc-227.png"
                alt="ARS Women Council Celebration"
                fill
                className="object-cover object-center"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-church-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Events
                </span>
              </div>
            </div>
            
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                A.R.S WOMEN COUNCIL CELEBRATION - 67th Anniversary
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Celebrating the 67th Anniversary of the ARS Women's Council at the Abelemkpe Branch. A momentous occasion marking decades of dedicated service, spiritual growth, and community leadership.
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-2">
                  <FiUser className="w-4 h-4" />
                  <span>ARS Women's Council</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-4 h-4" />
                  <span>July 25th, 2025</span>
                </div>
              </div>
              
              <Link
                href="/news"
                className="inline-flex items-center text-church-red hover:text-red-800 font-semibold transition-colors duration-200"
              >
                Read More News
                <FiArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default News; 