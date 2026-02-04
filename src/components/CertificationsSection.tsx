import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar, ExternalLink } from 'lucide-react';

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
      title: 'Generative AI', 
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
      title: 'Cambridge B2 English', 
      platform: 'Cambridge University',
      date: 'February 2024',
      status: 'Certified'
    },
    { 
      title: 'Python Certificate', 
      platform: 'Cisco Networking Academy',
      date: '2024',
      status: 'Certified'
    }
  ];

  return (
    <section id="certifications" data-animate className="section-container bg-secondary/30">
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Professional certifications and continuous learning milestones
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {certifications.map((cert, index) => (
            <Card key={index} className="card-premium border-0">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    cert.status === 'Latest' 
                      ? 'bg-primary/10 text-primary' 
                      : cert.status === 'Recent' 
                        ? 'bg-accent/10 text-accent' 
                        : 'bg-secondary text-secondary-foreground'
                  }`}>
                    {cert.status}
                  </span>
                  <Award className="w-5 h-5 text-primary" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {cert.title}
                </h3>

                <p className="text-primary font-medium text-sm mb-3">
                  {cert.platform}
                </p>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
                  </span>
                  <button className="text-xs text-primary hover:underline flex items-center gap-1">
                    Verify <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary */}
        <div className={`text-center mt-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-border shadow-soft">
            <Award className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">6 Professional Certifications</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
