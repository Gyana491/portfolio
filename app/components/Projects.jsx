"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "MotorIndia.in – India's Ultimate Car & Bike Discovery Platform",
      description: "Compare, explore, and visualize vehicles like never before. Built with custom 360° views, real-time data, and SEO-first architecture.",
      image: "/motorindia-screenshot.jpg",
      technologies: ["WordPress", "Custom Plugins", "SEO", "Tailwind CSS"],
      link: "",
      featured: true,
      details: "MotorIndia transforms how Indians discover and compare vehicles with intuitive interfaces and comprehensive data. As founder, I architected the platform from scratch with a focus on performance, user experience, and search visibility to create India's leading automotive resource."
    },
    {
      title: "Swapify.club – Where Giving Meets Purpose",
      description: "Empowering communities to donate items and reduce waste. A local-first sustainability-driven initiative that bridges the gap between excess and need.",
      image: "/swapify-screenshot.png",
      technologies: ["Next.js", "Node.js", "MongoDB", "Aadhaar API", "AWS"],
      link: "https://swapify.club/",
      featured: true,
      details: "Swapify revolutionizes the second-hand marketplace experience in India by prioritizing security, sustainability and user trust. Built with modern technologies and featuring Aadhaar verification, the platform creates a safe environment for donations while maintaining an ad-free, community-driven experience focused on reducing waste and promoting reuse."
    },
    {
      title: "FresherJobAlert.in – Job Platform for New Talent",
      description: "Helping freshers break into the workforce with relevant, local job opportunities curated by smart algorithms.",
      image: "/fresherjobalert-screenshot.jpg",
      technologies: ["WordPress", "Job Board", "SEO", "Custom Theme"],
      link: "https://fresherjobalert.in",
      details: "FresherJobAlert.in was created to address the challenge many new graduates face - finding entry-level positions. The platform uses custom algorithms to aggregate and categorize job postings specifically suitable for candidates with limited professional experience, making the job search process less overwhelming."
    },
    {
      title: "DailyDeals Live",
      description: "E-commerce platform featuring limited-time deals and offers with real-time notifications and seamless checkout experience.",
      image: "/dailydeals-screenshot.jpg",
      technologies: ["WordPress", "WooCommerce", "Custom Plugins", "Optimization"],
      link: "",
      details: "As a WordPress developer at DailyDeals Live, I implemented custom solutions to enhance user experience, optimize site performance, and improve conversion rates. The platform features real-time inventory updates, timed deals, and personalized recommendations."
    }
  ];

  return (
    <section id="projects" className="section">
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container"
      >
        <h2 className="section-title">Projects That Matter</h2>
        
        <motion.div className="grid gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.01 }}
              className={`overflow-hidden grid gap-6 md:gap-8 md:grid-cols-2 items-center p-4 sm:p-6 rounded-lg ${
                project.featured ? 'bg-primary/10' : 'bg-gray-800'
              }`}
            >
              <div className="h-48 sm:h-64 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-200">{project.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 text-xs rounded-full bg-gray-200/10 text-gray-200 border border-gray-200/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all rounded-full bg-gradient-to-r from-primary to-blue-600 hover:shadow-lg hover:shadow-primary/30"
                    >
                      View Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all rounded-full border border-gray-200/20 text-gray-200 hover:border-primary hover:text-primary"
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m-1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="relative w-full max-w-3xl p-4 sm:p-8 bg-gray-800 rounded-lg max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="h-48 sm:h-64 overflow-hidden rounded-lg">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-200">{selectedProject.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base">{selectedProject.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-xs rounded-full bg-gray-200/10 text-gray-200 border border-gray-200/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base">{selectedProject.details}</p>
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all rounded-full bg-gradient-to-r from-primary to-blue-600 hover:shadow-lg hover:shadow-primary/30"
                    >
                      View Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
