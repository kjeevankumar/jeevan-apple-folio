
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

  return (
    <section id="education" data-animate className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center text-gray-900 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Education Journey
        </h2>
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
  );
};

export default EducationSection;
