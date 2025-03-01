export default function Services() {
  const services = [
    {
      title: "Website Development",
      description: "Custom responsive websites built with modern frameworks and best practices for optimal performance.",
      icon: "💻"
    },
    {
      title: "WordPress Development",
      description: "Custom WordPress themes, plugins, and complex dynamic websites tailored to your specific needs.",
      icon: "🔌"
    },
    {
      title: "Page Speed Optimization",
      description: "Improve your website's loading speed and overall performance to enhance user experience and SEO.",
      icon: "⚡"
    },
    {
      title: "Technical SEO",
      description: "Implementation of schema markup and technical optimizations to improve search engine visibility.",
      icon: "🔍"
    },
    {
      title: "Website Migration & Backup",
      description: "Safe migration of websites between hosts and comprehensive backup solutions to protect your data.",
      icon: "🔄"
    },
    {
      title: "Bug Fixing & Maintenance",
      description: "Identify and resolve website issues, perform regular updates, and maintain optimal performance.",
      icon: "🔧"
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">My Services</h2>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="p-6 transition-all bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg hover:border-primary">
              <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl bg-blue-100 rounded-full dark:bg-blue-900">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
