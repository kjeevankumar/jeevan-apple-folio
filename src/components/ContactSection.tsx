
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Linkedin, Github, Send, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  isVisible: boolean;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isVisible }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [googleSheetsUrl, setGoogleSheetsUrl] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [completedFields, setCompletedFields] = useState<Set<string>>(new Set());

  // Load Google Sheets URL from localStorage
  useEffect(() => {
    const savedUrl = localStorage.getItem('googleSheetsWebAppUrl');
    if (savedUrl) {
      setGoogleSheetsUrl(savedUrl);
    }
  }, []);

  // Track completed fields for celebratory animations
  useEffect(() => {
    const newCompletedFields = new Set<string>();
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim().length > 0) {
        newCompletedFields.add(key);
      }
    });
    setCompletedFields(newCompletedFields);
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      if (!googleSheetsUrl.trim()) {
        throw new Error('Contact form is not properly configured');
      }

      const submissionData = {
        timestamp: new Date().toISOString(),
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        source: 'Portfolio Contact Form'
      };

      await fetch(googleSheetsUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData)
      });

      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      // Clear form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'http://www.linkedin.com/in/k-jeevan-kumar-5333b32b8',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'from-blue-600 to-blue-700'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/kjeevankumar?tab=repositories',
      color: 'from-gray-700 to-gray-800',
      hoverColor: 'from-gray-800 to-gray-900'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:kjeevankumar944@gmail.com?subject=Hi Jeevan - Portfolio Contact',
      color: 'from-red-500 to-red-600',
      hoverColor: 'from-red-600 to-red-700'
    }
  ];

  const getFieldBorderColor = (fieldName: string) => {
    if (completedFields.has(fieldName)) {
      return 'border-green-400 shadow-green-200 shadow-lg';
    }
    if (focusedField === fieldName) {
      return 'border-purple-400 shadow-purple-200 shadow-lg';
    }
    return 'border-gray-300 hover:border-blue-400';
  };

  return (
    <section 
      id="contact" 
      data-animate
      className={`py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 transition-all duration-1000 overflow-hidden relative ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-pink-300/20 to-red-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-in-down">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-pulse">Connect</span>
            <Sparkles className="inline-block w-8 h-8 ml-2 text-yellow-500 animate-bounce" />
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in">
            Ready to collaborate or discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="p-8 shadow-2xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-slide-in-left hover:bg-gradient-to-br hover:from-white hover:to-purple-50/30">
            <CardContent className="p-0">
              <div className="mb-8">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">Send Me a Message</h3>
                <p className="text-gray-600">Fill out the form below and I'll get back to you as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2 animate-slide-in-left" style={{ animationDelay: '200ms' }}>
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      Full Name *
                      {completedFields.has('name') && <span className="ml-2 text-green-500">✓</span>}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      className={`h-12 transition-all duration-300 ${getFieldBorderColor('name')} focus:border-purple-500 focus:ring-2 focus:ring-purple-200`}
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  <div className="space-y-2 animate-slide-in-right" style={{ animationDelay: '300ms' }}>
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email Address *
                      {completedFields.has('email') && <span className="ml-2 text-green-500">✓</span>}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      className={`h-12 transition-all duration-300 ${getFieldBorderColor('email')} focus:border-purple-500 focus:ring-2 focus:ring-purple-200`}
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2 animate-slide-in-left" style={{ animationDelay: '400ms' }}>
                  <Label htmlFor="subject" className="text-gray-700 font-medium">
                    Subject *
                    {completedFields.has('subject') && <span className="ml-2 text-green-500">✓</span>}
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('subject')}
                    onBlur={handleBlur}
                    className={`h-12 transition-all duration-300 ${getFieldBorderColor('subject')} focus:border-purple-500 focus:ring-2 focus:ring-purple-200`}
                    disabled={isSubmitting}
                    required
                  />
                </div>

                <div className="space-y-2 animate-slide-in-right" style={{ animationDelay: '500ms' }}>
                  <Label htmlFor="message" className="text-gray-700 font-medium">
                    Your Message *
                    {completedFields.has('message') && <span className="ml-2 text-green-500">✓</span>}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    className={`min-h-[120px] transition-all duration-300 ${getFieldBorderColor('message')} focus:border-purple-500 focus:ring-2 focus:ring-purple-200`}
                    disabled={isSubmitting}
                    required
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-bounce-gentle"
                  style={{ animationDelay: '600ms' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                      <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2 animate-pulse" />
                      <span className="bg-gradient-to-r from-yellow-100 to-pink-100 bg-clip-text text-transparent">Send Message</span>
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="p-8 shadow-2xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-slide-in-right">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300 animate-slide-in-left" style={{ animationDelay: '200ms' }}>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <a href="mailto:kjeevankumar944@gmail.com" className="text-blue-600 hover:text-purple-600 transition-colors duration-300 hover:underline">
                        kjeevankumar944@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300 animate-slide-in-left" style={{ animationDelay: '300ms' }}>
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">Available upon request</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300 animate-slide-in-left" style={{ animationDelay: '400ms' }}>
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Location</h4>
                      <p className="text-gray-600">Telangana, India 🇮🇳</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 shadow-2xl border-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-slide-in-right" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6 animate-pulse">Follow Me</h3>
                <p className="mb-6 text-purple-100">Connect with me on social media for updates and insights!</p>
                
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40 transform hover:scale-110 hover:rotate-3 animate-bounce-gentle bg-gradient-to-r ${social.color} hover:${social.hoverColor}`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <social.icon className="w-5 h-5 animate-pulse" />
                      <span className="font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
