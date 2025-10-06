import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getEntryForDate } from '@/lib/pocketCalendar2025';
import { fetchVerse, formatVerseWithSuperscripts } from '@/lib/bibleApi';

import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock, 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiYoutube,
  FiHome
} from 'react-icons/fi';

const Footer: React.FC = () => {
  const [todayVerse, setTodayVerse] = useState<string>('');
  const [todayReference, setTodayReference] = useState<string>('John 13:35');

  useEffect(() => {
    const loadTodayVerse = async () => {
      const today = new Date();
      const entry = getEntryForDate(today);
      
      if (entry && entry.references.length > 0) {
        try {
          const verseText = await fetchVerse(entry.references[0], 'eng');
          const formattedVerse = formatVerseWithSuperscripts(verseText);
          setTodayVerse(formattedVerse);
          setTodayReference(entry.references[0]);
        } catch (error) {
          console.error('Error loading footer verse:', error);
          const fallbackVerse = formatVerseWithSuperscripts('By this everyone will know that you are my disciples, if you love one another.');
          setTodayVerse(fallbackVerse);
          setTodayReference('John 13:35');
        }
      } else {
        // If no entry found for today, show a default encouraging verse
        const fallbackVerse = formatVerseWithSuperscripts('By this everyone will know that you are my disciples, if you love one another.');
        setTodayVerse(fallbackVerse);
        setTodayReference('John 13:35');
      }
    };

    loadTodayVerse();
  }, []);

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Sabbath Service', href: '/sabbath-service' },
    { name: 'Ministries', href: '/ministries' },
    { name: 'Events', href: '/events' },
    { name: 'Sermons', href: '/sermons' },
    { name: 'Contact', href: '/contact' }
  ];

  const ministries = [
    { name: 'Children\'s Fellowship', href: '/childrens-fellowship' },
    { name: 'Women\'s Fellowship', href: '/womens-fellowship' },
    { name: 'Men\'s Fellowship', href: '/mens-fellowship' },
    { name: 'Brass Band', href: '/brass-band' },
    { name: 'Senior Choir', href: '/senior-choir' },
    { name: 'Junior Choir', href: '/junior-choir' }
  ];

  const socialLinks = [
    { icon: <FiFacebook className="w-6 h-6" />, href: '#', label: 'Facebook' },
    { icon: <FiTwitter className="w-6 h-6" />, href: '#', label: 'Twitter' },
    { icon: <FiInstagram className="w-6 h-6" />, href: '#', label: 'Instagram' },
    { icon: <FiYoutube className="w-6 h-6" />, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-primary-600 text-white">
      {/* Main Footer Content */}
      <div className="section-padding border-b border-primary-500">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Church Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-2">
                <FiHome className="h-8 w-8 text-navy-900" />
                <div>
                  <div className="text-xs text-gray-300">The Church of</div>
                  <div className="font-bold text-lg">Apostles Revelation Society</div>
                  <div className="text-sm text-gray-300">Wovenu Memorial Chapel</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FiMapPin className="w-5 h-5 text-navy-900 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                      Asore Junction, <a href="/contact" className="hover:underline">Musuku</a><br />
                      Accra, Ghana<br />
                      00233
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <FiPhone className="w-5 h-5 text-navy-900" />
                  <span className="text-gray-300">+233 24 345 1929</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <FiMail className="w-5 h-5 text-navy-900" />
                  <span className="text-gray-300">info@wmc-ars.org</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-navy-900">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Ministries */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-navy-900">Groups</h3>
              <ul className="space-y-3">
                {ministries.map((ministry) => (
                  <li key={ministry.name}>
                    <Link
                      href={ministry.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {ministry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service Times & Connect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold mb-6 text-navy-900">Service Times</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <FiClock className="w-5 h-5 text-navy-900" />
                    <div>
                      <p className="font-semibold">Sabbath Service</p>
                      <p className="text-gray-300 text-sm">Sunday 9:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiClock className="w-5 h-5 text-navy-900" />
                    <div>
                      <p className="font-semibold">Bible Study</p>
                      <p className="text-gray-300 text-sm">Wednesday 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-navy-900">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-primary-500 hover:bg-navy-900 p-3 rounded-full transition-colors duration-200"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-6"
      >
        <div className="container-width">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300">
               &copy; {new Date().getFullYear()} Apostles Revelation Society - Wovenu Memorial Chapel. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-6 pt-6 border-t border-primary-500"
          >
            <p 
              className="text-navy-900 font-semibold italic font-sans"
              dangerouslySetInnerHTML={{ __html: `"${'By this everyone will know that you are my disciples, if you love one another.'}"` }}
            />
            <p className="text-gray-400 text-sm mt-2">{ 'John 13:35'}</p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer; 