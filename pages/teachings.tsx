import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiBookOpen, FiUsers, FiCalendar, FiArrowRight, FiPlay, FiDownload } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Teaching {
  id: number;
  title: string;
  description: string;
  teacher: string;
  date: string;
  duration: string;
  image: string;
  category: string;
  type: 'video' | 'audio' | 'document';
}

const TeachingsPage: React.FC = () => {
  const teachings: Teaching[] = [
    {
      id: 1,
      title: "Walking in Faith: A Study of Hebrews 11",
      description: "Explore the lives of biblical heroes and learn how to apply their faith principles to our daily lives.",
      teacher: "Bishop Veliane Wovenu Goka",
      date: "July 3, 2022",
      duration: "22 min",
      image: "/images/pages/teachings-hero.jpg",
      category: "Bible Study",
      type: "video"
    },
    {
      id: 2,
      title: "The Fruit of the Spirit: Living in Love",
      description: "Understanding and cultivating the fruit of the Spirit in our relationships and daily interactions.",
      teacher: "Bishop Sinametor Wovenu Tagbor",
      date: "January 8, 2024",
      duration: "38 min",
      image: "/images/pages/teachings-hero.jpg",
      category: "Spiritual Growth",
      type: "video"
    },
    {
      id: 3,
      title: "Prayer: Our Communication with God",
      description: "Deepen your prayer life through biblical principles and practical application.",
      teacher: "Elder Reuben Opata",
      date: "January 1, 2024",
      duration: "42 min",
      image: "/images/pages/teachings-hero.jpg",
      category: "Prayer",
      type: "audio"
    }
  ];

  const categories = ["All", "Bible Study", "Spiritual Growth", "Prayer", "Family", "Leadership"];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <>
      <Head>
        <title>Teachings - Apostles Revelation Society</title>
        <meta name="description" content="Explore our collection of biblical teachings, Bible studies, and spiritual resources. Grow in your faith through our comprehensive teaching ministry." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-navy-900 to-navy-800 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/pages/teachings-hero.jpg"
              alt="Biblical Teachings"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="container-width relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Biblical Teachings
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Grow in your faith through our comprehensive collection of biblical teachings and spiritual resources
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-8 bg-white border-b">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                    category === "All" 
                      ? "bg-gold-500 text-white" 
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Teaching */}
        <section className="section-padding">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                Featured Teaching
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our latest and most impactful teachings to help you grow spiritually
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <iframe 
                      src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F37Musukuwovenumemorialchapel%2Fvideos%2F760058415010978%2F&show_text=false&width=560&t=0" 
                      width="100%" 
                      height="100%" 
                      style={{border: 'none', overflow: 'hidden'}} 
                      scrolling="no" 
                      frameBorder="0" 
                      allowFullScreen={true} 
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12">
                  <div className="mb-4">
                    <span className="bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {teachings[0].category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-navy-900 mb-4">
                    {teachings[0].title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {teachings[0].description}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <FiUsers className="w-4 h-4" />
                      <span>{teachings[0].teacher}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiCalendar className="w-4 h-4" />
                      <span>{teachings[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiPlay className="w-4 h-4" />
                      <span>{teachings[0].duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href="https://web.facebook.com/37Musukuwovenumemorialchapel/videos/760058415010978/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
                    >
                      <FiPlay className="w-4 h-4" />
                      Watch on Facebook
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* All Teachings */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                All Teachings
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse our complete collection of biblical teachings and spiritual resources
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {teachings.slice(1).map((teaching) => (
                <motion.div
                  key={teaching.id}
                  variants={cardVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="relative h-48">
                    <Image
                      src={teaching.image}
                      alt={teaching.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold-500 text-white px-2 py-1 rounded text-sm font-semibold">
                        {teaching.category}
                      </span>
                    </div>
                    
                    <div className="absolute top-4 right-4">
                      <span className="bg-navy-900/80 text-white px-2 py-1 rounded text-sm">
                        {teaching.duration}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy-900 mb-3 line-clamp-2">
                      {teaching.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {teaching.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <FiUsers className="w-4 h-4" />
                        <span>{teaching.teacher}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiCalendar className="w-4 h-4" />
                        <span>{teaching.date}</span>
                      </div>
                    </div>
                    
                    <Link
                      href={`/teachings/${teaching.id}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
                    >
                      Watch Teaching
                      <FiArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Load More Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <button className="btn-primary">
                Load More Teachings
              </button>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-700">
          <div className="container-width text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Grow in Your Faith
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Subscribe to our teaching series and receive new content directly in your inbox
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
                <button className="bg-gold-500 hover:bg-gold-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TeachingsPage; 