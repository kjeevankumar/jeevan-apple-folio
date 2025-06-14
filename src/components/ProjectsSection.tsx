
import React from 'react';
import PseudoProjectCard from './pseudo3d/PseudoProjectCard';

interface ProjectsSectionProps {
  isVisible: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isVisible }) => {
  const projects = [
    {
      title: 'My Portfolio Website',
      description: 'Built a personal portfolio website to showcase my skills, education, and projects in a clean and responsive format.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      year: 'Feb 2023 - May 2023',
      achievement: 'Created a fully responsive design with smooth animations',
      demo: '#',
      github: 'https://github.com/kjeevankumar?tab=repositories',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop'
    },
    {
      title: 'An Intelligent Data-Driven Model for Securing In-Car Communications',
      description: 'Built a model to detect and stop cyber-attacks in electric vehicles using CAN bus data. Used SVM with Social Spider Optimization for high accuracy in finding DoS attacks.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      year: 'Feb 2025 - Apr 2025',
      achievement: 'Improved detection accuracy through machine learning optimization',
      demo: '#',
      github: 'https://github.com/kjeevankumar?tab=repositories',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop'
    },
    {
      title: 'AI Chatbot Assistant',
      description: 'Created an AI chatbot using Botpress that answers technical questions and shares information about me. Built conversational flows to enable natural interaction and enhance user experience.',
      tech: ['Botpress', 'NLP', 'Conversational AI'],
      year: 'Apr 2025 - May 2025',
      achievement: 'Developed natural conversational flows for enhanced user experience',
      demo: '#',
      github: 'https://github.com/kjeevankumar?tab=repositories',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section id="projects" data-animate className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center text-gray-900 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Featured Projects
        </h2>
        
        <div className={`pseudo-3d-container grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {projects.map((project, index) => (
            <PseudoProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              year={project.year}
              achievement={project.achievement}
              demo={project.demo}
              github={project.github}
              image={project.image}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
