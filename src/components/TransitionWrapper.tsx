
import React, { ReactNode } from 'react';

interface TransitionWrapperProps {
  children: ReactNode;
  isVisible: boolean;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const TransitionWrapper: React.FC<TransitionWrapperProps> = ({ 
  children, 
  isVisible, 
  delay = 0, 
  direction = 'up',
  className = ''
}) => {
  const getTransformClass = () => {
    switch (direction) {
      case 'up':
        return isVisible ? 'translate-y-0' : 'translate-y-10';
      case 'down':
        return isVisible ? 'translate-y-0' : '-translate-y-10';
      case 'left':
        return isVisible ? 'translate-x-0' : 'translate-x-10';
      case 'right':
        return isVisible ? 'translate-x-0' : '-translate-x-10';
      default:
        return isVisible ? 'translate-y-0' : 'translate-y-10';
    }
  };

  return (
    <div 
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${getTransformClass()} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

export default TransitionWrapper;
