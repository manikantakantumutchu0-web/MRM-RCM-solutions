import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#0078D4]/5 via-[#00BFA5]/5 to-transparent border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_31036fe3-3d23-4fef-823e-a2abc72a9871/artifacts/817gzn56_unnamed.jpg" 
                alt="MRM RCM Solutions" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-[#0078D4] to-[#00BFA5] bg-clip-text text-transparent">
                  MRM RCM Solutions
                </h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Maximizing Revenue. Minimizing Hassle.
            </p>
            <p className="text-sm text-muted-foreground">
              End-to-End Medical Billing & Revenue Cycle Management Services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-[#0078D4] transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-[#0078D4] transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-[#0078D4] transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="text-sm text-muted-foreground hover:text-[#0078D4] transition-colors duration-200">
                  HIPAA Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Medical Coding</li>
              <li className="text-sm text-muted-foreground">Claims Submission</li>
              <li className="text-sm text-muted-foreground">Denial Management</li>
              <li className="text-sm text-muted-foreground">AR Follow-Up</li>
              <li className="text-sm text-muted-foreground">Patient Billing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 text-[#0078D4]" />
                <a href="mailto:info@mrmrcmsolutions.com" className="hover:text-[#0078D4] transition-colors duration-200">
                  info@mrmrcmsolutions.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 text-[#00BFA5]" />
                <a href="tel:+13022173558" className="hover:text-[#00BFA5] transition-colors duration-200">
                  +1 302-217-3558
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 text-[#00BFA5]" />
                <span>Monday – Friday</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-[#7CB342]" />
                <span>Serving Healthcare Providers Across the United States</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} MRM RCM Solutions. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/compliance" className="text-sm text-muted-foreground hover:text-[#0078D4] transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/compliance" className="text-sm text-muted-foreground hover:text-[#0078D4] transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
