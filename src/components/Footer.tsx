import React from 'react';
import { Heart, ArrowUp, Code, Database, Cloud } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];
  const specializations = [
    'Data Pipeline Architecture',
    'Cloud Data Platforms', 
    'ETL/ELT Development',
    'Data Warehouse Design',
    'Real-time Analytics'
  ];

  return (
    <footer className="bg-gradient-to-t from-slate-950 to-slate-900 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 tracking-tight">
              MZ<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">.</span>
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Senior Data Engineer passionate about building scalable data solutions 
              and transforming raw data into actionable insights. Specializing in modern 
              cloud technologies and enterprise-grade data architectures.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-cyan-400">
                <Database className="w-5 h-5" />
                <span className="text-sm font-medium">Data Engineering</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <Cloud className="w-5 h-5" />
                <span className="text-sm font-medium">Cloud Architecture</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Code className="w-5 h-5 text-cyan-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${link.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium hover:translate-x-1 transform transition-transform"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Specializations</h4>
            <ul className="space-y-3">
              {specializations.map((spec, index) => (
                <li key={index} className="text-slate-400 text-sm leading-relaxed">
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-slate-400 text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-400 animate-pulse" /> by Mirza Zaheer
            </p>
            <div className="w-1 h-1 bg-slate-600 rounded-full hidden sm:block"></div>
            <p className="text-slate-500 text-sm">
              © 2024 Mirza Zaheer. All rights reserved.
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/20 hover:border-cyan-500/40 text-cyan-400 rounded-2xl transition-all duration-300 hover:scale-110"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;