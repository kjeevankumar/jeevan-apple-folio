
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectsSectionProps {
  isVisible: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isVisible }) => {
  const projects = [
    {
      title: 'Student Result Management System',
      description: 'A comprehensive system for managing student results and academic records.',
      tech: ['Python', 'Database Management'],
      demo: '#',
      github: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio showcasing projects and skills.',
      tech: ['ReactJS', 'Tailwind CSS'],
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
        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-blue-600">{project.title.split(' ')[0]}</div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">{tech}</Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline">
                    GitHub
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
