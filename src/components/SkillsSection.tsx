import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Brain, Wrench, Users, Layout } from 'lucide-react';

interface SkillsSectionProps {
  isVisible: boolean;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ isVisible }) => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Layout,
      skills: [
        { name: 'React', level: 'Advanced' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'TypeScript', level: 'Intermediate' },
        { name: 'HTML/CSS', level: 'Advanced' },
        { name: 'Tailwind CSS', level: 'Advanced' },
      ]
    },
    {
      title: 'Backend',
      icon: Code,
      skills: [
        { name: 'Python', level: 'Advanced' },
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'Express.js', level: 'Intermediate' },
        { name: 'REST APIs', level: 'Intermediate' },
      ]
    },
    {
      title: 'AI/ML',
      icon: Brain,
      skills: [
        { name: 'Regression', level: 'Intermediate' },
        { name: 'Classification', level: 'Intermediate' },
        { name: 'Scikit-learn', level: 'Intermediate' },
        { name: 'Pandas', level: 'Advanced' },
        { name: 'NumPy', level: 'Advanced' },
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 'Advanced' },
        { name: 'MongoDB', level: 'Intermediate' },
      ]
    },
    {
      title: 'CS Fundamentals',
      icon: Wrench,
      skills: [
        { name: 'DSA', level: 'Intermediate' },
        { name: 'OOP', level: 'Advanced' },
        { name: 'Operating System', level: 'Intermediate' },
      ]
    },
    {
      title: 'Tools',
      icon: Users,
      skills: [
        { name: 'Git', level: 'Advanced' },
        { name: 'VS Code', level: 'Advanced' },
        { name: 'Postman', level: 'Intermediate' },
        { name: 'Docker', level: 'Beginner' },
      ]
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced': return 'bg-primary/10 text-primary';
      case 'Intermediate': return 'bg-accent/10 text-accent';
      case 'Beginner': return 'bg-muted text-muted-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <section id="skills" data-animate className="section-container bg-secondary/30">
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to build amazing products
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-premium border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
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
