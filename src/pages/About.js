import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Target, Eye, Heart, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and ethical practices in all our dealings.',
      gradient: 'from-[#0078D4] to-[#00BFA5]'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Clear communication and open reporting ensure you always know where your revenue stands.',
      gradient: 'from-[#00BFA5] to-[#7CB342]'
    },
    {
      icon: Target,
      title: 'Accountability',
      description: 'We take ownership of results and are committed to achieving your financial goals.',
      gradient: 'from-[#7CB342] to-[#0078D4]'
    },
    {
      icon: Award,
      title: 'Client-Centric Approach',
      description: 'Your success is our success. We tailor our solutions to meet your unique needs.',
      gradient: 'from-[#0078D4] to-[#00BFA5]'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0078D4]/5 via-transparent to-[#00BFA5]/5">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <Badge className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] text-white border-0 px-4 py-1.5">
              About Us
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold">
              Who <span className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] bg-clip-text text-transparent">We Are</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              MRM RCM Solutions is a professional Revenue Cycle Management company focused on 
              maximizing financial performance for healthcare providers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
                alt="Healthcare Analytics"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0078D4]/20 to-transparent rounded-2xl"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Expertise That Delivers Results
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With deep knowledge of payer guidelines, coding compliance, and billing workflows, 
                we ensure accurate claim processing and faster reimbursements.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand the financial challenges faced by healthcare practices — and we provide 
                solutions that deliver measurable results.
              </p>
              <Card className="bg-gradient-to-r from-[#0078D4]/10 to-[#00BFA5]/10 border-2 border-[#0078D4]/20">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground">
                    We don't just process claims — we optimize your entire revenue cycle.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <Card className="border-2 border-border hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0078D4] to-[#00BFA5] flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To simplify the revenue cycle process and help healthcare providers achieve 
                  consistent, predictable cash flow.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00BFA5] to-[#7CB342] flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become a trusted global RCM partner known for integrity, efficiency, 
                  and performance-driven results.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Core <span className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] bg-clip-text text-transparent">Values</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border">
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Commitment Section */}
          <Card className="bg-gradient-to-br from-[#0078D4]/10 via-[#00BFA5]/10 to-[#7CB342]/10 border-2 border-[#0078D4]/20">
            <CardContent className="p-12 text-center space-y-6">
              <div className="flex justify-center">
                <img 
                  src="https://customer-assets.emergentagent.com/job_31036fe3-3d23-4fef-823e-a2abc72a9871/artifacts/817gzn56_unnamed.jpg" 
                  alt="MRM RCM Solutions" 
                  className="h-24 w-24 object-contain"
                />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] bg-clip-text text-transparent">
                  Our Commitment to Excellence
                </span>
              </h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We are dedicated to providing healthcare providers with the highest quality revenue 
                cycle management services. Our team of experienced professionals works tirelessly to 
                ensure your practice achieves optimal financial performance while maintaining full 
                compliance with industry regulations.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
