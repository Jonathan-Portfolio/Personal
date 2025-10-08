import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import { X } from 'lucide-react';

const Globe3D = ({ destinations, onDestinationClick }) => {
  const globeEl = useRef();
  const [globeReady, setGlobeReady] = useState(false);

  useEffect(() => {
    if (globeEl.current) {
      // Auto-rotate
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      
      // Point of view
      globeEl.current.pointOfView({ lat: 20, lng: 0, altitude: 2.5 }, 0);
      
      setGlobeReady(true);
    }
  }, []);

  // Convert destinations to point data
  const pointsData = destinations.map(dest => ({
    lat: dest.lat,
    lng: dest.lng,
    size: 0.6,
    color: '#dc2626',
    label: `${dest.flag} ${dest.name}`,
    destination: dest
  }));

  const handlePointClick = (point) => {
    if (point && point.destination) {
      onDestinationClick(point.destination);
    }
  };

  return (
    <div className="globe-container relative w-full h-full">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        
        // Points (passport stamps)
        pointsData={pointsData}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointAltitude={0.01}
        pointRadius="size"
        pointLabel="label"
        onPointClick={handlePointClick}
        pointsMerge={false}
        
        // Atmosphere glow
        atmosphereColor="rgba(220, 38, 38, 0.3)"
        atmosphereAltitude={0.25}
        
        // Styling - Responsive sizing
        width={
          typeof window !== 'undefined' 
            ? (window.innerWidth > 1200 ? 800 : 
               window.innerWidth > 768 ? 700 : 
               Math.min(window.innerWidth - 32, 500))
            : 800
        }
        height={
          typeof window !== 'undefined'
            ? (window.innerWidth > 768 ? 700 : 500)
            : 700
        }
        
        // Animation
        animateIn={true}
      />
      
      {globeReady && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-gray-400 text-sm tracking-wide">
            Click on the {destinations.map(d => d.flag).join(' ')} passport stamps to explore
          </p>
        </div>
      )}
    </div>
  );
};

const DestinationModal = ({ destination, onClose }) => {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Cinematic fade-in animation
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioPlaying) {
        audioRef.current.pause();
      } else {
        // Note: Audio files would need to be added to public folder
        // For now, this is a placeholder
        audioRef.current.play().catch(err => {
          console.log('Audio playback prevented:', err);
        });
      }
      setAudioPlaying(!audioPlaying);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center cinematic-modal animate-fadeIn">
      {/* Dark overlay */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal content */}
      <div className="relative z-10 max-w-5xl w-full mx-4 md:mx-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-red-900/30 overflow-hidden cinematic-content max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-20 text-gray-400 hover:text-white p-2 bg-black/50 rounded-full transition-all duration-300 hover:scale-110"
        >
          <X className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        
        {/* Hero image */}
        <div className="relative h-48 md:h-96 overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          
          {/* Passport stamp overlay */}
          <div className="absolute top-4 left-4 md:top-8 md:left-8 passport-stamp">
            <div className="border-2 md:border-4 border-red-600 rounded-lg p-2 md:p-4 bg-black/70 backdrop-blur-sm transform -rotate-6">
              <p className="text-3xl md:text-6xl mb-1 md:mb-2">{destination.flag}</p>
              <p className="text-red-500 font-bold text-sm md:text-lg tracking-wider uppercase">{destination.name}</p>
              <p className="text-gray-400 text-xs md:text-sm tracking-widest">{destination.year}</p>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 md:p-12">
          {/* Quote */}
          <div className="mb-6 md:mb-8 border-l-4 border-red-600 pl-4 md:pl-6">
            <p className="text-lg md:text-2xl lg:text-3xl text-white font-light italic leading-relaxed">
              "{destination.quote}"
            </p>
          </div>
          
          {/* Memory */}
          <div className="mb-6 md:mb-8">
            <h3 className="text-red-500 text-xs md:text-sm font-bold tracking-widest uppercase mb-3 md:mb-4">
              Memory
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              {destination.memory}
            </p>
          </div>
          
          {/* Audio control */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-gray-800">
            <div>
              <p className="text-gray-500 text-sm">Ambient Sound</p>
              <p className="text-gray-400 text-xs capitalize">{destination.sound}</p>
            </div>
            <button
              onClick={toggleAudio}
              className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-xs md:text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:scale-105"
            >
              {audioPlaying ? 'Pause' : 'Play'} Sound
            </button>
            
            {/* Hidden audio element */}
            <audio ref={audioRef} loop>
              {/* Audio sources would be added here */}
              {/* <source src={`/sounds/${destination.sound}.mp3`} type="audio/mpeg" /> */}
            </audio>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Globe3D, DestinationModal };
