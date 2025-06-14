
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface CertificationsSectionProps {
  isVisible: boolean;
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ isVisible }) => {
  const certifications = [
    { title: 'Python Programming', platform: 'Infosys Springboard' },
    { title: 'Data Structures & Algorithms', platform: 'Coding Ninjas' },
    { title: 'Web Development', platform: 'Internshala' },
    { title: 'JavaScript Fundamentals', platform: 'SkillUp' },
    { title: 'ReactJS Development', platform: 'SkillUp' }
  ];

  return (
    <section id="certifications" data-animate className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center text-gray-900 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Certifications
        </h2>
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
  );
};

export default CertificationsSection;
