import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  Users, 
  FileText, 
  DollarSign, 
  ClipboardCheck, 
  TrendingUp, 
  Shield, 
  BarChart3, 
  Phone,
  CheckCircle2,
  Stethoscope,
  CreditCard,
  AlertCircle
} from 'lucide-react';

const Services = () => {
  const frontEndServices = [
    { icon: Users, label: 'Insurance Verification', color: 'from-[#0078D4] to-[#00BFA5]' },
    { icon: ClipboardCheck, label: 'Prior Authorization', color: 'from-[#00BFA5] to-[#7CB342]' },
    { icon: FileText, label: 'Patient Demographics Entry', color: 'from-[#7CB342] to-[#0078D4]' }
  ];

  const midCycleServices = [
    { icon: FileText, label: 'Medical Coding', color: 'from-[#0078D4] to-[#00BFA5]' },
    { icon: DollarSign, label: 'Charge Entry', color: 'from-[#00BFA5] to-[#7CB342]' },
    { icon: ClipboardCheck, label: 'Claims Submission', color: 'from-[#7CB342] to-[#0078D4]' }
  ];

  const backEndServices = [
    { icon: CreditCard, label: 'Payment Posting', color: 'from-[#0078D4] to-[#00BFA5]' },
    { icon: TrendingUp, label: 'AR Follow-Up', color: 'from-[#00BFA5] to-[#7CB342]' },
    { icon: Shield, label: 'Denial Management', color: 'from-[#7CB342] to-[#0078D4]' },
    { icon: AlertCircle, label: 'Appeals Handling', color: 'from-[#0078D4] to-[#00BFA5]' },
    { icon: Phone, label: 'Patient Billing', color: 'from-[#00BFA5] to-[#7CB342]' }
  ];

  const detailedServices = [
    {
      icon: Users,
      title: 'Patient Registration & Eligibility Verification',
      features: [
        'Insurance eligibility verification',
        'Benefits confirmation',
        'Prior authorization',
        'Accurate demographic entry',
        'Real-time eligibility checks'
      ],
      gradient: 'from-[#0078D4] to-[#00BFA5]'
    },
    {
      icon: FileText,
      title: 'Medical Coding',
      features: [
        'HCPCS Coding',
        'Specialty-specific coding',
        'Compliance and accuracy audits',
        'Professional coding expertise',
        'Code optimization'
      ],
      gradient: 'from-[#00BFA5] to-[#7CB342]'
    },
    {
      icon: DollarSign,
      title: 'Charge Entry',
      features: [
        'Superbill entry',
        'Charge review and validation',
        'Coding cross-verification',
        'Fee schedule management',
        'Modifier application'
      ],
      gradient: 'from-[#7CB342] to-[#0078D4]'
    },
    {
      icon: ClipboardCheck,
      title: 'Claims Submission',
      features: [
        'Electronic claim submission',
        'Clearinghouse management',
        'Error correction before submission',
        'Real-time claim tracking',
        'Multi-payer submission'
      ],
      gradient: 'from-[#0078D4] to-[#00BFA5]'
    },
    {
      icon: CreditCard,
      title: 'Payment Posting',
      features: [
        'ERA posting',
        'Manual payment posting',
        'Payment reconciliation',
        'Adjustment tracking',
        'Multi-level billing coordination'
      ],
      gradient: 'from-[#00BFA5] to-[#7CB342]'
    },
    {
      icon: Shield,
      title: 'Denial Management',
      features: [
        'Root cause analysis',
        'Denial tracking',
        'Appeal submissions',
        'Reprocessing claims',
        'Trend analysis and prevention'
      ],
      gradient: 'from-[#7CB342] to-[#0078D4]'
    },
    {
      icon: BarChart3,
      title: 'Accounts Receivable (AR) Follow-Up',
      features: [
        'Insurance AR follow-up',
        'Patient AR follow-up',
        'Aging report monitoring',
        'Recovery of old outstanding AR',
        'Collection strategies'
      ],
      gradient: 'from-[#0078D4] to-[#00BFA5]'
    },
    {
      icon: Phone,
      title: 'Patient Billing Services',
      features: [
        'Patient statements',
        'Payment plan setup',
        'Customer support assistance',
        'Online payment portal setup',
        'Payment reminder services'
      ],
      gradient: 'from-[#00BFA5] to-[#7CB342]'
    },
    {
      icon: BarChart3,
      title: 'Reporting & Analytics',
      features: [
        'Monthly performance reports',
        'AR aging reports',
        'Denial analysis',
        'KPI tracking and revenue insights',
        'Custom reporting'
      ],
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
              Our Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold">
              End-to-End <span className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] bg-clip-text text-transparent">Revenue Cycle Management</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We manage the complete lifecycle of a medical claim — from patient registration to final payment collection.
            </p>
          </div>
        </div>
      </section>

      {/* Service Lifecycle Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Front-End Services */}
            <Card className="border-2 border-[#0078D4]/30 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0078D4] to-[#00BFA5] flex items-center justify-center mb-4">
                  <Stethoscope className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Front-End Services</CardTitle>
                <CardDescription>Pre-claim submission processes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {frontEndServices.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <li key={index} className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-foreground font-medium">{service.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>

            {/* Mid-Cycle Services */}
            <Card className="border-2 border-[#00BFA5]/30 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00BFA5] to-[#7CB342] flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Mid-Cycle Services</CardTitle>
                <CardDescription>Claim creation and submission</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {midCycleServices.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <li key={index} className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-foreground font-medium">{service.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>

            {/* Back-End Services */}
            <Card className="border-2 border-[#7CB342]/30 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#7CB342] to-[#0078D4] flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Back-End Services</CardTitle>
                <CardDescription>Post-submission revenue collection</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {backEndServices.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <li key={index} className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-foreground font-medium">{service.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0078D4]/5 via-transparent to-[#00BFA5]/5">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Comprehensive <span className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] bg-clip-text text-transparent">Service Details</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every service designed to optimize your revenue cycle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedServices.map((service, index) => {
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
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-[#00BFA5] mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-[#0078D4]/10 via-[#00BFA5]/10 to-[#7CB342]/10 border-2 border-[#0078D4]/20">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Let's Optimize Your <span className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] bg-clip-text text-transparent">Revenue Cycle</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Contact us today to learn how our comprehensive RCM services can transform your practice's financial performance.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] hover:opacity-90 text-white text-lg px-8 h-14 transition-all duration-300 hover:scale-105 shadow-lg">
                  Get Started Today
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
