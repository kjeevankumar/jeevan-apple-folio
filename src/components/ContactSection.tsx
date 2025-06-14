
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github, Mail, Instagram, Facebook, Clock, MapPin, Send, CheckCircle, AlertCircle, MessageSquare, Zap, Globe } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface ContactSectionProps {
  isVisible: boolean;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isVisible }) => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const { toast } = useToast();

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form after success
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSuccess(false);
    }, 3000);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917816006682', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:kjeevankumar@gmail.com?subject=Let\'s Connect - Portfolio Inquiry', '_blank');
  };

  const handleResumeClick = () => {
    window.open('https://drive.google.com/uc?export=download&id=10eh84qoXZZ2l1ipWY0zg8swLkNTGTAJu', '_blank');
  };

  const socialLinks = [
    { 
      id: 'linkedin',
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'http://www.linkedin.com/in/k-jeevan-kumar-5333b32b8',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800'
    },
    { 
      id: 'github',
      name: 'GitHub', 
      icon: Github, 
      url: 'https://github.com/kjeevankumar?tab=repositories',
      color: 'from-gray-800 to-gray-900',
      hoverColor: 'hover:from-gray-900 hover:to-black'
    },
    { 
      id: 'email',
      name: 'Email', 
      icon: Mail, 
      action: handleEmailClick,
      color: 'from-red-600 to-red-700',
      hoverColor: 'hover:from-red-700 hover:to-red-800'
    },
    { 
      id: 'instagram',
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://www.instagram.com/k_jeevan_kumar_944?igsh=ZHB0Ym14MDc3aGlq',
      color: 'from-pink-600 to-purple-600',
      hoverColor: 'hover:from-pink-700 hover:to-purple-700'
    },
    { 
      id: 'facebook',
      name: 'Facebook', 
      icon: Facebook, 
      url: 'https://www.facebook.com/share/1Qkt3C16hv/?mibextid=qi2Omg',
      color: 'from-blue-700 to-blue-800',
      hoverColor: 'hover:from-blue-800 hover:to-blue-900'
    },
    { 
      id: 'whatsapp',
      name: 'WhatsApp', 
      icon: MessageSquare,
      action: handleWhatsAppClick,
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700'
    }
  ];

  const messageCharCount = formData.message.length;
  const maxChars = 500;

  return (
    <section id="contact" data-animate className="py-12 md:py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Animated Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="animated-gradient-text">Let's Connect & Collaborate</span>
          </h2>
          <p className={`text-lg md:text-xl text-gray-600 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Ready to bring your ideas to life? Let's start the conversation.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Enhanced Contact Form */}
          <Card className="relative overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            {/* Animated Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75"></div>
            <div className="absolute inset-[2px] bg-white rounded-lg"></div>
            
            <CardContent className="relative z-10 p-6 md:p-8 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <Input
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`peer pt-6 pb-2 px-4 text-base border-2 transition-all duration-300 ${
                      errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
                    }`}
                    placeholder=" "
                  />
                  <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                    Your Name
                  </label>
                  {errors.name && (
                    <div className="flex items-center mt-1 text-red-500 text-sm animate-fadeInUp">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name}
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative">
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`peer pt-6 pb-2 px-4 text-base border-2 transition-all duration-300 ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
                    }`}
                    placeholder=" "
                  />
                  <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                    Your Email
                  </label>
                  {errors.email && (
                    <div className="flex items-center mt-1 text-red-500 text-sm animate-fadeInUp">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* Message Field */}
                <div className="relative">
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`peer pt-6 pb-2 px-4 text-base border-2 transition-all duration-300 min-h-[120px] resize-none ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
                    }`}
                    placeholder=" "
                    maxLength={maxChars}
                  />
                  <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                    Your Message
                  </label>
                  <div className="flex justify-between items-center mt-1">
                    {errors.message ? (
                      <div className="flex items-center text-red-500 text-sm animate-fadeInUp">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message}
                      </div>
                    ) : (
                      <div></div>
                    )}
                    <span className={`text-sm ${messageCharCount > maxChars * 0.8 ? 'text-orange-500' : 'text-gray-400'}`}>
                      {messageCharCount}/{maxChars}
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`w-full py-3 text-base font-semibold transition-all duration-300 ${
                    isSuccess 
                      ? 'bg-green-600 hover:bg-green-600' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                  } transform hover:scale-105`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </div>
                  ) : isSuccess ? (
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Message Sent!
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Enhanced Contact Info */}
          <div className="space-y-6 md:space-y-8">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Response Time Card */}
              <Card className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Quick Response</h4>
                    <p className="text-sm text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </Card>

              {/* Location Card */}
              <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Globe className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Global Remote</h4>
                    <p className="text-sm text-gray-600">Available worldwide</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Time Zone Card */}
            <Card className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Clock className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Current Time</h4>
                    <p className="text-sm text-gray-600">{currentTime.toLocaleTimeString()}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  IST
                </Badge>
              </div>
            </Card>

            {/* Enhanced Social Links */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center">Connect With Me</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <div
                      key={social.id}
                      className={`relative opacity-0 animate-[fadeInUp_0.8s_ease-out_${0.1 * (index + 1)}s_forwards]`}
                      onMouseEnter={() => setHoveredIcon(social.id)}
                      onMouseLeave={() => setHoveredIcon(null)}
                    >
                      {social.url ? (
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`block p-3 md:p-4 rounded-xl bg-gradient-to-br ${social.color} ${social.hoverColor} text-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group`}
                        >
                          <div className="flex flex-col items-center space-y-2">
                            <IconComponent className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
                            <span className={`text-xs md:text-sm font-medium transition-all duration-300 ${
                              hoveredIcon === social.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                            }`}>
                              {social.name}
                            </span>
                          </div>
                        </a>
                      ) : (
                        <button
                          onClick={social.action}
                          className={`w-full p-3 md:p-4 rounded-xl bg-gradient-to-br ${social.color} ${social.hoverColor} text-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group`}
                        >
                          <div className="flex flex-col items-center space-y-2">
                            <IconComponent className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
                            <span className={`text-xs md:text-sm font-medium transition-all duration-300 ${
                              hoveredIcon === social.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                            }`}>
                              {social.name}
                            </span>
                          </div>
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Resume Download */}
            <div className="text-center">
              <p className="text-gray-600 mb-4">Want to know more about my experience?</p>
              <Button 
                variant="outline" 
                onClick={handleResumeClick}
                className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 px-6 md:px-8 py-2 md:py-3"
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
