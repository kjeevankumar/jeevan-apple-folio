
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
    <section id="certifications" data-animate className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center text-gray-900 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Certifications & Achievements
        </h2>
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg hover:scale-105 transition-all duration-300 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge 
                    variant={cert.status === 'Latest' ? 'default' : cert.status === 'Recent' ? 'secondary' : 'outline'}
                    className="mb-2 animate-pulse"
                  >
                    {cert.status}
                  </Badge>
                  <Award className="w-5 h-5 text-blue-600 animate-bounce" style={{ animationDelay: `${index * 0.1}s` }} />
                </div>
                <h3 className="font-semibold text-lg mb-2 hover:text-blue-600 transition-colors duration-300">{cert.title}</h3>
                <p className="text-blue-600 text-sm font-medium mb-2">{cert.platform}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {cert.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
