import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Brain, Wrench, Server, Layout } from 'lucide-react';

interface SkillsSectionProps {
  isVisible: boolean;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ isVisible }) => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Layout,
      color: 'from-blue-500/10 to-cyan-500/10',
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
      icon: Server,
      color: 'from-green-500/10 to-emerald-500/10',
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
      color: 'from-purple-500/10 to-pink-500/10',
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
      color: 'from-orange-500/10 to-yellow-500/10',
      skills: [
        { name: 'MySQL', level: 'Advanced' },
        { name: 'MongoDB', level: 'Intermediate' },
      ]
    },
    {
      title: 'CS Fundamentals',
      icon: Code,
      color: 'from-red-500/10 to-rose-500/10',
      skills: [
        { name: 'DSA', level: 'Intermediate' },
        { name: 'OOP', level: 'Advanced' },
        { name: 'Operating System', level: 'Intermediate' },
      ]
    },
    {
      title: 'Tools',
      icon: Wrench,
      color: 'from-gray-500/10 to-slate-500/10',
      skills: [
        { name: 'Git', level: 'Advanced' },
        { name: 'VS Code', level: 'Advanced' },
        { name: 'Postman', level: 'Intermediate' },
        { name: 'Streamlit', level: 'Intermediate' },
      ]
    },
  ];

  const getLevelStyle = (level: string) => {
    switch (level) {
      case 'Advanced': return 'bg-primary/10 text-primary';
      case 'Intermediate': return 'bg-accent/10 text-accent';
      case 'Beginner': return 'bg-secondary text-muted-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <section id="skills" data-animate className="section-container bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-badge">Skills</span>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to build amazing products
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {skillCategories.map((category, index) => (
            <Card key={index} className="group card-interactive border-0 overflow-hidden">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between group/skill">
                      <span className="text-sm text-foreground font-medium group-hover/skill:text-primary transition-colors">{skill.name}</span>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${getLevelStyle(skill.level)}`}>
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
