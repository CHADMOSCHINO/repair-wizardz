import React from 'react';
import { AlertTriangle, ChevronRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { SMS_HREF } from '../types';

const Services: React.FC = () => {
  const services = [
    {
      title: "Mobile Curb Rash Repair",
      desc: "We smooth out scratches, scuffs, and curb rash, then color-match and refinish the area to look like new.",
      ideal: "Ideal for: Parking scrapes, curb damage, lease returns."
    },
    {
      title: "Cosmetic Rim Restoration",
      desc: "Restoring wheels suffering from clear coat failure, flaking, or minor discoloration.",
      ideal: "Ideal for: Older wheels, oxidizing finish, peeling clear coat."
    },
    {
      title: "Custom Color Changes",
      desc: "Want a new look? We can repaint your wheels Satin Black, Gloss Black, Gunmetal, or OEM Silver right in your driveway.",
      ideal: "Ideal for: Blackout packages, aesthetic upgrades."
    },
    {
      title: "Spot Repairs / Touch-Ups",
      desc: "Quick, cost-effective fixes for small chips and minor blemishes that don't require a full refinish.",
      ideal: "Ideal for: Rock chips, small scratches."
    }
  ];

  return (
    <div className="pt-8 pb-20 bg-wizard-black text-white">
      <div className="container mx-auto px-4 text-center mb-12">
        <h1 className="text-4xl font-heading font-black text-white mb-4">Our Services</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Professional cosmetic repair at your convenience.
        </p>
      </div>

      <div className="flex flex-col">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`py-16 ${index % 2 === 0 ? 'bg-wizard-black' : 'bg-wizard-gray'}`}
          >
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-wizard-red text-white w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-bold text-xl shadow-lg shadow-red-500/30">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-heading font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                    {service.desc}
                  </p>
                  <p className="text-wizard-red font-bold text-sm uppercase tracking-wide mb-6">
                    {service.ideal}
                  </p>
                  <Button href={SMS_HREF} variant="outline">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Warning Box */}
      <div className="container mx-auto px-4 mt-16 max-w-3xl">
        <div className="border-l-8 border-red-600 bg-red-900/20 p-8 rounded-r-lg border border-red-900/50">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-red-500 shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-2">Important Note</h3>
              <p className="text-red-200 font-medium">
                Repair Wizardz provides <strong>cosmetic rim repair only</strong>. We do NOT repair bent, cracked, or structurally damaged wheels. If your wheel is vibrating or losing air, please visit a structural wheel repair shop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;