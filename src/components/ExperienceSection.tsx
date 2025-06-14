
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

  return (
    <section id="experience" data-animate className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center text-gray-900 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Experience & Leadership
        </h2>
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
  );
};

export default ExperienceSection;
