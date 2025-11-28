import React from 'react';
import { CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import { SMS_HREF } from '../types';

const About: React.FC = () => {
  return (
    <div className="py-16 bg-white min-h-screen">
       <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-heading font-black text-brand-navy mb-8">About Repair Wizardz</h1>
          
          <div className="prose prose-lg text-gray-700 mb-12 leading-relaxed">
            <p className="text-xl font-medium text-brand-navy mb-6">
              Repair Wizardz is a 100% mobile cosmetic rim repair service serving the entire RDU area.
            </p>
            <p>
              With 3 years of professional experience and proper training, we deliver clean, factory-quality results right at your driveway — no shop visit needed. We focus exclusively on cosmetic restoration, ensuring that curb rash, scratches, and fading are erased efficiently and professionally.
            </p>
          </div>

          <div className="bg-brand-light p-8 rounded-xl border border-gray-100 mb-12">
            <h3 className="text-xl font-bold text-brand-navy mb-6">Why Neighbors Choose Us</h3>
            <ul className="space-y-4">
              {[
                "100% Mobile — We come to you",
                "3 Years Professional Experience",
                "Proper Training & Techniques",
                "OEM-Grade Materials",
                "Clean, On-Site Service"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium text-brand-navy">
                  <CheckCircle className="w-6 h-6 text-brand-orange" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
             <h2 className="text-2xl font-bold text-brand-navy mb-6">Ready to restore your wheels?</h2>
             <Button href={SMS_HREF} variant="primary">
               Text Photos for Fast Quote
             </Button>
          </div>
       </div>
    </div>
  );
};

export default About;