import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiPlay, FiCalendar, FiUser } from 'react-icons/fi';

interface Sermon {
  id: number;
  title: string;
  speaker: string;
  date: string;
  image: string;
  description: string;
  duration: string;
}

const Sermons: React.FC = () => {
  const sermons: Sermon[] = [
    {
      id: 1,
      title: "Holiness is the key to victory",
      speaker: "Bishop Veliane Wovenu Goka",
      date: "Jan 15, 2024",
      image: "/images/clergy/Bishop-Veliane-6.jpeg",
      description: "Exploring how we can be a light in the darkness and shine God's love in our communities.",
      duration: "45 min"
    },
    {
      id: 2,
      title: "Victory in Sanctuary",
      speaker: "Bishop Sinametor Wovenu Tagbor",
        date: "Jan 08, 2024",
        image: "/images/clergy/bishop-sina2.jpeg",
      description: "Understanding God's victory and how it transforms our lives through sanctuary worship.",
      duration: "38 min"
    },
    {
      id: 3,
      title: "We Walk by Faith, Not by Sight",
      speaker: "Elder Hope Goka",
      date: "Jan 01, 2024",
      image: "/images/clergy/elder-hope.jpeg",
      description: "Living by faith in uncertain times and trusting God's plan for our lives.",
      duration: "42 min"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="sermons" className="section-padding bg-white">
      <div className="container-width">
        <div className="flex justify-between items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Sermons
            </h2>
            <p className="text-xl text-gray-600">
              Be encouraged and inspired by our latest messages
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="/sermons"
              className="btn-primary hidden sm:inline-block"
            >
              View All
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sermons.map((sermon) => (
            <motion.div
              key={sermon.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-64 group">
                <Image
                  src={sermon.image}
                  alt={sermon.title}
                  fill
                  className="object-cover group-hover:scale-105 object-top transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/60 transition-colors duration-300"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/20 backdrop-blur-sm border-2 border-white/50 rounded-full p-4 text-white hover:bg-gold-500/80 hover:border-gold-500 transition-all duration-300"
                  >
                    <FiPlay className="w-6 h-6 ml-1" />
                  </motion.button>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-navy-900/80 text-white px-2 py-1 rounded text-sm">
                  {sermon.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-3 line-clamp-2">
                  {sermon.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <FiUser className="w-4 h-4" />
                    <span>{sermon.speaker}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiCalendar className="w-4 h-4" />
                    <span>{sermon.date}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {sermon.description}
                </p>
                
                <Link
                  href={`/sermons/${sermon.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
                >
                  Watch Sermon
                  <FiPlay className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:hidden"
        >
          <Link href="/sermons" className="btn-primary">
            View All Sermons
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Sermons; 