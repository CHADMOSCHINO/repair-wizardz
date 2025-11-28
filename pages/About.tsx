import React from 'react';
import { CheckCircle, Truck, Award, Hammer } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { SMS_HREF } from '../types';

const About: React.FC = () => {
  return (
    <div className="pt-20 bg-black min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-white mb-8"
          >
            Precision Cosmetic Rim Repair — <br />
            <span className="text-wizard-red">Delivered to Your Driveway</span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-6 text-lg text-gray-300"
            >
              <p>
                Repair Wizardz is a 100% mobile cosmetic rim repair service serving the RDU and surrounding areas. We focus on clean, professional results without the hassle of dropping your vehicle at a shop.
              </p>
              <p>
                With 3 years in business and proper hands-on training and experience, Repair Wizardz provides high-quality refinishing, curb rash repair, and cosmetic restoration using professional-grade materials and proven techniques. Every repair is performed with attention to detail to ensure a smooth finish and long-lasting results.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-1 gap-4"
            >
               {[
                 { icon: Truck, text: "100% mobile — we come to you" },
                 { icon: Award, text: "3 years of professional experience" },
                 { icon: Hammer, text: "Proper training and industry-standard techniques" },
                 { icon: CheckCircle, text: "High-quality materials and OEM-grade color matching" },
                 { icon: Award, text: "Up to 60-day workmanship warranty" }
               ].map((item, idx) => (
                 <motion.div 
                   key={idx} 
                   whileHover={{ x: 5 }}
                   className="flex items-center gap-4 bg-zinc-900 p-4 rounded-lg border border-zinc-800"
                 >
                   <item.icon className="w-6 h-6 text-wizard-red shrink-0" />
                   <span className="text-white font-medium">{item.text}</span>
                 </motion.div>
               ))}
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900 rounded-2xl p-8 md:p-12 text-center border border-zinc-800"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Ready to restore your rims?</h2>
            <p className="text-gray-400 mb-8">
              Text photos to get a fast quote — we’ll confirm the repair and come to you.
            </p>
            <Button href={SMS_HREF} variant="primary">Text Photos for Quote</Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;