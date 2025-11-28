import React from 'react';
import { ShieldCheck, XCircle, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const Warranty: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-black">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-zinc-900 py-16 border-b border-zinc-800"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-wizard-red/10 rounded-full mb-6">
            <ShieldCheck className="w-16 h-16 text-wizard-red" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Up to 60-Day Workmanship Warranty</h1>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-12"
        >
          
          <div className="prose prose-invert prose-lg">
            <p className="text-xl text-white leading-relaxed">
              All cosmetic repairs include an up to 60-day warranty against peeling, flaking, or finish failure as long as the wheel was not severely damaged and is properly cared for after repair.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <XCircle className="text-red-500" />
              Warranty does not cover:
            </h3>
            <ul className="space-y-4">
              {[
                "Bent or cracked wheels",
                "Any new cosmetic damage after the original repair, including curb contact",
                "Harsh chemical use or pressure-washing at close range"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-300">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5 mr-3 shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-900/10 border border-blue-800 rounded-xl p-6 flex gap-4 items-start">
            <Info className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
            <p className="text-blue-200 font-medium">
              "If anything comes up within 60 days related to the original repair, we’ll make it right."
            </p>
          </div>

          <div className="text-center pt-8">
            <Button to="/contact">Book Your Repair</Button>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Warranty;