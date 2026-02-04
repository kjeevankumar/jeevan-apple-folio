import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Linkedin, Github, Mail, MapPin } from 'lucide-react';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  const handleResumeClick = () => {
    window.open('https://drive.google.com/uc?export=download&id=10eh84qoXZZ2l1ipWY0zg8swLkNTGTAJu', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-secondary/30 via-background to-background pt-20">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 order-2 lg:order-1">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
              Open to Internships & Full-Time Roles
            </div>

            {/* Name */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                K. Jeevan Kumar
              </h1>
              
              {/* Professional Title */}
              <p className="text-xl md:text-2xl font-medium text-primary">
                AI/ML Developer • Full Stack Developer • Problem Solver
              </p>
            </div>

            {/* Tagline */}
            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Building intelligent systems and scalable web applications that make a difference.
            </p>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Telangana, India</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-4">
              <Button 
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 font-medium shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                View Projects
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={handleResumeClick}
                variant="outline"
                size="lg"
                className="border-2 border-border hover:border-primary text-foreground hover:text-primary rounded-full px-8 font-medium transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-6">
              <a 
                href="http://www.linkedin.com/in/k-jeevan-kumar-5333b32b8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/kjeevankumar?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="mailto:kjeevankumar944@gmail.com" 
                className="p-3 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Gradient ring */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-full blur-sm" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-premium">
                <img 
                  src="/lovable-uploads/12c910ed-b896-47a9-aa87-7d3591664f02.png" 
                  alt="K. Jeevan Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-4xl mx-auto mt-16 lg:mt-20">
          <div className="grid grid-cols-3 gap-8 py-8 border-t border-border/50">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">4+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Learning</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">15+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">6+</div>
              <div className="text-sm text-muted-foreground mt-1">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
