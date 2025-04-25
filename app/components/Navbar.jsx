"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

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
    <div className="fixed top-0 left-0 right-0 z-[100]">
      <header className={`w-full transition-colors duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-xl shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container py-3"> {/* Changed from py-4 to py-2 */}
          {/* Desktop: Single row layout */}
          <div className="hidden md:flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-primary">
                <img
                  src="/profile.jpg"
                  alt="Gyana Ranjan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Gyana Ranjan
                </span>
                <span className="text-xs text-gray-400">Building Technology That Transforms</span>
              </div>
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
                Let's Connect
              </Link>
            </nav>
          </div>

          {/* Mobile: Two row layout */}
          <div className="md:hidden">
            <div className="flex items-center justify-between mb-4">
              <Link 
                href="/" 
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 overflow-hidden rounded-full border-2 border-primary">
                  <img
                    src="/profile.jpg"
                    alt="Gyana Ranjan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold tracking-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    Gyana Ranjan
                  </span>
                  <span className="text-xs text-gray-400 truncate">Building Technology That Transforms</span>
                </div>
              </Link>
              <Link 
                href="#contact" 
                className="px-4 py-2 text-xs font-medium text-white transition-all bg-gradient-to-r from-primary to-blue-600 rounded-full hover:shadow-lg hover:shadow-primary/30"
              >
                Let's Connect
              </Link>
            </div>
            
            <nav className="w-full overflow-x-auto scrollbar-hide"> {/* Removed pb-2 */}
              <div className="flex items-center gap-2 min-w-max">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`
                      px-3 py-1.5 text-xs font-medium transition-all duration-300 rounded-full
                      border border-gray-200/20 whitespace-nowrap
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
    </div>
  );
}
