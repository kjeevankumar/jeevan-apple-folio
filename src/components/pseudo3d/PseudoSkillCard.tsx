
import React from 'react';
import { Badge } from "@/components/ui/badge";

interface PseudoSkillCardProps {
  title: string;
  skills: string[];
  color: string;
  delay: number;
  className?: string;
}

const PseudoSkillCard: React.FC<PseudoSkillCardProps> = ({ title, skills, color, delay, className = '' }) => {
  return (
    <div 
      className={`pseudo-3d-card group animate-card-tilt interactive-hover gpu-accelerated ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="pseudo-3d-card-inner relative overflow-hidden">
        {/* Enhanced background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-background-shift"></div>
        
        <div className="pseudo-3d-card-front relative z-10">
          <h3 className={`font-semibold text-base mb-4 ${color} truncate transition-all duration-300 group-hover:scale-105`}>{title}</h3>
          <div className="flex-1 flex flex-wrap gap-2 content-start">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-xs px-3 py-1 h-auto transition-all duration-300 hover:scale-110 interactive-hover gpu-accelerated"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="pseudo-3d-card-back">
          <div className="flex items-center justify-center h-full relative z-10">
            <div className="text-center text-white">
              <div className="text-3xl font-bold mb-2 animate-pulse">{skills.length}</div>
              <div className="text-sm mb-3">Skills</div>
              <div className="text-sm opacity-90">
                {title}
              </div>
            </div>
          </div>
          
          {/* Enhanced back card gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 animate-color-shift"></div>
        </div>
        
        {/* Card edge glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
      </div>
    </div>
  );
};

export default PseudoSkillCard;
