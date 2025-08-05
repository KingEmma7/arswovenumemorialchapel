import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiMusic, FiMic, FiHeart, FiUsers } from 'react-icons/fi';

const JuniorChoirPage: React.FC = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -30 },
  };

  const features = [
    {
      icon: <FiMusic size={32} className="text-gold-500" />,
      title: "Musical Education",
      description: "Learning the fundamentals of music theory, vocal techniques, and performance skills in a fun and engaging way.",
    },
    {
      icon: <FiHeart size={32} className="text-gold-500" />,
      title: "Worship Leadership",
      description: "Leading the congregation in worship, and learning the importance of praise in the life of a believer.",
    },
    {
      icon: <FiUsers size={32} className="text-gold-500" />,
      title: "Friendship & Fun",
      description: "Building lasting friendships with fellow young believers in a positive and supportive Christian environment.",
    },
    {
      icon: <FiMic size={32} className="text-gold-500" />,
      title: "Confidence Building",
      description: "Gaining confidence through public performance and the development of musical talents.",
    },
  ];

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
      <Head>
        <title>Junior Choir - Wovenu Memorial Chapel</title>
        <meta name="description" content="Discover the Junior Choir at Wovenu Memorial Chapel, where young voices are trained to praise God and lead worship." />
      </Head>
      <Navbar />

      <main>
        {/* Hero Section */}
        <motion.section
          className="relative h-[50vh] min-h-[400px] pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          <Image
            src="/images/groups/juniorchoir-leaders.jpeg"
            alt="Junior Choir singing"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Removed overlay here */}
          <div className="relative z-10 flex h-full items-center justify-center text-center p-4">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 120 }}
              className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg backdrop-blur-sm"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Junior Choir
              </h1>
              <p className="text-xl md:text-2xl text-gold-200 max-w-3xl mx-auto">
                Raising the Next Generation of Worship Leaders
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Introduction Section */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-4xl font-bold text-navy-900 mb-6">Voices of the Future</h2>
                <p>
                  The Junior Choir of Wovenu Memorial Chapel is a vibrant and energetic group of young people with a passion for music and a heart for God. This ministry is dedicated to nurturing the musical talents of our children and youth, teaching them to use their gifts to glorify God.
                </p>
                <p>
                  Through weekly rehearsals, our young choristers learn discipline, teamwork, and the joy of worship. The Junior Choir regularly ministers in our church services, special events, and community outreach programs, blessing the congregation with their melodious voices.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/groups/juniorchoir2.jpeg"
                  alt="Junior Choir in performance"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-primary-50">
          <div className="container-width text-center">
            <h2 className="text-4xl font-bold text-navy-900 mb-12">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-navy-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-navy-900 mb-4">Junior Choir Gallery</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Capturing the joy, energy, and beautiful moments of our young worship leaders in action.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { src: '/images/groups/juniorchoir2.jpeg', alt: 'Junior Choir performing' },
                { src: '/images/groups/juniorchoir99.jpeg', alt: 'Junior Choir members' },
                { src: '/images/groups/juniorchoir-leaders.jpeg', alt: 'Junior Choir leaders' },
                { src: '/images/groups/junior-choir77.jpeg', alt: 'Junior Choir in practice' },
                { src: '/images/groups/juniorchoir-chelsea.jpeg', alt: 'Junior Choir Chelsea' },
                { src: '/images/groups/juniorchoir.jpg', alt: 'Junior Choir group photo' }
              ].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="section-padding bg-white">
          <div className="container-width text-center">
            <h2 className="text-4xl font-bold text-navy-900 mb-6">Join the Choir!</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We are always excited to welcome new members aged 6-16. No prior musical experience is necessary, just a willing heart and a desire to sing for the Lord.
            </p>
            <div className="bg-gold-50 p-8 rounded-xl shadow-inner max-w-2xl mx-auto border border-gold-200">
              <h3 className="text-2xl font-bold text-navy-800 mb-4">Rehearsal Information</h3>
              <p className="text-lg text-gray-700">
                <strong>When:</strong> Every Saturday at 3:00 PM<br />
                <strong>Where:</strong> Church Auditorium
              </p>
              <button className="btn-primary mt-6">
                Sign Up Your Child
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default JuniorChoirPage;
