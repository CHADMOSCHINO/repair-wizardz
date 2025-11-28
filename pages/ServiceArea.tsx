import React from 'react';
import { MapPin } from 'lucide-react';
import Button from '../components/Button';
import { SMS_HREF } from '../types';

const ServiceArea: React.FC = () => {
  const cities = [
    "Raleigh", "Durham", "Cary", "Apex", "Morrisville", 
    "Wake Forest", "Garner", "Clayton", "Knightdale", 
    "Rolesville", "Chapel Hill", "Holly Springs", "Fuquay-Varina"
  ];

  return (
    <div className="py-16 bg-brand-light min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-black text-brand-navy mb-4">Service Area</h1>
          <p className="text-xl text-gray-600">
            We are 100% mobile. We come to your home, office, or workplace.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
            <MapPin className="w-8 h-8 text-brand-orange" />
            <h2 className="text-2xl font-bold text-brand-navy">Proudly Serving the Entire RDU</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cities.map((city) => (
              <div key={city} className="flex items-center gap-2 text-gray-700 font-medium p-2 hover:bg-gray-50 rounded">
                <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                {city}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-500 italic mb-8">
            Note: Travel outside the RDU area is available! A small travel fee will be quoted upfront based on your distance. Just ask!
          </p>
          <div className="max-w-xs mx-auto">
             <Button href={SMS_HREF} variant="primary" fullWidth>Check My Location</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;