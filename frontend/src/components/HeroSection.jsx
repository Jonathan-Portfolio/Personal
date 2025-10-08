import React from 'react';
import { ChevronDown, Compass } from 'lucide-react';
import { portfolioData } from '../data/mock';

const HeroSection = () => {
  const { hero } = portfolioData;

  const scrollToNextSection = () => {
    const militarySection = document.getElementById('military-law');
    if (militarySection) {
      militarySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-entrance relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
      
      <div className="absolute inset-0">
        <div className="maze-grid"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8 flex justify-center">
          <Compass className="w-16 h-16 text-red-600 animate-spin-slow" />
        </div>
        
        <h1 className="hero-title text-7xl md:text-9xl font-bold text-white mb-6 tracking-tight">
          {hero.name}
        </h1>
        
        <p className="hero-tagline text-xl md:text-2xl text-gray-300 mb-12 font-light tracking-wide">
          {hero.tagline}
        </p>

        <button
          onClick={scrollToNextSection}
          className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-none transition-all duration-300 hover:scale-105 tracking-widest uppercase text-sm"
        >
          Enter the Maze
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="scroll-indicator">
          <ChevronDown className="w-8 h-8 text-gray-600 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
