
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, MapPin } from 'lucide-react';

interface EducationSectionProps {
  isVisible: boolean;
}

const EducationSection: React.FC<EducationSectionProps> = ({ isVisible }) => {
  const education = [
    {
      degree: 'B.Tech - Artificial Intelligence and Machine Learning',
      institution: 'Malla Reddy Institute of Engineering and Technology',
      location: 'Hyderabad, Telangana',
      duration: '2022 - Present',
      score: 'CGPA: 8.5/10',
      status: 'Pursuing Final Year',
      highlights: ['Specialization in AI/ML', 'Active in coding competitions', 'Technical society member']
    },
    {
      degree: 'Intermediate (12th Grade) - MPC',
      institution: 'Viswasanthi Junior College',
      location: 'Alampur \'X\' road, Telangana',
      duration: '2020 - 2022',
      score: '69.0%',
      status: 'Completed',
      highlights: ['Mathematics, Physics, Chemistry', 'Strong foundation in core subjects', 'Focus on analytical skills']
    },
    {
      degree: 'Secondary School (10th Grade)',
      institution: 'Z.H High School',
      location: 'Bhairapuram, Telangana',
      duration: '2019 - 2020',
      score: '95%',
      status: 'Completed',
      highlights: ['State board examination', 'Strong academic performance', 'Active participation in school activities']
    }
  ];

  return (
    <section id="education" data-animate className="py-20 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 animate-smooth-fade-in relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-floatingOrb"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full animate-floatingOrb" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full animate-floatingOrb" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className={`text-4xl font-bold text-center mb-4 transition-all duration-1000 animated-gradient-text-contact ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Education Journey
        </h2>
        <p className={`text-center text-gray-600 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          My academic path towards expertise in AI & Technology
        </p>
        
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Enhanced animated timeline */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-blue-400 to-pink-400 transform md:-translate-x-1/2 animate-glow-pulse shadow-lg"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-bounce-gentle`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Enhanced timeline node */}
                <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform md:-translate-x-1/2 flex items-center justify-center z-10 animate-glow-pulse shadow-xl">
                  <Award className="w-4 h-4 text-white animate-bounce" />
                </div>
                
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-105 interactive-hover bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 border-2 border-transparent hover:border-gradient-to-r hover:from-purple-400 hover:to-pink-400 group animate-rainbow">
                    <CardContent className="p-6 relative overflow-hidden">
                      {/* Card background gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <Badge 
                            variant="outline" 
                            className={`mb-2 border-2 font-semibold transition-all duration-300 animate-wiggle ${
                              edu.status === 'Pursuing Final Year' 
                                ? 'text-purple-600 border-purple-300 bg-purple-50 hover:bg-purple-100 animate-glow-pulse' 
                                : 'text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100'
                            }`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                          >
                            {edu.status}
                          </Badge>
                          <span className="text-sm font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent animate-pulse">
                            {edu.score}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-500">
                          {edu.degree}
                        </h3>
                        
                        <p className="font-medium mb-1 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-500">
                          {edu.institution}
                        </p>
                        
                        <div className="flex items-center text-gray-500 text-sm mb-3 group-hover:text-gray-600 transition-colors duration-300">
                          <MapPin className="w-4 h-4 mr-1 text-pink-500 animate-bounce" style={{ animationDelay: `${index * 0.1}s` }} />
                          <span className="mr-4">{edu.location}</span>
                          <Calendar className="w-4 h-4 mr-1 text-blue-500 animate-bounce" style={{ animationDelay: `${index * 0.1 + 0.2}s` }} />
                          <span>{edu.duration}</span>
                        </div>
                        
                        <div className="space-y-2">
                          {edu.highlights.map((highlight, idx) => (
                            <div 
                              key={idx} 
                              className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 animate-slide-in-right"
                              style={{ animationDelay: `${index * 0.1 + idx * 0.1}s` }}
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 animate-pulse shadow-sm"></div>
                              <span className="group-hover:font-medium transition-all duration-300">{highlight}</span>
                            </div>
                          ))}
                        </div>
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
  );
};

export default EducationSection;
