
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
    <section id="certifications" data-animate className="py-20 px-4 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 animate-smooth-fade-in relative overflow-hidden">
      {/* Enhanced animated background elements with warm sunset colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-24 left-16 w-36 h-36 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full animate-floatingOrb"></div>
        <div className="absolute top-48 right-12 w-28 h-28 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full animate-floatingOrb" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full animate-floatingOrb" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-16 right-1/3 w-24 h-24 bg-gradient-to-r from-red-400/20 to-pink-400/20 rounded-full animate-floatingOrb" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className={`text-4xl font-bold text-center mb-4 transition-all duration-1000 bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Certifications & Achievements
        </h2>
        <p className={`text-center text-gray-600 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Professional certifications and continuous learning milestones
        </p>
        
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="hover:shadow-2xl hover:scale-105 transition-all duration-500 interactive-hover bg-gradient-to-br from-white via-orange-50/30 to-yellow-50/30 border-2 border-transparent hover:border-gradient-to-r hover:from-orange-400 hover:to-red-400 group animate-bounce-gentle"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 relative overflow-hidden">
                {/* Card background gradient overlay with warm sunset colors */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <Badge 
                      variant={cert.status === 'Latest' ? 'default' : cert.status === 'Recent' ? 'secondary' : 'outline'}
                      className={`mb-2 font-semibold transition-all duration-300 animate-wiggle ${
                        cert.status === 'Latest' 
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white animate-glow-pulse shadow-lg' 
                          : cert.status === 'Recent'
                          ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white animate-pulse shadow-md'
                          : 'border-2 border-orange-300 text-orange-600 bg-orange-50 hover:bg-orange-100'
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {cert.status === 'Latest' ? '🔥 ' + cert.status : cert.status === 'Recent' ? '☀️ ' + cert.status : '🏅 ' + cert.status}
                    </Badge>
                    <Award className="w-6 h-6 text-orange-600 animate-bounce group-hover:text-red-600 transition-colors duration-300" style={{ animationDelay: `${index * 0.1}s` }} />
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-500">
                    {cert.title}
                  </h3>
                  
                  <p className="font-medium text-sm mb-3 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent group-hover:from-yellow-600 group-hover:to-orange-600 transition-all duration-500">
                    {cert.platform}
                  </p>
                  
                  <div className="flex items-center text-gray-500 text-sm group-hover:text-gray-600 transition-colors duration-300">
                    <Calendar className="w-4 h-4 mr-2 text-orange-500 animate-bounce" style={{ animationDelay: `${index * 0.1 + 0.2}s` }} />
                    <span className="font-medium">{cert.date}</span>
                  </div>
                  
                  {/* Celebration elements for latest certifications with sunset theme */}
                  {cert.status === 'Latest' && (
                    <div className="absolute top-2 right-2 animate-bounce">
                      <div className="text-2xl animate-rainbow">🌅</div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Achievement summary with sunset theme */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-orange-100 to-red-100 px-8 py-4 rounded-full border-2 border-orange-200 animate-glow-pulse">
            <div className="text-2xl animate-bounce">🎯</div>
            <span className="font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              6 Professional Certifications Earned
            </span>
            <div className="text-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>🌟</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
