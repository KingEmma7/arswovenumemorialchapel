import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiCalendar, FiUser, FiArrowRight } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ministries from "@/components/Ministries";
import News from "@/components/News";
import Sermons from "@/components/Sermons";
import VerseOfTheDay from "@/components/VerseOfTheDay";
import Footer from "@/components/Footer";
import router from "next/router";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Apostles Revelation Society - Wovenu Memorial Chapel</title>
        <meta
          name="description"
          content="Come worship with us and let God meet you where you are at. Apostles Revelation Society exists to show our city the love of God through gospel-focused worship and bold community service."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Apostles Revelation Society - Wovenu Memorial Chapel"
        />
        <meta
          property="og:description"
          content="Come worship with us and let God meet you where you are at. Join us for Sabbath service and community fellowship."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <Hero />

          {/* Verse of the Day Section */}
          <VerseOfTheDay />

          {/* News Section */}
          <News />

          {/* Ministries Section */}
          <Ministries />

          {/* Sermons Section */}
          <Sermons />

          {/* Visitors and Members Section */}
                    <section className="section-padding bg-gradient-to-br from-primary-50 to-gold-50">
            <div className="container-width">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Visitors */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-primary-600 text-white p-8 rounded-2xl shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      Visitors
                    </h2>
                    <p className="text-xl mb-6 leading-relaxed">
                      New questions about our church?
                      <br />
                      Get all the answers to help you feel at home.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
                      onClick={() => router.push("/contact")}
                    >
                      Plan My Visit
                    </motion.button>
                  </div>
                </motion.div>

                {/* Members */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-church-green text-white p-8 rounded-2xl shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      Members
                    </h2>
                    <p className="text-xl mb-6 leading-relaxed">
                      Log in to connect with the church membership online.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-gold-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors duration-200"
                    >
                      Member Sign-In
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-padding bg-navy-900 text-white"
          >
            <div className="container-width text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Need a boost?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
              >
                Come worship with us and let God meet you where you are at.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <button className="btn-primary text-lg px-8 py-4">
                  Learn more about our faith
                </button>
              </motion.div>
            </div>
          </motion.section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
