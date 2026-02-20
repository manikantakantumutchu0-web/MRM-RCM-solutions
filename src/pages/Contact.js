import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    practiceName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (frontend only with mock data)
    setTimeout(() => {
      toast.success('Thank you for contacting us! We will get back to you within 24 hours.', {
        description: 'Your consultation request has been received.',
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        practiceName: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@mrmrcmsolutions.com',
      link: 'mailto:info@mrmrcmsolutions.com',
      gradient: 'from-[#0078D4] to-[#00BFA5]'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 302-217-3558',
      link: 'tel:+13022173558',
      subtitle: 'Monday – Friday',
      gradient: 'from-[#00BFA5] to-[#7CB342]'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      content: 'Healthcare Providers',
      subtitle: 'Across the United States',
      gradient: 'from-[#7CB342] to-[#0078D4]'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0078D4]/5 via-transparent to-[#00BFA5]/5">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <Badge className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] text-white border-0 px-4 py-1.5">
              Contact Us
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold">
              Get in <span className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to improve your revenue performance? Let's start the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${info.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-[#0078D4] hover:text-[#00BFA5] font-medium transition-colors duration-200"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <>
                        <p className="text-foreground font-medium">{info.content}</p>
                        {info.subtitle && (
                          <p className="text-sm text-muted-foreground mt-1">{info.subtitle}</p>
                        )}
                      </>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <Card className="border-2 border-border shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Request <span className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] bg-clip-text text-transparent">Free Consultation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="practiceName">Practice Name *</Label>
                    <Input
                      id="practiceName"
                      name="practiceName"
                      value={formData.practiceName}
                      onChange={handleChange}
                      placeholder="Your practice name"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your practice and how we can help..."
                      required
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#0078D4] to-[#00BFA5] hover:opacity-90 text-white h-14 text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Clock className="h-5 w-5 animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Let's Talk About Your <span className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] bg-clip-text text-transparent">Revenue Goals</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Fill out the form and our team will reach out to you within 24 hours to discuss 
                  how we can optimize your revenue cycle management.
                </p>
              </div>

              <Card className="bg-gradient-to-br from-[#0078D4]/10 via-[#00BFA5]/10 to-[#7CB342]/10 border-2 border-[#0078D4]/20">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    What Happens Next?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0078D4] to-[#00BFA5] flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Initial Consultation</h4>
                        <p className="text-muted-foreground">We'll discuss your current challenges and goals.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00BFA5] to-[#7CB342] flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Free RCM Audit</h4>
                        <p className="text-muted-foreground">We'll analyze your current revenue cycle performance.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7CB342] to-[#0078D4] flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Custom Proposal</h4>
                        <p className="text-muted-foreground">Receive a tailored solution with transparent pricing.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#0078D4]/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0078D4] to-[#00BFA5] flex items-center justify-center">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Response Time</h3>
                      <p className="text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    We value your time and are committed to responding to all inquiries promptly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
