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
      title: "Swapify - Secure Marketplace",
      description: "India's first secure and ad-free second-hand marketplace, featuring Aadhaar verification and a trust-based community system.",
      image: "/swapify-screenshot.png",
      technologies: ["Next.js", "Node.js", "MongoDB", "Aadhaar API", "AWS"],
      link: "https://swapify.club/",
      featured: true,
      details: "Swapify revolutionizes the second-hand marketplace experience in India by prioritizing security and user trust. Built with modern technologies and featuring Aadhaar verification, the platform creates a safe environment for buyers and sellers while maintaining an ad-free, community-driven experience."
    },
    {
      title: "Jinny - Your Personal Voice Assistant",
      description: "An AI companion that grows and evolves with you, combining intelligence with personality. Built with advanced AI technologies including LLaMA, text-to-speech, and speech-to-text capabilities.",
      image: "/jinny-screenshot.jpg",
      technologies: ["AI", "LLaMA", "Express.js", "WebSocket", "APIs"],
      link: "https://jinny.onrender.com/",
      featured: true,
      details: "Jinny is more than just an AI assistant - she's a personality with heart and soul who learns and adapts to you. Think of her as the friendly neighbor who's always ready to help, combined with the wit of a stand-up comedian and the knowledge of a scholar."
    },
    {
      title: "Motor India",
      description: "India's leading autoportal providing comprehensive car information, comparisons, and 360-degree views for potential buyers.",
      image: "/motorindia-screenshot.jpg",
      technologies: ["WordPress", "Custom Plugins", "SEO", "Tailwind CSS"],
      link: ""
    },
    {
      title: "FresherJobAlert.in",
      description: "Platform sharing the latest job notifications for freshers, helping new graduates find employment opportunities across various sectors.",
      image: "/fresherjobalert-screenshot.jpg",
      technologies: ["WordPress", "Job Board", "SEO"],
      link: "https://fresherjobalert.in"
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
        <h2 className="section-title">Featured Projects</h2>
        
        <motion.div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`grid gap-8 md:grid-cols-2 items-center p-6 rounded-lg ${
                project.featured ? 'bg-primary/10' : 'bg-gray-800'
              }`}
            >
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-200">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-sm rounded-full bg-gray-200/10 text-gray-200 border border-gray-200/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white transition-all rounded-full bg-gradient-to-r from-primary to-blue-600 hover:shadow-lg hover:shadow-primary/30"
                  >
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="relative w-full max-w-3xl p-8 bg-gray-800 rounded-lg">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="grid gap-8 md:grid-cols-2">
                <div className="h-64 overflow-hidden rounded-lg">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-200">{selectedProject.title}</h3>
                  <p className="text-gray-300">{selectedProject.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-sm rounded-full bg-gray-200/10 text-gray-200 border border-gray-200/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300">{selectedProject.details}</p>
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 btn btn-primary"
                    >
                      View Project
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
