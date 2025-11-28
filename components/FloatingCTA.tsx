import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { SMS_HREF } from '../types';

const FloatingCTA: React.FC = () => {
  return (
    <motion.a
      href={SMS_HREF}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center group"
    >
      <div className="bg-brand-orange text-white p-4 rounded-full shadow-2xl flex items-center justify-center relative">
        <div className="absolute inset-0 bg-brand-orange rounded-full animate-ping opacity-20"></div>
        <MessageCircle className="w-8 h-8 fill-current" />
      </div>
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-brand-navy px-3 py-1 rounded-md shadow-lg font-bold text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Text Photos
      </div>
    </motion.a>
  );
};

export default FloatingCTA;