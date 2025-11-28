import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Palette, Shield, ChevronRight, Camera, Phone, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { PHONE_HREF, SMS_HREF, PHONE_NUMBER } from '../types';

const Home: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-black overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury car wheel" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="inline-block bg-wizard-red/20 border border-wizard-red/30 rounded-full px-4 py-1 mb-6">
              <span className="text-wizard-red font-bold text-sm tracking-wide uppercase">RDU's #1 Mobile Choice</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              RDU’s Mobile <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-wizard-red to-orange-500">Rim Repair Specialists</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
              Curb rash • Cosmetic restoration • Color changes
              <br />
              <span className="font-semibold text-white">We come to you — home, work, or dealership</span>
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button href={SMS_HREF} variant="primary">
                <Camera className="w-5 h-5 mr-2" />
                Text Photos for a Quote
              </Button>
              <Button href={PHONE_HREF} variant="secondary">
                <Phone className="w-5 h-5 mr-2" />
                Call for a Quote
              </Button>
              <Button to="/contact" variant="outline">
                Book Mobile Repair
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Badge Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute bottom-0 left-0 right-0 bg-zinc-900/90 border-t border-zinc-800 py-4 backdrop-blur-md"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2 text-sm md:text-base font-bold text-gray-300 uppercase tracking-wider">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-wizard-red" /> 100% Mobile Service</span>
              <span className="hidden md:inline text-zinc-700">•</span>
              <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-wizard-red" /> Up to 60-Day Warranty</span>
              <span className="hidden md:inline text-zinc-700">•</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-wizard-red" /> Fast Response</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-4xl mx-auto"
          >
            Skip the shop — Repair Wizardz delivers professional cosmetic rim repair anywhere in the RDU, with fast results and zero downtime.
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto"
          >
            {[
              { icon: Clock, title: "Same-Day Availability", desc: "Most repairs take less than 90 minutes." },
              { icon: MapPin, title: "On-Site Service", desc: "We come to your home or office." },
              { icon: Palette, title: "OEM-Grade Color", desc: "Perfect matching for all major brands." }
            ].map((feature, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-wizard-red/50 transition-colors">
                <div className="bg-zinc-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-wizard-red" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <span className="text-wizard-red font-bold uppercase tracking-wider text-sm">Our Expertise</span>
              <h2 className="text-4xl font-black text-white mt-2">Services</h2>
            </div>
            <Link to="/services" className="hidden md:flex items-center text-white hover:text-wizard-red transition-colors font-bold">
              View All Services <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Mobile Curb Rash Repair", icon: Wrench },
              { title: "Cosmetic Rim Restoration", icon: Palette },
              { title: "Custom Color Changes", icon: Palette },
              { title: "Spot Repairs / Touch-Ups", icon: Camera }
            ].map((service, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="group bg-black p-8 rounded-xl border border-zinc-800 hover:border-wizard-red transition-all hover:-translate-y-1">
                <service.icon className="w-8 h-8 text-gray-500 group-hover:text-wizard-red mb-6 transition-colors" />
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">{service.title}</h3>
                <Link to="/services" className="text-sm font-semibold text-gray-400 group-hover:text-white flex items-center">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-8 text-center md:hidden">
            <Button to="/services" variant="secondary" fullWidth>View Services</Button>
          </div>
        </div>
      </section>

      {/* Warranty Highlight */}
      <section className="py-16 bg-gradient-to-br from-zinc-900 to-black border-y border-zinc-800">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="container mx-auto px-4 text-center"
        >
          <div className="inline-flex items-center justify-center p-4 bg-wizard-red/10 rounded-full mb-6">
            <Shield className="w-12 h-12 text-wizard-red" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Up to 60-Day Workmanship Warranty Included
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We stand behind our quality. Peace of mind comes standard with every repair.
          </p>
          <Button to="/warranty" variant="white">Read Warranty Details</Button>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="bg-zinc-900 rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-wizard-red blur-[120px] opacity-20"></div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
            >
              <div>
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-8">Why Choose Repair Wizardz?</motion.h2>
                <ul className="space-y-4">
                  {[
                    "100% mobile — we come to you",
                    "No downtime or drop-off",
                    "OEM-grade color matching",
                    "Same-day availability",
                    "Up to 60-day workmanship warranty",
                    "Fast text-based quoting"
                  ].map((item, idx) => (
                    <motion.li key={idx} variants={fadeInUp} className="flex items-center text-lg text-gray-300">
                      <div className="w-2 h-2 bg-wizard-red rounded-full mr-4"></div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <motion.p variants={fadeInUp} className="mt-8 text-white font-semibold italic border-l-4 border-wizard-red pl-4">
                  "Professional cosmetic rim restoration — done on-site, clean, and hassle-free."
                </motion.p>
              </div>
              <motion.div variants={fadeInUp} className="h-full min-h-[300px] rounded-xl overflow-hidden relative">
                 <img 
                  src="https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=800" 
                  alt="Wheel repair close up" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-wizard-red py-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase italic">
              Fastest Response
            </h2>
            <p className="text-white/90 font-medium text-lg">
              Text Photos to <span className="font-bold">{PHONE_NUMBER}</span>
            </p>
          </div>
          <a 
            href={SMS_HREF}
            className="bg-white text-wizard-red hover:bg-gray-100 px-8 py-4 rounded-lg font-black uppercase tracking-widest text-lg shadow-lg transform hover:scale-105 transition-all"
          >
            Text Now
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;