
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar } from 'lucide-react';

interface CertificationsSectionProps {
  isVisible: boolean;
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ isVisible }) => {
  const certifications = [
    { 
      title: 'Project Management', 
      platform: 'Accenture Forage',
      date: 'April 2025',
      status: 'Latest'
    },
    { 
      title: 'Infosys Springboard Generative AI', 
      platform: 'Infosys Springboard',
      date: 'March 2025',
      status: 'Latest'
    },
    { 
      title: 'Mastering Python Programming', 
      platform: 'Infosys Springboard',
      date: 'February 2025',
      status: 'Recent'
    },
    { 
      title: 'Fundamental AI Concepts', 
      platform: 'Microsoft',
      date: 'February 2025',
      status: 'Recent'
    },
    { 
      title: 'Cambridge B2 English Certificate', 
      platform: 'Cambridge University',
      date: 'February 2024',
      status: 'Certified'
    },
    { 
      title: 'Cisco Python Certificate', 
      platform: 'Cisco Networking Academy',
      date: '2024',
      status: 'Certified'
    }
  ];

  return (
    <section id="certifications" data-animate className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-4 transition-all duration-1000 text-gray-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Certifications & Achievements
        </h2>
        <p className={`text-center text-gray-600 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Professional certifications and continuous learning milestones
        </p>
        
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge 
                    variant={cert.status === 'Latest' ? 'default' : cert.status === 'Recent' ? 'secondary' : 'outline'}
                    className="mb-2 font-semibold"
                  >
                    {cert.status}
                  </Badge>
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                
                <h3 className="font-semibold text-lg mb-2 text-gray-900">
                  {cert.title}
                </h3>
                
                <p className="font-medium text-sm mb-3 text-blue-600">
                  {cert.platform}
                </p>
                
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                  <span className="font-medium">{cert.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-4 bg-gray-100 px-8 py-4 rounded-full">
            <span className="font-semibold text-gray-900">
              6 Professional Certifications Earned
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
