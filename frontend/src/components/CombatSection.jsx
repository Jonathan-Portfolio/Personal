import React from 'react';
import { Dumbbell, Target, Zap, Activity } from 'lucide-react';
import { portfolioData } from '../data/mock';

const CombatSection = () => {
  const { combat } = portfolioData;

  return (
    <section id="combat" className="room-section relative min-h-screen bg-black py-20">
      <div className="absolute inset-0">
        <img
          src={combat.gymImage}
          alt="Combat Gym"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/80 via-black/90 to-black"></div>
        <div className="absolute inset-0 neon-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Target className="w-12 h-12 text-red-600" />
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                {combat.title}
              </h2>
              <p className="text-red-600 text-xl md:text-2xl font-light mt-2 tracking-widest uppercase">
                {combat.subtitle}
              </p>
            </div>
          </div>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-16 max-w-3xl">
            {combat.description}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {combat.disciplines.map((discipline, index) => (
              <div
                key={index}
                className="combat-card bg-black/60 backdrop-blur-sm border border-red-900/30 p-6 hover:border-red-600 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-4 bg-red-600/10 rounded-full group-hover:bg-red-600/20 transition-colors">
                    {index === 0 && <Zap className="w-10 h-10 text-red-600" />}
                    {index === 1 && <Target className="w-10 h-10 text-red-600" />}
                    {index === 2 && <Activity className="w-10 h-10 text-red-600" />}
                    {index === 3 && <Dumbbell className="w-10 h-10 text-red-600" />}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                    {discipline.name}
                  </h3>
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-red-900/30 border border-red-900/50 text-red-500 text-xs font-medium tracking-wider uppercase">
                      {discipline.level}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    {discipline.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="stat-box bg-gradient-to-br from-red-950/40 to-black/60 backdrop-blur-sm border border-red-900/30 p-8">
              <h3 className="text-4xl font-bold text-white mb-2">Daily Training</h3>
              <p className="text-red-600 text-lg tracking-wide">Consistency over intensity</p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Morning cardio & mobility</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Afternoon strength training</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Evening technique work</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={combat.ringImage}
                alt="Boxing Ring"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-xl font-bold tracking-wide">
                  "The fight is won or lost far away from witnesses—behind the lines, in the gym."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CombatSection;
