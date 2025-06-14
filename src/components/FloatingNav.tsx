
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

interface FloatingNavProps {
  scrollToSection: (sectionId: string) => void;
}

const FloatingNav: React.FC<FloatingNavProps> = ({ scrollToSection }) => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);

      // Determine active section
      const sections = navItems.map(item => item.id);
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
    }`}>
      <div className="bg-white/90 backdrop-blur-lg border border-gray-200/50 rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(item.id === 'hero' ? '' : item.id)}
              className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <div className="absolute inset-0 bg-blue-100 rounded-full animate-pulse opacity-50"></div>
              )}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default FloatingNav;
