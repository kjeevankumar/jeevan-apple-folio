
import React from 'react';

interface FloatingSkillOrbProps {
  skill: string;
  color: string;
  size: 'small' | 'medium' | 'large';
  delay: number;
  position: { top: string; left: string };
}

const FloatingSkillOrb: React.FC<FloatingSkillOrbProps> = ({ 
  skill, color, size, delay, position 
}) => {
  const sizeClasses = {
    small: 'w-16 h-16 text-xs',
    medium: 'w-20 h-20 text-sm',
    large: 'w-24 h-24 text-base'
  };

  return (
    <div 
      className={`floating-skill-orb ${sizeClasses[size]} absolute rounded-full flex items-center justify-center text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer`}
      style={{ 
        backgroundColor: color,
        top: position.top,
        left: position.left,
        animationDelay: `${delay}ms`
      }}
    >
      <span className="text-center leading-tight">{skill}</span>
    </div>
  );
};

export default FloatingSkillOrb;
