
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
    } else {
      window.open(github, '_blank');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-2xl font-bold mb-2">{title.split(' ')[0]}</div>
            <div className="text-sm text-gray-200">{year.split(' - ')[0]}</div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          {title}
        </h3>
        <p className="text-gray-600 mb-3 text-sm">
          {description}
        </p>
        
        <div className="mb-3 p-3 bg-green-50 rounded-lg border border-green-200">
          <div className="text-sm font-medium text-green-600 mb-2">
            🎯 Key Achievement:
          </div>
          <div className="text-sm text-gray-700 italic">{achievement}</div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((techItem, techIndex) => (
            <Badge 
              key={techIndex} 
              variant="outline" 
              className="text-xs"
            >
              {techItem}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3">
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 flex items-center gap-2"
            onClick={handleDemoClick}
          >
            <ExternalLink className="w-3 h-3" />
            {hasDemo ? 'Demo' : 'View Code'}
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => window.open(github, '_blank')}
          >
            <Github className="w-3 h-3" />
            Code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PseudoProjectCard;
