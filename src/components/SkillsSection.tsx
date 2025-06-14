
import React from 'react';
import PseudoSkillCard from './pseudo3d/PseudoSkillCard';
import FloatingSkillOrb from './pseudo3d/FloatingSkillOrb';

interface SkillsSectionProps {
  isVisible: boolean;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ isVisible }) => {
  const skills = {
    languages: ['C', 'Python (familiar)'],
    web: ['HTML', 'CSS', 'JavaScript'],
    databases: ['MySQL', 'MongoDB (familiar)'],
    cs_subjects: ['Data Structures', 'Algorithms', 'OOPs concepts', 'Operating Systems'],
    tools: ['Git', 'VS Code', 'Dev Tools'],
    soft: ['Communication', 'Teaching', 'Problem Solving', 'Teamwork', 'Adaptability', 'Time management']
  };

  const floatingSkills = [
    { name: 'React', color: '#61dafb', size: 'large' as const, position: { top: '10%', left: '85%' }, delay: 0 },
    { name: 'Python', color: '#3776ab', size: 'medium' as const, position: { top: '60%', left: '90%' }, delay: 500 },
    { name: 'JS', color: '#f7df1e', size: 'small' as const, position: { top: '30%', left: '5%' }, delay: 1000 },
    { name: 'CSS', color: '#1572b6', size: 'medium' as const, position: { top: '70%', left: '8%' }, delay: 1500 },
    { name: 'Git', color: '#f05032', size: 'small' as const, position: { top: '15%', left: '15%' }, delay: 2000 },
    { name: 'SQL', color: '#336791', size: 'small' as const, position: { top: '50%', left: '12%' }, delay: 2500 }
  ];

  return (
    <section id="skills" data-animate className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <h2 className={`text-4xl font-bold text-center text-gray-900 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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

        <div className={`pseudo-3d-container grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <PseudoSkillCard
            title="Programming Languages"
            skills={skills.languages}
            color="text-blue-600"
            delay={0}
          />
          
          <PseudoSkillCard
            title="Web Technologies"
            skills={skills.web}
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
            title="CS Subjects"
            skills={skills.cs_subjects}
            color="text-orange-600"
            delay={600}
          />

          <PseudoSkillCard
            title="Tools & Platforms"
            skills={skills.tools}
            color="text-red-600"
            delay={800}
          />

          <PseudoSkillCard
            title="Soft Skills"
            skills={skills.soft}
            color="text-pink-600"
            delay={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
