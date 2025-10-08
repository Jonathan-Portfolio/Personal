import React, { useState } from 'react';
import { MapPin, Globe } from 'lucide-react';
import { portfolioData } from '../data/mock';

const TravelSection = () => {
  const { travel } = portfolioData;
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <section id="travel" className="room-section relative min-h-screen bg-black py-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Globe className="w-12 h-12 text-blue-500" />
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                {travel.title}
              </h2>
              <p className="text-blue-500 text-xl md:text-2xl font-light mt-2 tracking-widest uppercase">
                {travel.subtitle}
              </p>
            </div>
          </div>

          <div className="relative w-full">
            <div className="world-map-container relative w-full h-[700px] border-2 border-blue-900/50 overflow-hidden">
              <img
                src={travel.mapImage}
                alt="World Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-transparent to-black/40"></div>
              
              {travel.destinations.map((destination, index) => (
                <button
                  key={index}
                  className="map-pin-marker absolute group"
                  style={{
                    top: destination.position.top,
                    left: destination.position.left,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onClick={() => setSelectedDestination(destination)}
                >
                  <div className="relative flex flex-col items-center">
                    <MapPin className="w-10 h-10 text-red-600 drop-shadow-glow animate-pulse group-hover:scale-125 transition-transform duration-300" />
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-black/95 backdrop-blur-sm px-4 py-2 rounded border border-blue-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                      <p className="text-white text-sm font-bold">{destination.name}</p>
                      <p className="text-blue-400 text-xs">{destination.year}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {selectedDestination && (
              <div className="mt-8 bg-gradient-to-br from-blue-950/60 to-black/80 backdrop-blur-sm border border-blue-900/50 p-8 animate-fadeIn">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <MapPin className="w-8 h-8 text-blue-500" />
                      <h3 className="text-3xl font-bold text-white">{selectedDestination.name}</h3>
                    </div>
                    <p className="text-blue-400 text-sm mb-4 tracking-widest uppercase">Visited in {selectedDestination.year}</p>
                    <p className="text-gray-300 text-lg">{selectedDestination.memory}</p>
                  </div>
                  <button
                    onClick={() => setSelectedDestination(null)}
                    className="text-gray-400 hover:text-white text-2xl leading-none"
                  >
                    ×
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelSection;
