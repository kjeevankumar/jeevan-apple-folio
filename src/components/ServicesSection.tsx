 import React from 'react';
 import { Card, CardContent } from "@/components/ui/card";
 import { Brain, Globe, Server, Database } from 'lucide-react';
 
 interface ServicesSectionProps {
   isVisible: boolean;
 }
 
 const ServicesSection: React.FC<ServicesSectionProps> = ({ isVisible }) => {
   const services = [
     {
       icon: Brain,
       title: 'AI/ML Model Development',
       description: 'Building intelligent machine learning models for classification, prediction, and data analysis using Python, Scikit-learn, and TensorFlow.'
     },
     {
       icon: Globe,
       title: 'Full Stack Web Applications',
       description: 'Creating responsive, modern web applications with React, TypeScript, Node.js, and cutting-edge frontend technologies.'
     },
     {
       icon: Server,
       title: 'REST API Development',
       description: 'Designing and building scalable RESTful APIs with Express.js, proper authentication, and clean architecture.'
     },
     {
       icon: Database,
       title: 'Database Design & Optimization',
       description: 'Architecting efficient database schemas with MySQL, MongoDB, and PostgreSQL for optimal performance.'
     }
   ];
 
   return (
     <section id="services" data-animate className="section-container bg-secondary/30">
       <div className="container mx-auto max-w-6xl">
         <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
           <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
             Services
           </span>
           <h2 className="section-title">What I Can Build</h2>
           <p className="section-subtitle">
             Specialized in creating intelligent solutions and scalable applications
           </p>
         </div>
 
         <div className={`grid md:grid-cols-2 gap-6 lg:gap-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
           {services.map((service, index) => (
             <Card 
               key={index} 
               className="group relative bg-card border border-border/50 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
             >
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <CardContent className="relative p-8">
                 <div className="flex items-start gap-6">
                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                     <service.icon className="w-8 h-8 text-primary" />
                   </div>
                   <div className="flex-1">
                     <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                       {service.title}
                     </h3>
                     <p className="text-muted-foreground leading-relaxed">
                       {service.description}
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
 
 export default ServicesSection;