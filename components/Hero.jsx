"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="pt-36 pb-16 md:pt-32 md:pb-24">
      <div className="container grid gap-8 md:grid-cols-2 md:items-center">
        {/* Profile Image - Will appear first on mobile */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center order-first md:order-last"
        >
          <div className="relative w-48 h-48 overflow-hidden border-4 rounded-full md:w-80 md:h-80 border-primary">
            <Image
              src="/profile.jpg"
              alt="Gyana Ranjan"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Content - Will appear second on mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-center md:text-left"
        >
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-bold md:text-5xl lg:text-6xl"
          >
            Hi, I'm <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Gyana Ranjan</span>
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl font-semibold md:text-3xl text-gray-200"
          >
            Full Stack Developer & Tech Enthusiast
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-gray-400"
          >
            Passionate about building scalable web applications and exploring new technologies.
            Specializing in MERN stack, WordPress development, and creating efficient digital solutions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 md:justify-start"
          >
            <a 
              href="https://www.linkedin.com/in/mr-gyan491/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-sm font-medium text-white transition-all bg-gradient-to-r from-primary to-blue-600 rounded-full hover:shadow-lg hover:shadow-primary/30"
            >
              Connect on LinkedIn
            </a>
            <a 
              href="#projects" 
              className="px-6 py-2.5 text-sm font-medium transition-all rounded-full border border-gray-200/20 text-gray-200 hover:border-primary hover:text-primary"
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
