import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiArrowRight, FiClock } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface NewsPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const NewsPage: React.FC = () => {
  const newsData: NewsPost[] = [
    {
      id: 1,
      title: "A.R.S WOMEN COUNCIL CELEBRATION - 67th Anniversary",
      excerpt: "Celebrating the 67th Anniversary of the ARS Women's Council at the Abelemkpe Branch. A momentous occasion marking decades of dedicated service, spiritual growth, and community leadership.",
      author: "ARS Women's Council",
      date: "July 25th, 2025",
      readTime: "5 min read",
      image: "/images/news/wmc-227.png",
      category: "Events"
    },
    {
      id: 2,
      title: "Annual Harvest Celebration 2025",
      excerpt: "A joyous celebration of God's blessings through singing, community parading, and auctioning produce to raise funds for the church. Experience the unity and thanksgiving of our harvest tradition.",
      author: "Harvest Ministry Team",
      date: "October 5th, 2025",
      readTime: "5 min read",
      image: "/images/news/harvest1.jpeg",
      category: "Events"
    },
    {
      id: 3,
      title: "WMC Hospital Outreach Donation Program",
      excerpt: "WMC's commitment to serving our community through hospital donation programs and charitable activities. Demonstrating God's love through practical acts of service.",
      author: "Community Service Ministry",
      date: "July 20th, 2025",
      readTime: "4 min read",
      image: "/images/news/outreach.jpeg",
      category: "Community Service"
    },
    {
      id: 4,
      title: "New Teaching Series: Spiritual Growth",
      excerpt: "Join us for our new teaching series focused on spiritual growth and personal development in Christ.",
      author: "Teaching Ministry",
      date: "July 10th, 2025",
      readTime: "6 min read",
      image: "/images/news/wmc-40.png",
      category: "Teaching"
    },
    {
      id: 5,
      title: "Men's Fellowship Meeting",
      excerpt: "Monthly gathering of our men's fellowship group for prayer, study, and fellowship.",
      author: "Men's Fellowship",
      date: "July 5th, 2025",
      readTime: "2 min read",
      image: "/images/clergy/wovenu.jpg",
      category: "Ministries"
    },
    {
      id: 6,
      title: "Choir Practice Schedule Update",
      excerpt: "Updated practice schedules for both Senior and Junior choirs with new repertoire preparation.",
      author: "Music Ministry",
      date: "July 1st, 2025",
      readTime: "3 min read",
      image: "/images/groups/juniorchoir.jpg",
      category: "Ministries"
    }
  ];

  const categories = ["All", "Events", "Ministries", "Community Service", "Teaching", "Youth", "Announcements"];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
        <title>WMC News - Apostles Revelation Society</title>
        <meta name="description" content="Stay updated with the latest news, events, and announcements from Wovenu Memorial Chapel. Read about our ministries, community services, and spiritual growth opportunities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-navy-900 to-navy-800 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/news/wmc-38.png"
              alt="WMC News"
              fill
              className="object-cover opacity-20 object-top"
            />
          </div>
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                WMC News
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Stay connected with the latest updates, events, and testimonies from our church family
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

        {/* News Posts */}
        <section className="section-padding">
          <div className="container-width">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {newsData.map((post) => (
                <motion.article
                  key={post.id}
                  variants={cardVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover object-[25%_35%]"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-church-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <FiUser className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiCalendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <Link
                      href={
                        post.id === 2 ? '/news/harvest-2025' : 
                        post.id === 3 ? '/news/outreach-donation' : 
                        `/news/${post.id}`
                      }
                      className="inline-flex items-center text-church-red hover:text-red-800 font-semibold transition-colors duration-200"
                    >
                      {post.id === 2 || post.id === 3 ? 'Read Full Article' : 'Read More'}
                      <FiArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
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
                Load More Articles
              </button>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-padding bg-primary-600 text-white"
        >
          <div className="container-width text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news, events, and spiritual encouragement directly in your inbox.
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
          </div>
        </motion.section>

        <Footer />
      </div>
    </>
  );
};

export default NewsPage; 