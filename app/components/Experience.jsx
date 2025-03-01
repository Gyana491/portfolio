"use client";
import { motion } from 'framer-motion';


const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const experienceData = [
  {
    title: "Team Lead",
    company: "Swapify",
    type: "Part-time",
    location: "On-site", 
    duration: "Jan 2024 - Present",
    description: "As the Founder of Swapify, redefining the second-hand marketplace by making it secure, ad-free, and community-driven with Aadhaar-verified users and a trust-based system.",
    image: "/swapify.jpg",
    skills: ["Leadership", "Product Development", "Team Management", "Strategy"]
  }
];

const ExperienceCard = ({ experience }) => {
  return (
    <div className="relative p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-200/10">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 overflow-hidden rounded-xl">
          <img
            src={experience.image}
            alt={experience.company}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-grow space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-200">{experience.title}</h3>
            <p className="text-primary">{experience.company}</p>
            <div className="flex flex-wrap gap-2 mt-1 text-sm text-gray-400">
              <span>{experience.type}</span>
              <span>•</span>
              <span>{experience.location}</span>
              <span>•</span>
              <span>{experience.duration}</span>
            </div>
          </div>
          
          <p className="text-gray-300">{experience.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm rounded-full bg-gray-200/10 text-gray-200 border border-gray-200/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="section bg-black">
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
          Experience
        </motion.h2>

        <motion.div 
          variants={fadeInUp}
          className="max-w-3xl mx-auto space-y-6"
        >
          {experienceData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
