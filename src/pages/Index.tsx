
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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLoadingComplete = () => {
    setIsPageLoading(false);
  };

  return (
    <>
      <PageLoader isLoading={isPageLoading} onLoadingComplete={handleLoadingComplete} />
      
      <div className={`min-h-screen bg-white transition-opacity duration-1000 ${
        isContentReady ? 'opacity-100' : 'opacity-0'
      }`}>
        <FloatingNav scrollToSection={scrollToSection} />
        <section id="hero">
          <HeroSection scrollToSection={scrollToSection} />
        </section>
        <AboutSection isVisible={isVisible.about} />
        <EducationSection isVisible={isVisible.education} />
        <ExperienceSection isVisible={isVisible.experience} />
        <SkillsSection isVisible={isVisible.skills} />
        <ProjectsSection isVisible={isVisible.projects} />
        <CertificationsSection isVisible={isVisible.certifications} />
        <ContactSection isVisible={isVisible.contact} />
        <Footer />
      </div>
    </>
  );
};

export default Index;
