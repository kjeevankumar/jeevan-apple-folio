import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import AnimatedCounter from './AnimatedCounter';
import LoadingButton from './LoadingButton';
import TransitionWrapper from './TransitionWrapper';

interface AboutSectionProps {
  isVisible: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isVisible }) => {
  const { toast } = useToast();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleResumeDownload = async () => {
    setIsDownloading(true);
    
    try {
      // Convert Google Drive share link to direct download
      const fileId = "10eh84qoXZZ2l1ipWY0zg8swLkNTGTAJu";
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      
      // Create a temporary link and trigger download
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
      // Add delay to show loading state
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
    <section id="about" data-animate className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/30 via-transparent to-purple-100/30"></div>
        
        {/* Floating Background Orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-gradient-to-r from-pink-400/25 to-purple-400/25 rounded-full blur-lg animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Animated Particles */}
        <div className="absolute top-20 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-60 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <TransitionWrapper isVisible={isVisible} delay={100}>
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              About Me ✨
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
        </TransitionWrapper>

        {/* Content section with side-by-side layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Enhanced Photo */}
          <TransitionWrapper isVisible={isVisible} delay={300} direction="left" className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Enhanced gradient background */}
                <div className="absolute -inset-6 bg-gradient-to-br from-blue-200/80 via-purple-200/80 to-pink-200/80 rounded-3xl transform rotate-3 animate-pulse blur-sm"></div>
                
                {/* Main photo container */}
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-2 border-2 border-gradient-to-r from-blue-200 to-purple-200">
                  <img 
                    src="/lovable-uploads/daf2f8cf-32b9-488b-bd40-dd9697cca109.png" 
                    alt="K. Jeevan Kumar - Professional"
                    className="w-full h-auto object-cover rounded-2xl hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-purple-900/5 rounded-2xl"></div>
                </div>
                
                {/* Enhanced floating decoration elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute top-1/2 -right-4 w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full opacity-35 animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-1/4 -left-6 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '2.5s' }}></div>
              </div>
            </div>
          </TransitionWrapper>

          {/* Right Column - Enhanced Content */}
          <TransitionWrapper isVisible={isVisible} delay={500} direction="right" className="order-1 lg:order-2">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a dedicated 4th-year B.Tech student specializing in <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded animate-pulse">🤖 Artificial Intelligence and Machine Learning</span> at Malla Reddy Institute of Engineering and Technology. With a strong foundation in programming and web development, I've successfully combined theoretical knowledge with practical application.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                As a <span className="font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded animate-pulse">👨‍💻 Programming Instructor</span>, I've taught C programming from basics to advanced concepts, helping <span className="font-bold text-green-600">20+ students 🎓</span> improve their coding logic and write cleaner code. My experience extends to <span className="font-bold text-pink-600 bg-pink-50 px-2 py-1 rounded animate-pulse">🗣️ spoken English training</span> through Medha, where I developed strong communication and presentation skills.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm passionate about <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded animate-pulse">🔐 cybersecurity in automotive systems</span> and have developed an intelligent data-driven model for securing in-car communications using machine learning techniques. My project portfolio includes AI chatbots, web applications, and security solutions that demonstrate my versatility in both frontend and backend technologies.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                With expertise in <span className="font-bold text-blue-600">Python 🐍, C 💻, JavaScript ⚡, HTML/CSS 🎨</span>, and databases like <span className="font-bold text-green-600">MySQL 🗄️ and MongoDB 🍃</span>, I'm actively seeking internship opportunities and collaborations to contribute to innovative projects that make a positive impact on society.
              </p>

              {/* Enhanced Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <LoadingButton 
                  onClick={handleResumeDownload}
                  isLoading={isDownloading}
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full transform hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2 animate-pulse"
                >
                  <Download className="w-5 h-5 animate-bounce" />
                  📄 Download Resume
                </LoadingButton>
                <LoadingButton 
                  onClick={handleViewProjects}
                  variant="outline" 
                  className="border-3 border-gradient-to-r from-blue-400 to-purple-400 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 text-gray-800 hover:text-purple-700 px-8 py-4 rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  🚀 View Projects
                </LoadingButton>
              </div>
            </div>
          </TransitionWrapper>
        </div>

        {/* Enhanced Achievement Stats */}
        <TransitionWrapper isVisible={isVisible} delay={700}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-8 border-t border-gradient-to-r from-blue-200 to-purple-200">
            <TransitionWrapper isVisible={isVisible} delay={800}>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 animate-bounce">
                  <AnimatedCounter end={20} suffix="+" isVisible={isVisible} delay={200} />
                </div>
                <div className="text-sm text-blue-700 font-medium">👨‍🎓 Students Taught</div>
              </div>
            </TransitionWrapper>
            
            <TransitionWrapper isVisible={isVisible} delay={900}>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-purple-200">
                <div className="text-3xl font-bold text-purple-600 animate-bounce" style={{ animationDelay: '0.2s' }}>
                  <AnimatedCounter end={3} isVisible={isVisible} delay={400} />
                </div>
                <div className="text-sm text-purple-700 font-medium">🚀 Major Projects</div>
              </div>
            </TransitionWrapper>
            
            <TransitionWrapper isVisible={isVisible} delay={1000}>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-green-200">
                <div className="text-3xl font-bold text-green-600 animate-bounce" style={{ animationDelay: '0.4s' }}>
                  <AnimatedCounter end={6} isVisible={isVisible} delay={600} />
                </div>
                <div className="text-sm text-green-700 font-medium">🏆 Certifications</div>
              </div>
            </TransitionWrapper>
            
            <TransitionWrapper isVisible={isVisible} delay={1100}>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-pink-200">
                <div className="text-3xl font-bold text-pink-600 animate-bounce" style={{ animationDelay: '0.6s' }}>
                  <AnimatedCounter end={8.5} decimals={1} isVisible={isVisible} delay={800} />
                </div>
                <div className="text-sm text-pink-700 font-medium">📊 CGPA</div>
              </div>
            </TransitionWrapper>
          </div>
        </TransitionWrapper>
      </div>
    </section>
  );
};

export default AboutSection;
