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
      title: "Upcoming Passover Celebration - Community Gathering",
      excerpt: "Join us for our annual Passover celebration as we commemorate this sacred time with fellowship, traditional foods, and meaningful worship. All members and visitors are welcome.",
      author: "Pastor John Mensah",
      date: "January 20, 2024",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Events"
    },
    {
      id: 2,
      title: "New Children's Fellowship Program Launches",
      excerpt: "We're excited to announce the launch of our enhanced Children's Fellowship program, featuring age-appropriate Bible studies, creative activities, and character-building lessons.",
      author: "Sister Mary Asante",
      date: "January 18, 2024",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Ministries"
    },
    {
      id: 3,
      title: "Community Food Pantry Expands Service Hours",
      excerpt: "Due to increased community need, our Food Pantry ministry is expanding service hours. We're also seeking volunteers to help serve our neighbors in need.",
      author: "Elder Michael Asante",
      date: "January 15, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Community Service"
    },
    {
      id: 4,
      title: "Bible Study Series: Walking in Faith",
      excerpt: "Starting this Wednesday, join us for a 6-week Bible study series exploring what it means to walk by faith, not by sight. Study materials will be provided.",
      author: "Pastor Sarah Williams",
      date: "January 12, 2024",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Teaching"
    },
    {
      id: 5,
      title: "Youth Ministry Organizes Community Clean-Up",
      excerpt: "Our Ascent Youth ministry is organizing a community clean-up event to serve our neighborhood. Join us in making a positive impact in our local area.",
      author: "Brother Samuel Tetteh",
      date: "January 10, 2024",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Youth"
    },
    {
      id: 6,
      title: "Sabbath Service Schedule Updates",
      excerpt: "Please note the updated Sabbath service schedule for the coming month. We've added an additional early morning prayer session for those who wish to participate.",
      author: "Church Administration",
      date: "January 8, 2024",
      readTime: "1 min read",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Announcements"
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
        <title>WMC News - Apostles Revelations Society</title>
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
              src="/images/pages/news-hero.jpg"
              alt="WMC News"
              fill
              className="object-cover opacity-20"
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
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-navy-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <FiUser className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FiClock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <FiCalendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      
                      <Link
                        href={`/news/${post.id}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
                      >
                        Read More
                        <FiArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
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