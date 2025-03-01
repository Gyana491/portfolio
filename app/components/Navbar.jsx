"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Services', 'Contact'];

  return (
    <header className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-xl shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container py-4">
        {/* Desktop: Single row layout */}
        <div className="hidden md:flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-3"
          >
            <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-primary">
              <Image
                src="/profile.jpg"
                alt="Gyana Ranjan"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Gyana Ranjan
            </span>
          </Link>
          
          <nav className="flex items-center gap-3">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`
                  px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full
                  border border-gray-200/20
                  ${activeSection === item.toLowerCase()
                    ? 'bg-gradient-to-r from-primary to-blue-600 text-white border-transparent shadow-lg shadow-primary/30'
                    : 'text-gray-200 hover:border-primary hover:text-primary'
                  }
                `}
              >
                {item}
              </Link>
            ))}
            
            <Link 
              href="#contact" 
              className="ml-4 px-6 py-2.5 text-sm font-medium text-white transition-all bg-gradient-to-r from-primary to-blue-600 rounded-full hover:shadow-lg hover:shadow-primary/30"
            >
              Hire Me
            </Link>
          </nav>
        </div>

        {/* Mobile: Two row layout */}
        <div className="md:hidden space-y-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-2"
            >
              <div className="relative w-8 h-8 overflow-hidden rounded-full border-2 border-primary">
                <Image
                  src="/profile.jpg"
                  alt="Gyana Ranjan"
                  fill
                  sizes="32px"
                  className="object-cover"
                  priority
                />
              </div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Gyana Ranjan
              </span>
            </Link>
            <Link 
              href="#contact" 
              className="px-5 py-2 text-sm font-medium text-white transition-all bg-gradient-to-r from-primary to-blue-600 rounded-full hover:shadow-lg hover:shadow-primary/30"
            >
              Hire Me
            </Link>
          </div>
          
          <nav className="w-full overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-2 px-2 min-w-max">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`
                    px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full
                    border border-gray-200/20
                    ${activeSection === item.toLowerCase()
                      ? 'bg-gradient-to-r from-primary to-blue-600 text-white border-transparent shadow-lg shadow-primary/30'
                      : 'text-gray-200 hover:border-primary hover:text-primary'
                    }
                  `}
                >
                  {item}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

// Add this to your globals.css
// .scrollbar-hide::-webkit-scrollbar {
//   display: none;
// }
// .scrollbar-hide {
//   -ms-overflow-style: none;
//   scrollbar-width: none;
// }
