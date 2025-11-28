import React from 'react';
import { Phone, MapPin, Camera } from 'lucide-react';
import { PHONE_NUMBER, PHONE_HREF, SMS_HREF } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl">REPAIR</span>
              <span className="text-wizard-red font-bold text-2xl">WIZARDZ</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Precision cosmetic rim repair delivered to your driveway. Professional, reliable, and 100% mobile.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase tracking-wider">Contact</h3>
            <div className="flex flex-col gap-3">
              <a href={PHONE_HREF} className="flex items-center gap-3 text-gray-400 hover:text-wizard-red transition-colors">
                <Phone className="w-5 h-5 text-wizard-red" />
                <span className="font-semibold">{PHONE_NUMBER}</span>
              </a>
              <a href={SMS_HREF} className="flex items-center gap-3 text-gray-400 hover:text-wizard-red transition-colors">
                <Camera className="w-5 h-5 text-wizard-red" />
                <span>Text Photos for Quote</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-wizard-red shrink-0" />
                <span>Serving the Entire RDU Area</span>
              </div>
            </div>
          </div>

          {/* Service Area */}
          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase tracking-wider">Major Service Areas</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Raleigh, Durham, Cary, Apex, Morrisville, Wake Forest, Garner, Clayton, Knightdale, Rolesville, Chapel Hill, Holly Springs, Fuquay-Varina
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2025 Repair Wizardz. All rights reserved.</p>
          <a href={SMS_HREF} className="inline-flex items-center gap-2 text-white bg-wizard-red px-4 py-2 rounded-full font-bold text-xs hover:bg-red-600 transition-colors">
            <Camera className="w-3 h-3" />
            Text Photos
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;