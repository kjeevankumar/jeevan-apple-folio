
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SkillsSectionProps {
  isVisible: boolean;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ isVisible }) => {
  const skills = {
    frontend: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    backend: ['Python', 'Node.js', 'Express.js', 'C/C++', 'RESTful APIs'],
    databases: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
    tools: ['Git', 'VS Code', 'Docker', 'Postman', 'Chrome DevTools'],
    cs_concepts: ['Data Structures', 'Algorithms', 'OOP', 'System Design'],
    soft_skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Project Management']
  };

  const skillCards = [
    { title: "Frontend Development", skills: skills.frontend, color: "text-blue-600" },
    { title: "Backend Development", skills: skills.backend, color: "text-green-600" },
    { title: "Databases", skills: skills.databases, color: "text-purple-600" },
    { title: "Tools & Platforms", skills: skills.tools, color: "text-orange-600" },
    { title: "CS Fundamentals", skills: skills.cs_concepts, color: "text-indigo-600" },
    { title: "Soft Skills", skills: skills.soft_skills, color: "text-pink-600" }
  ];

  return (
    <section className="py-8 px-4 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-4xl font-bold text-center text-gray-900 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Skills & Expertise
        </h2>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {skillCards.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className={`${category.color} text-lg`}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs px-3 py-1 h-auto"
                    >
                      {skill}
                    </Badge>
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

export default SkillsSection;
