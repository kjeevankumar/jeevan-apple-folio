
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';

interface AboutSectionProps {
  isVisible: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isVisible }) => {
  return (
    <section id="about" data-animate className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header with background photo */}
        <div className="relative mb-12 text-center">
          {/* Background photo behind the heading */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 z-0">
            <div className="w-40 h-40 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 to-purple-100/60 rounded-full transform rotate-6 animate-pulse"></div>
              <div className="absolute inset-2 bg-white/80 rounded-full shadow-xl overflow-hidden backdrop-blur-sm">
                <img 
                  src="/lovable-uploads/daf2f8cf-32b9-488b-bd40-dd9697cca109.png" 
                  alt="K. Jeevan Kumar - Professional"
                  className="w-full h-full object-cover rounded-full opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* About Me heading with background overlay */}
          <div className="relative z-10 pt-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 bg-white/80 backdrop-blur-sm rounded-lg px-6 py-3 inline-block shadow-lg">
              About Me
            </h2>
          </div>
        </div>

        {/* Content section */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a dedicated 4th-year B.Tech student specializing in <span className="font-semibold text-blue-600">Artificial Intelligence and Machine Learning</span> at Malla Reddy Institute of Engineering and Technology. With a strong foundation in programming and web development, I've successfully combined theoretical knowledge with practical application.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              As a <span className="font-semibold text-purple-600">Programming Instructor</span>, I've taught C programming from basics to advanced concepts, helping <span className="font-semibold">20+ students</span> improve their coding logic and write cleaner code. My experience extends to <span className="font-semibold text-green-600">spoken English training</span> through Medha, where I developed strong communication and presentation skills.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm passionate about <span className="font-semibold text-indigo-600">cybersecurity in automotive systems</span> and have developed an intelligent data-driven model for securing in-car communications using machine learning techniques. My project portfolio includes AI chatbots, web applications, and security solutions that demonstrate my versatility in both frontend and backend technologies.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              With expertise in <span className="font-semibold">Python, C, JavaScript, HTML/CSS</span>, and databases like <span className="font-semibold">MySQL and MongoDB</span>, I'm actively seeking internship opportunities and collaborations to contribute to innovative projects that make a positive impact on society.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-gray-300 hover:border-blue-400 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
              >
                View Projects
              </Button>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">20+</div>
                <div className="text-sm text-gray-500">Students Taught</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">3</div>
                <div className="text-sm text-gray-500">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">6</div>
                <div className="text-sm text-gray-500">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">8.5</div>
                <div className="text-sm text-gray-500">CGPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
