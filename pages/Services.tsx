import React from 'react';
import { AlertTriangle, Check, Phone, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { SMS_HREF, PHONE_HREF } from '../types';

const Services: React.FC = () => {
  const services = [
    {
      title: "Mobile Curb Rash Repair",
      desc: "Scratches, scuffs, rash, peeling, oxidation",
      action: "quote",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Cosmetic Rim Restoration",
      desc: "Clear coat failure, flaking, fading, discoloration • Light surface gouge smoothing",
      action: "quote",
      image: "https://images.unsplash.com/photo-1605218427306-022ba87b901d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Custom Color Changes / Refinishing",
      desc: "Satin black, gloss black, hypersilver, OEM silver • Full on-site prep and refinish",
      action: "call",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Spot Repairs / Touch-Ups",
      desc: "Minor cosmetic blemishes • Small chips and finish correction",
      action: "review",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-zinc-900 py-16 border-b border-zinc-800"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Our Services</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional cosmetic rim repair and restoration brought directly to your location.
          </p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        {/* Important Warning */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-red-950/30 border border-red-500/50 rounded-xl p-6 mb-16 flex items-start gap-4"
        >
          <AlertTriangle className="w-8 h-8 text-red-500 shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-2">Important Note</h3>
            <p className="text-red-200">
              Repair Wizardz provides cosmetic rim repair only — no bent or cracked wheel repairs.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="bg-black border border-zinc-800 rounded-xl overflow-hidden flex flex-col hover:border-zinc-600 transition-colors"
            >
              <div className="h-48 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed flex-1">
                  {service.desc}
                </p>
                <div className="pt-6 border-t border-zinc-900">
                  {service.action === 'call' ? (
                    <Button href={PHONE_HREF} variant="outline" fullWidth>
                      <Phone className="w-4 h-4 mr-2" />
                      Call for Availability
                    </Button>
                  ) : service.action === 'review' ? (
                     <div className="text-center text-gray-500 text-sm font-semibold italic">
                        Quote provided after photo review
                     </div>
                  ) : (
                    <Button href={SMS_HREF} variant="secondary" fullWidth>
                      <Camera className="w-4 h-4 mr-2" />
                      Call or Text Photos
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;