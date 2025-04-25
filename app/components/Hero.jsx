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
              sizes="(max-width: 768px) 192px, 320px"
              className="object-cover"
              priority
              quality={100}
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
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Building Technology</span> That Transforms Lives
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl font-semibold md:text-2xl text-gray-200"
          >
            Empowering People. Solving Real Problems. Creating Lasting Impact.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-gray-400"
          >
            I craft purposeful digital products that solve real problems, fuel innovation, and leave a lasting impact.
            Driven by vision. Powered by code. Focused on people.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 md:justify-start"
          >
            <a 
              href="#contact" 
              className="px-6 py-2.5 text-sm font-medium text-white transition-all bg-gradient-to-r from-primary to-blue-600 rounded-full hover:shadow-lg hover:shadow-primary/30"
            >
              Connect With Me
            </a>
            <a 
              href="#projects" 
              className="px-6 py-2.5 text-sm font-medium transition-all rounded-full border border-gray-200/20 text-gray-200 hover:border-primary hover:text-primary"
            >
              Projects That Matter
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
