import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Sparkles, Zap, Download, Linkedin, Github, Mail } from 'lucide-react';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  const [showScrollButton, setShowScrollButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setShowScrollButton(rect.bottom > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeClick = () => {
    window.open('https://drive.google.com/uc?export=download&id=10eh84qoXZZ2l1ipWY0zg8swLkNTGTAJu', '_blank');
  };

  const handleScrollToAbout = () => {
    scrollToSection('about');
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 overflow-hidden">
      {/* Enhanced CSS-based background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-pink-100/40 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <Code className="absolute top-1/4 left-1/6 w-8 h-8 text-blue-400/30 animate-float" style={{ animationDelay: '0.5s' }} />
        <Sparkles className="absolute top-1/3 right-1/5 w-6 h-6 text-purple-400/30 animate-float" style={{ animationDelay: '1.5s' }} />
        <Zap className="absolute bottom-1/3 left-1/5 w-7 h-7 text-pink-400/30 animate-float" style={{ animationDelay: '2.5s' }} />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10 flex-grow flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto w-full">
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse-glow"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                  
                  <div className="absolute inset-3 bg-white rounded-full shadow-2xl overflow-hidden border-4 border-white backdrop-blur-sm">
                    <img 
                      src="/lovable-uploads/12c910ed-b896-47a9-aa87-7d3591664f02.png" 
                      alt="K. Jeevan Kumar"
                      className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  Available for internship & collaboration
                </div>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left space-y-8 order-1 lg:order-2">
            <div className="animate-fade-in">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium animate-pulse">
                  👋 Hi, I'm
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="animated-gradient-text">K. Jeevan Kumar</span>
              </h1>
              
              <div className="space-y-4 mb-8">
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                  An aspiring <span className="font-semibold text-blue-600">AI/ML developer</span>, 
                  <span className="font-semibold text-purple-600"> web creator</span>, and passionate learner
                </p>
                <p className="text-lg text-gray-500">
                  from Telangana, India 🇮🇳
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse"
                >
                  View Projects
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-gray-300 hover:border-blue-400 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  Contact Me
                </Button>
              </div>

              {/* Resume Button */}
              <div className="mb-8">
                <Button 
                  size="lg"
                  onClick={handleResumeClick}
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl flex items-center gap-2 animate-pulse-glow mx-auto lg:mx-0"
                >
                  <Download className="w-5 h-5 animate-pulse" />
                  Request Resume
                </Button>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center lg:justify-start gap-4 mb-8">
                <a 
                  href="http://www.linkedin.com/in/k-jeevan-kumar-5333b32b8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                >
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </a>
                <a 
                  href="https://github.com/kjeevankumar?tab=repositories" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                >
                  <Github className="w-6 h-6 text-gray-800" />
                </a>
                <button 
                  onClick={() => window.open('mailto:kjeevankumar@gmail.com?subject=Hi Jeevan - Portfolio Contact', '_blank')}
                  className="p-3 bg-red-100 rounded-full hover:bg-red-200 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                >
                  <Mail className="w-6 h-6 text-red-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section - Enhanced mobile spacing */}
      <div className="container mx-auto px-4 relative z-10 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div></div> {/* Empty space for image column */}
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start gap-6 md:gap-8 pt-4 border-t border-gray-200">
                <div className="text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-xl md:text-2xl font-bold text-gray-900">4+</div>
                  <div className="text-xs md:text-sm text-gray-500">Years Learning</div>
                </div>
                <div className="text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-xl md:text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-xs md:text-sm text-gray-500">Projects</div>
                </div>
                <div className="text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-xl md:text-2xl font-bold text-gray-900">6+</div>
                  <div className="text-xs md:text-sm text-gray-500">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Button - Improved positioning for mobile */}
      {showScrollButton && (
        <div className="absolute bottom-16 md:bottom-24 left-1/2 transform -translate-x-1/2 z-20">
          <button 
            onClick={handleScrollToAbout}
            className="group cursor-pointer hover:scale-110 transition-all duration-500"
          >
            <div className="flex flex-col items-center gap-2 md:gap-3 p-3 md:p-4 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl hover:bg-white transition-all duration-500 border border-gray-200">
              <span className="text-gray-600 text-xs font-medium group-hover:text-blue-600 transition-colors duration-500">
                Scroll to explore
              </span>
              <div className="relative">
                <ArrowDown className="w-4 h-4 md:w-5 md:h-5 text-gray-500 group-hover:text-blue-600 animate-float transition-colors duration-500" />
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </button>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
