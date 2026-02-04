import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from 'lucide-react';

interface FloatingNavProps {
  scrollToSection: (sectionId: string) => void;
}

const FloatingNav: React.FC<FloatingNavProps> = ({ scrollToSection }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 50);

      // Determine active section
      const sections = navItems.map(item => item.id);
      let current = 'hero';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
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

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId === 'hero' ? '' : sectionId);
    setIsMobileMenuOpen(false);
  };

  const handleResumeClick = () => {
    window.open('https://drive.google.com/uc?export=download&id=10eh84qoXZZ2l1ipWY0zg8swLkNTGTAJu', '_blank');
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible 
          ? 'py-3 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-soft' 
          : 'py-4 bg-transparent'
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => handleNavClick('hero')}
              className="text-lg font-bold text-foreground hover:text-primary transition-colors"
            >
              JK<span className="text-primary">.</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-link px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    activeSection === item.id
                      ? 'active text-primary bg-primary/5'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Resume Button */}
            <div className="hidden md:flex items-center gap-3">
              <Button 
                onClick={handleResumeClick}
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 font-medium shadow-sm hover:shadow-md transition-all duration-200"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/5'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={handleResumeClick}
              className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-medium"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default FloatingNav;
