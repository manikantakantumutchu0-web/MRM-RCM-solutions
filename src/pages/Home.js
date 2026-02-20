import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  CheckCircle2, 
  TrendingUp, 
  Shield, 
  Users, 
  FileText, 
  DollarSign,
  ClipboardCheck,
  Phone,
  BarChart3,
  Clock,
  Target,
  Award
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Users,
      title: 'Patient Registration & Eligibility Verification',
      description: 'Insurance eligibility verification, benefits confirmation, prior authorization, and accurate demographic entry.',
      gradient: 'from-[#0078D4] to-[#00BFA5]'
    },
    {
      icon: FileText,
      title: 'Medical Coding',
      description: 'HCPCS coding with specialty-specific expertise and comprehensive compliance audits.',
      gradient: 'from-[#00BFA5] to-[#7CB342]'
    },
    {
      icon: DollarSign,
      title: 'Charge Entry',
      description: 'Superbill entry, charge review and validation, coding cross-verification.',
      gradient: 'from-[#7CB342] to-[#0078D4]'
    },
    {
      icon: ClipboardCheck,
      title: 'Claims Submission',
      description: 'Electronic claim submission, clearinghouse management, error correction before submission.',
      gradient: 'from-[#0078D4] to-[#00BFA5]'
    },
    {
      icon: TrendingUp,
      title: 'Payment Posting',
      description: 'ERA posting, manual payment posting, and comprehensive payment reconciliation.',
      gradient: 'from-[#00BFA5] to-[#7CB342]'
    },
    {
      icon: Shield,
      title: 'Denial Management',
      description: 'Root cause analysis, denial tracking, appeal submissions, and reprocessing claims.',
      gradient: 'from-[#7CB342] to-[#0078D4]'
    },
    {
      icon: BarChart3,
      title: 'AR Follow-Up',
      description: 'Insurance and patient AR follow-up, aging report monitoring, recovery of outstanding AR.',
      gradient: 'from-[#0078D4] to-[#00BFA5]'
    },
    {
      icon: Phone,
      title: 'Patient Billing Services',
      description: 'Patient statements, payment plan setup, customer support assistance.',
      gradient: 'from-[#00BFA5] to-[#7CB342]'
    }
  ];

  const specialties = [
    'Family Medicine', 'Internal Medicine', 'Cardiology', 'Orthopedics',
    'Dermatology', 'Radiology', 'Gastroenterology', 'Mental Health',
    'Urgent Care', 'Pediatrics'
  ];

  const whyChooseUs = [
    { label: '98%+ Clean Claim Rate', icon: Target },
    { label: 'Faster Reimbursements', icon: Clock },
    { label: 'Reduced AR Days', icon: TrendingUp },
    { label: 'HIPAA-Compliant Processes', icon: Shield },
    { label: 'Dedicated Account Manager', icon: Users },
    { label: 'Transparent Monthly Reporting', icon: BarChart3 }
  ];

  const process = [
    { step: 1, title: 'Revenue Analysis', description: 'We evaluate your current billing workflow and identify revenue gaps.' },
    { step: 2, title: 'Strategy Implementation', description: 'We optimize coding accuracy, claim submission, and follow-up processes.' },
    { step: 3, title: 'Active Monitoring', description: 'Continuous tracking of claims, denials, and payments.' },
    { step: 4, title: 'Performance Reporting', description: 'Detailed monthly reporting with actionable insights.' },
    { step: 5, title: 'Revenue Growth', description: 'Improved collections and stabilized cash flow.' }
  ];

  const metrics = [
    { value: '20-30%', label: 'Increase in Collections' },
    { value: '98%+', label: 'Clean Claim Rate' },
    { value: '40%', label: 'Reduction in Denials' },
    { value: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
            alt="Healthcare Analytics"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0078D4]/10 via-background to-[#00BFA5]/10"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] text-white border-0 px-4 py-1.5">
              Complete Revenue Cycle Management
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#0078D4] via-[#00BFA5] to-[#7CB342] bg-clip-text text-transparent">
                Maximizing Revenue.
              </span>
              <br />
              <span className="text-foreground">Minimizing Hassle.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              End-to-End Revenue Cycle Management Solutions Designed to Increase Collections, 
              Reduce Denials, and Improve Cash Flow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] hover:opacity-90 text-white text-lg px-8 h-14 transition-all duration-300 hover:scale-105 shadow-lg">
                  Schedule Free Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-[#0078D4] text-[#0078D4] hover:bg-[#0078D4]/10 text-lg px-8 h-14 transition-all duration-300 hover:scale-105">
                  Get a Free RCM Audit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0078D4]/5 via-transparent to-[#00BFA5]/5">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                About <span className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] bg-clip-text text-transparent">MRM RCM Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                MRM RCM Solutions is a dedicated Revenue Cycle Management partner helping healthcare 
                providers streamline billing operations and optimize financial performance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We specialize in delivering accurate, compliant, and efficient medical billing services 
                tailored to independent physicians, multi-specialty practices, and healthcare organizations 
                across the United States.
              </p>
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#0078D4]/10 to-[#00BFA5]/10 rounded-lg border border-[#0078D4]/20">
                <Award className="h-8 w-8 text-[#0078D4]" />
                <p className="text-lg font-semibold text-foreground">
                  Our goal is simple — improve your cash flow while you focus on patient care.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1659353888477-6e6aab941b55" 
                alt="Healthcare Professional"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0078D4]/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our Core <span className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] bg-clip-text text-transparent">RCM Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive revenue cycle management solutions tailored to your practice needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-2 border-[#0078D4] text-[#0078D4] hover:bg-[#0078D4]/10">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#00BFA5]/5 via-transparent to-[#7CB342]/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] bg-clip-text text-transparent">Specialties</span> We Serve
            </h2>
            <p className="text-xl text-muted-foreground">
              Expertise across multiple healthcare specialties
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {specialties.map((specialty, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-6 py-3 text-base border-2 border-[#0078D4]/30 hover:bg-gradient-to-r hover:from-[#0078D4] hover:to-[#00BFA5] hover:text-white hover:border-transparent transition-all duration-300 cursor-default"
              >
                {specialty}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Choose <span className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] bg-clip-text text-transparent">MRM RCM Solutions?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We act as an extension of your practice — not just a billing vendor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-2 border-border hover:border-[#0078D4]/50 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0078D4] to-[#00BFA5] flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CheckCircle2 className="h-5 w-5 text-[#00BFA5] mb-1" />
                      <p className="font-semibold text-foreground">{item.label}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="bg-gradient-to-br from-[#0078D4]/10 via-[#00BFA5]/10 to-[#7CB342]/10 border-2 border-[#0078D4]/20">
            <CardContent className="p-8 text-center">
              <p className="text-xl font-semibold text-foreground flex items-center justify-center gap-2">
                <Award className="h-6 w-6 text-[#0078D4]" />
                Experienced RCM Professionals at Your Service
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0078D4]/5 via-transparent to-[#00BFA5]/5">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to optimizing your revenue cycle
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-6">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-border">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0078D4] to-[#00BFA5] flex items-center justify-center mx-auto text-2xl font-bold text-white">
                        {item.step}
                      </div>
                      <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#0078D4] to-[#00BFA5] z-10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Performance Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Key Performance <span className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] bg-clip-text text-transparent">Improvements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Measurable results that transform your practice's financial health
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center border-2 border-border hover:border-[#0078D4]/50 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold bg-gradient-to-r from-[#0078D4] to-[#00BFA5] bg-clip-text text-transparent mb-3">
                    {metric.value}
                  </div>
                  <p className="text-muted-foreground font-medium">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0078D4]/10 via-[#00BFA5]/10 to-[#7CB342]/10"></div>
        <div className="container mx-auto relative z-10">
          <Card className="max-w-4xl mx-auto border-2 border-[#0078D4]/20 shadow-2xl">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to <span className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] bg-clip-text text-transparent">Improve Your Revenue</span> Performance?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get started with a free consultation and discover how we can optimize your revenue cycle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] hover:opacity-90 text-white text-lg px-8 h-14 transition-all duration-300 hover:scale-105 shadow-lg">
                    Request Free Consultation
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="border-2 border-[#0078D4] text-[#0078D4] hover:bg-[#0078D4]/10 text-lg px-8 h-14 transition-all duration-300">
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
