import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Shield, Lock, Key, Eye, FileCheck, Server } from 'lucide-react';

const Compliance = () => {
  const securityMeasures = [
    {
      icon: Lock,
      title: 'Secure Data Transmission',
      description: 'All data is transmitted using industry-standard encryption protocols to ensure complete security.',
      gradient: 'from-[#0078D4] to-[#00BFA5]'
    },
    {
      icon: Eye,
      title: 'Confidential Handling of PHI',
      description: 'Protected Health Information (PHI) is handled with strict confidentiality measures at all times.',
      gradient: 'from-[#00BFA5] to-[#7CB342]'
    },
    {
      icon: Key,
      title: 'Access-Controlled Systems',
      description: 'Multi-level access controls ensure only authorized personnel can access sensitive information.',
      gradient: 'from-[#7CB342] to-[#0078D4]'
    },
    {
      icon: Server,
      title: 'Encrypted Communication',
      description: 'All communications are encrypted end-to-end to protect sensitive healthcare data.',
      gradient: 'from-[#0078D4] to-[#00BFA5]'
    },
    {
      icon: FileCheck,
      title: 'Regular Compliance Training',
      description: 'Our team undergoes continuous HIPAA compliance training to stay current with regulations.',
      gradient: 'from-[#00BFA5] to-[#7CB342]'
    },
    {
      icon: Shield,
      title: 'Full Confidentiality',
      description: 'We maintain complete confidentiality and protect all sensitive healthcare information.',
      gradient: 'from-[#7CB342] to-[#0078D4]'
    }
  ];

  const compliancePoints = [
    'Business Associate Agreement (BAA) compliance',
    'HIPAA Privacy Rule adherence',
    'HIPAA Security Rule implementation',
    'Regular security risk assessments',
    'Incident response protocols',
    'Employee background checks',
    'Signed confidentiality agreements',
    'Secure workstation policies',
    'Data backup and disaster recovery',
    'Audit trail maintenance',
    'Breach notification procedures',
    'Physical security measures'
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0078D4]/10 via-transparent to-[#00BFA5]/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <Badge className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] text-white border-0 px-4 py-1.5">
              HIPAA Compliance
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold">
              Data Security & <span className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] bg-clip-text text-transparent">Compliance</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At MRM RCM Solutions, patient data security is our top priority.
            </p>
          </div>
        </div>
      </section>

      {/* Main Security Image */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/5466250/pexels-photo-5466250.jpeg" 
              alt="Data Security"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Your Data, Fully Protected
              </h2>
              <p className="text-xl text-white/90">
                Strict HIPAA compliance standards in everything we do
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] bg-clip-text text-transparent">Security Measures</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive protection for your sensitive healthcare data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityMeasures.map((measure, index) => {
              const Icon = measure.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${measure.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{measure.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {measure.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Checklist */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0078D4]/5 via-transparent to-[#00BFA5]/5">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] bg-clip-text text-transparent">HIPAA Compliance</span> Standards
            </h2>
            <p className="text-xl text-muted-foreground">
              We follow strict HIPAA compliance standards to ensure
            </p>
          </div>

          <Card className="border-2 border-border">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                {compliancePoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#0078D4] to-[#00BFA5] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Shield className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-foreground font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-[#0078D4]/10 via-[#00BFA5]/10 to-[#7CB342]/10 border-2 border-[#0078D4]/20">
            <CardContent className="p-12 space-y-8">
              <div className="flex justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0078D4] to-[#00BFA5] flex items-center justify-center">
                  <Shield className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="text-center space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] bg-clip-text text-transparent">
                    Our Commitment to You
                  </span>
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We understand the critical importance of protecting patient data. Our comprehensive 
                  HIPAA compliance program ensures that your practice and your patients' information 
                  remains secure at all times.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every member of our team is trained in HIPAA regulations and follows strict protocols 
                  to maintain the confidentiality, integrity, and availability of all protected health 
                  information we handle.
                </p>
              </div>
              <div className="flex justify-center pt-4">
                <Badge className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] text-white border-0 px-6 py-2 text-base">
                  100% HIPAA Compliant
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Compliance;
