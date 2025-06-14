
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

interface VisibilityState {
  [key: string]: boolean;
}

const Index = () => {
  const [isVisible, setIsVisible] = useState<VisibilityState>({});

  useEffect(() => {
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
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

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

  return (
    <div className="min-h-screen bg-white">
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
  );
};

export default Index;
