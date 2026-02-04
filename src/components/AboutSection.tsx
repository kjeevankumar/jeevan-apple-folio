import React, { useState } from 'react';
import { Download, Code, Brain, Globe, Zap } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

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

  const highlights = [
    { icon: Brain, label: 'AI/ML Focus', description: 'Specializing in machine learning and intelligent systems' },
    { icon: Globe, label: 'Full Stack', description: 'Building end-to-end web applications' },
    { icon: Code, label: 'Clean Code', description: 'Writing maintainable and efficient code' },
    { icon: Zap, label: 'Fast Learner', description: 'Quick to adapt to new technologies' },
  ];

  const techStack = [
    'Python', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'TailwindCSS', 'MySQL', 'MongoDB'
  ];

  return (
    <section id="about" data-animate className="section-container bg-background">
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about building technology that makes a positive impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Image */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl" />
              <div className="relative bg-card rounded-2xl shadow-soft overflow-hidden border border-border/50">
                <img 
                  src="/lovable-uploads/daf2f8cf-32b9-488b-bd40-dd9697cca109.png" 
                  alt="K. Jeevan Kumar"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Quick Info */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="skill-badge">🎓 B.Tech AI/ML - Final Year</span>
                <span className="skill-badge">📍 CGPA: 8.5/10</span>
              </div>

              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Final year B.Tech student specializing in <strong className="text-foreground">Artificial Intelligence and Machine Learning</strong> at MRIET, Hyderabad</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Experience as a <strong className="text-foreground">Programming Instructor</strong>, teaching C programming to 20+ students</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Active <strong className="text-foreground">Hackathon Participant</strong> with experience in team-based rapid development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Passionate about <strong className="text-foreground">cybersecurity in automotive systems</strong> and building intelligent solutions</span>
                </li>
              </ul>
            </div>

            {/* Quick Highlights */}
            <div className="grid grid-cols-2 gap-4 py-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{item.label}</h4>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span key={index} className="skill-badge text-xs">{tech}</span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-3 pt-4">
              <Button 
                onClick={handleResumeDownload}
                disabled={isDownloading}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
              >
                {isDownloading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Downloading...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-border/50 max-w-4xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { value: '20+', label: 'Students Taught' },
            { value: '3+', label: 'Major Projects' },
            { value: '6+', label: 'Certifications' },
            { value: '8.5', label: 'CGPA' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors">
              <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
