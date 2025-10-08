import React, { useState } from 'react';
import { MapPin, Globe, Plane } from 'lucide-react';
import { portfolioData } from '../data/mock';

const TravelSection = () => {
  const { travel } = portfolioData;
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <section id="travel" className="room-section relative min-h-screen bg-black py-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
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

          <div className="mt-16 grid md:grid-cols-2 gap-12">
            <div className="relative map-container">
              <img
                src={travel.mapImage}
                alt="World Map"
                className="w-full h-[600px] object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
              
              {travel.destinations.map((destination, index) => (
                <button
                  key={index}
                  className="map-pin absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{
                    left: `${50 + (index * 10)}%`,
                    top: `${30 + (index * 8)}%`
                  }}
                  onClick={() => setSelectedDestination(destination)}
                >
                  <div className="relative">
                    <MapPin className="w-8 h-8 text-red-600 animate-pulse group-hover:scale-125 transition-transform duration-300" />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/90 px-3 py-1 rounded text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {destination.name}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <Plane className="w-8 h-8 text-blue-500" />
                <h3 className="text-3xl font-bold text-white">Destinations to Explore</h3>
              </div>

              {travel.destinations.map((destination, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedDestination(destination)}
                  className={`destination-card bg-gray-900/50 backdrop-blur-sm border p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedDestination?.name === destination.name
                      ? 'border-blue-500 bg-blue-900/20'
                      : 'border-gray-800 hover:border-blue-700'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-white mb-2">{destination.name}</h4>
                      <p className="text-gray-400 text-sm">{destination.reason}</p>
                    </div>
                    <MapPin className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelSection;
