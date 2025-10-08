import React from 'react';
import { Shield, Scale, BookOpen, Award } from 'lucide-react';
import { portfolioData } from '../data/mock';

const MilitarySection = () => {
  const { militaryLaw } = portfolioData;

  return (
    <section id="military-law" className="room-section relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      <div className="absolute inset-0 opacity-20">
        <div className="grid-pattern"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Shield className="w-12 h-12 text-yellow-600" />
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                {militaryLaw.title}
              </h2>
              <p className="text-yellow-600 text-xl md:text-2xl font-light mt-2 tracking-widest uppercase">
                {militaryLaw.subtitle}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-8">
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                {militaryLaw.description}
              </p>

              <div className="grid grid-cols-2 gap-6">
                {militaryLaw.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="achievement-card bg-black/50 backdrop-blur-sm border border-yellow-900/30 p-6 hover:border-yellow-600 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex flex-col items-center text-center">
                      {index === 0 && <Scale className="w-8 h-8 text-yellow-600 mb-3" />}
                      {index === 1 && <Award className="w-8 h-8 text-yellow-600 mb-3" />}
                      {index === 2 && <BookOpen className="w-8 h-8 text-yellow-600 mb-3" />}
                      {index === 3 && <Shield className="w-8 h-8 text-yellow-600 mb-3" />}
                      <p className="text-gray-200 text-sm font-medium tracking-wide">
                        {achievement}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="emblem-container relative">
                <img
                  src={militaryLaw.image}
                  alt="Military Law"
                  className="w-full h-[500px] object-cover shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="border-l-4 border-yellow-600 pl-6">
                    <p className="text-white text-2xl font-bold tracking-wide">27D MOS</p>
                    <p className="text-gray-400 text-sm mt-2 tracking-widest uppercase">Paralegal Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilitarySection;
