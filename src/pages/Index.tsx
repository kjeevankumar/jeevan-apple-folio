
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';

interface VisibilityState {
  [key: string]: boolean;
}

const Index = () => {
  const [isVisible, setIsVisible] = useState<VisibilityState>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const skills = {
    languages: ['Python', 'C', 'Java'],
    web: ['HTML', 'CSS', 'JavaScript'],
    frameworks: ['ReactJS', 'Tailwind CSS'],
    tools: ['GitHub', 'Git', 'VS Code']
  };

  const projects = [
    {
      title: 'Student Result Management System',
      description: 'A comprehensive system for managing student results and academic records.',
      tech: ['Python', 'Database Management'],
      demo: '#',
      github: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio showcasing projects and skills.',
      tech: ['ReactJS', 'Tailwind CSS'],
      demo: '#',
      github: '#'
    }
  ];

  const certifications = [
    { title: 'Python Programming', platform: 'Infosys Springboard' },
    { title: 'Data Structures & Algorithms', platform: 'Coding Ninjas' },
    { title: 'Web Development', platform: 'Internshala' },
    { title: 'JavaScript Fundamentals', platform: 'SkillUp' },
    { title: 'ReactJS Development', platform: 'SkillUp' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-white to-gray-50">
        <div className="text-center space-y-8 px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Hi, I'm K. Jeevan Kumar 👋
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              A passionate developer and future tech leader from Telangana
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" data-animate className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full transform rotate-6"></div>
                <div className="absolute inset-4 bg-white rounded-full shadow-2xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/12c910ed-b896-47a9-aa87-7d3591664f02.png" 
                    alt="K. Jeevan Kumar"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm from Telangana and currently pursuing B.Tech 3rd year at Malla Reddy Institute of Engineering and Technology. My passion lies in development, design, and coding. I always strive to learn and grow every day.
              </p>
              <Button variant="outline" className="hover:bg-blue-50 border-blue-200 text-blue-600 hover:border-blue-300 transition-all duration-300">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" data-animate className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold text-center text-gray-900 mb-16 transition-all duration-1000 ${isVisible.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Education
          </h2>
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="w-4 h-4 bg-blue-600 rounded-full mr-8 relative z-10"></div>
                <Card className="flex-1 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Malla Reddy Institute of Engineering and Technology
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      B.Tech - Artificial Intelligence and Machine Learning
                    </p>
                    <p className="text-gray-600">2021 - Present</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" data-animate className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center text-gray-900 mb-16 transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Skills & Technologies
          </h2>
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-300 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-blue-600">Programming Languages</h3>
                <div className="space-y-2">
                  {skills.languages.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-green-600">Web Technologies</h3>
                <div className="space-y-2">
                  {skills.web.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-purple-600">Frameworks & Libraries</h3>
                <div className="space-y-2">
                  {skills.frameworks.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-orange-600">Tools</h3>
                <div className="space-y-2">
                  {skills.tools.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" data-animate className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center text-gray-900 mb-16 transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Featured Projects
          </h2>
          <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold text-blue-600">{project.title.split(' ')[0]}</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline">
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" data-animate className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center text-gray-900 mb-16 transition-all duration-1000 ${isVisible.certifications ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Certifications
          </h2>
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${isVisible.certifications ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
                  <p className="text-blue-600 text-sm">{cert.platform}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" data-animate className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold text-center text-gray-900 mb-16 transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Let's Connect
          </h2>
          <div className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 delay-300 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className="p-8">
              <CardContent className="space-y-6 p-0">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <Input placeholder="Your Name" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea placeholder="Your message here..." rows={5} className="w-full" />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </CardContent>
            </Card>
            
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <p className="text-gray-600 mb-8">
                  I'm always open to discussing new opportunities and interesting projects.
                </p>
              </div>
              
              <div className="flex justify-center space-x-6">
                <a href="#" className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </a>
                <a href="#" className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
                  <Github className="w-6 h-6 text-gray-800" />
                </a>
                <a href="#" className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
                  <Mail className="w-6 h-6 text-red-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              Made with ❤️ by K. Jeevan Kumar
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
