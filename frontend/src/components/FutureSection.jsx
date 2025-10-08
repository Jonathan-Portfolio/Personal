import React from 'react';
import { Rocket, ArrowRight, Clock, Linkedin, Instagram, Facebook } from 'lucide-react';
import { portfolioData } from '../data/mock';

const FutureSection = () => {
  const { future, hero } = portfolioData;

  const getSocialIcon = (iconName) => {
    const icons = {
      linkedin: Linkedin,
      instagram: Instagram,
      facebook: Facebook,
      snapchat: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.206 0c-6.617 0-11.977 5.37-11.977 11.998 0 3.088 1.162 5.899 3.067 8.018l-.178.667c-.126.471-.257.961-.257 1.438 0 .908.513 1.645 1.397 1.645.452 0 .917-.16 1.368-.471.818-.564 1.443-1.371 2.342-2.284.693.131 1.41.2 2.145.2 6.617 0 11.977-5.37 11.977-11.998C24.183 5.37 18.823 0 12.206 0z"/>
        </svg>
      )
    };
    const Icon = icons[iconName];
    return Icon ? <Icon className="w-6 h-6" /> : null;
  };

  return (
    <section id="future" className="room-section relative min-h-screen bg-black py-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Rocket className="w-12 h-12 text-cyan-500" />
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                {future.title}
              </h2>
              <p className="text-cyan-500 text-xl md:text-2xl font-light mt-2 tracking-widest uppercase">
                What's Next
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {future.projects.map((project, index) => (
              <div
                key={index}
                className="project-card bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-600 p-8 transition-all duration-300 hover:scale-105 group"
              >
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase ${
                    project.status === 'Active' ? 'bg-green-900/30 border border-green-900/50 text-green-500' :
                    project.status === 'In Progress' ? 'bg-cyan-900/30 border border-cyan-900/50 text-cyan-500' :
                    'bg-gray-800/50 border border-gray-700/50 text-gray-400'
                  }`}>
                    <Clock className="w-3 h-3 inline mr-1" />
                    {project.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <button className="flex items-center gap-2 text-cyan-500 hover:text-cyan-400 text-sm font-medium tracking-wide uppercase group-hover:gap-4 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800 p-12">
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                {hero.motto}
              </h3>
              <div className="flex items-center justify-center gap-4 mt-10">
                <a
                  href="#military-law"
                  className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-none transition-all duration-300 hover:scale-105 tracking-widest uppercase text-sm"
                >
                  Explore Journey
                </a>
                <button className="px-8 py-4 bg-transparent border border-gray-600 hover:border-white text-white font-medium rounded-none transition-all duration-300 hover:scale-105 tracking-widest uppercase text-sm">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-24 border-t border-gray-800 pt-12">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} {hero.name}. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Built with discipline and purpose.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FutureSection;
