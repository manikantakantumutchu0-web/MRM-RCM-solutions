import React from 'react';
import { Badge } from '../components/ui/badge';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is Revenue Cycle Management?',
      answer: 'Revenue Cycle Management (RCM) is the process of managing medical billing from patient registration to final payment collection. It encompasses all administrative and clinical functions that contribute to the capture, management, and collection of patient service revenue. This includes scheduling, insurance verification, coding, charge entry, claims submission, payment posting, denial management, and AR follow-up.'
    },
    {
      question: 'How quickly can we see improvement?',
      answer: 'Most practices see measurable improvement within 60–90 days of implementation. Initial improvements often appear in clean claim rates and denial reduction within the first 30 days. Significant increases in collections and reduced AR days typically become evident within 60-90 days as we optimize your entire revenue cycle workflow.'
    },
    {
      question: 'Do you work on a percentage basis?',
      answer: 'Yes, we offer flexible pricing models including percentage-based and flat fee structures. Our percentage-based model typically ranges from 4-8% of collections, depending on the complexity and volume of your practice. We also offer hybrid models that combine both approaches. We\'ll work with you to find the pricing structure that best fits your practice\'s needs and budget.'
    },
    {
      question: 'Is our data secure?',
      answer: 'Absolutely. We follow HIPAA-compliant protocols to ensure full data security. Our comprehensive security measures include encrypted data transmission, access-controlled systems, secure workstations, regular security audits, employee background checks, signed confidentiality agreements, and continuous compliance training. We maintain Business Associate Agreements (BAAs) with all clients and implement both physical and technical safeguards to protect your data.'
    },
    {
      question: 'What specialties do you work with?',
      answer: 'We work with a wide range of medical specialties including Family Medicine, Internal Medicine, Cardiology, Orthopedics, Dermatology, Radiology, Gastroenterology, Mental Health, Urgent Care, Pediatrics, and many others. Our team has specialty-specific coding and billing expertise to handle the unique requirements of each specialty.'
    },
    {
      question: 'How does the implementation process work?',
      answer: 'Our implementation process typically takes 2-4 weeks and includes five key phases: 1) Revenue Analysis - we evaluate your current workflow and identify gaps, 2) Setup & Integration - we configure systems and integrate with your practice management software, 3) Training & Transition - we train your staff and gradually transition responsibilities, 4) Go-Live - we begin full RCM operations with close monitoring, and 5) Optimization - we continuously refine processes based on performance data.'
    },
    {
      question: 'What reports will we receive?',
      answer: 'We provide comprehensive monthly reporting including: AR aging reports, collection analysis, denial reports with root cause analysis, clean claim rate metrics, payment posting summaries, outstanding claims reports, payer-specific performance metrics, and custom KPI dashboards. You\'ll also have access to real-time reporting through our client portal and regular review meetings with your dedicated account manager.'
    },
    {
      question: 'Do you handle patient billing and collections?',
      answer: 'Yes, we provide complete patient billing services including generating and mailing patient statements, setting up payment plans, processing payments, providing customer support for billing inquiries, sending payment reminders, and handling patient collections with professional, HIPAA-compliant communication. We can also help you implement online payment portals for patient convenience.'
    },
    {
      question: 'What is your clean claim rate?',
      answer: 'We maintain a 98%+ clean claim rate across our client base. A clean claim is one that is processed and paid without any need for resubmission or correction. Our high clean claim rate is achieved through rigorous front-end verification, expert medical coding, thorough charge review, automated error checking before submission, and continuous staff training on payer-specific requirements.'
    },
    {
      question: 'How do you handle denied claims?',
      answer: 'We have a comprehensive denial management process that includes: immediate identification and categorization of denials, root cause analysis to prevent future occurrences, timely appeal submissions with supporting documentation, tracking of all denials and appeals, reprocessing corrected claims, and regular reporting on denial trends. Our goal is not just to resolve denials, but to prevent them from happening in the first place.'
    },
    {
      question: 'Can you integrate with our existing practice management system?',
      answer: 'Yes, we work with all major practice management and EHR systems including Epic, Cerner, Athenahealth, eClinicalWorks, NextGen, Kareo, AdvancedMD, and many others. We use secure, HIPAA-compliant integration methods including direct API connections, clearinghouse interfaces, and secure file transfer protocols. Our technical team will coordinate with your IT staff to ensure seamless integration.'
    },
    {
      question: 'What is your approach to AR follow-up?',
      answer: 'We conduct systematic AR follow-up on a regular basis, typically working claims at 7, 14, 21, 30, 45, and 60+ day intervals. Our approach includes: contacting payers for claim status, resolving any issues preventing payment, resubmitting corrected claims when necessary, escalating to appeals when appropriate, and focusing on older AR to maximize recovery. We also provide detailed AR aging reports and work closely with you to establish collection priorities.'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0078D4]/5 via-transparent to-[#00BFA5]/5">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <Badge className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] text-white border-0 px-4 py-1.5">
              Frequently Asked Questions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold">
              Got <span className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] bg-clip-text text-transparent">Questions?</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Find answers to common questions about our revenue cycle management services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 border-border rounded-lg px-6 hover:border-[#0078D4]/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0078D4] to-[#00BFA5] flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">Q{index + 1}</span>
                    </div>
                    <span className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pl-11 pr-4 pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0078D4]/5 via-transparent to-[#00BFA5]/5">
        <div className="container mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Still Have <span className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] bg-clip-text text-transparent">Questions?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We're here to help! Contact us for personalized answers to your specific questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="/contact">
              <button className="bg-gradient-to-r from-[#0078D4] to-[#00BFA5] hover:opacity-90 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Contact Us Today
              </button>
            </a>
            <a href="tel:+13022173558">
              <button className="border-2 border-[#0078D4] text-[#0078D4] hover:bg-[#0078D4]/10 px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 hover:scale-105">
                Call Us
              </button>
            </a>
            <a href="mailto:info@mrmrcmsolutions.com">
              <button className="border-2 border-[#00BFA5] text-[#00BFA5] hover:bg-[#00BFA5]/10 px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 hover:scale-105">
                Email Us
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
