
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from 'lucide-react';

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
    <section id="education" data-animate className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Education
        </h2>
        <p className={`text-center text-gray-600 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          My academic path towards expertise in AI & Technology
        </p>
        
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="outline" className="mb-2">{edu.status}</Badge>
                  <span className="text-sm font-semibold text-green-600">{edu.score}</span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {edu.degree}
                </h3>
                
                <p className="font-medium text-blue-600 mb-1">
                  {edu.institution}
                </p>
                
                <div className="text-sm text-gray-500 mb-3 flex items-center">
                  <MapPin className="w-4 h-4 mr-1 text-pink-500" />
                  <span className="mr-4">{edu.location}</span>
                  <Calendar className="w-4 h-4 mr-1 text-blue-500" />
                  <span>{edu.duration}</span>
                </div>
                
                <div className="space-y-1">
                  {edu.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 mt-1.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
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
