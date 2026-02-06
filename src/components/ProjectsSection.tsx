import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
 import { ExternalLink, Github, ArrowRight, FileText } from 'lucide-react';

interface ProjectsSectionProps {
  isVisible: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isVisible }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'LeakGuard AI',
      description: 'AI-based pipeline and tank leakage detection system using computer vision for real-time monitoring and early leak detection.',
      tech: ['Python', 'OpenCV', 'Machine Learning'],
      category: 'AI/ML',
      features: ['Real-time leak detection using CV', 'Pipeline & tank monitoring system', 'Automated alert generation'],
      impact: 'Preventing environmental damage through early detection',
      duration: 'July 2025 – Present',
      demo: '#',
      github: 'https://github.com/kjeevankumar?tab=repositories',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      hasDemo: false
    },
    {
      title: 'Portfolio Website',
      description: 'Premium personal portfolio showcasing skills and projects with modern design, smooth animations, and dark mode support.',
      tech: ['React', 'TypeScript', 'TailwindCSS'],
      category: 'Web',
      features: ['Responsive premium design', 'Dark/Light mode toggle', 'Smooth scroll animations'],
      impact: 'Showcasing technical expertise to recruiters',
      duration: 'Feb 2025 – Mar 2025',
      demo: 'https://jeevan-portfolio.lovable.app',
      github: 'https://github.com/kjeevankumar?tab=repositories',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      hasDemo: true
    },
    {
      title: 'Intelligent Security Model for In-Car Communication',
      description: 'ML-based intrusion detection model for electric vehicles using CAN bus data with SVM and Social Spider Optimization algorithm.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      category: 'Security',
      features: ['DoS attack detection with high accuracy', 'SVM + Social Spider Optimization', 'CAN bus data analysis'],
      impact: 'Enhancing automotive cybersecurity',
      duration: 'Nov 2024 – Dec 2024',
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
       <div className="container mx-auto max-w-6xl">
         <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
           <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
             Portfolio
           </span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
             Case studies showcasing innovative solutions built with cutting-edge technologies
          </p>
        </div>

        {/* Filters */}
        <div className={`flex justify-center gap-2 mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
               className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                activeFilter === filter
                   ? 'bg-primary text-primary-foreground shadow-lg'
                   : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
         <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {filteredProjects.map((project, index) => (
             <Card key={index} className="group relative bg-card border border-border/50 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 
                 {/* Category Badge */}
                 <div className="absolute top-4 left-4">
                   <span className="px-3 py-1 bg-card/90 backdrop-blur-sm text-xs font-bold text-primary rounded-lg">
                     {project.category}
                   </span>
                 </div>
                
                {/* Overlay buttons */}
                 <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {project.hasDemo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                       className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                     className={`flex items-center justify-center gap-2 py-2.5 bg-card text-foreground rounded-xl text-sm font-semibold hover:bg-card/90 transition-colors ${project.hasDemo ? 'px-4' : 'flex-1'}`}
                  >
                    <Github className="w-4 h-4" />
                    {!project.hasDemo && 'View Code'}
                  </a>
                </div>
              </div>

               <CardContent className="p-6 space-y-4">
                  {/* Title & Description */}
                   <div className="space-y-2">
                     <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  </div>

                  {/* Features */}
                   <ul className="space-y-2">
                     {project.features.slice(0, 3).map((feature, idx) => (
                       <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                   <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, techIndex) => (
                       <span key={techIndex} className="text-xs px-3 py-1.5 rounded-lg bg-secondary font-medium text-secondary-foreground">
                        {tech}
                      </span>
                    ))}
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
             <Button variant="outline" className="rounded-2xl px-8 h-12 font-semibold group hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
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
