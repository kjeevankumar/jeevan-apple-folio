
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from 'lucide-react';

interface PseudoProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  year: string;
  achievement: string;
  demo: string;
  github: string;
  image: string;
  hasDemo?: boolean;
  delay: number;
}

const PseudoProjectCard: React.FC<PseudoProjectCardProps> = ({ 
  title, description, tech, year, achievement, demo, github, image, hasDemo = true, delay 
}) => {
  const handleDemoClick = () => {
    if (hasDemo && demo !== '#') {
      window.open(demo, '_blank');
    }
  };

  return (
    <div 
      className="pseudo-3d-project-card group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="pseudo-3d-project-inner">
        <div className="h-48 relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center transform group-hover:scale-110 transition-transform duration-500 z-10">
              <div className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{title.split(' ')[0]}</div>
              <div className="text-sm text-gray-200 drop-shadow-md">{year.split(' - ')[0]}</div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 mb-3 text-sm">{description}</p>
          
          <div className="mb-3">
            <div className="text-sm font-medium text-green-600 mb-2">Key Achievement:</div>
            <div className="text-sm text-gray-700 italic">{achievement}</div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((techItem, techIndex) => (
              <Badge key={techIndex} variant="outline" className="text-xs transform hover:scale-105 transition-transform duration-200">{techItem}</Badge>
            ))}
          </div>
          
          <div className="flex gap-3">
            <Button 
              size="sm" 
              className={`flex items-center gap-2 transform transition-all duration-200 ${
                hasDemo 
                  ? 'bg-blue-600 hover:bg-blue-700 hover:scale-105' 
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
              onClick={handleDemoClick}
              disabled={!hasDemo}
            >
              <ExternalLink className="w-3 h-3" />
              {hasDemo ? 'Demo' : 'Coming Soon'}
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="flex items-center gap-2 transform hover:scale-105 transition-all duration-200"
              onClick={() => window.open(github, '_blank')}
            >
              <Github className="w-3 h-3" />
              Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PseudoProjectCard;
