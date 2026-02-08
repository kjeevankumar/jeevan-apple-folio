import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X, Target, Lightbulb, Settings, BarChart3, ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  features: string[];
  impact: string;
  duration: string;
  demo: string;
  github: string;
  image: string;
  hasDemo: boolean;
  caseStudy?: {
    problem: string;
    solution: string;
    methodology: string;
    results: string[];
    futureImprovements: string[];
  };
}

interface CaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const defaultCaseStudy = {
    problem: `The need for ${project.title} arose from real-world challenges in ${project.category.toLowerCase()} domain requiring innovative technological solutions.`,
    solution: project.description,
    methodology: `Implemented using ${project.tech.join(', ')} with focus on scalability, performance, and maintainability.`,
    results: project.features,
    futureImprovements: [
      'Enhanced performance optimization',
      'Additional feature integrations',
      'Improved user experience',
      'Extended testing coverage'
    ]
  };

  const caseStudy = project.caseStudy || defaultCaseStudy;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-0">
        {/* Header Image */}
        <div className="relative h-48 md:h-64 overflow-hidden rounded-t-3xl">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-bold rounded-lg mb-2">
              {project.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">{project.title}</h2>
            <p className="text-muted-foreground text-sm mt-1">{project.duration}</p>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Problem Statement */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <Target className="w-5 h-5" />
              <h3 className="text-lg font-bold text-foreground">Problem Statement</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{caseStudy.problem}</p>
          </div>

          {/* Solution Approach */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <Lightbulb className="w-5 h-5" />
              <h3 className="text-lg font-bold text-foreground">Solution Approach</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <Settings className="w-5 h-5" />
              <h3 className="text-lg font-bold text-foreground">Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-secondary rounded-xl text-sm font-medium text-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <BarChart3 className="w-5 h-5" />
              <h3 className="text-lg font-bold text-foreground">Key Results</h3>
            </div>
            <ul className="space-y-2">
              {caseStudy.results.map((result, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  {result}
                </li>
              ))}
            </ul>
          </div>

          {/* Future Improvements */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <ArrowRight className="w-5 h-5" />
              <h3 className="text-lg font-bold text-foreground">Future Improvements</h3>
            </div>
            <ul className="grid grid-cols-2 gap-2">
              {caseStudy.futureImprovements.map((improvement, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1 h-1 bg-accent rounded-full" />
                  {improvement}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
            {project.hasDemo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Demo
                </Button>
              </a>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="outline" className="w-full h-12 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary">
                <Github className="w-4 h-4 mr-2" />
                View Source Code
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyModal;
