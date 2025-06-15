
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceSectionProps {
  isVisible: boolean;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ isVisible }) => {
  const experience = [
    {
      title: 'Programming Instructor - C',
      company: 'Linux Computer Coaching Center',
      duration: 'Jan 2023 - Apr 2023',
      type: 'Teaching',
      description: 'Taught C programming from basics to advanced concepts with real-time examples. Helped students develop clean coding practices and improve their logical thinking abilities.',
      technologies: ['C Programming', 'Teaching', 'Problem Solving'],
      achievements: ['Improved student success rates', 'Developed custom teaching materials', 'Mentored beginners in programming']
    },
    {
      title: 'Medha Spoken English Trainee',
      company: 'Medha Program',
      duration: 'Jun 2022 - Dec 2022',
      type: 'Training',
      description: 'Actively participated in spoken English training, public speaking exercises, and stage presentations. Focused on improving communication skills and building professional confidence.',
      technologies: ['Public Speaking', 'Communication', 'Presentation Skills'],
      achievements: ['Gained fluency in English', 'Improved confidence in public speaking', 'Enhanced professional communication skills']
    },
    {
      title: 'Hackathon Participant',
      company: 'College Tech Competitions',
      duration: 'Oct 2023 - Present',
      type: 'Team Project',
      description: 'Participated in multiple hackathons, working in team environments to solve complex problems under time constraints. Developed technical and collaborative skills through hands-on project development.',
      technologies: ['Team Collaboration', 'Problem Solving', 'Rapid Development'],
      achievements: ['Built functional prototypes in 48 hours', 'Enhanced teamwork abilities', 'Applied technical knowledge in practical scenarios']
    }
  ];

  return (
    <section id="experience" data-animate className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 animate-smooth-fade-in relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-24 left-16 w-36 h-36 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-floatingOrb"></div>
        <div className="absolute top-48 right-12 w-28 h-28 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full animate-floatingOrb" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full animate-floatingOrb" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-16 right-1/3 w-24 h-24 bg-gradient-to-r from-violet-400/20 to-indigo-400/20 rounded-full animate-floatingOrb" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className={`text-4xl font-bold text-center mb-4 transition-all duration-1000 animated-gradient-text-contact ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Experience & Leadership
        </h2>
        <p className={`text-center text-gray-600 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Professional journey and leadership experiences that shaped my career
        </p>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {experience.map((exp, index) => (
            <Card 
              key={index} 
              className="hover:shadow-2xl hover:scale-105 transition-all duration-500 interactive-hover bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 border-2 border-transparent hover:border-gradient-to-r hover:from-purple-400 hover:to-pink-400 group animate-bounce-gentle overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 relative overflow-hidden">
                {/* Card background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <Badge 
                      variant={exp.type === 'Teaching' ? 'default' : exp.type === 'Training' ? 'secondary' : 'outline'} 
                      className={`mb-2 font-semibold transition-all duration-300 animate-wiggle ${
                        exp.type === 'Teaching' 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white animate-glow-pulse shadow-lg' 
                          : exp.type === 'Training'
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white animate-pulse shadow-md'
                          : 'border-2 border-pink-300 text-pink-600 bg-pink-50 hover:bg-pink-100'
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {exp.type === 'Teaching' ? '👨‍🏫 ' + exp.type : exp.type === 'Training' ? '🎯 ' + exp.type : '🚀 ' + exp.type}
                    </Badge>
                    <Briefcase className="w-6 h-6 text-purple-600 animate-bounce group-hover:text-pink-600 transition-colors duration-300" style={{ animationDelay: `${index * 0.1}s` }} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-500">
                    {exp.title}
                  </h3>
                  
                  <p className="font-medium text-purple-600 mb-1 group-hover:text-pink-600 transition-colors duration-500">
                    {exp.company}
                  </p>
                  
                  <p className="text-gray-500 text-sm mb-4 flex items-center group-hover:text-gray-600 transition-colors duration-300">
                    <Calendar className="w-4 h-4 mr-2 text-indigo-500 animate-bounce" style={{ animationDelay: `${index * 0.1 + 0.1}s` }} />
                    {exp.duration}
                  </p>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {exp.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      💡 Skills Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs border-purple-200 text-purple-600 bg-purple-50 hover:bg-purple-100 hover:border-purple-300 transition-all duration-300 animate-wiggle"
                          style={{ animationDelay: `${techIndex * 0.1}s` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                      🏆 Key Achievements:
                    </h4>
                    <div className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-2 mt-1.5 flex-shrink-0 animate-bounce" style={{ animationDelay: `${achIndex * 0.2}s` }}></div>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Celebration elements for teaching experience */}
                  {exp.type === 'Teaching' && (
                    <div className="absolute top-2 right-2 animate-bounce">
                      <div className="text-2xl animate-rainbow">⭐</div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement summary */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-100 to-pink-100 px-8 py-4 rounded-full border-2 border-purple-200 animate-glow-pulse">
            <div className="text-2xl animate-bounce">💼</div>
            <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              3+ Years of Professional & Educational Experience
            </span>
            <div className="text-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>🎯</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
