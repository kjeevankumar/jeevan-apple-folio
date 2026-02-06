 import React, { useState, useEffect } from 'react';
 import HeroSection from '@/components/HeroSection';
 import TrustSection from '@/components/TrustSection';
 import AboutSection from '@/components/AboutSection';
 import InternshipsSection from '@/components/InternshipsSection';
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
      
      <div 
        className={`flex flex-col min-h-screen bg-background transition-opacity duration-500 ${
          isContentReady ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ overflow: 'visible' }}
      >
        <FloatingNav scrollToSection={scrollToSection} />
        
        <main className="flex-1 flex flex-col" style={{ opacity: 1 }}>
          <section id="hero">
            <HeroSection scrollToSection={scrollToSection} />
          </section>
          
          {/* Clean background sections - no fading */}
          <div className="bg-background" style={{ opacity: 1 }}>
            <section id="trust" data-animate className={isVisible.trust ? 'visible' : ''}>
              <TrustSection isVisible={isVisible.trust} />
            </section>

            <section id="about" data-animate className={isVisible.about ? 'visible' : ''}>
              <AboutSection isVisible={isVisible.about} />
            </section>

            <section id="internships" data-animate className={isVisible.internships ? 'visible' : ''}>
              <InternshipsSection isVisible={isVisible.internships} />
            </section>
            
            <section id="services" data-animate className={isVisible.services ? 'visible' : ''}>
              <ServicesSection isVisible={isVisible.services} />
            </section>

            <section id="education" data-animate className={isVisible.education ? 'visible' : ''}>
              <EducationSection isVisible={isVisible.education} />
            </section>
            
            <section id="experience" data-animate className={isVisible.experience ? 'visible' : ''}>
              <ExperienceSection isVisible={isVisible.experience} />
            </section>
            
            <section id="skills" data-animate className={isVisible.skills ? 'visible' : ''}>
              <SkillsSection isVisible={isVisible.skills} />
            </section>
            
            <section id="projects" data-animate className={isVisible.projects ? 'visible' : ''}>
              <ProjectsSection isVisible={isVisible.projects} />
            </section>
            
            <section id="achievements" data-animate className={isVisible.achievements ? 'visible' : ''}>
              <AchievementsSection isVisible={isVisible.achievements} />
            </section>

            <section id="certifications" data-animate className={isVisible.certifications ? 'visible' : ''}>
              <CertificationsSection isVisible={isVisible.certifications} />
            </section>
            
            <section id="testimonials" data-animate className={isVisible.testimonials ? 'visible' : ''}>
              <TestimonialsSection isVisible={isVisible.testimonials} />
            </section>

            <section id="contact" data-animate className={isVisible.contact ? 'visible' : ''}>
              <ContactSection isVisible={isVisible.contact} />
            </section>
          </div>
        </main>
        
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
};

export default Index;
