import React from 'react';
import { MessageCircle, HelpCircle, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { SMS_HREF } from '../types';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "How long does a rim repair take?",
      a: "Most single wheels take 45–90 minutes. A full set of four wheels is usually completed in 2–3 hours on the same day."
    },
    {
      q: "Can you fix bent or cracked rims?",
      a: "No — we only perform cosmetic repairs. Bent or cracked wheels are a safety issue and require a specialized structural wheel repair shop."
    },
    {
      q: "Do you really come to me?",
      a: "Yes! We are a 100% mobile service. We perform the repair right at your home, office, or dealership anywhere in the RDU area."
    },
    {
      q: "What if it rains?",
      a: "Light rain is usually fine as we use tents to cover the work area. However, heavy storms or high winds may require a free reschedule to ensure quality results."
    },
    {
      q: "How much is it?",
      a: "Most repairs range between $100–$175 per wheel depending on the damage. For an exact quote, simply text us a few photos."
    },
    {
      q: "Is there a warranty?",
      a: "Yes. We include a 60-day workmanship warranty against peeling, flaking, or finish failure on all standard cosmetic repairs."
    },
    {
      q: "Can you match my wheel color?",
      a: "Yes. We use OEM-grade paint matching for standard silver, gloss black, satin black, hypersilver, and machined finishes."
    },
    {
      q: "Can I drive right after?",
      a: "Yes! You can drive the vehicle immediately after we finish. The paint will be dry to the touch, and full cure happens within 24 hours."
    },
    {
      q: "Payment methods?",
      a: "We accept Cash, Venmo, Zelle, Cash App, Apple Pay, and all major Credit Cards (3% processing fee applies for cards)."
    }
  ];

  return (
    <div className="py-16 bg-wizard-black text-white min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <HelpCircle className="w-16 h-16 text-wizard-red mx-auto mb-6" />
          <h1 className="text-4xl font-heading font-black text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-400">
            Everything you need to know about our mobile service.
          </p>
        </div>

        <div className="space-y-6 mb-16">
          {faqs.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-wizard-gray p-6 rounded-xl border border-white/10 shadow-md hover:border-white/20 transition-colors"
            >
              <h3 className="text-lg font-heading font-bold text-white mb-3 flex items-start gap-3">
                <span className="text-wizard-red">•</span> {item.q}
              </h3>
              <p className="text-gray-300 pl-5 leading-relaxed">
                {item.a}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white/5 p-8 rounded-2xl text-center border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
          <p className="text-gray-400 mb-8">
            The fastest way to get an answer is to text us directly.
          </p>
          <Button href={SMS_HREF} variant="primary">
            <MessageCircle className="w-5 h-5 mr-2" />
            Text Us Photos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;