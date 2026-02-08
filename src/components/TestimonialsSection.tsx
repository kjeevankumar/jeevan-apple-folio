import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  isVisible: boolean;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ isVisible }) => {
  const testimonials = [
    {
      name: "Prof. Ramesh Kumar",
      role: "Faculty Mentor, MRIET",
      message: "Jeevan demonstrates exceptional dedication to learning and problem-solving. His ability to grasp complex AI/ML concepts and apply them practically is remarkable.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Arun Sharma",
      role: "Student, C Programming",
      message: "Jeevan's teaching methodology made complex programming concepts easy to understand. His patience and practical approach helped me build a strong foundation.",
      rating: 5,
      avatar: "AS"
    },
    {
      name: "Priya Reddy",
      role: "Team Member, Hackathon",
      message: "Working with Jeevan during hackathons was an incredible experience. His technical skills and collaborative spirit helped our team deliver outstanding projects.",
      rating: 5,
      avatar: "PR"
    }
  ];

  return (
    <section id="testimonials" data-animate className="section-container bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-badge">Testimonials</span>
          <h2 className="section-title">What People Say</h2>
          <p className="section-subtitle">
            Feedback from mentors, students, and collaborators
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group card-interactive border-0 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
              <CardContent className="p-8 pt-10">
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Message */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.message}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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

export default TestimonialsSection;
