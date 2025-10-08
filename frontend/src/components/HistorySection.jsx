import React from 'react';
import { BookMarked, Search, Lock } from 'lucide-react';
import { portfolioData } from '../data/mock';

const HistorySection = () => {
  const { history } = portfolioData;

  return (
    <section id="history" className="room-section relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 py-20">
      <div className="absolute inset-0">
        <img
          src={history.image}
          alt="Dark Library"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <BookMarked className="w-12 h-12 text-amber-600" />
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                {history.title}
              </h2>
              <p className="text-amber-600 text-xl md:text-2xl font-light mt-2 tracking-widest uppercase">
                {history.subtitle}
              </p>
            </div>
          </div>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-16 max-w-3xl">
            {history.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {history.interests.map((interest, index) => (
              <div
                key={index}
                className="history-card bg-black/70 backdrop-blur-sm border border-amber-900/30 p-8 hover:border-amber-600 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {index === 0 && <Lock className="w-8 h-8 text-amber-600" />}
                    {index === 1 && <Search className="w-8 h-8 text-amber-600" />}
                    {index === 2 && <BookMarked className="w-8 h-8 text-amber-600" />}
                    {index === 3 && <Lock className="w-8 h-8 text-amber-600" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                      {interest.topic}
                    </h3>
                    <p className="text-amber-600 text-sm font-medium mb-3 tracking-wide">
                      {interest.era}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {interest.focus}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-amber-900/20 border border-amber-900/50 px-8 py-4">
              <p className="text-amber-500 text-sm tracking-widest uppercase font-medium">
                "Those who cannot remember the past are condemned to repeat it."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
