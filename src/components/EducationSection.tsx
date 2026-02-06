import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, GraduationCap } from 'lucide-react';

interface EducationSectionProps {
  isVisible: boolean;
}

const EducationSection: React.FC<EducationSectionProps> = ({ isVisible }) => {
  const education = [
    {
      degree: 'B.Tech - AI & Machine Learning',
      institution: 'Malla Reddy Institute of Engineering and Technology (MRIET)',
      location: 'Hyderabad, Telangana, India',
      duration: '2022 – 2026',
      score: 'CGPA: 8.26/10',
      status: 'Final Year',
      highlights: ['AI/ML Specialization', 'Active in coding competitions', 'Technical society member']
    },
    {
      degree: 'Intermediate (12th) - MPC',
      institution: 'Viswasanthi Junior College',
      location: 'Alampur X Road, Telangana, India',
      duration: '2020 – 2022',
      score: '69%',
      status: 'Completed',
      highlights: ['Mathematics, Physics, Chemistry', 'Strong analytical foundation']
    },
    {
      degree: 'Secondary School (10th)',
      institution: 'ZPHS Bhairapuram',
      location: 'Bhairapuram, Telangana, India',
      duration: '2019 – 2020',
      score: '95%',
      status: 'Completed',
      highlights: ['State board examination', 'Excellent academic performance']
    }
  ];

  return (
    <section id="education" data-animate className="section-container bg-secondary/30">
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic journey towards expertise in AI & Technology
          </p>
        </div>

        <div className={`max-w-4xl mx-auto space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {education.map((edu, index) => (
            <Card key={index} className="card-premium border-0">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Icon */}
                  <div className="p-3 rounded-xl bg-primary/10 text-primary self-start">
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                          {edu.status}
                        </span>
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent">
                          {edu.score}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {edu.duration}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, idx) => (
                        <span key={idx} className="skill-badge text-xs">
                          {highlight}
                        </span>
                      ))}
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

export default EducationSection;
