
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
    { name: 'Git', color: '#f05032', size: 'small' as const, position: { top: '12%', left: '12%' }, delay: 2000 },
    { name: 'CSS', color: '#1572b6', size: 'small' as const, position: { top: '70%', left: '90%' }, delay: 2500 },
    { name: 'Node', color: '#339933', size: 'medium' as const, position: { top: '15%', left: '75%' }, delay: 3000 },
    { name: 'SQL', color: '#336791', size: 'small' as const, position: { top: '85%', left: '8%' }, delay: 3500 }
  ];

  return (
    <section id="skills" data-animate className="py-8 px-4 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden animate-background-shift">
      {/* Enhanced Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/6 left-1/5 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-dynamic-float"></div>
        <div className="absolute bottom-1/5 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-spiral-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-2/3 w-40 h-40 bg-gradient-to-br from-green-400/25 to-teal-400/25 rounded-full blur-2xl animate-orbital-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className={`text-4xl font-bold text-center text-gray-900 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} animate-color-shift`}>
          Skills & Expertise
        </h2>
        
        {/* Enhanced Floating Skill Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingSkills.map((skill, index) => (
            <div key={index} className="skill-orb-enhanced">
              <FloatingSkillOrb
                skill={skill.name}
                color={skill.color}
                size={skill.size}
                delay={skill.delay}
                position={skill.position}
              />
            </div>
          ))}
        </div>

        <div className={`pseudo-3d-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 transition-all duration-1000 delay-300 stagger-children ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div style={{'--index': 0} as React.CSSProperties}>
            <PseudoSkillCard
              title="Frontend Development"
              skills={skills.frontend}
              color="text-blue-600"
              delay={0}
            />
          </div>
          
          <div style={{'--index': 1} as React.CSSProperties}>
            <PseudoSkillCard
              title="Backend Development"
              skills={skills.backend}
              color="text-green-600"
              delay={200}
            />
          </div>
          
          <div style={{'--index': 2} as React.CSSProperties}>
            <PseudoSkillCard
              title="Databases"
              skills={skills.databases}
              color="text-purple-600"
              delay={400}
            />
          </div>
          
          <div style={{'--index': 3} as React.CSSProperties}>
            <PseudoSkillCard
              title="Tools & Platforms"
              skills={skills.tools}
              color="text-orange-600"
              delay={600}
            />
          </div>

          <div style={{'--index': 4} as React.CSSProperties}>
            <PseudoSkillCard
              title="CS Fundamentals"
              skills={skills.cs_concepts}
              color="text-indigo-600"
              delay={800}
            />
          </div>

          <div style={{'--index': 5} as React.CSSProperties}>
            <PseudoSkillCard
              title="Soft Skills"
              skills={skills.soft_skills}
              color="text-pink-600"
              delay={1000}
              className="md:col-span-2 lg:col-span-1 xl:col-span-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
