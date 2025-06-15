
import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle, User, Building, DollarSign, FileText, Clock, Shield } from 'lucide-react';

interface ContactSectionProps {
  isVisible: boolean;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  inquiryType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

interface FieldState {
  isFocused: boolean;
  isValid: boolean;
  isDirty: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isVisible }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    inquiryType: '',
    budget: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [fieldStates, setFieldStates] = useState<Record<string, FieldState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [googleSheetsUrl, setGoogleSheetsUrl] = useState('');
  const [submitProgress, setSubmitProgress] = useState(0);

  // Load Google Sheets URL and form draft from localStorage
  useEffect(() => {
    const savedUrl = localStorage.getItem('googleSheetsWebAppUrl');
    if (savedUrl) {
      setGoogleSheetsUrl(savedUrl);
    }
    
    // Load form draft
    const savedDraft = localStorage.getItem('contactFormDraft');
    if (savedDraft) {
      try {
        const draftData = JSON.parse(savedDraft);
        setFormData(draftData);
      } catch (error) {
        console.log('Could not load form draft:', error);
      }
    }
  }, []);

  // Auto-save form draft
  const saveFormDraft = useCallback(() => {
    const hasData = Object.values(formData).some(value => value.trim() !== '');
    if (hasData) {
      localStorage.setItem('contactFormDraft', JSON.stringify(formData));
    }
  }, [formData]);

