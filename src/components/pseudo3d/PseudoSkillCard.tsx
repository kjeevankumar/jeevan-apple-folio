
import React from 'react';
import { Badge } from "@/components/ui/badge";

interface PseudoSkillCardProps {
  title: string;
  skills: string[];
  color: string;
  delay: number;
}

const PseudoSkillCard: React.FC<PseudoSkillCardProps> = ({ title, skills, color, delay }) => {
  return (
    <div 
      className="pseudo-3d-card group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="pseudo-3d-card-inner">
        <div className="pseudo-3d-card-front">
          <h3 className={`font-semibold text-lg mb-3 ${color}`}>{title}</h3>
          <div className="flex-1 flex flex-wrap gap-2 content-start">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div className="pseudo-3d-card-back">
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-white">
              <div className="text-2xl font-bold mb-2">{skills.length}</div>
              <div className="text-sm">Skills</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PseudoSkillCard;
