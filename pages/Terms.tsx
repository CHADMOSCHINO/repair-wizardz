import React from 'react';
import { ScrollText, ShieldAlert } from 'lucide-react';
import Button from '../components/Button';
import { SMS_HREF } from '../types';

const Terms: React.FC = () => {
  return (
    <div className="py-16 bg-wizard-black text-white min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <ScrollText className="w-16 h-16 text-gray-500 mx-auto mb-6" />
          <h1 className="text-3xl font-heading font-black text-white mb-4">Terms of Service & Disclaimer</h1>
          <p className="text-gray-400">Last updated: November 2025</p>
        </div>

        <div className="bg-wizard-gray p-8 rounded-xl border border-white/10 shadow-lg space-y-8 text-gray-300 leading-relaxed">
          
          <section>
            <h3 className="text-xl font-heading font-bold text-white mb-3 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-wizard-red" /> 
              Cosmetic Repairs Only
            </h3>
            <p>
              Repair Wizardz provides <strong>cosmetic rim repair services only</strong>. We do not repair bent, cracked, or structurally damaged wheels. By booking a service, you acknowledge that your wheels are structurally sound. If we arrive and find structural damage, we cannot proceed with the repair.
            </p>
          </section>

          <section>
             <h3 className="text-xl font-heading font-bold text-white mb-3">60-Day Limited Warranty</h3>
             <p className="mb-2">
               We warrant our workmanship against peeling, flaking, or finish failure for a period of 60 days from the date of service.
             </p>
             <p className="text-sm bg-black/30 p-4 rounded border-l-2 border-wizard-red">
               <strong>Exclusions:</strong> This warranty does not cover new curb damage, rock chips, scratches caused by the vehicle owner or third parties, damage from harsh acidic cleaners/pressure washers, or damage to structurally compromised wheels.
             </p>
          </section>

          <section>
            <h3 className="text-xl font-heading font-bold text-white mb-3">Customer Responsibility</h3>
            <p>
              It is the customer's responsibility to ensure the vehicle is parked in a safe, legal, and accessible location for our mobile technicians. We require a flat, hard surface (driveway or parking lot) to perform the work safely.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-heading font-bold text-white mb-3">Trip Fee & Cancellations</h3>
            <p>
              Cancellations made less than 2 hours before the scheduled appointment time may be subject to a <strong>$45 trip fee</strong>. If we arrive on site and cannot perform the repair due to undisclosed structural damage or lack of key (locking lug nut key), the trip fee will apply.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-heading font-bold text-white mb-3">Payment</h3>
            <p>
              Payment is due in full immediately upon completion of the work. We accept Cash, Venmo, Zelle, Cash App, Apple Pay, and major Credit Cards.
            </p>
          </section>

          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-gray-500 mb-6">
              By booking an appointment with Repair Wizardz, you agree to these terms and conditions.
            </p>
            <Button to="/booking" variant="secondary">Back to Booking</Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Terms;