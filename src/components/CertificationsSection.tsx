import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface CertificationsSectionProps {
  isVisible: boolean;
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ isVisible }) => {
  const certifications = [
    { 
      title: 'Python Full Course', 
      platform: 'GeeksforGeeks',
      date: 'July 2025',
      status: 'Latest',
      logo: '🐍'
    },
    { 
      title: 'Introduction to Artificial Intelligence', 
      platform: 'IBM / Coursera',
      date: 'June 2025',
      status: 'Latest',
      logo: '🤖'
    },
    { 
      title: 'Fundamental AI Concepts', 
      platform: 'Microsoft',
      date: 'February 2025',
      status: 'Recent',
      logo: '🔷'
    },
    { 
      title: 'Project Management', 
      platform: 'Accenture Forage',
      date: 'February 2025',
      status: 'Recent',
      logo: '📊'
    },
    { 
      title: 'Mastering Python Programming', 
      platform: 'Infosys Springboard',
      date: 'February 2025',
      status: 'Recent',
      logo: '💻'
    },
    { 
      title: 'Introduction to Data Science', 
      platform: 'Cisco Networking Academy',
      date: 'February 2024',
      status: 'Certified',
      logo: '📈'
    }
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Latest': return 'bg-primary/10 text-primary';
      case 'Recent': return 'bg-accent/10 text-accent';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <section id="certifications" data-animate className="section-container bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-badge">Certifications</span>
          <h2 className="section-title">Professional Certifications</h2>
          <p className="section-subtitle">
            Industry-recognized credentials validating expertise
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {certifications.map((cert, index) => (
            <Card key={index} className="group card-interactive border-0">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-2xl">
                    {cert.logo}
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusStyle(cert.status)}`}>
                    {cert.status}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                <p className="text-primary font-semibold text-sm mb-4">
                  {cert.platform}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-primary hover:text-primary hover:bg-primary/10 rounded-lg"
                  >
                    Verify
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Badge */}
        <div className={`text-center mt-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-border shadow-lg">
            <Award className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">6 Professional Certifications from Industry Leaders</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
