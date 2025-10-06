import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background Image - Full Cover */}
      <div className="absolute inset-0">
        <Image
          src="/images/logos/church-background5.jpeg"
          alt="Church congregation"
          fill
          className="object-cover object-[50%_25%]"
          priority
        />
        <div className="absolute inset-0 "></div>
      </div>

      {/* Content - Left Side */}
      <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16 lg:ml-24 mb-24 flex justify-start">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4 tracking-wide italic text-left bg-black/50 backdrop-blur-sm p-2 rounded-lg shadow-lg border border-white/20 w-fit ">
              Welcome to
            </h1>
            <div className="relative rounded-lg bg-white/90 backdrop-blur-sm p-6 shadow-2xl border border-white/20">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 tracking-tight text-left">
                <span className="text-red-500">ARS</span> <span className="text-primary-600">Wovenu Memorial Chapel</span>
              </h1>
              <div className="absolute -bottom-2 left-0 w-32 h-1 bg-red-700 rounded-full shadow-lg"></div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white mb-8 leading-relaxed bg-primary-600/60 backdrop-blur-sm rounded-lg p-4 shadow-lg"
          >
            Come worship with us!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <Link
              href="/sabbath-service"
              className="bg-red-500 hover:bg-red-800 text-white text-lg px-8 py-4 font-semibold tracking-wide rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl transform hover:scale-105"
            >
              Sabbath Service
            </Link>
            <Link
              href="/news"
              className="bg-primary-600/80 hover:bg-primary-600 border-2 border-white/50 text-white hover:border-white text-lg px-8 py-4 font-semibold tracking-wide rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl transform hover:scale-105 backdrop-blur-sm"
            >
              Latest News
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
