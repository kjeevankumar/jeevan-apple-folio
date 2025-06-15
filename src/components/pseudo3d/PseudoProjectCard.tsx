
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
    <div 
      className="pseudo-3d-project-card group animate-bounce-gentle"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="pseudo-3d-project-inner bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 border-2 border-transparent hover:border-gradient-to-r hover:from-indigo-400 hover:to-pink-400 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
        <div className="h-48 relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Enhanced gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center transform group-hover:scale-110 transition-transform duration-500 z-10">
              <div className="text-2xl font-bold text-white mb-2 drop-shadow-lg animate-pulse">{title.split(' ')[0]}</div>
              <div className="text-sm text-gray-200 drop-shadow-md bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                {year.split(' - ')[0]}
              </div>
            </div>
          </div>
          
          {/* Magic sparkle effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/30 via-transparent to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-rainbow"></div>
        </div>
        
        <div className="p-6 relative overflow-hidden">
          {/* Card background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-500 animate-wiggle">
              {title}
            </h3>
            <p className="text-gray-600 mb-3 text-sm group-hover:text-gray-700 transition-colors duration-300">
              {description}
            </p>
            
            <div className="mb-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 group-hover:from-green-100 group-hover:to-emerald-100 transition-all duration-300">
              <div className="text-sm font-medium bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2 animate-bounce">
                🎯 Key Achievement:
              </div>
              <div className="text-sm text-gray-700 italic font-medium">{achievement}</div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {tech.map((techItem, techIndex) => (
                <Badge 
                  key={techIndex} 
                  variant="outline" 
                  className="text-xs transform hover:scale-110 transition-all duration-300 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-300 text-blue-700 hover:from-purple-100 hover:to-pink-100 hover:border-purple-400 hover:text-purple-800 animate-wiggle font-semibold"
                  style={{ animationDelay: `${techIndex * 0.1}s` }}
                >
                  {techItem}
                </Badge>
              ))}
            </div>
            
            <div className="flex gap-3">
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 flex items-center gap-2 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl animate-glow-pulse font-semibold"
                onClick={handleDemoClick}
              >
                <ExternalLink className="w-3 h-3 animate-bounce" />
                {hasDemo ? '🚀 Demo' : '👀 View Code'}
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="flex items-center gap-2 transform hover:scale-110 transition-all duration-300 border-2 border-gray-300 hover:border-purple-400 hover:bg-purple-50 hover:text-purple-700 interactive-hover font-semibold"
                onClick={() => window.open(github, '_blank')}
              >
                <Github className="w-3 h-3 animate-bounce" style={{ animationDelay: '0.2s' }} />
                📝 Code
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PseudoProjectCard;
