import React from 'react';
import { MapPin } from 'lucide-react';

const ServiceArea: React.FC = () => {
  const cities = [
    "Raleigh", "Durham", "Cary", "Apex", "Morrisville", 
    "Wake Forest", "Garner", "Clayton", "Knightdale", 
    "Rolesville", "Chapel Hill", "Holly Springs", "Fuquay-Varina"
  ];

  return (
    <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-wizard-red/10 rounded-full">
          <MapPin className="w-6 h-6 text-wizard-red" />
        </div>
        <h2 className="text-2xl font-bold text-white">Proudly Serving the Entire RDU</h2>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {cities.map((city) => (
          <span key={city} className="bg-black border border-zinc-700 text-gray-300 px-3 py-1 rounded-full text-sm">
            {city}
          </span>
        ))}
      </div>
      
      <p className="text-gray-400 italic border-l-4 border-wizard-red pl-4">
        Note: Travel outside the RDU is available — fees quoted upfront based on distance.
      </p>
    </div>
  );
};

export default ServiceArea;