
import React from 'react';

interface FloatingSkillOrbProps {
  skill: string;
  color: string;
  size: 'small' | 'medium' | 'large';
  delay: number;
  position: { top?: string; left?: string; right?: string; bottom?: string };
}

const FloatingSkillOrb: React.FC<FloatingSkillOrbProps> = ({ 
  skill, color, size, delay, position 
}) => {
  const sizeClasses = {
    small: 'w-16 h-16 text-xs',
    medium: 'w-20 h-20 text-sm',
    large: 'w-24 h-24 text-base'
  };

  const positionStyles = {
    top: position.top,
    left: position.left,
    right: position.right,
    bottom: position.bottom,
  };

  return (
    <div 
      className={`${sizeClasses[size]} absolute rounded-full flex items-center justify-center text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer hover:scale-110 animate-orbitalFloat skill-orb`}
      style={{ 
        backgroundColor: color,
        ...positionStyles,
        animationDelay: `${delay}ms`
      }}
    >
      <span className="text-center leading-tight relative z-10">{skill}</span>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default FloatingSkillOrb;
