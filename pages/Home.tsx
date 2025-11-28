import React from 'react';
import { MessageCircle, Phone, Calendar, Clock, MapPin, ShieldCheck, ChevronRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { PHONE_HREF, SMS_HREF, PHONE_NUMBER } from '../types';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-wizard-black text-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background gradient/pattern */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-wizard-gray via-wizard-black to-black opacity-80"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-heading font-black text-white mb-6 leading-tight tracking-tight"
            >
              RDU’s Mobile <br/>
              <span className="text-wizard-red drop-shadow-lg">Rim Repair Specialists</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-4 font-medium"
            >
              Curb rash • Cosmetic restoration • Color changes
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-white font-bold mb-10"
            >
              We come to you — home, work, or dealership
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12 max-w-lg mx-auto md:max-w-none"
            >
              <Button href={SMS_HREF} variant="primary" fullWidth>
                <MessageCircle className="w-6 h-6 mr-2" />
                Text Photos for Quote
              </Button>
              <Button href={PHONE_HREF} variant="outline" fullWidth>
                <Phone className="w-6 h-6 mr-2" />
                Call for Quote
              </Button>
              <Button to="/booking" variant="secondary" fullWidth>
                <Calendar className="w-6 h-6 mr-2" />
                Book Appointment
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-bold text-gray-400 uppercase tracking-wide"
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-wizard-red" /> 100% Mobile Service
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-wizard-red" /> Up to 60-Day Warranty
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-wizard-red" /> Same-Day Availability
              </span>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Intro Icons Section */}
      <section className="bg-wizard-gray py-16 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
            Skip the shop. Repair Wizardz delivers professional cosmetic rim repair anywhere in the RDU, with fast results and zero downtime.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {[
              { icon: Clock, title: "Same-Day Service", text: "Most repairs done in < 90 mins" },
              { icon: MapPin, title: "We Come to You", text: "Home or office service" },
              { icon: CheckCircle, title: "OEM Color Match", text: "Factory-perfect finish" }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="bg-wizard-black p-6 rounded-xl border border-white/10 flex flex-col items-center shadow-lg"
              >
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 text-wizard-red">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-white mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {['Mobile Curb Rash Repair', 'Cosmetic Rim Restoration', 'Custom Color Changes', 'Spot Repairs / Touch-Ups'].map((service, i) => (
                <div key={i} className="bg-wizard-black p-4 border-l-4 border-wizard-red shadow-lg text-left font-bold text-lg text-white flex items-center justify-between group hover:bg-white/5 transition-colors">
                  {service}
                  <ChevronRight className="text-gray-600 group-hover:text-wizard-red transition-colors" />
                </div>
              ))}
            </div>
            <Button to="/services" variant="secondary">View All Services</Button>
          </div>
        </div>
      </section>

      {/* Warranty Badge Section */}
      <section className="py-16 bg-wizard-black border-y border-white/10">
        <div className="container mx-auto px-4 text-center">
          <ShieldCheck className="w-20 h-20 text-wizard-red mx-auto mb-6" />
          <h2 className="text-3xl font-heading font-black text-white mb-4">Peace of Mind Included</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Every repair comes with our up to 60-Day Workmanship Warranty. If it peels or flakes, we fix it for free.
          </p>
          <Button to="/warranty" variant="outline">Read Warranty Policy</Button>
        </div>
      </section>

      {/* Red CTA Strip */}
      <section className="bg-wizard-red py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-white mb-6 uppercase tracking-wider">
            Fastest Response → Text Photos to {PHONE_NUMBER}
          </h2>
          <div className="max-w-xs mx-auto">
             <Button href={SMS_HREF} variant="white" fullWidth>
                Text Now
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;