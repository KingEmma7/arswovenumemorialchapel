import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiArrowLeft, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface NewsArticle {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  images: string[];
}

const NewsArticlePage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get the article ID from the URL
  const router = useRouter();
  const { id } = router.query;

  // Mock data for different articles
  const articles: { [key: string]: NewsArticle } = {
    "1": {
      id: 1,
      title: "A.R.S WOMEN COUNCIL CELEBRATION - 67th Anniversary",
      content: `
        <p class="mb-6">The 67th Anniversary of the ARS Women's Council at the Abelemkpe Branch was a momentous occasion that brought together generations of faithful women who have dedicated their lives to serving God and their community.</p>
        
        <p class="mb-6">The celebration, held on July 25th, 2025, marked decades of dedicated service, spiritual growth, and community leadership. The event was attended by hundreds of women from various branches, all coming together to commemorate this significant milestone in the history of the Apostles Revelation Society.</p>
        
        <p class="mb-6">The day began with a special morning prayer service, followed by a series of inspiring testimonies from long-standing members who shared their experiences of faith, perseverance, and the transformative power of God's love in their lives.</p>
        
        <p class="mb-6">Key highlights of the celebration included:</p>
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li>Special recognition of founding members and their contributions</li>
          <li>Presentation of awards to outstanding women leaders</li>
          <li>Inspirational messages from church leaders</li>
          <li>Cultural performances showcasing the rich heritage of the church</li>
          <li>Community service initiatives and future plans</li>
        </ul>
        
        <p class="mb-6">The Women's Council has been instrumental in fostering spiritual growth, providing support to families, and organizing community outreach programs. Their dedication to serving others and spreading the gospel has made a lasting impact on countless lives.</p>
        
        <p class="mb-6">As we look forward to the future, the ARS Women's Council continues to be a beacon of hope and strength, inspiring the next generation of women to walk in faith and serve with love.</p>
      `,
      author: "ARS Women's Council",
      date: "July 25th, 2025",
      category: "Events",
      images: [
        "/images/news/wmc-40.png",
        "/images/news/wmc-14.png",
        "/images/news/wmc-7.png",
        "/images/news/wmc-4.png",
        "/images/news/wmc-6.png",
        "/images/news/wmc-38.png",
        "/images/news/wmc-36.png",
        "/images/news/wmc-8.png",
        "/images/news/wmc-60.png",
        "/images/news/wmc-59.png",
        "/images/news/wmc-65.png",
        "/images/news/wmc-56.png",
        "/images/news/wmc-54.png"
      ]
    },
    "4": {
      id: 4,
      title: "New Teaching Series: Spiritual Growth",
      content: `
        <p class="mb-6">Join us for our new teaching series focused on spiritual growth and personal development in Christ. This comprehensive program is designed to help believers deepen their faith and develop a stronger relationship with God.</p>
        
        <p class="mb-6">The teaching series covers essential topics including prayer life, Bible study methods, spiritual disciplines, and practical application of biblical principles in daily life. Each session is carefully crafted to provide both theoretical knowledge and practical tools for spiritual development.</p>
        
        <p class="mb-6">Key topics covered in this series:</p>
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li>Developing a consistent prayer life</li>
          <li>Effective Bible study techniques</li>
          <li>Spiritual disciplines and their importance</li>
          <li>Overcoming spiritual obstacles</li>
          <li>Building a strong foundation in Christ</li>
        </ul>
        
        <p class="mb-6">Our teaching ministry is committed to equipping believers with the knowledge and skills needed to grow spiritually and serve effectively in the church and community.</p>
      `,
      author: "Teaching Ministry",
      date: "July 10th, 2025",
      category: "Teaching",
      images: [
        "/images/news/wmc-40.png",
        "/images/news/wmc-14.png",
        "/images/news/wmc-7.png"
      ]
    },
    "5": {
      id: 5,
      title: "Men's Fellowship Meeting",
      content: `
        <p class="mb-6">Our monthly men's fellowship gathering provides a unique opportunity for men to come together for prayer, study, and fellowship. This ministry focuses on building strong male leadership and fostering spiritual growth among men in our congregation.</p>
        
        <p class="mb-6">The fellowship meetings include Bible study sessions, prayer times, and discussions on topics relevant to men's spiritual and personal development. These gatherings help create a supportive environment where men can share their challenges and victories in their faith journey.</p>
        
        <p class="mb-6">Key activities during fellowship meetings:</p>
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li>Bible study and discussion</li>
          <li>Prayer and intercession</li>
          <li>Testimony sharing</li>
          <li>Leadership development</li>
          <li>Community service planning</li>
        </ul>
        
        <p class="mb-6">The men's fellowship plays a vital role in strengthening the spiritual foundation of our church and preparing men to be effective leaders in their families and communities.</p>
      `,
      author: "Men's Fellowship",
      date: "July 5th, 2025",
      category: "Ministries",
      images: [
        "/images/clergy/wovenu.jpg",
        "/images/clergy/mens-hope.jpeg"
      ]
    },
    "6": {
      id: 6,
      title: "Choir Practice Schedule Update",
      content: `
        <p class="mb-6">We are excited to announce updated practice schedules for both our Senior and Junior choirs. These updates are designed to accommodate our growing music ministry and prepare for upcoming special services and events.</p>
        
        <p class="mb-6">The new schedules include additional practice sessions, new repertoire preparation, and special training for upcoming performances. Both choirs are working diligently to enhance their musical skills and spiritual expression through song.</p>
        
        <p class="mb-6">Updated schedule highlights:</p>
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li>Senior Choir: Tuesday and Thursday evenings</li>
          <li>Junior Choir: Saturday mornings</li>
          <li>Special rehearsals for upcoming events</li>
          <li>New song learning sessions</li>
          <li>Performance preparation workshops</li>
        </ul>
        
        <p class="mb-6">Our music ministry continues to be a vital part of our worship experience, bringing glory to God through beautiful harmonies and heartfelt praise.</p>
      `,
      author: "Music Ministry",
      date: "July 1st, 2025",
      category: "Ministries",
      images: [
        "/images/groups/juniorchoir.jpg",
        "/images/groups/seniorchoir.jpg",
        "/images/groups/juniorchoir2.jpeg"
      ]
    }
  };

  // Get the current article based on ID
  const article = articles[id as string];

  // If article doesn't exist, show a 404 or redirect
  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/news" className="btn-primary">
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % article.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + article.images.length) % article.images.length);
  };

  return (
    <>
      <Head>
        <title>{article.title} - Apostles Revelation Society</title>
        <meta name="description" content="Celebrating the 67th Anniversary of the ARS Women's Council at the Abelemkpe Branch. A momentous occasion marking decades of dedicated service." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        {/* Article Header */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-navy-900 to-navy-800 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={article.images[2]}
              alt={article.title}
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="container-width relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <Link
                href="/news"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors duration-200"
              >
                <FiArrowLeft className="mr-2 w-4 h-4" />
                Back to News
              </Link>
              
              <div className="mb-4">
                <span className="bg-church-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {article.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {article.title}
              </h1>
              
              <div className="flex items-center gap-6 text-lg text-gray-300">
                <div className="flex items-center gap-2">
                  <FiUser className="w-5 h-5" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-5 h-5" />
                  <span>{article.date}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="section-padding">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <h3 className="text-xl font-bold text-navy-900 mb-4">Event Details</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="text-gray-600 text-sm">Date:</span>
                      <p className="font-semibold">{article.date}</p>
                    </div>
                    <div>
                      <span className="text-gray-600 text-sm">Location:</span>
                      <p className="font-semibold">Musuku Branch</p>
                    </div>
                    <div>
                      <span className="text-gray-600 text-sm">Category:</span>
                      <p className="font-semibold">{article.category}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Event Gallery
              </h2>
              <p className="text-gray-600">
                Relive the special moments from the 67th Anniversary celebration
              </p>
            </motion.div>

            {/* Main Image Display */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative mb-8"
            >
              <div className="relative h-[600px] md:h-[700px] rounded-xl overflow-hidden">
                <Image
                  src={article.images[currentImageIndex]}
                  alt={`Gallery image ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                />
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200"
                >
                  <FiChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200"
                >
                  <FiChevronRight className="w-6 h-6" />
                </button>
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                  {currentImageIndex + 1} / {article.images.length}
                </div>
              </div>
            </motion.div>

            {/* Thumbnail Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {article.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-32 rounded-lg overflow-hidden transition-all duration-200 ${
                    currentImageIndex === index 
                      ? 'ring-4 ring-church-red' 
                      : 'hover:ring-2 ring-gray-300'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default NewsArticlePage; 