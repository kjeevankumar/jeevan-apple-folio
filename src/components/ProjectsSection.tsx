
import React from 'react';
import PseudoProjectCard from './pseudo3d/PseudoProjectCard';

interface ProjectsSectionProps {
  isVisible: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isVisible }) => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Built a personal portfolio website to showcase my skills, education, and projects in a clean and responsive format.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      year: '2024 - 2025',
      achievement: 'Created a fully responsive design with smooth animations',
      demo: 'https://jeevan-portfolio.lovable.app',
      github: 'https://github.com/kjeevankumar?tab=repositories',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      hasDemo: true
    },
    {
      title: 'Intelligent Data-Driven Security Model',
      description: 'Built a model to detect and stop cyber-attacks in electric vehicles using CAN bus data. Used SVM with Social Spider Optimization for high accuracy in finding DoS attacks.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      year: 'Feb 2025 - Apr 2025',
      achievement: 'Improved detection accuracy through machine learning optimization',
      demo: '#',
      github: 'https://github.com/kjeevankumar?tab=repositories',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      hasDemo: false
    },
    {
      title: 'AI Chatbot Assistant',
      description: 'Created an AI chatbot using Botpress that answers technical questions and shares information about me. Built conversational flows to enable natural interaction and enhance user experience.',
      tech: ['Botpress', 'NLP', 'Conversational AI'],
      year: 'Apr 2025 - May 2025',
      achievement: 'Developed natural conversational flows for enhanced user experience',
      demo: '#',
      github: 'https://github.com/kjeevankumar?tab=repositories',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      hasDemo: false
    }
  ];

  return (
    <section id="projects" data-animate className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-20 w-40 h-40 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full animate-floatingOrb"></div>
        <div className="absolute top-32 right-16 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full animate-floatingOrb" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full animate-floatingOrb" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-40 right-1/4 w-24 h-24 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-full animate-floatingOrb" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className={`text-4xl font-bold text-center mb-4 transition-all duration-1000 animated-gradient-text-contact ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}>
          Featured Projects
        </h2>
        <p className={`text-center text-gray-600 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}>
          Innovative solutions built with cutting-edge technologies
        </p>
        
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}>
          {projects.map((project, index) => (
            <div key={index} className="hover-tilt">
              <PseudoProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                year={project.year}
                achievement={project.achievement}
                demo={project.demo}
                github={project.github}
                image={project.image}
                hasDemo={project.hasDemo}
                delay={index * 200}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
