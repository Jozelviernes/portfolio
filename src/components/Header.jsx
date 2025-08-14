import { useState, useEffect } from "react";
import "./Header.css";

export function Header() {
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const sectionIds = Array.from(sections).map(section => section.id);
    
    // Track which sections are currently visible
    const visibleSections = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        // Update the set of visible sections
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        // Determine which section should be active
        if (visibleSections.size > 0) {
          // Get the first visible section in document order
          const firstVisibleSection = sectionIds.find(id => visibleSections.has(id));
          if (firstVisibleSection) {
            setActiveSection(firstVisibleSection);
          }
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -20% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1.0]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Alternative approach using scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'contacts'];
      const scrollPosition = window.scrollY + 200; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Set initial active section
    handleScroll();
    
    // Listen to scroll events
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'about') {
      // For about section, scroll to the very top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // For other sections, scroll with offset
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 100; // Adjust based on your header height
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
    // Close mobile menu after clicking
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white shadow top-0 left-0 z-50 fixed">
      <div className="max-w-7xl flex justify-between items-center px-4 py-6 mx-auto">
        <h1 className="text-2xl font-semibold text-violet-700">Jozel M. Viernes</h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-between items-center">
          <li className="px-6 text-lg">
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors duration-200 ${
                activeSection === "about" 
                  ? "text-violet-700 font-bold" 
                  : "text-gray-700 hover:text-violet-500"
              }`}
            >
              About
            </button>
          </li>
          <li className="px-6 text-lg">
            <button
              onClick={() => scrollToSection('projects')}
              className={`transition-colors duration-200 ${
                activeSection === "projects" 
                  ? "text-violet-700 font-bold" 
                  : "text-gray-700 hover:text-violet-500"
              }`}
            >
              Projects
            </button>
          </li>
          <li className="px-6 text-lg">
            <button
              onClick={() => scrollToSection('contacts')}
              className={`transition-colors duration-200 ${
                activeSection === "contacts" 
                  ? "text-violet-700 font-bold" 
                  : "text-gray-700 hover:text-violet-500"
              }`}
            >
              Contacts
            </button>
          </li>
        </ul>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          aria-label="Toggle menu"
        >
          <span 
            className={`w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span 
            className={`w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span 
            className={`w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'max-h-48 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <ul className="bg-white border-t border-gray-200 py-4">
          <li className="px-4 py-2">
            <button
              onClick={() => scrollToSection('about')}
              className={`w-full text-left text-lg transition-colors duration-200 ${
                activeSection === "about" 
                  ? "text-violet-700 font-bold" 
                  : "text-gray-700 hover:text-violet-500"
              }`}
            >
              About
            </button>
          </li>
          <li className="px-4 py-2">
            <button
              onClick={() => scrollToSection('projects')}
              className={`w-full text-left text-lg transition-colors duration-200 ${
                activeSection === "projects" 
                  ? "text-violet-700 font-bold" 
                  : "text-gray-700 hover:text-violet-500"
              }`}
            >
              Projects
            </button>
          </li>
          <li className="px-4 py-2">
            <button
              onClick={() => scrollToSection('contacts')}
              className={`w-full text-left text-lg transition-colors duration-200 ${
                activeSection === "contacts" 
                  ? "text-violet-700 font-bold" 
                  : "text-gray-700 hover:text-violet-500"
              }`}
            >
              Contacts
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}