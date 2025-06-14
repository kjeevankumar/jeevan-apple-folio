
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Mail, Github, Linkedin, Code, Sparkles, Zap, Calendar, MapPin, Award, Briefcase } from 'lucide-react';

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  const education = [
    {
      degree: 'B.Tech - Artificial Intelligence and Machine Learning',
      institution: 'Malla Reddy Institute of Engineering and Technology',
      location: 'Hyderabad, Telangana',
      duration: '2021 - Present',
      score: 'CGPA: 8.5/10',
      status: 'Pursuing Final Year',
      highlights: ['Specialization in AI/ML', 'Active in coding competitions', 'Technical society member']
    },
    {
      degree: 'Intermediate (12th Grade) - MPC',
      institution: 'Narayana Junior College',
      location: 'Telangana',
      duration: '2019 - 2021',
      score: '95.2%',
      status: 'Completed',
      highlights: ['Mathematics, Physics, Chemistry', 'Merit certificate recipient', 'School topper in Mathematics']
    },
    {
      degree: 'Secondary School (10th Grade)',
      institution: 'Government High School',
      location: 'Telangana',
      duration: '2018 - 2019',
      score: '93.8%',
      status: 'Completed',
      highlights: ['State board examination', 'District level rank holder', 'Perfect attendance award']
    }
  ];

  const experience = [
    {
      title: 'Web Development Intern',
      company: 'Tech Solutions Pvt Ltd',
      duration: 'Jun 2023 - Aug 2023',
      type: 'Internship',
      description: 'Worked on front-end development using React and Tailwind CSS. Built responsive web applications and collaborated with senior developers.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Git'],
      achievements: ['Delivered 3 client projects', 'Improved page load speed by 40%', 'Mentored 2 junior interns']
    },
    {
      title: 'Python Developer',
      company: 'Freelance Projects',
      duration: 'Jan 2023 - May 2023',
      type: 'Freelance',
      description: 'Developed automation scripts and data analysis tools for small businesses. Created web scraping solutions and database management systems.',
      technologies: ['Python', 'SQLite', 'Pandas', 'BeautifulSoup'],
      achievements: ['Completed 5+ projects', 'Automated manual processes', 'Client satisfaction: 4.8/5']
    },
    {
      title: 'Technical Team Lead',
      company: 'College Tech Club',
      duration: 'Aug 2022 - Present',
      type: 'Leadership',
      description: 'Leading a team of 15+ students in organizing technical events and workshops. Responsible for project coordination and mentoring junior students.',
      technologies: ['Project Management', 'Team Leadership', 'Event Planning'],
      achievements: ['Organized 10+ workshops', 'Increased club participation by 200%', 'Won inter-college competition']
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
      {/* Enhanced Hero Section with Photo */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-pink-100/40 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Code className="absolute top-1/4 left-1/6 w-8 h-8 text-blue-400/30 animate-float" style={{ animationDelay: '0.5s' }} />
          <Sparkles className="absolute top-1/3 right-1/5 w-6 h-6 text-purple-400/30 animate-float" style={{ animationDelay: '1.5s' }} />
          <Zap className="absolute bottom-1/3 left-1/5 w-7 h-7 text-pink-400/30 animate-float" style={{ animationDelay: '2.5s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column - Photo Section */}
            <div className="relative order-2 lg:order-1">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Decorative Background Elements */}
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse-glow"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>
                
                {/* Main Photo Container */}
                <div className="relative">
                  <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative">
                    {/* Rotating Background Ring */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                    
                    {/* Photo Frame */}
                    <div className="absolute inset-3 bg-white rounded-full shadow-2xl overflow-hidden border-4 border-white backdrop-blur-sm">
                      <img 
                        src="/lovable-uploads/12c910ed-b896-47a9-aa87-7d3591664f02.png" 
                        alt="K. Jeevan Kumar"
                        className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Status Badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    Available for opportunities
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="text-center lg:text-left space-y-8 order-1 lg:order-2">
              <div className="animate-fade-in">
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    👋 Hello, I'm
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="gradient-text">K. Jeevan Kumar</span>
                </h1>
                
                <div className="space-y-4 mb-8">
                  <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                    A passionate <span className="font-semibold text-blue-600">developer</span> and future 
                    <span className="font-semibold text-purple-600"> tech leader</span>
                  </p>
                  <p className="text-lg text-gray-500">
                    Building tomorrow's technology from Telangana 🇮🇳
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    onClick={() => scrollToSection('projects')}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    View My Work
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => scrollToSection('contact')}
                    className="border-2 border-gray-300 hover:border-blue-400 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
                  >
                    Get In Touch
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="flex justify-center lg:justify-start gap-8 mt-8 pt-8 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">3+</div>
                    <div className="text-sm text-gray-500">Years Learning</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">10+</div>
                    <div className="text-sm text-gray-500">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">5+</div>
                    <div className="text-sm text-gray-500">Certifications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-400 text-sm">Scroll to explore</span>
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </div>
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
                    src="/lovable-uploads/59a9f00c-4453-4a8f-9c54-485c98272fe3.png" 
                    alt="K. Jeevan Kumar - Professional"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm from Telangana and currently pursuing B.Tech 3rd year in Artificial Intelligence and Machine Learning at Malla Reddy Institute of Engineering and Technology. My passion lies in development, design, and coding.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I believe in continuous learning and growth, always staying curious about new technologies and innovative solutions. My goal is to become a skilled full-stack developer and contribute to meaningful projects that make a positive impact.
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
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center text-gray-900 mb-16 transition-all duration-1000 ${isVisible.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Education Journey
          </h2>
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-1/2"></div>
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-blue-600 rounded-full transform md:-translate-x-1/2 flex items-center justify-center z-10">
                    <Award className="w-3 h-3 text-white" />
                  </div>
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <Badge variant="outline" className="mb-2 text-blue-600 border-blue-200">
                            {edu.status}
                          </Badge>
                          <span className="text-sm text-gray-500 font-medium">{edu.score}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-blue-600 font-medium mb-1">
                          {edu.institution}
                        </p>
                        <div className="flex items-center text-gray-500 text-sm mb-3">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="mr-4">{edu.location}</span>
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="space-y-1">
                          {edu.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" data-animate className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center text-gray-900 mb-16 transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Experience & Leadership
          </h2>
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {experience.map((exp, index) => (
              <Card key={index} className="hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant={exp.type === 'Internship' ? 'default' : exp.type === 'Freelance' ? 'secondary' : 'outline'} className="mb-2">
                      {exp.type}
                    </Badge>
                    <Briefcase className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-blue-600 font-medium mb-1">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-4 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {exp.duration}
                  </p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{exp.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Achievements:</h4>
                    <div className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" data-animate className="py-20 px-4 bg-gray-50">
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
      <section id="projects" data-animate className="py-20 px-4">
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
      <section id="certifications" data-animate className="py-20 px-4 bg-gray-50">
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
      <section id="contact" data-animate className="py-20 px-4">
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
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#education" className="text-gray-600 hover:text-blue-600 transition-colors">Education</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
