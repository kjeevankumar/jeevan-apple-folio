import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Linkedin, Github, Mail, MapPin, GraduationCap, Trophy, Code, Sparkles, Briefcase, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const handleResumeClick = () => {
    setShowResumeModal(true);
  };

  const handleDownload = () => {
    window.open('https://drive.google.com/uc?export=download&id=10eh84qoXZZ2l1ipWY0zg8swLkNTGTAJu', '_blank');
    setShowResumeModal(false);
  };

  const handlePreview = () => {
    window.open('https://drive.google.com/file/d/10eh84qoXZZ2l1ipWY0zg8swLkNTGTAJu/view', '_blank');
  };

  const miniAchievements = [
    { icon: GraduationCap, label: 'Final Year B.Tech AI/ML' },
    { icon: Trophy, label: 'CGPA 8.43' },
    { icon: Code, label: '3+ Projects' },
    { icon: Briefcase, label: 'AI Internships' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative pt-20" style={{ overflow: 'visible' }}>
      {/* Subtle background decoration - z-index ensures it stays behind content */}
      <div className="absolute inset-0 pointer-events-none -z-10" style={{ zIndex: -1 }}>
        {/* Premium gradient mesh */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-soft" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: '1s' }} />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 order-2 lg:order-1">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20 shadow-sm animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open to Internships & Full-Time Roles
            </div>

            {/* Name */}
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                <span className="block">K. Jeevan</span>
                <span className="block text-gradient">Kumar</span>
              </h1>
              
              {/* Professional Title */}
              <p className="text-lg md:text-xl font-semibold text-muted-foreground">
                AI Engineer <span className="text-primary">•</span> Computer Vision <span className="text-primary">•</span> Machine Learning
              </p>
            </div>

            {/* Tagline */}
            <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Building intelligent systems with AI, Computer Vision, and Machine Learning. Focused on LLMs, deep learning, and predictive modeling.
            </p>

            {/* Mini Achievements Row */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {miniAchievements.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-secondary/80 rounded-xl text-sm font-medium text-foreground/80 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  {item.label}
                </div>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4" />
              <span>Telangana, India</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <Button 
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl px-8 h-14 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
                style={{ boxShadow: '0 4px 20px hsl(var(--primary) / 0.4)' }}
              >
                View Projects
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={handleResumeClick}
                variant="outline"
                size="lg"
                className="border-2 border-border hover:border-primary bg-card/50 text-foreground hover:text-primary rounded-2xl px-8 h-14 font-semibold transition-all duration-300 hover:scale-105"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="ghost"
                size="lg"
                className="text-primary font-semibold hover:bg-primary/10 rounded-2xl px-6 h-14 hidden sm:flex"
              >
                Contact Me
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
              <a 
                href="http://www.linkedin.com/in/k-jeevan-kumar-5333b32b8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group w-12 h-12 rounded-2xl bg-card border border-border/50 flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://github.com/kjeevankumar?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group w-12 h-12 rounded-2xl bg-card border border-border/50 flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="mailto:kjeevankumar944@gmail.com" 
                className="group w-12 h-12 rounded-2xl bg-card border border-border/50 flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Gradient ring */}
              <div className="absolute -inset-3 bg-gradient-to-br from-primary via-accent to-primary rounded-full blur-xl opacity-40 animate-pulse-soft" />
              <div className="absolute -inset-1.5 bg-gradient-to-br from-primary/50 via-accent/40 to-primary/50 rounded-full" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img 
                  src="/lovable-uploads/12c910ed-b896-47a9-aa87-7d3591664f02.png" 
                  alt="K. Jeevan Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating label */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-card border border-border/50 rounded-full shadow-lg">
                <span className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  AI Engineer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      <Dialog open={showResumeModal} onOpenChange={setShowResumeModal}>
        <DialogContent className="sm:max-w-md rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Resume</DialogTitle>
            <DialogDescription>
              Preview or download my resume
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-4">
            <Button 
              onClick={handlePreview}
              variant="outline"
              className="w-full h-12 rounded-xl font-semibold"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Preview Resume
            </Button>
            <Button 
              onClick={handleDownload}
              className="w-full h-12 rounded-xl font-semibold bg-primary hover:bg-primary/90"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HeroSection;
