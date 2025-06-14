
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillsSectionProps {
  isVisible: boolean;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ isVisible }) => {
  const skills = {
    languages: ['C', 'Python', 'Java', 'JavaScript', 'TypeScript'],
    web: ['HTML', 'CSS', 'ReactJS', 'Tailwind CSS', 'Node.js'],
    databases: ['MySQL', 'MongoDB', 'SQLite'],
    tools: ['Git', 'GitHub', 'VS Code', 'Botpress', 'Google Colab'],
    specialization: ['AI/ML', 'NLP', 'Cybersecurity', 'Data Analysis'],
    soft: ['Communication', 'Teaching', 'Problem Solving', 'Teamwork', 'Adaptability']
  };

  return (
    <section id="skills" data-animate className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center text-gray-900 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Skills & Technologies
        </h2>
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 text-blue-600">Programming Languages</h3>
              <div className="space-y-2">
                {skills.languages.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="mr-2 mb-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 text-green-600">Web Technologies</h3>
              <div className="space-y-2">
                {skills.web.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="mr-2 mb-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 text-purple-600">Databases & Cloud</h3>
              <div className="space-y-2">
                {skills.databases.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="mr-2 mb-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 text-orange-600">Tools & Platforms</h3>
              <div className="space-y-2">
                {skills.tools.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="mr-2 mb-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 text-red-600">Specialization</h3>
              <div className="space-y-2">
                {skills.specialization.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="mr-2 mb-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 text-pink-600">Soft Skills</h3>
              <div className="space-y-2">
                {skills.soft.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="mr-2 mb-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
