import React, { useState } from 'react';
import { Phone, MessageCircle, Upload } from 'lucide-react';
import Button from '../components/Button';
import { PHONE_NUMBER, PHONE_HREF, SMS_HREF } from '../types';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', address: '', rimSize: '', service: '', message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("This is a demo form. Please use the Text Photos button for the fastest service!");
  };

  return (
    <div className="py-12 bg-wizard-black text-white">
      {/* Hero-style Booking Header */}
      <div className="container mx-auto px-4 text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-heading font-black text-white mb-6">
          Get Your Free Quote
        </h1>
        <div className="bg-wizard-red/10 border border-wizard-red text-wizard-red inline-block px-6 py-3 rounded-full font-bold text-lg mb-8">
          Fastest Response: Text Photos to {PHONE_NUMBER}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-16">
          <Button href={SMS_HREF} variant="primary">
            <MessageCircle className="w-5 h-5 mr-2" />
            Text Photos (Fastest)
          </Button>
          <Button href={PHONE_HREF} variant="secondary">
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-wizard-gray p-8 rounded-2xl border border-white/10 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-6">Or Request an Appointment</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-400 font-bold mb-2">Name</label>
              <input type="text" name="name" className="w-full p-4 rounded-lg bg-black border border-white/20 text-white focus:border-wizard-red focus:ring-1 focus:ring-wizard-red outline-none transition-all" placeholder="Your Name" required onChange={handleChange} />
            </div>
            <div>
              <label className="block text-gray-400 font-bold mb-2">Phone</label>
              <input type="tel" name="phone" className="w-full p-4 rounded-lg bg-black border border-white/20 text-white focus:border-wizard-red focus:ring-1 focus:ring-wizard-red outline-none transition-all" placeholder="(919) ..." required onChange={handleChange} />
            </div>
            <div>
              <label className="block text-gray-400 font-bold mb-2">Address</label>
              <input type="text" name="address" className="w-full p-4 rounded-lg bg-black border border-white/20 text-white focus:border-wizard-red focus:ring-1 focus:ring-wizard-red outline-none transition-all" placeholder="Street, City, Zip" required onChange={handleChange} />
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div>
                <label className="block text-gray-400 font-bold mb-2">Rim Size (if known)</label>
                <input type="text" name="rimSize" className="w-full p-4 rounded-lg bg-black border border-white/20 text-white focus:border-wizard-red focus:ring-1 focus:ring-wizard-red outline-none transition-all" placeholder="e.g. 19 inch" onChange={handleChange} />
              </div>
              <div>
                <label className="block text-gray-400 font-bold mb-2">Service</label>
                <select name="service" className="w-full p-4 rounded-lg bg-black border border-white/20 text-white focus:border-wizard-red focus:ring-1 focus:ring-wizard-red outline-none transition-all" onChange={handleChange}>
                  <option>Curb Rash</option>
                  <option>Restoration</option>
                  <option>Color Change</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            
            <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center cursor-pointer hover:border-wizard-red hover:bg-white/5 transition-all group">
              <Upload className="w-10 h-10 text-gray-500 mx-auto mb-2 group-hover:text-wizard-red" />
              <p className="text-gray-400 font-medium group-hover:text-wizard-red">Tap to Upload Photos</p>
              <input type="file" className="hidden" />
            </div>

            <Button fullWidth>Submit Request</Button>
          </form>
        </div>

        {/* Hours */}
        <div className="mt-12 text-center bg-wizard-gray border border-white/10 text-white p-8 rounded-xl">
           <h3 className="text-xl font-bold mb-4 font-heading text-wizard-red">Hours of Operation</h3>
           <p className="text-lg">Mon–Sat: 8:00 AM – 7:00 PM</p>
           <p className="text-gray-400 mt-2">Sunday: By Appointment</p>
        </div>
      </div>
    </div>
  );
};

export default Booking;