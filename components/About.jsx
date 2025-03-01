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
      title: "Full Stack Development",
      description: "Building end-to-end web applications with modern technologies and best practices.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "WordPress Development",
      description: "Creating custom WordPress solutions with optimized performance and security.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Technical SEO",
      description: "Implementing SEO best practices for better search engine visibility and performance.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Cloud Integration",
      description: "Integrating applications with cloud services for scalable and reliable solutions.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div 
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div 
              variants={fadeInUp}
              className="p-6 space-y-4 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-200/10"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Who I Am
              </h3>
              <p className="text-gray-300">
                I'm Gyana Ranjan Mohanta, a passionate Full Stack Developer and Tech Enthusiast currently pursuing my MCA at VIT Bhopal. 
                With a strong foundation in both front-end and back-end technologies, I specialize in creating efficient and scalable web applications.
              </p>
              <p className="text-gray-300">
                My journey in technology began during my BSc in Information Technology & Management at Ravenshaw University, where I developed a keen interest in web development and problem-solving.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-4 text-center rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-200/10"
                >
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              My Expertise
            </h3>
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-200/10 transition-all hover:border-primary/50 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    {item.icon}
          </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200 group-hover:text-primary">
                      {item.title}
                    </h4>
                    <p className="text-gray-400">
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
