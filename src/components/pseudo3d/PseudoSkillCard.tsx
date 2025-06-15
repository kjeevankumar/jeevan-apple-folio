
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
  const getProficiencyLevel = (skill: string) => {
    // Advanced skills
    const advanced = ['React', 'JavaScript', 'HTML5', 'CSS3', 'Python', 'C/C++', 'Git', 'VS Code', 'Problem Solving'];
    // Intermediate skills
    const intermediate = ['TypeScript', 'Node.js', 'MySQL', 'MongoDB', 'Data Structures', 'Algorithms'];
    
    if (advanced.some(s => skill.toLowerCase().includes(s.toLowerCase()))) return 'Advanced';
    if (intermediate.some(s => skill.toLowerCase().includes(s.toLowerCase()))) return 'Intermediate';
    return 'Familiar';
  };

  const getProficiencyColor = (level: string) => {
    switch (level) {
      case 'Advanced': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div 
      className={`pseudo-3d-card group ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="pseudo-3d-card-inner">
        <div className="pseudo-3d-card-front">
          <h3 className={`font-semibold text-base mb-3 ${color} truncate`}>{title}</h3>
          <div className="flex-1 flex flex-wrap gap-1.5 content-start max-h-32 overflow-y-auto">
            {skills.map((skill, index) => {
              const proficiency = getProficiencyLevel(skill);
              return (
                <div key={index} className="flex flex-col items-center gap-1">
                  <Badge variant="secondary" className="text-xs px-2 py-1 h-auto">
                    {skill}
                  </Badge>
                  <div className={`text-xs px-1.5 py-0.5 rounded-full border ${getProficiencyColor(proficiency)}`}>
                    {proficiency}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="pseudo-3d-card-back">
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-white">
              <div className="text-3xl font-bold mb-2">{skills.length}</div>
              <div className="text-sm mb-3">Skills</div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span>Advanced:</span>
                  <span className="font-semibold">{skills.filter(s => getProficiencyLevel(s) === 'Advanced').length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Intermediate:</span>
                  <span className="font-semibold">{skills.filter(s => getProficiencyLevel(s) === 'Intermediate').length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Familiar:</span>
                  <span className="font-semibold">{skills.filter(s => getProficiencyLevel(s) === 'Familiar').length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PseudoSkillCard;
