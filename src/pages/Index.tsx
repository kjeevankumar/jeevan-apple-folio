
import React, { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingNav from '@/components/FloatingNav';
import PageLoader from '@/components/PageLoader';

interface VisibilityState {
  [key: string]: boolean;
}

const Index = () => {
  const [isVisible, setIsVisible] = useState<VisibilityState>({});
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isContentReady, setIsContentReady] = useState(false);

  useEffect(() => {
    // Simulate initial loading time
    const loadingTimer = setTimeout(() => {
      setIsPageLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (!isPageLoading) {
      // Small delay before showing content for smooth transition
      const contentTimer = setTimeout(() => {
        setIsContentReady(true);
      }, 300);

      return () => clearTimeout(contentTimer);
    }
  }, [isPageLoading]);

  useEffect(() => {
    if (!isContentReady) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(`Section ${entry.target.id} visibility: ${entry.isIntersecting}`);
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
            
            // Add scroll-triggered animation class
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    const sections = document.querySelectorAll('[data-animate]');
    console.log('Observing sections:', sections.length);
    sections.forEach((section) => {
      console.log('Observing section:', section.id);
      section.classList.add('scroll-triggered');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [isContentReady]);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLoadingComplete = () => {
    setIsPageLoading(false);
  };

  return (
    <>
      <PageLoader isLoading={isPageLoading} onLoadingComplete={handleLoadingComplete} />
      
      <div className={`min-h-screen bg-white transition-opacity duration-1000 gpu-accelerated ${
        isContentReady ? 'opacity-100' : 'opacity-0'
      }`}>
        <FloatingNav scrollToSection={scrollToSection} />
        <section id="hero" className="section-reveal">
          <HeroSection scrollToSection={scrollToSection} />
        </section>
        <div className="scroll-triggered">
          <AboutSection isVisible={isVisible.about} />
        </div>
        <div className="scroll-triggered">
          <EducationSection isVisible={isVisible.education} />
        </div>
        <div className="scroll-triggered">
          <ExperienceSection isVisible={isVisible.experience} />
        </div>
        <div className="scroll-triggered">
          <SkillsSection isVisible={isVisible.skills} />
        </div>
        <div className="scroll-triggered">
          <ProjectsSection isVisible={isVisible.projects} />
        </div>
        <div className="scroll-triggered">
          <CertificationsSection isVisible={isVisible.certifications} />
        </div>
        <div className="scroll-triggered">
          <ContactSection isVisible={isVisible.contact} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Index;
