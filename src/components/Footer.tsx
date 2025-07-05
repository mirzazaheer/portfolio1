import React from 'react';
import { Heart, ArrowUp, Code, Database, Cloud, Calendar } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];
  const specializations = [
    'Data Pipeline Architecture',
    'Cloud Data Platforms', 
    'ETL/ELT Development',
    'Real-time Analytics'
  ];

  return (
    <footer className="bg-gradient-to-t from-slate-950 to-slate-900 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Brand - More compact */}
          <div className="lg:col-span-2">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-3 sm:mb-4 tracking-tight">
              MZ<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">.</span>
            </h3>
            <p className="text-slate-400 leading-relaxed mb-3 sm:mb-4 max-w-md text-xs sm:text-sm lg:text-base">
              Senior Data Engineer passionate about building scalable data solutions 
              and transforming raw data into actionable insights.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-1.5 text-cyan-400">
                <Database className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-medium">Data Engineering</span>
              </div>
              <div className="flex items-center gap-1.5 text-blue-400">
                <Cloud className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-medium">Cloud Architecture</span>
              </div>
            </div>
          </div>

          {/* Quick Links - Compact */}
          <div>
            <h4 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
              <Code className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
              Quick Links
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${link.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm font-medium hover:translate-x-1 transform transition-transform"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Specializations - Compact */}
          <div>
            <h4 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-3 sm:mb-4">Expertise</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {specializations.map((spec, index) => (
                <li key={index} className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section - Much more compact */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <p className="text-slate-400 text-xs sm:text-sm flex items-center gap-1.5">
              Made with <Heart className="w-3 h-3 text-red-400 animate-pulse" /> by Mirza Zaheer
            </p>
            <div className="w-1 h-1 bg-slate-600 rounded-full hidden sm:block"></div>
            <div className="flex items-center gap-1.5 text-slate-500 text-xs sm:text-sm">
              <Calendar className="w-3 h-3" />
              <span>© 2025 All rights reserved</span>
            </div>
          </div>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/20 hover:border-cyan-500/40 text-cyan-400 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-110"
          >
            <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;