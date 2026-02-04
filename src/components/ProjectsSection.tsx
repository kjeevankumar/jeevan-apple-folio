import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface ProjectsSectionProps {
  isVisible: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isVisible }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Modern personal portfolio showcasing skills, education, and projects with responsive design and smooth animations.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      category: 'Web',
      features: ['Responsive design', 'Smooth animations', 'Contact form integration'],
      demo: 'https://jeevan-portfolio.lovable.app',
      github: 'https://github.com/kjeevankumar?tab=repositories',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      hasDemo: true
    },
    {
      title: 'Intelligent Security Model',
      description: 'ML-based model to detect cyber-attacks in electric vehicles using CAN bus data with SVM and Social Spider Optimization.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      category: 'AI/ML',
      features: ['DoS attack detection', 'High accuracy classification', 'Real-time analysis'],
      demo: '#',
      github: 'https://github.com/kjeevankumar?tab=repositories',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      hasDemo: false
    },
    {
      title: 'AI Chatbot Assistant',
      description: 'Intelligent chatbot using Botpress that answers technical questions with natural conversational flows.',
      tech: ['Botpress', 'NLP', 'Conversational AI'],
      category: 'AI/ML',
      features: ['Natural language processing', 'Custom conversation flows', 'Technical Q&A'],
      demo: '#',
      github: 'https://github.com/kjeevankumar?tab=repositories',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      hasDemo: false
    }
  ];

  const filters = ['All', 'Web', 'AI/ML', 'Security'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" data-animate className="section-container bg-background">
      <div className="container mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Innovative solutions built with cutting-edge technologies
          </p>
        </div>

        {/* Filters */}
        <div className={`flex justify-center gap-2 mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {filteredProjects.map((project, index) => (
            <Card key={index} className="card-premium border-0 overflow-hidden group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay buttons */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {project.hasDemo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 bg-white text-foreground rounded-lg text-sm font-medium hover:bg-white/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 py-2 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors ${project.hasDemo ? 'px-4' : 'flex-1'}`}
                  >
                    <Github className="w-4 h-4" />
                    {!project.hasDemo && 'View Code'}
                  </a>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Category */}
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">
                    {project.category}
                  </span>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="w-1 h-1 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All */}
        <div className={`text-center mt-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a 
            href="https://github.com/kjeevankumar?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="rounded-full px-6 group">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
