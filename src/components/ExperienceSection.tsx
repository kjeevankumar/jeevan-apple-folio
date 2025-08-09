
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
    <section id="experience" data-animate className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Experience & Leadership
        </h2>
        <p className={`text-center text-gray-600 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Professional journey and leadership experiences that shaped my career
        </p>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {experience.map((exp, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge 
                    variant={exp.type === 'Teaching' ? 'default' : exp.type === 'Training' ? 'secondary' : 'outline'} 
                    className="mb-2 font-semibold"
                  >
                    {exp.type}
                  </Badge>
                  <Briefcase className="w-6 h-6 text-purple-600" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {exp.title}
                </h3>
                
                <p className="font-medium text-purple-600 mb-1">
                  {exp.company}
                </p>
                
                <p className="text-gray-500 text-sm mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-indigo-500" />
                  {exp.duration}
                </p>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Skills Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Key Achievements
                  </h4>
                  <div className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
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
  );
};

export default ExperienceSection;
