import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { PHONE_NUMBER, PHONE_HREF } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-wizard-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-heading font-bold mb-6 text-wizard-red">REPAIR WIZARDZ</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 text-gray-300">
           <a href={PHONE_HREF} className="flex items-center gap-2 hover:text-white font-bold text-lg transition-colors">
             <Phone className="w-5 h-5 text-wizard-red" />
             {PHONE_NUMBER}
           </a>
           <span className="hidden md:inline text-gray-600">•</span>
           <div className="flex items-center gap-2">
             <MapPin className="w-5 h-5 text-wizard-red" />
             Proudly Serving the RDU
           </div>
        </div>

        <p className="text-gray-500 text-sm">
          © 2025 Repair Wizardz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;