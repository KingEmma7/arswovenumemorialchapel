import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiUsers, FiHeart, FiStar, FiArrowRight } from 'react-icons/fi';

interface Ministry {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  href: string;
}

const Ministries: React.FC = () => {
  const ministries: Ministry[] = [
    {
      id: 1,
      title: "Children's Fellowship",
      description: "Nurturing the faith of our youngest members through age-appropriate Bible studies and activities.",
      image: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <FiUsers className="w-6 h-6" />,
      href: "/childrens-fellowship"
    },
    {
      id: 2,
      title: "Women's Fellowship",
      description: "A supportive community where women grow in faith, build relationships, and serve together.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <FiHeart className="w-6 h-6" />,
      href: "/womens-fellowship"
    },
    {
      id: 3,
      title: "Men's Fellowship",
      description: "Strengthening men in their faith journey through brotherhood, accountability, and spiritual growth.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <FiStar className="w-6 h-6" />,
      href: "/mens-fellowship"
    },
    {
      id: 4,
      title: "Senior Choir",
      description: "Lifting voices in praise and worship, creating beautiful music that glorifies God.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <FiHeart className="w-6 h-6" />,
      href: "/senior-choir"
    }
  ];

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="ministries" className="section-padding bg-gray-50">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Church Groups
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join one of our fellowship groups to grow in faith, build relationships, and serve together in community.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {ministries.map((ministry) => (
            <motion.div
              key={ministry.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={ministry.image}
                  alt={ministry.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  {ministry.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {ministry.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {ministry.description}
                </p>
                <Link
                  href={ministry.href}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
                >
                  Learn More
                  <FiArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Ministries; 