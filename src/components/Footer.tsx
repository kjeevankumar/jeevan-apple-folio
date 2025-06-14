
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <p className="text-gray-600">
            Made with ❤️ by K. Jeevan Kumar
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#education" className="text-gray-600 hover:text-blue-600 transition-colors">Education</a>
            <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
