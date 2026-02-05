 import React from 'react';
 import { Card, CardContent } from "@/components/ui/card";
 import { Trophy, Users, Award, GraduationCap, Code, Rocket } from 'lucide-react';
 
 interface AchievementsSectionProps {
   isVisible: boolean;
 }
 
 const AchievementsSection: React.FC<AchievementsSectionProps> = ({ isVisible }) => {
   const achievements = [
     {
       icon: Trophy,
       title: 'Hackathon Participant',
       description: 'Built functional prototypes under time constraints',
       highlight: '48-hour challenges'
     },
     {
       icon: Users,
       title: 'Teaching 20+ Students',
       description: 'C Programming instructor at coaching center',
       highlight: 'Impactful mentorship'
     },
     {
       icon: Award,
       title: '6+ Certifications',
       description: 'From Microsoft, Infosys, Cambridge, Cisco',
       highlight: 'Industry recognized'
     },
     {
       icon: GraduationCap,
       title: 'CGPA 8.5/10',
       description: 'Strong academic performance in AI/ML',
       highlight: 'Final Year B.Tech'
     },
     {
       icon: Code,
       title: '15+ Projects Built',
       description: 'Web applications, ML models, and more',
       highlight: 'Full stack expertise'
     },
     {
       icon: Rocket,
       title: 'Internship Ready',
       description: 'Prepared for industry challenges',
       highlight: 'Open to opportunities'
     }
   ];
 
   return (
     <section id="achievements" data-animate className="section-container bg-background">
       <div className="container mx-auto max-w-6xl">
         <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
           <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
             Achievements
           </span>
           <h2 className="section-title">Highlights & Milestones</h2>
           <p className="section-subtitle">
             Key accomplishments that define my journey
           </p>
         </div>
 
         <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
           {achievements.map((achievement, index) => (
             <Card 
               key={index} 
               className="group bg-card border border-border/50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30"
             >
               <CardContent className="p-6">
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                     <achievement.icon className="w-6 h-6 text-primary" />
                   </div>
                   <div className="flex-1">
                     <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-md mb-2">
                       {achievement.highlight}
                     </span>
                     <h3 className="text-lg font-bold text-foreground mb-1">
                       {achievement.title}
                     </h3>
                     <p className="text-sm text-muted-foreground">
                       {achievement.description}
                     </p>
                   </div>
                 </div>
               </CardContent>
             </Card>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default AchievementsSection;