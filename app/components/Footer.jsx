"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/mr-gyan491' },
    { name: 'GitHub', url: 'https://github.com/mr-gyan491' },
    { name: 'Email', url: 'mailto:gyanaranjanmohanta2004@gmail.com' },
  ]

  return (
    <footer className="py-8 bg-gray-900">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="font-medium text-gray-300">&copy; {currentYear} Gyana Ranjan. All rights reserved.</p>
          </div>
          
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
} 