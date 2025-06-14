
import React from 'react';
import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  isVisible: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isVisible }) => {
  return (
    <section id="about" data-animate className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full transform rotate-6"></div>
              <div className="absolute inset-2 bg-white rounded-full shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
                <img 
                  src="/lovable-uploads/daf2f8cf-32b9-488b-bd40-dd9697cca109.png" 
                  alt="K. Jeevan Kumar - Professional"
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/5 via-transparent to-transparent rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Currently a 4th year B.Tech student at Malla Reddy Institute of Engineering and Technology, specializing in Artificial Intelligence and Machine Learning. I have hands-on experience in web development, teaching, and machine learning research.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My strengths include coding, creativity, and continuous learning. I have experience as a programming instructor, spoken English trainee, and hackathon participant. I believe in building technology that makes a positive impact on society.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm passionate about AI/ML applications, cybersecurity in automotive systems, and creating intelligent solutions that solve real-world problems. Always eager to collaborate on innovative projects and learn from fellow developers.
            </p>
            <Button variant="outline" className="hover:bg-blue-50 border-blue-200 text-blue-600 hover:border-blue-300 transition-all duration-300">
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
