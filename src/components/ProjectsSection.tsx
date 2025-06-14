
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsSectionProps {
  isVisible: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isVisible }) => {
  const projects = [
    {
      title: 'AI Chatbot Assistant',
      description: 'Intelligent conversational AI built with Botpress and NLP technologies. Answers user queries with context-aware responses and natural language understanding.',
      tech: ['Botpress', 'NLP', 'JavaScript', 'API Integration'],
      year: '2025',
      achievement: 'Improved response accuracy by 35% through advanced NLP models',
      demo: '#',
      github: '#'
    },
    {
      title: 'EV Cybersecurity Detection System',
      description: 'Advanced machine learning system using SVM + Social Spider Optimization to detect CAN Bus DoS attacks in electric vehicles.',
      tech: ['Python', 'SVM', 'Machine Learning', 'Cybersecurity'],
      year: '2025',
      achievement: 'Improved detection accuracy by 18% using SVM+SSO algorithm',
      demo: '#',
      github: '#'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and optimized performance.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      year: '2024',
      achievement: '100% responsive design with 95+ Lighthouse performance score',
      demo: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" data-animate className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center text-gray-900 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Featured Projects
        </h2>
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{project.title.split(' ')[0]}</div>
                    <div className="text-sm text-gray-600">{project.year}</div>
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
                  <Button size="sm" variant="outline" className="flex items-center gap-2">
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
