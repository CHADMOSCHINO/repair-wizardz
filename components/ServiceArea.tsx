import React from 'react';
import { MapPin } from 'lucide-react';

// This is the reusable component version if needed, 
// but the main content is now in pages/ServiceArea.tsx
const ServiceAreaComponent: React.FC = () => {
  const cities = [
    "Raleigh", "Durham", "Cary", "Apex", "Morrisville", 
    "Wake Forest", "Garner", "Clayton", "Knightdale", 
    "Rolesville", "Chapel Hill", "Holly Springs", "Fuquay-Varina"
  ];

  return (
    <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <MapPin className="w-6 h-6 text-brand-orange" />
        <h2 className="text-2xl font-bold text-brand-navy">Proudly Serving the Entire RDU</h2>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {cities.map((city) => (
          <span key={city} className="bg-brand-light text-brand-navy font-medium px-3 py-1 rounded-full text-sm">
            {city}
          </span>
        ))}
      </div>
      
      <p className="text-gray-500 italic border-l-4 border-brand-orange pl-4">
        Note: Travel outside the RDU is available — fees quoted upfront based on distance.
      </p>
    </div>
  );
};

export default ServiceAreaComponent;