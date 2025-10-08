import React, { useState } from 'react';
import { BookMarked, Search, Lock, X } from 'lucide-react';
import { portfolioData } from '../data/mock';

const HistorySection = () => {
  const { history } = portfolioData;
  const [selectedTopic, setSelectedTopic] = useState(null);

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {history.interests.map((interest, index) => (
              <div
                key={index}
                onClick={() => setSelectedTopic(interest)}
                className="history-card bg-black/70 backdrop-blur-sm border border-amber-900/30 p-6 hover:border-amber-600 transition-all duration-300 hover:scale-105 group cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {index % 3 === 0 && <Lock className="w-6 h-6 text-amber-600" />}
                    {index % 3 === 1 && <Search className="w-6 h-6 text-amber-600" />}
                    {index % 3 === 2 && <BookMarked className="w-6 h-6 text-amber-600" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                      {interest.topic}
                    </h3>
                    <p className="text-amber-600 text-xs font-medium mb-3 tracking-wider uppercase">
                      {interest.era}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {interest.focus}
                    </p>
                    <p className="text-amber-500 text-xs mt-4 tracking-wide">Click to learn more →</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Popup Modal */}
          {selectedTopic && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
              <div 
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                onClick={() => setSelectedTopic(null)}
              ></div>
              
              <div className="relative z-10 max-w-2xl w-full bg-gradient-to-br from-amber-950/90 to-black/95 border border-amber-900/50 p-8 animate-modalSlideUp">
                <button
                  onClick={() => setSelectedTopic(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 bg-black/50 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-amber-500 mb-2">
                    {selectedTopic.topic}
                  </h2>
                  <p className="text-amber-600 text-sm tracking-widest uppercase">
                    {selectedTopic.era}
                  </p>
                </div>
                
                <div className="border-l-4 border-amber-600 pl-6 mb-6">
                  <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Overview</p>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {selectedTopic.description}
                  </p>
                </div>
                
                <button
                  onClick={() => setSelectedTopic(null)}
                  className="w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 text-black font-medium tracking-widest uppercase transition-all duration-300 hover:scale-105"
                >
                  Close
                </button>
              </div>
            </div>
          )}

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
