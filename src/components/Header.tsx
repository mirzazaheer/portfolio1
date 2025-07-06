import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Code, Award, FolderOpen, Mail, Download } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobilePhoto, setShowMobilePhoto] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Listen for custom event from Hero to show profile photo
    const handler = () => setShowMobilePhoto(true);
    window.addEventListener('show-header-photo', handler);
    return () => window.removeEventListener('show-header-photo', handler);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Certifications', href: '#certifications', icon: Award },
    { name: 'Projects', href: '#projects', icon: FolderOpen },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-900/80 backdrop-blur-xl shadow-2xl border-b border-slate-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Brand with Mobile & Tablet Photo */}
          <div className="flex items-center gap-3">
            <h1 className="text-2xl lg:text-3xl font-black text-white tracking-tight">
              MZ<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">.</span>
            </h1>
            {/* Mobile & Tablet Profile Photo - Fixed visibility */}
            <div className={`lg:hidden transition-all duration-1000 ease-out ${
              showMobilePhoto ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-0 -translate-x-4'
            }`}>
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border-2 border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <img 
                  src="/IMG_40211.jpg" 
                  alt="Mirza Zaheer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    objectPosition: '50% 10%',
                    transform: 'scale(1.15)',
                    transformOrigin: '50% 20%'
                  }}
                  loading="eager"
                  decoding="async"
                />
                {/* Status indicator */}
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-900 animate-pulse"></div>
              </div>
            </div>
          </div>
          
          <nav className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      {item.name}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Desktop controls - CV button and Profile Photo */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Reduced CV button size for desktop */}
            <button className="group relative flex items-center gap-1.5 px-2.5 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-md hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-cyan-500/20 text-xs overflow-hidden">
              <Download className="w-3.5 h-3.5 group-hover:animate-bounce relative z-10" />
              <span className="relative z-10">CV</span>
              {/* Contained gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
            </button>
            {/* Desktop Profile Photo - Slides in from animation with perfect positioning */}
            <div className={`relative w-12 h-12 rounded-xl overflow-hidden border-2 border-slate-700/50 transition-all duration-1000 ease-out group ${
              showMobilePhoto ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-0 translate-x-4'
            }`}>
              {showMobilePhoto && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <img 
                    src="/IMG_40211.jpg" 
                    alt="Mirza Zaheer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      objectPosition: '50% 10%',
                      transform: 'scale(1.15)',
                      transformOrigin: '50% 20%'
                    }}
                    loading="eager"
                    decoding="async"
                  />
                  {/* Status indicator */}
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-900 animate-pulse"></div>
                </>
              )}
            </div>
          </div>

          {/* Mobile & Tablet controls - CV button and menu */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Reduced mobile CV button size */}
            <button className="group relative flex items-center gap-1.5 px-2 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-md hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-cyan-500/20 text-xs overflow-hidden">
              <Download className="w-3.5 h-3.5 group-hover:animate-bounce relative z-10" />
              <span className="relative z-10">CV</span>
              {/* Contained gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
            </button>
            {/* Menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 text-slate-300 hover:text-white transition-colors duration-300"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'top-3'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
        isMenuOpen 
          ? 'max-h-screen opacity-100 bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50' 
          : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="w-full flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;