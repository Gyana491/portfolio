"use client";
import { motion } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, 
  SiMongodb, SiExpress, SiWordpress, SiPhp,
  SiJavascript, SiTypescript, SiPython, SiMysql,
  SiGit, SiDocker, SiAmazon, SiLinux,
  SiHtml5, SiCss3, SiRedux, SiFirebase,
  SiFigma, SiPostman, SiNginx, SiOpenjdk, SiSpring
} from 'react-icons/si';

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

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="text-white" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "PHP", icon: <SiPhp className="text-[#777BB4]" /> },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "Java", icon: <SiOpenjdk className="text-[#437291]" /> },
        { name: "Spring", icon: <SiSpring className="text-[#6DB33F]" /> },
        { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
        { name: "WordPress", icon: <SiWordpress className="text-[#21759B]" /> }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
        { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
        { name: "AWS", icon: <SiAmazon className="text-[#FF9900]" /> },
        { name: "Linux", icon: <SiLinux className="text-white" /> },
        { name: "Nginx", icon: <SiNginx className="text-[#009639]" /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-black">
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
          Skills & Technologies
        </motion.h2>

        <motion.div 
          variants={staggerContainer}
          className="grid gap-6 md:gap-8 md:grid-cols-2"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-4 sm:p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-200/10"
            >
              <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 transition-all rounded-lg bg-gray-800/50 hover:bg-gray-800/80 group"
                  >
                    <div className="text-xl sm:text-2xl transition-all group-hover:scale-110 flex-shrink-0">
                      {skill.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white truncate">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
