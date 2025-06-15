
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PseudoSkillCardProps {
  title: string;
  skills: string[];
  color: string;
  delay: number;
  className?: string;
}

const PseudoSkillCard: React.FC<PseudoSkillCardProps> = ({ title, skills, color, delay, className = '' }) => {
  return (
    <Card className={`hover:shadow-lg transition-all duration-300 hover:scale-105 ${className}`}>
      <CardHeader>
        <CardTitle className={`${color} text-lg`}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs px-3 py-1 h-auto transition-all duration-300 hover:scale-110"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PseudoSkillCard;
