import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiCalendar, FiChevronLeft, FiChevronRight, FiBookOpen } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getEntryForDate, PocketCalendarEntry } from '@/lib/pocketCalendar2025';
import { fetchVerse, fetchVerseWithInfo, LangCode, VerseResult, expandBookName, formatVerseWithSuperscripts } from '@/lib/bibleApi';

const languages = [
  { code: 'eng' as const, label: 'English' },
  { code: 'aka' as const, label: 'Akan (Twi)' },
  { code: 'ewe' as const, label: 'Ewe' },
];

const PocketCalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [entry, setEntry] = useState<PocketCalendarEntry | undefined>();
  const [verses, setVerses] = useState<string>('');
  const [lang, setLang] = useState<LangCode>('eng');
  const [loading, setLoading] = useState(false);
  const [translationError, setTranslationError] = useState<string>('');

  // update entry when date changes
  useEffect(() => {
    const e = getEntryForDate(selectedDate);
    setEntry(e);
  }, [selectedDate]);

  // fetch verse when entry or lang changes
  useEffect(() => {
    if (!entry) {
      setVerses('No scripture available for this date');
      setTranslationError('');
      return;
    }
    (async () => {
      setLoading(true);
      setTranslationError('');
      
      try {
        const results = await Promise.all(
          entry.references.map((ref) => fetchVerseWithInfo(ref, lang))
        );
        
        const texts = results.map(result => formatVerseWithSuperscripts(result.text));
        const hasErrors = results.some(result => !result.isTranslated);
        
        if (hasErrors && lang !== 'eng') {
          const errorMessages = results
            .filter(result => result.errorMessage)
            .map(result => result.errorMessage);
          
          if (errorMessages.length > 0) {
            setTranslationError(errorMessages[0] || ''); // Show first error message
          }
        }
        
        setVerses(texts.join('\n\n'));
      } catch (error) {
        console.error('Error fetching verses:', error);
        setVerses('Unable to load verses. Please check your internet connection.');
        setTranslationError('');
      }
      
      setLoading(false);
    })();
  }, [entry, lang]);

  function changeDate(delta: number) {
    const d = new Date(selectedDate);
    d.setDate(d.getDate() + delta);
    setSelectedDate(d);
  }

  return (
    <>
      <Head>
        <title>Pocket Calendar - Apostles Revelation Society</title>
        <meta name="description" content="Access daily scripture readings from the Apostles Revelation Society pocket calendar. Available in English, Akan, and Ewe." />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        {/* Hero Section with wovenu.png */}
        <section className="relative pt-24 pb-16 bg-navy-900 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/clergy/wovenu.jpg"
              alt="Wovenu Memorial Chapel"
              fill
              className="object-cover object-center opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent" />
          </div>
          <div className="container-width relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiBookOpen className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Pocket Calendar</h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Daily scripture readings for spiritual growth and reflection. Available in English, Akan, and Ewe.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding">
          <div className="container-width max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-100"
            >
              {/* Controls */}
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
                {/* Date Navigation */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => changeDate(-1)}
                    className="p-3 bg-gray-100 hover:bg-gold-500 hover:text-white rounded-full transition-all duration-200 shadow-sm"
                    aria-label="Previous Day"
                  >
                    <FiChevronLeft className="w-5 h-5" />
                  </button>
                  <input
                    type="date"
                    className="border-2 border-gray-200 rounded-xl px-4 py-3 text-navy-900 font-semibold focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                    value={selectedDate.toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(new Date(e.target.value))}
                  />
                  <button
                    onClick={() => changeDate(1)}
                    className="p-3 bg-gray-100 hover:bg-gold-500 hover:text-white rounded-full transition-all duration-200 shadow-sm"
                    aria-label="Next Day"
                  >
                    <FiChevronRight className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Language Tabs */}
                <div className="flex items-center bg-gray-100 rounded-2xl p-1 shadow-inner">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => setLang(l.code)}
                      className={`px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                        lang === l.code
                          ? 'bg-gold-500 text-white shadow-md transform scale-105'
                          : 'text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Display */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-2">
                  {selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </h2>
                {entry?.note && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-block bg-gold-100 text-gold-800 px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    {entry.note}
                  </motion.div>
                )}
              </div>

              {/* Scripture Display */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 min-h-[300px] flex items-center justify-center">
                {loading ? (
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-12 h-12 border-4 border-gold-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-gray-600">Loading scripture...</p>
                  </div>
                ) : (
                  entry && entry.references.length > 0 ? (
                    <motion.div
                      key={`${verses}-${lang}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-full max-w-4xl"
                    >
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center gap-2 bg-navy-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          <FiCalendar className="w-4 h-4" />
                          {entry.references.map(ref => expandBookName(ref)).join(' • ')}
                        </div>
                      </div>
                      
                      <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed font-sans text-center">
                        {verses.split('\n\n').map((verse, i) => (
                          <motion.p 
                            key={i} 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.2 }}
                            className="mb-6 last:mb-0"
                            dangerouslySetInnerHTML={{ __html: `"${verse}"` }}
                          />
                        ))}
                      </blockquote>
                      
                      <div className="text-center mt-8">
                        <p className="text-gray-600 text-sm">
                          Translation: <span className="font-semibold">
                            {languages.find(l => l.code === lang)?.label}
                          </span>
                        </p>
                        
                        {translationError && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded-lg"
                          >
                            <p className="text-yellow-800 text-sm">
                              <span className="font-medium">⚠️ Translation Note:</span> {translationError}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FiCalendar className="w-8 h-8 text-gray-500" />
                      </div>
                      <p className="text-gray-500 text-lg">No scripture entry for this date.</p>
                      <p className="text-gray-400 text-sm mt-2">Please select a different date.</p>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PocketCalendarPage;
