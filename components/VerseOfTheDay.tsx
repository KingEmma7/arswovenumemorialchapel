import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiBookOpen, FiArrowRight, FiCalendar } from 'react-icons/fi';
import { getEntryForDate } from '@/lib/pocketCalendar2025';
import { fetchVerse, expandBookName, formatVerseWithSuperscripts } from '@/lib/bibleApi';

const VerseOfTheDay: React.FC = () => {
  const [todayVerse, setTodayVerse] = useState<string>('');
  const [todayReference, setTodayReference] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTodayVerse = async () => {
      const today = new Date();
      const entry = getEntryForDate(today);
      
      if (entry && entry.references.length > 0) {
                  try {
            const verseText = await fetchVerse(entry.references[0], 'eng');
            const formattedVerse = formatVerseWithSuperscripts(verseText);
            setTodayVerse(formattedVerse);
            setTodayReference(expandBookName(entry.references[0]));
          } catch (error) {
          console.error('Error loading verse:', error);
          const fallbackVerse = formatVerseWithSuperscripts('For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.');
          setTodayVerse(fallbackVerse);
          setTodayReference('John 3:16');
        }
      } else {
        // If no entry found for today, show a default encouraging verse
        const fallbackVerse = formatVerseWithSuperscripts('For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.');
        setTodayVerse(fallbackVerse);
        setTodayReference('John 3:16');
      }
      setLoading(false);
    };

    loadTodayVerse();
  }, []);

  return (
    <section className="section-padding bg-gradient-to-br from-gold-50 to-primary-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gold-500 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary-600 rounded-full translate-x-12 translate-y-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-navy-900 rounded-full"></div>
      </div>

      <div className="container-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-gold-500 text-white px-6 py-3 rounded-full mb-6"
          >
            <FiBookOpen className="w-5 h-5" />
            <span className="font-semibold">Verse of the Day</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-navy-900 mb-6"
          >
            Today's Scripture
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Verse Display */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              {loading ? (
                <div className="flex items-center justify-center h-32">
                  <div className="w-8 h-8 border-4 border-gold-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                      <FiBookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gold-600 font-semibold">{todayReference}</p>
                      <p className="text-gray-500 text-sm">Today's Reading</p>
                    </div>
                  </div>
                  
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-xl text-gray-600 leading-relaxed font-normal text-center"
                    dangerouslySetInnerHTML={{ __html: `"${todayVerse}"` }}
                  />
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-6 pt-6 border-t border-gray-200"
                  >
                    <p className="text-gray-600">
                      Start your day with God's word and find strength for your journey.
                    </p>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>

          {/* Pocket Calendar CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-navy-900 to-navy-800 text-white rounded-2xl p-8 shadow-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiCalendar className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold mb-4">
                  Pocket Calendar
                </h3>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Access daily scripture readings for the entire year. Navigate through dates, 
                  switch between English, Akan, and Ewe translations, and deepen your spiritual journey.
                </p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Link href="/pocket-calendar">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center gap-3 mx-auto"
                    >
                      Explore Daily Readings
                      <FiArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VerseOfTheDay; 