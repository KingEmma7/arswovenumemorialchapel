import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi';
import { getHarvestCountdownData, formatCountdownText } from '@/lib/harvestCountdown';

const News: React.FC = () => {
  const [harvestData, setHarvestData] = useState(getHarvestCountdownData());

  // Update countdown data on component mount and potentially on interval
  useEffect(() => {
    setHarvestData(getHarvestCountdownData());
    
    // Update at midnight each day
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const timeUntilMidnight = tomorrow.getTime() - now.getTime();
    
    const timeoutId = setTimeout(() => {
      setHarvestData(getHarvestCountdownData());
      
      // Set up daily interval after first midnight
      const intervalId = setInterval(() => {
        setHarvestData(getHarvestCountdownData());
      }, 24 * 60 * 60 * 1000); // 24 hours
      
      return () => clearInterval(intervalId);
    }, timeUntilMidnight);
    
    return () => clearTimeout(timeoutId);
  }, []);

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
          <h2 className="text-4xl md:text-5xl font-bold text-primary-600 mb-6">
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
            <Link 
              href="/news/harvest-2025"
              className="relative h-80 lg:h-full group cursor-pointer"
            >
              <Image
                src={harvestData.image}
                alt={harvestData.title}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-gold-50 to-primary-50"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {harvestData.isPast ? 'Event Completed' : harvestData.isToday ? 'Today!' : 'Upcoming Event'}
                </span>
              </div>
              {!harvestData.isPast && harvestData.daysLeft > 0 && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {harvestData.daysLeft} {harvestData.daysLeft === 1 ? 'Day' : 'Days'} Left
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
            </Link>
            
            <div className="p-8 lg:p-12">
              <Link href="/news/harvest-2025" className="group">
                <h3 className="text-2xl md:text-3xl font-bold text-primary-600 mb-4 group-hover:text-red-700 transition-colors duration-200">
                  {harvestData.isPast ? harvestData.title : "Annual Harvest Celebration 2025"}
                </h3>
              </Link>
              {!harvestData.isPast && (
                <div className="mb-4">
                  <p className="text-lg font-semibold text-gold-600 italic">
                    "Celebrating God's Harvest, A Season of Blessings and Thanksgiving"
                  </p>
                </div>
              )}
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {formatCountdownText(harvestData.daysLeft, harvestData.isToday, harvestData.isPast)}
                {harvestData.isPast 
                  ? " Explore our celebration highlights and see how our community came together in thanksgiving."
                  : " Join us for singing, community parading, and auctioning produce to celebrate God's harvest."
                }
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-2">
                  <FiUser className="w-4 h-4" />
                  <span>Harvest Ministry Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-4 h-4" />
                  <span>October 5th, 2025</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/news/harvest-2025"
                  className="inline-flex items-center text-red-700 hover:text-red-800 font-semibold transition-colors duration-200"
                >
                  {harvestData.isPast ? 'View Celebration' : 'Learn More'}
                  <FiArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/news"
                  className="inline-flex items-center text-gray-600 hover:text-primary-600 font-semibold transition-colors duration-200"
                >
                  All News
                  <FiArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default News; 