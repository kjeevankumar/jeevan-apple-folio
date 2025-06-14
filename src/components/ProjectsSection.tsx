
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from 'lucide-react';
import ProjectCard3D from './3d/ProjectCard3D';

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
      github: 'https://github.com/kjeevankumar?tab=repositories'
    },
    {
      title: 'An Intelligent Data-Driven Model for Securing In-Car Communications',
      description: 'Built a model to detect and stop cyber-attacks in electric vehicles using CAN bus data. Used SVM with Social Spider Optimization for high accuracy in finding DoS attacks.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      year: 'Feb 2025 - Apr 2025',
      achievement: 'Improved detection accuracy through machine learning optimization',
      demo: '#',
      github: 'https://github.com/kjeevankumar?tab=repositories'
    },
    {
      title: 'AI Chatbot Assistant',
      description: 'Created an AI chatbot using Botpress that answers technical questions and shares information about me. Built conversational flows to enable natural interaction and enhance user experience.',
      tech: ['Botpress', 'NLP', 'Conversational AI'],
      year: 'Apr 2025 - May 2025',
      achievement: 'Developed natural conversational flows for enhanced user experience',
      demo: '#',
      github: 'https://github.com/kjeevankumar?tab=repositories'
    }
  ];

  return (
    <section id="projects" data-animate className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center text-gray-900 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Featured Projects
        </h2>
        
        {/* 3D Project Showcase */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">3D Project Preview</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard3D
                key={index}
                title={project.title}
                description={project.description}
                tech={project.tech}
              />
            ))}
          </div>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{project.title.split(' ')[0]}</div>
                    <div className="text-sm text-gray-600">{project.year.split(' - ')[0]}</div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-3 text-sm">{project.description}</p>
                
                <div className="mb-3">
                  <div className="text-sm font-medium text-green-600 mb-2">Key Achievement:</div>
                  <div className="text-sm text-gray-700 italic">{project.achievement}</div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">{tech}</Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
                    <ExternalLink className="w-3 h-3" />
                    Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex items-center gap-2"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-3 h-3" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
