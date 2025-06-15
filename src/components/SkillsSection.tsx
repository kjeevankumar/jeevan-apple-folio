
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FloatingSkillOrb from './pseudo3d/FloatingSkillOrb';

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

  const floatingSkills = [
    { skill: 'React', color: '#61dafb', size: 'large' as const, position: { top: '15%', left: '10%' } },
    { skill: 'Python', color: '#3776ab', size: 'medium' as const, position: { top: '25%', right: '15%' } },
    { skill: 'JS', color: '#f7df1e', size: 'small' as const, position: { top: '60%', left: '8%' } },
    { skill: 'CSS', color: '#1572b6', size: 'medium' as const, position: { top: '70%', right: '12%' } },
    { skill: 'Node', color: '#339933', size: 'small' as const, position: { top: '40%', right: '8%' } },
    { skill: 'Git', color: '#f05032', size: 'medium' as const, position: { top: '80%', left: '15%' } },
  ];

  return (
    <section id="skills" data-animate className="py-8 px-4 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-20 w-40 h-40 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full animate-floatingOrb"></div>
        <div className="absolute top-32 right-16 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full animate-floatingOrb" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full animate-floatingOrb" style={{ animationDelay: '2.5s' }}></div>
      </div>

      {/* Floating skill orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingSkills.map((skill, index) => (
          <FloatingSkillOrb
            key={index}
            skill={skill.skill}
            color={skill.color}
            size={skill.size}
            delay={index * 300}
            position={skill.position}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className={`text-4xl font-bold text-center text-gray-900 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Skills & Expertise
        </h2>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {skillCards.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 hover-tilt skill-orb">
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
                      className="text-xs px-3 py-1 h-auto transition-all duration-300 hover:scale-110 hover:shadow-md"
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
