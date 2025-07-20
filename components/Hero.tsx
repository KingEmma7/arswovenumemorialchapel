import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Church congregation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          Welcome to{" "}
          <span className="text-gradient font-serif">
            ARS Wovenu Memorial Chapel
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
        >
          Come worship with us and let God meet you where you are at.
          <br />
          <span className="text-gold-400 font-semibold">
            Apostles Revelations Society exists to show our city the love of God
            through gospel-focused worship and bold community service.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/sabbath-service"
            className="btn-primary text-lg px-8 py-4"
          >
            Learn More About The Faith
          </Link>
          <Link
            href="/events"
            className="btn-secondary text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            Upcoming Events
          </Link>
        </motion.div>

        {/* Christian Cross Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute right-8 top-1/2 transform -translate-y-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <svg 
              width="100" 
              height="100" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="drop-shadow-lg"
            >
              <path d="M12 2L12 22" />
              <path d="M5 9L19 9" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
