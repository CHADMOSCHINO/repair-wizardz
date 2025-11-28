import React, { useState } from 'react';
import { Phone, Camera, Upload } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import ServiceArea from '../components/ServiceArea';
import { PHONE_NUMBER, PHONE_HREF, SMS_HREF } from '../types';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    address: '',
    vehicle: '',
    service: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("In a real application, this would submit to a backend. For now, please use the Text Photos button for the fastest response!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20 bg-black min-h-screen">
      <div className="bg-wizard-red py-6">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white font-bold text-xl md:text-2xl uppercase italic">
            Fastest Response — Text Photos to <a href={SMS_HREF} className="underline decoration-2 underline-offset-4">{PHONE_NUMBER}</a>
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Instructions & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div>
              <h1 className="text-4xl font-black text-white mb-6">Get a Quote</h1>
              <p className="text-xl text-gray-300 mb-8">
                Send 2–3 photos per wheel + your location. We’ll confirm if it qualifies and provide a quote.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button href={SMS_HREF} variant="primary">
                  <Camera className="w-5 h-5 mr-2" />
                  Text Photos
                </Button>
                <Button href={PHONE_HREF} variant="secondary">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for a Quote
                </Button>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
               <h3 className="text-white font-bold mb-4">Hours of Operation</h3>
               <div className="space-y-2 text-gray-400">
                 <div className="flex justify-between border-b border-zinc-800 pb-2">
                   <span>Mon–Sat</span>
                   <span className="text-white font-medium">8AM – 7PM</span>
                 </div>
                 <div className="flex justify-between pt-2">
                   <span>Sunday</span>
                   <span className="text-white font-medium">By Appointment</span>
                 </div>
               </div>
            </div>

            <ServiceArea />
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zinc-900 p-8 rounded-xl border border-zinc-800"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Book Mobile Repair</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full bg-black border border-zinc-700 text-white p-3 rounded focus:border-wizard-red focus:outline-none focus:ring-1 focus:ring-wizard-red transition-colors"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  className="w-full bg-black border border-zinc-700 text-white p-3 rounded focus:border-wizard-red focus:outline-none focus:ring-1 focus:ring-wizard-red transition-colors"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Address / Location</label>
                <input 
                  type="text" 
                  name="address"
                  required
                  className="w-full bg-black border border-zinc-700 text-white p-3 rounded focus:border-wizard-red focus:outline-none focus:ring-1 focus:ring-wizard-red transition-colors"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Vehicle / Rim Size</label>
                <input 
                  type="text" 
                  name="vehicle"
                  placeholder="e.g. 2020 BMW X5, 20 inch"
                  required
                  className="w-full bg-black border border-zinc-700 text-white p-3 rounded focus:border-wizard-red focus:outline-none focus:ring-1 focus:ring-wizard-red transition-colors"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Service Needed</label>
                <select 
                  name="service"
                  className="w-full bg-black border border-zinc-700 text-white p-3 rounded focus:border-wizard-red focus:outline-none focus:ring-1 focus:ring-wizard-red transition-colors"
                  onChange={handleChange}
                >
                  <option value="">Select a service...</option>
                  <option value="curb-rash">Curb Rash Repair</option>
                  <option value="restoration">Restoration</option>
                  <option value="color-change">Color Change</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Upload Photos (Required)</label>
                <div className="relative border-2 border-dashed border-zinc-700 bg-black rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 hover:border-wizard-red hover:text-wizard-red transition-colors cursor-pointer">
                  <input type="file" multiple className="absolute inset-0 opacity-0 cursor-pointer" />
                  <Upload className="w-8 h-8 mb-2" />
                  <span className="text-sm">Click to upload images</span>
                </div>
              </div>

              <Button fullWidth>Submit Request</Button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;