
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
      className={`floating-skill-orb ${sizeClasses[size]} absolute rounded-full flex items-center justify-center text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer animate-dynamic-float interactive-hover gpu-accelerated skill-orb-enhanced`}
      style={{ 
        backgroundColor: color,
        top: position.top,
        left: position.left,
        animationDelay: `${delay}ms`
      }}
    >
      <span className="text-center leading-tight relative z-10">{skill}</span>
      
      {/* Enhanced ripple effect */}
      <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300 animate-ripple"></div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full animate-pulse-glow" style={{ boxShadow: `0 0 20px ${color}40` }}></div>
    </div>
  );
};

export default FloatingSkillOrb;
