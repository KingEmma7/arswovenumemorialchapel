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
          src="/images/clergy/bishop1.jpg"
          alt="Church congregation"
          fill
          className="object-cover object-[50%_25%]"
          priority
        />
        <div className="absolute inset-0 bg-navy-900/50"></div>
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
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4 tracking-wide italic text-center">
              Welcome to
            </h1>
            <div className="relative rounded-lg bg-white/40 p-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 tracking-tight drop-shadow-lg text-center">
                <span className="text-church-red text-bold">ARS</span> Wovenu Memorial Chapel
              </h1>
              <div className="absolute -bottom-2 left-0 w-32 h-1 bg-church-red rounded-full shadow-lg"></div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed "
          >
            Come worship with us!
            <br />

          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <Link
              href="/sabbath-service"
              className="btn-primary text-lg px-8 py-4 font-semibold tracking-wide"
            >
              Sabbath Service
            </Link>
            <Link
              href="/events"
              className="btn-secondary text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold tracking-wide"
            >
              Upcoming Events
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
