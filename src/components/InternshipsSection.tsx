import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink, Building2 } from 'lucide-react';

interface InternshipsSectionProps {
  isVisible: boolean;
}

const InternshipsSection: React.FC<InternshipsSectionProps> = ({ isVisible }) => {
  const internships = [
    {
      title: 'Green Intern',
      company: '1M1B (One Million for One Billion) Foundation',
      duration: 'July 2025 – Present',
      type: 'Sustainability & AI',
      description: 'Sustainability and climate action internship program focused on environmental impact.',
      highlights: [
        'Working on LeakGuard AI project for pipeline/tank leak detection',
        'Implementing computer vision techniques for real-time monitoring',
        'Contributing to climate action initiatives'
      ],
      skills: ['Python', 'OpenCV', 'Machine Learning'],
      certificateLink: '#',
      current: true
    },
    {
      title: 'AI Intern',
      company: 'Shell Edunet Foundation (AICTE)',
      duration: 'May 2025 – June 2025',
      type: 'AI/ML',
      description: '4-week AI internship on green skills using machine learning technologies.',
      highlights: [
        'Built EV Adoption Forecasting model with predictive analytics',
        'Developed interactive Streamlit dashboard for visualization',
        'Applied ML techniques for sustainable technology solutions'
      ],
      skills: ['Python', 'Streamlit', 'Data Analysis'],
      certificateLink: '#',
      current: false
    },
    {
      title: 'AI Intern',
      company: 'Codec Technologies Pvt. Ltd (AICTE)',
      duration: 'Apr 2025 – May 2025',
      type: 'AI/ML',
      description: 'Hands-on AI internship with real-world machine learning tasks under expert guidance.',
      highlights: [
        'Worked on real-world ML implementation projects',
        'Gained hands-on experience with industry practices',
        'Collaborated with experienced AI professionals'
      ],
      skills: ['Python', 'ML', 'Data Processing'],
      certificateLink: '#',
      current: false
    }
  ];

  return (
    <section id="internships" data-animate className="section-container bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Professional Experience
          </span>
          <h2 className="section-title">Internships</h2>
          <p className="section-subtitle">
            Industry experience through hands-on internship programs
          </p>
        </div>

        <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {internships.map((internship, index) => (
            <Card key={index} className="group card-premium border-0 hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Company Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-xl font-bold text-foreground">{internship.title}</h3>
                          {internship.current && (
                            <span className="px-3 py-1 text-xs font-bold rounded-full bg-accent/10 text-accent">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-primary font-semibold">{internship.company}</p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-2">
                        <span className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {internship.duration}
                        </span>
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent">
                          {internship.type}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground">{internship.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {internship.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Footer */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {internship.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="skill-badge text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Certificate Button */}
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="rounded-xl hover:bg-primary hover:text-primary-foreground transition-all"
                        asChild
                      >
                        <a href={internship.certificateLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Certificate
                        </a>
                      </Button>
                    </div>
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

export default InternshipsSection;
