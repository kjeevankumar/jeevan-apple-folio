 import React, { useState, useEffect } from 'react';
 import HeroSection from '@/components/HeroSection';
 import TrustSection from '@/components/TrustSection';
 import AboutSection from '@/components/AboutSection';
 import ServicesSection from '@/components/ServicesSection';
 import EducationSection from '@/components/EducationSection';
 import ExperienceSection from '@/components/ExperienceSection';
 import SkillsSection from '@/components/SkillsSection';
 import ProjectsSection from '@/components/ProjectsSection';
 import AchievementsSection from '@/components/AchievementsSection';
 import CertificationsSection from '@/components/CertificationsSection';
 import TestimonialsSection from '@/components/TestimonialsSection';
 import ContactSection from '@/components/ContactSection';
 import Footer from '@/components/Footer';
 import FloatingNav from '@/components/FloatingNav';
 import PageLoader from '@/components/PageLoader';
 import BackToTop from '@/components/BackToTop';
 import { ThemeProvider } from '@/hooks/use-theme';
 
 interface VisibilityState {
   [key: string]: boolean;
 }
 
 const Index = () => {
   const [isVisible, setIsVisible] = useState<VisibilityState>({});
   const [isPageLoading, setIsPageLoading] = useState(true);
   const [isContentReady, setIsContentReady] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsPageLoading(false);
    }, 1500);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (!isPageLoading) {
      const contentTimer = setTimeout(() => {
        setIsContentReady(true);
      }, 200);

      return () => clearTimeout(contentTimer);
    }
  }, [isPageLoading]);

  useEffect(() => {
    if (!isContentReady) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isContentReady]);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleLoadingComplete = () => {
    setIsPageLoading(false);
  };

  return (
     <ThemeProvider>
      <PageLoader isLoading={isPageLoading} onLoadingComplete={handleLoadingComplete} />
      
      <div className={`min-h-screen bg-background transition-opacity duration-500 ${
        isContentReady ? 'opacity-100' : 'opacity-0'
      }`}>
        <FloatingNav scrollToSection={scrollToSection} />
        
        <HeroSection scrollToSection={scrollToSection} />
        
         <div id="trust" data-animate>
           <TrustSection isVisible={isVisible.trust} />
         </div>
 
        <div id="about" data-animate>
          <AboutSection isVisible={isVisible.about} />
        </div>
        
         <div id="services" data-animate>
           <ServicesSection isVisible={isVisible.services} />
         </div>
 
        <div id="education" data-animate>
          <EducationSection isVisible={isVisible.education} />
        </div>
        
        <div id="experience" data-animate>
          <ExperienceSection isVisible={isVisible.experience} />
        </div>
        
        <div id="skills" data-animate>
          <SkillsSection isVisible={isVisible.skills} />
        </div>
        
        <div id="projects" data-animate>
          <ProjectsSection isVisible={isVisible.projects} />
        </div>
        
         <div id="achievements" data-animate>
           <AchievementsSection isVisible={isVisible.achievements} />
         </div>
 
        <div id="certifications" data-animate>
          <CertificationsSection isVisible={isVisible.certifications} />
        </div>
        
         <div id="testimonials" data-animate>
           <TestimonialsSection isVisible={isVisible.testimonials} />
         </div>
 
        <div id="contact" data-animate>
          <ContactSection isVisible={isVisible.contact} />
        </div>
        
        <Footer />
         <BackToTop />
      </div>
     </ThemeProvider>
  );
};

export default Index;
