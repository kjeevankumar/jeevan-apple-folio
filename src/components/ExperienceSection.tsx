import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
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
      achievements: [
        'Taught C programming from basics to advanced concepts with real-time examples',
        'Helped 20+ students develop clean coding practices',
        'Created custom learning materials and hands-on exercises'
      ],
      technologies: ['C Programming', 'Data Structures', 'Problem Solving']
    },
    {
      title: 'Spoken English Trainee',
      company: 'Medha Program',
      duration: 'Jun 2022 - Dec 2022',
      type: 'Training',
      achievements: [
        'Completed intensive spoken English and professional communication training',
        'Developed public speaking and presentation skills',
        'Enhanced professional confidence through stage presentations'
      ],
      technologies: ['Communication', 'Public Speaking', 'Presentation']
    },
    {
      title: 'Hackathon Participant',
      company: 'College Tech Events',
      duration: 'Oct 2023 - Present',
      type: 'Competition',
      achievements: [
        'Participated in multiple hackathons with team-based development',
        'Built functional prototypes under 48-hour time constraints',
        'Applied technical knowledge to solve real-world problems'
      ],
      technologies: ['Rapid Development', 'Team Collaboration', 'Problem Solving']
    }
  ];

  return (
    <section id="experience" data-animate className="section-container bg-background">
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Professional journey and hands-on experiences that shaped my career
          </p>
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block z-10" />

                  <Card className="card-premium border-0 md:ml-16">
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-4">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary md:hidden">
                              <Briefcase className="w-5 h-5" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                              <p className="text-primary font-medium">{exp.company}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                        </div>

                        {/* Achievements */}
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="skill-badge text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
