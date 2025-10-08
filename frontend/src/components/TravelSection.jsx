import React, { useState, Suspense } from 'react';
import { Globe as GlobeIcon, Loader } from 'lucide-react';
import { portfolioData } from '../data/mock';
import { Globe3D, DestinationModal } from './Globe3D';

const TravelSection = () => {
  const { travel } = portfolioData;
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <section id="travel" className="room-section relative min-h-screen bg-black py-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <GlobeIcon className="w-12 h-12 text-blue-500" />
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                {travel.title}
              </h2>
              <p className="text-blue-500 text-xl md:text-2xl font-light mt-2 tracking-widest uppercase">
                {travel.subtitle}
              </p>
            </div>
          </div>

          <div className="relative w-full flex justify-center">
            <Suspense
              fallback={
                <div className="flex flex-col items-center justify-center h-[600px]">
                  <Loader className="w-12 h-12 text-blue-500 animate-spin mb-4" />
                  <p className="text-gray-400 text-sm">Loading 3D Globe...</p>
                </div>
              }
            >
              <Globe3D 
                destinations={travel.destinations}
                onDestinationClick={setSelectedDestination}
              />
            </Suspense>
          </div>

          {/* Destination details in cinematic modal */}
          {selectedDestination && (
            <DestinationModal
              destination={selectedDestination}
              onClose={() => setSelectedDestination(null)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default TravelSection;
