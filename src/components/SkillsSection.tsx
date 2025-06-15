
import React from 'react';
import PseudoSkillCard from './pseudo3d/PseudoSkillCard';
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

  const floatingSkills = [
    { name: 'React', color: '#61dafb', size: 'large' as const, position: { top: '8%', left: '88%' }, delay: 0 },
    { name: 'TS', color: '#3178c6', size: 'medium' as const, position: { top: '45%', left: '92%' }, delay: 500 },
    { name: 'JS', color: '#f7df1e', size: 'small' as const, position: { top: '25%', left: '3%' }, delay: 1000 },
    { name: 'Python', color: '#3776ab', size: 'medium' as const, position: { top: '60%', left: '5%' }, delay: 1500 },
    { name: 'Git', color: '#f05032', size: 'small' as const, position: { top: '12%', left: '12%' }, delay: 2000 }
  ];

  return (
    <section id="skills" data-animate className="py-8 px-4 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <h2 className={`text-4xl font-bold text-center text-gray-900 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Skills & Expertise
        </h2>
        
        {/* Floating Skill Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingSkills.map((skill, index) => (
            <FloatingSkillOrb
              key={index}
              skill={skill.name}
              color={skill.color}
              size={skill.size}
              delay={skill.delay}
              position={skill.position}
            />
          ))}
        </div>

        <div className={`pseudo-3d-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <PseudoSkillCard
            title="Frontend Development"
            skills={skills.frontend}
            color="text-blue-600"
            delay={0}
          />
          
          <PseudoSkillCard
            title="Backend Development"
            skills={skills.backend}
            color="text-green-600"
            delay={200}
          />
          
          <PseudoSkillCard
            title="Databases"
            skills={skills.databases}
            color="text-purple-600"
            delay={400}
          />
          
          <PseudoSkillCard
            title="Tools & Platforms"
            skills={skills.tools}
            color="text-orange-600"
            delay={600}
          />

          <PseudoSkillCard
            title="CS Fundamentals"
            skills={skills.cs_concepts}
            color="text-indigo-600"
            delay={800}
          />

          <PseudoSkillCard
            title="Soft Skills"
            skills={skills.soft_skills}
            color="text-pink-600"
            delay={1000}
            className="md:col-span-2 lg:col-span-1 xl:col-span-1"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
