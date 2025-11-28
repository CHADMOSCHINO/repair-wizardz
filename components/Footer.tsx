import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { PHONE_NUMBER, PHONE_HREF } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-heading font-bold mb-6">REPAIR WIZARDZ</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 text-blue-100">
           <a href={PHONE_HREF} className="flex items-center gap-2 hover:text-white font-bold text-lg">
             <Phone className="w-5 h-5 text-brand-orange" />
             {PHONE_NUMBER}
           </a>
           <span className="hidden md:inline text-blue-800">•</span>
           <div className="flex items-center gap-2">
             <MapPin className="w-5 h-5 text-brand-orange" />
             Proudly Serving the RDU
           </div>
        </div>

        <p className="text-blue-300 text-sm">
          © 2025 Repair Wizardz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;