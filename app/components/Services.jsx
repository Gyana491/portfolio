"use client";
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Services() {
  const services = [
    {
      title: "Fullstack Web Development",
      description: "Crafting high-performance websites, web apps, and systems that scale beautifully and work flawlessly across devices and platforms.",
      icon: "💻"
    },
    {
      title: "Product Strategy & Architecture",
      description: "From ideation to deployment — mapping out robust tech architecture and product flows that accelerate growth and ensure scalability.",
      icon: "🧠"
    },
    {
      title: "SEO & Performance Optimization",
      description: "Speed, structure, and search dominance — turning websites into lead-generating machines with technical SEO and performance tuning.",
      icon: "🔍"
    },
    {
      title: "API & Cloud Integration",
      description: "Building secure, scalable, and efficient backend systems & microservices that power digital products for maximum reliability.",
      icon: "☁️"
    },
    {
      title: "WordPress Development",
      description: "Custom WordPress themes, plugins, and complex dynamic websites tailored to specific business needs with optimized performance.",
      icon: "🔌"
    },
    {
      title: "Technical Consultancy",
      description: "Strategic guidance on technology choices, architecture decisions, and development roadmaps to achieve business objectives.",
      icon: "🔧"
    }
  ];

  return (
    <section id="services" className="section bg-black">
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container"
      >
        <motion.h2 
          variants={fadeInUp}
          className="section-title"
        >
          What I Do
        </motion.h2>
        
        <motion.div 
          variants={fadeInUp}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              className="p-6 transition-all bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-200/10 hover:border-primary/30"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl bg-primary/10 rounded-full">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-200">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
