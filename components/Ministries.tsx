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
      title: "Senior Choir",
      description: "Lifting voices in praise and worship, creating beautiful music that glorifies God.",
      image: "/images/groups/seniorchoir.jpg",
      icon: <FiHeart className="w-6 h-6" />,
      href: "/senior-choir"
    },
    {
      id: 2,
      title: "Brass Band",
      description: "A group of musicians who play brass instruments and lead the church in worship.",
      image: "/images/groups/brassband5.jpeg",
      icon: <FiStar className="w-6 h-6" />,
      href: "/brass-band"
    },
    {
      id: 3,
      title: "Junior Choir",
      description: "A youthful choir that sing passionate music to the glory of God.",
      image: "/images/groups/juniorchoir.jpg",
      icon: <FiUsers className="w-6 h-6" />,
      href: "/childrens-fellowship"
    },
    {
      id: 4,
      title: "Men's Fellowship",
      description: "A supportive community where men grow in faith, sing soulful 'borborbor' songs, and serve together.",
      image: "/images/groups/menfellowship.jpg",
      icon: <FiHeart className="w-6 h-6" />,
      href: "/womens-fellowship"
    },
 

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {ministries.map((ministry) => (
            <motion.div
              key={ministry.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={ministry.image}
                  alt={ministry.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  {ministry.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-600 mb-3">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/groups"
            className="btn-primary text-lg px-8 py-4 font-semibold tracking-wide"
          >
            View All Groups
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Ministries; 