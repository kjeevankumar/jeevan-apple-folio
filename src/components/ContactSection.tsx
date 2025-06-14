
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, Instagram, Facebook } from 'lucide-react';

interface ContactSectionProps {
  isVisible: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isVisible }) => {
  return (
    <section id="contact" data-animate className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-bold text-center text-gray-900 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Let's Connect & Collaborate
        </h2>
        <div className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="p-8">
            <CardContent className="space-y-6 p-0">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <Input placeholder="Your Name" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <Textarea placeholder="Let's discuss your project or collaboration ideas..." rows={5} className="w-full" />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
              </Button>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-4">
                I'm always open to discussing new opportunities, innovative projects, and meaningful collaborations.
              </p>
              <p className="text-gray-600 mb-8">
                Whether it's internships, freelance work, or just tech discussions - let's connect!
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
              <a href="#" className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group">
                <Linkedin className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
              </a>
              <a href="#" className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group">
                <Github className="w-6 h-6 text-gray-800 group-hover:text-gray-900" />
              </a>
              <a href="#" className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group">
                <Mail className="w-6 h-6 text-red-600 group-hover:text-red-700" />
              </a>
              <a href="#" className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group">
                <Instagram className="w-6 h-6 text-pink-600 group-hover:text-pink-700" />
              </a>
              <a href="#" className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group">
                <Facebook className="w-6 h-6 text-blue-700 group-hover:text-blue-800" />
              </a>
              <a href="#" className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group">
                <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">W</span>
                </div>
              </a>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">Ready to collaborate?</p>
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
