
import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import AnimatedCounter from './AnimatedCounter';
import LoadingButton from './LoadingButton';

interface AboutSectionProps {
  isVisible: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isVisible }) => {
  const { toast } = useToast();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleResumeDownload = async () => {
    setIsDownloading(true);
    
    try {
      const fileId = "10eh84qoXZZ2l1ipWY0zg8swLkNTGTAJu";
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'K_Jeevan_Kumar_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "Download Started",
        description: "Your resume download has been initiated successfully!",
      });
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Download Error",
        description: "There was an issue downloading the resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setTimeout(() => {
        setIsDownloading(false);
      }, 1500);
    }
  };

  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" data-animate className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`order-2 lg:order-1 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden p-2">
                <img 
                  src="/lovable-uploads/daf2f8cf-32b9-488b-bd40-dd9697cca109.png" 
                  alt="K. Jeevan Kumar - Professional"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className={`order-1 lg:order-2 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a dedicated 4th-year B.Tech student specializing in <span className="font-bold text-blue-600">Artificial Intelligence and Machine Learning</span> at Malla Reddy Institute of Engineering and Technology. With a strong foundation in programming and web development, I've successfully combined theoretical knowledge with practical application.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                As a <span className="font-bold text-purple-600">Programming Instructor</span>, I've taught C programming from basics to advanced concepts, helping <span className="font-bold text-green-600">20+ students</span> improve their coding logic and write cleaner code. My experience extends to <span className="font-bold text-pink-600">spoken English training</span> through Medha, where I developed strong communication and presentation skills.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm passionate about <span className="font-bold text-indigo-600">cybersecurity in automotive systems</span> and have developed an intelligent data-driven model for securing in-car communications using machine learning techniques. My project portfolio includes AI chatbots, web applications, and security solutions that demonstrate my versatility in both frontend and backend technologies.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                With expertise in <span className="font-bold text-blue-600">Python, C, JavaScript</span>, and databases like <span className="font-bold text-green-600">MySQL and MongoDB</span>, I'm actively seeking internship opportunities and collaborations to contribute to innovative projects that make a positive impact on society.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <LoadingButton 
                  onClick={handleResumeDownload}
                  isLoading={isDownloading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </LoadingButton>
                <LoadingButton 
                  onClick={handleViewProjects}
                  variant="outline" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg transition-all duration-300"
                >
                  View Projects
                </LoadingButton>
              </div>
            </div>
          </div>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-8 border-t border-gray-200 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-blue-600">
              <AnimatedCounter end={20} suffix="+" isVisible={isVisible} delay={200} />
            </div>
            <div className="text-sm text-gray-600 font-medium">Students Taught</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-purple-600">
              <AnimatedCounter end={3} isVisible={isVisible} delay={400} />
            </div>
            <div className="text-sm text-gray-600 font-medium">Major Projects</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-green-600">
              <AnimatedCounter end={6} isVisible={isVisible} delay={600} />
            </div>
            <div className="text-sm text-gray-600 font-medium">Certifications</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-pink-600">
              <AnimatedCounter end={8.5} decimals={1} isVisible={isVisible} delay={800} />
            </div>
            <div className="text-sm text-gray-600 font-medium">CGPA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
