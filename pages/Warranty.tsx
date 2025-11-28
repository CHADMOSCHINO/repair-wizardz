import React from 'react';
import { ShieldCheck, Check, X } from 'lucide-react';
import Button from '../components/Button';
import { SMS_HREF } from '../types';

const Warranty: React.FC = () => {
  return (
    <div className="py-16 bg-wizard-black min-h-screen text-white">
      <div className="container mx-auto px-4 max-w-3xl">
        
        <div className="text-center mb-12">
          <ShieldCheck className="w-24 h-24 text-wizard-red mx-auto mb-6" />
          <h1 className="text-4xl font-heading font-black text-white mb-4">Up to 60-Day Warranty</h1>
          <p className="text-xl text-gray-400">
            We stand behind our work. If the finish fails, we fix it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Covered */}
          <div className="bg-green-900/10 p-8 rounded-xl border border-green-800">
            <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
              <Check className="w-6 h-6 text-green-500" /> What's Covered
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-green-200">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5"></span>
                Peeling of paint or clear coat
              </li>
              <li className="flex items-start gap-3 text-green-200">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5"></span>
                Flaking finish
              </li>
              <li className="flex items-start gap-3 text-green-200">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5"></span>
                Discoloration or fading
              </li>
            </ul>
          </div>

          {/* Not Covered */}
          <div className="bg-red-900/10 p-8 rounded-xl border border-red-800">
            <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
              <X className="w-6 h-6 text-red-500" /> Not Covered
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-red-200">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5"></span>
                New curb damage or scratches
              </li>
              <li className="flex items-start gap-3 text-red-200">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5"></span>
                Bent or cracked wheels
              </li>
              <li className="flex items-start gap-3 text-red-200">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5"></span>
                Damage from harsh chemicals
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-wizard-gray rounded-xl p-8 text-center border border-white/10 shadow-xl">
          <p className="text-xl font-bold mb-6 font-heading text-white">
            "If anything happens in 60 days, we’ll make it right — guaranteed."
          </p>
          <Button href={SMS_HREF} variant="primary">
            Get Your Repair Quote
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Warranty;