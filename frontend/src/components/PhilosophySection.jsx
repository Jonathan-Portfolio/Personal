import React from 'react';
import { Lightbulb, Target, Heart } from 'lucide-react';
import { portfolioData } from '../data/mock';

const PhilosophySection = () => {
  const { philosophy } = portfolioData;

  return (
    <section id="philosophy" className="room-section relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      <div className="absolute inset-0">
        <img
          src={philosophy.image}
          alt="Philosophy"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/90 to-black"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Lightbulb className="w-12 h-12 text-purple-500" />
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                {philosophy.title}
              </h2>
              <p className="text-purple-500 text-xl md:text-2xl font-light mt-2 tracking-widest uppercase">
                {philosophy.subtitle}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mt-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-purple-500" />
                  Core Principles
                </h3>
                <div className="space-y-6">
                  {philosophy.principles.map((principle, index) => (
                    <div
                      key={index}
                      className="principle-card bg-black/50 backdrop-blur-sm border-l-4 border-purple-600 p-6 hover:bg-black/70 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-purple-500 text-2xl font-bold">{index + 1}</span>
                        <p className="text-gray-300 text-base leading-relaxed">{principle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="mission-statement bg-gradient-to-br from-purple-950/40 to-black/60 backdrop-blur-sm border border-purple-900/30 p-10">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-10 h-10 text-purple-500" />
                  <h3 className="text-3xl font-bold text-white">Mission Statement</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {philosophy.mission}
                </p>
                
                {/* Faith Section */}
                <div className="my-8 pt-6 border-t border-purple-900/50">
                  <h4 className="text-purple-400 text-lg font-bold mb-3 tracking-wide uppercase flex items-center gap-2">
                    ✝️ Christian Faith
                  </h4>
                  <p className="text-gray-300 text-base leading-relaxed italic">
                    {philosophy.faith}
                  </p>
                </div>
                
                <div className="pt-6 border-t border-purple-900/50">
                  <p className="text-purple-400 text-sm tracking-widest uppercase font-medium">
                    Living with Purpose & Faith
                  </p>
                </div>
              </div>

              <div className="relative">
                <img
                  src={philosophy.visionImage}
                  alt="Vision"
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-lg italic">
                    "The future belongs to those who believe in the beauty of their dreams."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
