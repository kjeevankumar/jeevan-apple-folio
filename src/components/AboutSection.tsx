 import React, { useState } from 'react';
 import { Download, Code, Brain, Globe, Zap, Briefcase, GraduationCap, Trophy, Cpu } from 'lucide-react';
 import { useToast } from "@/hooks/use-toast";
 import { Button } from "@/components/ui/button";
 import { Card, CardContent } from "@/components/ui/card";

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
     { icon: Brain, label: 'AI/ML Focus', description: 'Machine learning & intelligent systems' },
     { icon: Globe, label: 'Full Stack', description: 'End-to-end web applications' },
     { icon: Code, label: 'Clean Code', description: 'Maintainable & efficient code' },
     { icon: Zap, label: 'Fast Learner', description: 'Quick technology adoption' },
  ];

  const techStack = [
     'Python', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'TailwindCSS'
  ];
 
   const currentWork = [
     'Placement preparation (DSA + System Design)',
     'AI-based security models',
     'Full-stack applications'
   ];

  return (
     <section id="about" data-animate className="section-container bg-background">
       <div className="container mx-auto max-w-6xl">
         <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
           <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
             About Me
           </span>
           <h2 className="section-title">Passionate About Building Technology</h2>
           <p className="section-subtitle">
             Creating innovative solutions that make a positive impact
           </p>
        </div>

         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
               <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
               <div className="relative bg-card rounded-3xl shadow-xl overflow-hidden border border-border/50">
                <img 
                  src="/lovable-uploads/daf2f8cf-32b9-488b-bd40-dd9697cca109.png" 
                  alt="K. Jeevan Kumar"
                  className="w-full h-auto object-cover"
                />
                 {/* Floating label */}
                 <div className="absolute top-4 left-4 px-4 py-2 bg-card/90 backdrop-blur-sm rounded-full border border-border/50 shadow-lg">
                   <span className="text-sm font-semibold text-foreground flex items-center gap-2">
                     <Cpu className="w-4 h-4 text-primary" />
                     AI/ML + Full Stack
                   </span>
                 </div>
              </div>
            </div>
          </div>

          {/* Content */}
           <div className={`space-y-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Quick Info */}
             <div className="space-y-5">
              <div className="flex flex-wrap gap-2">
                 <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-semibold">
                   <GraduationCap className="w-4 h-4" />
                   B.Tech AI/ML - Final Year
                 </span>
                 <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-xl text-sm font-semibold">
                   <Trophy className="w-4 h-4" />
                   CGPA: 8.5/10
                 </span>
              </div>

               <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                   <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                   <span>Final year B.Tech student specializing in <strong className="text-foreground">Artificial Intelligence and Machine Learning</strong> at MRIET, Hyderabad.</span>
                </li>
                <li className="flex items-start gap-3">
                   <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                   <span>Experience as a <strong className="text-foreground">Programming Instructor</strong>, teaching C programming to 20+ students.</span>
                </li>
                <li className="flex items-start gap-3">
                   <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                   <span>Active <strong className="text-foreground">Hackathon Participant</strong> with experience in rapid prototyping.</span>
                </li>
                <li className="flex items-start gap-3">
                   <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                   <span>Passionate about <strong className="text-foreground">cybersecurity in automotive systems</strong> and intelligent solutions.</span>
                </li>
              </ul>
            </div>

             {/* What I'm Working On */}
             <Card className="bg-secondary/50 border-border/50 rounded-2xl">
               <CardContent className="p-5">
                 <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                   <Briefcase className="w-4 h-4 text-primary" />
                   What I'm Currently Working On
                 </h4>
                 <ul className="space-y-2">
                   {currentWork.map((item, index) => (
                     <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                       <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                       {item}
                     </li>
                   ))}
                 </ul>
               </CardContent>
             </Card>
 
            {/* Quick Highlights */}
             <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                 <div key={index} className="group flex items-start gap-3 p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                   <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                     <h4 className="text-sm font-bold text-foreground">{item.label}</h4>
                     <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
             <div className="space-y-4">
               <h4 className="text-sm font-bold text-foreground">Tech Stack I Use</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                   <span key={index} className="px-4 py-2 bg-secondary rounded-xl text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
                     {tech}
                   </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-3 pt-4">
              <Button 
                onClick={handleResumeDownload}
                disabled={isDownloading}
                 className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl px-6 h-12 font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
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
      </div>
    </section>
  );
};

export default AboutSection;
