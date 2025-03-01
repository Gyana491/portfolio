export default function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "VIT Bhopal University",
      period: "2023 - Present",
      details: "Currently in first year, focusing on advanced computer science concepts and practical application development."
    },
    {
      degree: "BSc in Information Technology & Management",
      institution: "Ravenshaw University",
      period: "November 2021 - August 2024",
      details: "Developed strong skills in web development and MERN stack through project-oriented approach."
    },
    {
      degree: "+2 Science",
      institution: "Tetrahedron Junior Science College, Tangi Cuttack",
      period: "2019 - 2021",
      details: "Completed higher secondary education with focus on science subjects."
    },
    {
      degree: "Class 2 to Class 10",
      institution: "Sri Aurobindo Institute of Integral Education",
      period: "2010 - 2019",
      details: "Completed primary and secondary education."
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu, index) => (
            <div key={index} className="p-6 transition-transform bg-white rounded-lg shadow-md dark:bg-gray-800 hover:translate-y-[-5px]">
              <h3 className="mb-2 text-xl font-semibold text-primary">{edu.degree}</h3>
              <h4 className="mb-1 text-lg font-medium">{edu.institution}</h4>
              <p className="mb-3 text-gray-500 dark:text-gray-400">{edu.period}</p>
              <p className="text-gray-700 dark:text-gray-300">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