  useEffect(() => {
    const timer = setTimeout(saveFormDraft, 1000);
    return () => clearTimeout(timer);
  }, [saveFormDraft]);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.length < 2) return 'Name must be at least 2 characters';
        if (!/^[a-zA-Z\s]+$/.test(value)) return 'Name can only contain letters and spaces';
        break;
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        break;
      case 'phone':
        if (value && !/^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/[\s\-\(\)]/g, ''))) {
          return 'Please enter a valid phone number';
        }
        break;
      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.length < 5) return 'Subject must be at least 5 characters';
        break;
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.length < 10) return 'Message must be at least 10 characters';
        break;
    }
    return undefined;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
    
    // Update field state
    setFieldStates(prev => ({
      ...prev,
      [name]: {
        ...prev[name],
        isValid: !error,
        isDirty: true
      }
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (fieldName: string) => {
    setFieldStates(prev => ({
      ...prev,
      [fieldName]: { ...prev[fieldName], isFocused: true }
    }));
  };

  const handleBlur = (fieldName: string) => {
    setFieldStates(prev => ({
      ...prev,
      [fieldName]: { ...prev[fieldName], isFocused: false }
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const requiredFields = ['name', 'email', 'subject', 'message'];
    
    requiredFields.forEach(field => {
      const error = validateField(field, formData[field as keyof FormData]);
      if (error) newErrors[field as keyof FormErrors] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const simulateProgress = () => {
    setSubmitProgress(0);
    const interval = setInterval(() => {
      setSubmitProgress(prev => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
    return interval;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    const progressInterval = simulateProgress();

    try {
      if (!googleSheetsUrl.trim()) {
        throw new Error('Contact form is not properly configured');
      }

      const submissionData = {
        timestamp: new Date().toISOString(),
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        company: formData.company.trim(),
        subject: formData.subject.trim(),
        inquiryType: formData.inquiryType,
        budget: formData.budget,
        message: formData.message.trim(),
        source: 'Enhanced Portfolio Contact Form'
      };

      await fetch(googleSheetsUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData)
      });

      clearInterval(progressInterval);
      setSubmitProgress(100);
      
      setTimeout(() => {
        setIsSubmitted(true);
        toast({
          title: "Message Sent Successfully! 🎉",
          description: "Thank you for reaching out. I'll get back to you within 24 hours!",
        });
        
        // Clear form and draft
        setFormData({ name: '', email: '', phone: '', company: '', subject: '', inquiryType: '', budget: '', message: '' });
        localStorage.removeItem('contactFormDraft');
        setFieldStates({});
        
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 500);
      
    } catch (error) {
      clearInterval(progressInterval);
      console.error("Error submitting form:", error);
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitProgress(0), 2000);
    }
  };

  const inquiryTypes = [
    { value: 'project', label: 'Project Collaboration' },
    { value: 'job', label: 'Job Opportunity' },
    { value: 'consultation', label: 'Consultation' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'other', label: 'Other' }
  ];

  const budgetRanges = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-50k', label: '$15,000 - $50,000' },
    { value: '50k-plus', label: '$50,000+' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'http://www.linkedin.com/in/k-jeevan-kumar-5333b32b8',
      color: 'text-blue-600 hover:text-blue-700',
      bgColor: 'bg-blue-50 hover:bg-blue-100'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/kjeevankumar?tab=repositories',
      color: 'text-gray-800 hover:text-gray-900',
      bgColor: 'bg-gray-50 hover:bg-gray-100'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:kjeevankumar944@gmail.com?subject=Hi Jeevan - Portfolio Contact',
      color: 'text-red-600 hover:text-red-700',
      bgColor: 'bg-red-50 hover:bg-red-100'
    }
  ];

  return (
    <>
      <style>
        {`
          @keyframes socialPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          
          @keyframes progressFill {
            0% { width: 0%; }
            100% { width: var(--progress-width); }
          }
          
          .social-icon {
            animation: socialPulse 3s ease-in-out infinite;
            animation-delay: var(--delay, 0s);
          }
          
          .social-icon:hover {
            animation: none;
            transform: scale(1.1);
          }
          
          .floating-label {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .field-focused .floating-label,
          .field-has-value .floating-label {
            transform: translateY(-24px) scale(0.85);
            color: #3b82f6;
          }
          
          .progress-bar {
            background: linear-gradient(90deg, #3b82f6, #8b5cf6);
            border-radius: 2px;
            height: 3px;
            animation: progressFill 0.3s ease-out;
          }
          
          .auto-resize {
            resize: none;
            overflow: hidden;
          }
        `}
      </style>
      
      <section 
        id="contact" 
        data-animate
        className={`py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's <span className="animated-gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to collaborate or discuss opportunities? I'd love to hear from you!
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>Typical response time: 24 hours</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-0">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Send Me a Message</h3>
                  <p className="text-gray-600">Fill out the form below and I'll get back to you as soon as possible.</p>
                  {Object.values(formData).some(value => value.trim()) && (
                    <div className="flex items-center gap-2 mt-3 text-sm text-blue-600">
                      <Shield className="w-4 h-4" />
                      <span>Draft saved automatically</span>
                    </div>
                  )}
                </div>

                {isSubmitting && (
                  <div className="mb-6">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                      <span>Sending your message...</span>
                      <span>{Math.round(submitProgress)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1">
                      <div 
                        className="progress-bar"
                        style={{ '--progress-width': `${submitProgress}%` } as React.CSSProperties}
                      />
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Basic Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className={`relative ${fieldStates.name?.isFocused ? 'field-focused' : ''} ${formData.name ? 'field-has-value' : ''}`}>
                      <Label htmlFor="name" className="floating-label absolute left-3 top-3 text-gray-500 pointer-events-none">
                        Full Name *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => handleFocus('name')}
                          onBlur={() => handleBlur('name')}
                          className={`h-12 pl-10 ${errors.name ? 'border-red-500' : fieldStates.name?.isValid ? 'border-green-500' : 'focus:border-blue-500'} transition-all duration-300`}
                          placeholder=""
                          disabled={isSubmitting}
                        />
                        {fieldStates.name?.isValid && !errors.name && (
                          <CheckCircle className="absolute right-3 top-3.5 w-5 h-5 text-green-500" />
                        )}
                      </div>
                      {errors.name && (
                        <p className="text-red-500 text-sm flex items-center gap-1 mt-1 animate-fade-in">
                          <AlertCircle className="w-4 h-4" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className={`relative ${fieldStates.email?.isFocused ? 'field-focused' : ''} ${formData.email ? 'field-has-value' : ''}`}>
                      <Label htmlFor="email" className="floating-label absolute left-3 top-3 text-gray-500 pointer-events-none">
                        Email Address *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => handleFocus('email')}
                          onBlur={() => handleBlur('email')}
                          className={`h-12 pl-10 ${errors.email ? 'border-red-500' : fieldStates.email?.isValid ? 'border-green-500' : 'focus:border-blue-500'} transition-all duration-300`}
                          placeholder=""
                          disabled={isSubmitting}
                        />
                        {fieldStates.email?.isValid && !errors.email && (
                          <CheckCircle className="absolute right-3 top-3.5 w-5 h-5 text-green-500" />
                        )}
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-sm flex items-center gap-1 mt-1 animate-fade-in">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Optional Contact Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className={`relative ${fieldStates.phone?.isFocused ? 'field-focused' : ''} ${formData.phone ? 'field-has-value' : ''}`}>
                      <Label htmlFor="phone" className="floating-label absolute left-3 top-3 text-gray-500 pointer-events-none">
                        Phone Number (Optional)
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => handleFocus('phone')}
                          onBlur={() => handleBlur('phone')}
                          className="h-12 pl-10 focus:border-blue-500 transition-all duration-300"
                          placeholder=""
                          disabled={isSubmitting}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-500 text-sm flex items-center gap-1 mt-1 animate-fade-in">
                          <AlertCircle className="w-4 h-4" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div className={`relative ${fieldStates.company?.isFocused ? 'field-focused' : ''} ${formData.company ? 'field-has-value' : ''}`}>
                      <Label htmlFor="company" className="floating-label absolute left-3 top-3 text-gray-500 pointer-events-none">
                        Company (Optional)
                      </Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          onFocus={() => handleFocus('company')}
                          onBlur={() => handleBlur('company')}
                          className="h-12 pl-10 focus:border-blue-500 transition-all duration-300"
                          placeholder=""
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-gray-700 font-medium">Inquiry Type</Label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleSelectChange('inquiryType', value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-gray-700 font-medium">Project Budget (Optional)</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleSelectChange('budget', value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range.value} value={range.value}>
                              {range.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className={`relative ${fieldStates.subject?.isFocused ? 'field-focused' : ''} ${formData.subject ? 'field-has-value' : ''}`}>
                    <Label htmlFor="subject" className="floating-label absolute left-3 top-3 text-gray-500 pointer-events-none">
                      Subject *
                    </Label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('subject')}
                        onBlur={() => handleBlur('subject')}
                        className={`h-12 pl-10 ${errors.subject ? 'border-red-500' : fieldStates.subject?.isValid ? 'border-green-500' : 'focus:border-blue-500'} transition-all duration-300`}
                        placeholder=""
                        disabled={isSubmitting}
                      />
                      {fieldStates.subject?.isValid && !errors.subject && (
                        <CheckCircle className="absolute right-3 top-3.5 w-5 h-5 text-green-500" />
                      )}
                    </div>
                    {errors.subject && (
                      <p className="text-red-500 text-sm flex items-center gap-1 mt-1 animate-fade-in">
                        <AlertCircle className="w-4 h-4" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className={`relative ${fieldStates.message?.isFocused ? 'field-focused' : ''} ${formData.message ? 'field-has-value' : ''}`}>
                    <Label htmlFor="message" className="floating-label absolute left-3 top-3 text-gray-500 pointer-events-none z-10">
                      Your Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={() => handleBlur('message')}
                      className={`auto-resize min-h-[120px] pt-8 ${errors.message ? 'border-red-500' : fieldStates.message?.isValid ? 'border-green-500' : 'focus:border-blue-500'} transition-all duration-300`}
                      placeholder=""
                      disabled={isSubmitting}
                      rows={4}
                    />
                    <div className="flex justify-between items-center mt-2">
                      {errors.message ? (
                        <p className="text-red-500 text-sm flex items-center gap-1 animate-fade-in">
                          <AlertCircle className="w-4 h-4" />
                          {errors.message}
                        </p>
                      ) : (
                        <div className="text-xs text-gray-500">
                          {formData.message.length >= 10 && '✓ Good length'}
                        </div>
                      )}
                      <span className={`text-sm ${formData.message.length > 1000 ? 'text-red-500' : 'text-gray-500'}`}>
                        {formData.message.length} / 1500
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                        Sending Message...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Message Sent Successfully!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Your information is secure and will only be used to respond to your inquiry.
                  </p>
                </form>
              </CardContent>
            </Card>

            
            <div className="space-y-8">
              <Card className="p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <a href="mailto:kjeevankumar944@gmail.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                          kjeevankumar944@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Phone</h4>
                        <p className="text-gray-600">Available upon request</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Location</h4>
                        <p className="text-gray-600">Telangana, India 🇮🇳</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
                  <p className="mb-6 text-blue-100">Connect with me on social media for updates and insights!</p>
                  
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon group flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40"
                        style={{ '--delay': `${index * 0.5}s` } as React.CSSProperties}
                      >
                        <social.icon className="w-5 h-5" />
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
    </>
  );
};

export default ContactSection;
