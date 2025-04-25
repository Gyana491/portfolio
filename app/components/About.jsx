"use client";
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Satisfied Clients', value: '10+' }
  ];

  const expertise = [
    {
      title: "Fullstack Web Development",
      description: "Crafting high-performance websites, web apps, and systems that scale beautifully and work flawlessly.",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Product Strategy & Architecture",
      description: "From ideation to deployment — mapping robust tech architecture and product flows that accelerate growth.",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "SEO & Performance Optimization",
      description: "Speed, structure, and search dominance — turning websites into lead-generating machines.",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "API & Cloud Integration",
      description: "Building secure, scalable, and efficient backend systems & microservices that power digital products.",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="section bg-black">
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container"
      >
        <motion.h2 
          variants={fadeInUp}
          className="section-title text-gray-200"
        >
          About Me
        </motion.h2>
        
        <div className="grid gap-8 md:gap-12 md:grid-cols-2">
          <motion.div 
            variants={staggerContainer}
            className="space-y-5 sm:space-y-6"
          >
            <motion.div 
              variants={fadeInUp}
              className="p-4 sm:p-6 space-y-3 sm:space-y-4 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-200/10"
            >
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Who I Am
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                I'm Gyan Ranjan Mohanta (Amit), a fullstack developer and visionary entrepreneur passionate about creating technology that matters.
              </p>
              <p className="text-sm sm:text-base text-gray-300">
                From intuitive car platforms to community-powered donation systems, I architect scalable solutions that solve real-world problems. Whether it's building a startup from scratch or optimizing backend systems, I bring ideas to life with precision and purpose.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="p-4 sm:p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-200/10"
            >
              <h3 className="mb-3 text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Key Highlights
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">🚗</span>
                  Founder of MotorIndia – India's smartest car & bike platform
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">♻️</span>
                  Creator of Swapify.club – A sustainable platform to donate unused items
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">💼</span>
                  Ex-WordPress Dev at Dailydeals Live
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">🛠️</span>
                  Expert in MERN Stack, Next.js, Java Spring Boot, WordPress
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">💡</span>
                  On a mission to build tech that fuels equity, access, and sustainability
                </li>
              </ul>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-3 sm:p-4 text-center rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-200/10"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              What I Do
            </h3>
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="p-3 sm:p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-200/10 transition-all hover:border-primary/50 group"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-200 group-hover:text-primary truncate">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
