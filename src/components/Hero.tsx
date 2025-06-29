import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Sparkles, Zap, Target, User, Dot } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Senior Data Engineer & Cloud Architect',
    'Enterprise Data Pipeline Specialist', 
    'Scalable Analytics Solutions Expert',
    'Modern Data Stack Innovator',
    'Cloud-Native Data Platform Builder'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    
    if (!isDeleting && displayText === currentTitle) {
      setTimeout(() => setIsDeleting(true), 2500);
      return;
    }
    
    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % titles.length);
      return;
    }
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
      }
    }, isDeleting ? 40 : 80);
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, titles]);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const achievements = [
    { icon: Target, label: '4+ Years', subtitle: 'Experience' },
    { icon: Zap, label: '50+', subtitle: 'Projects Delivered' },
    { icon: Sparkles, label: '6+', subtitle: 'Certifications' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:60px_60px] sm:bg-[size:72px_72px]"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10 pt-16 sm:pt-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-6rem)]">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up order-2 lg:order-1 flex flex-col justify-center">
            {/* Main heading - Mobile optimized */}
            <div className="mb-4 sm:mb-6">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-2 sm:mb-3 tracking-tight leading-tight">
                <span className="block">MIRZA</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                  ZAHEER
                </span>
              </h1>
              <div className="h-8 xs:h-10 sm:h-12 lg:h-20 flex items-center justify-center lg:justify-start">
                <span className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-2xl font-light text-slate-300 leading-relaxed font-mono tracking-wide text-center lg:text-left px-2">
                  {displayText}
                  <span className="animate-pulse text-cyan-400 font-thin">|</span>
                </span>
              </div>
            </div>

            {/* Enhanced description - Mobile optimized */}
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-4 sm:mb-6 leading-relaxed text-center lg:text-left px-2 lg:px-0">
              Transforming enterprise data landscapes with <span className="text-cyan-400 font-semibold">4+ years</span> of expertise in 
              building <span className="text-blue-400 font-semibold">scalable, cloud-native</span> data solutions that drive business intelligence.
            </p>
            
            {/* Achievement Stats - Mobile optimized */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6 max-w-xs sm:max-w-sm mx-auto lg:mx-0">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div 
                    key={index}
                    className="group relative bg-slate-800/30 backdrop-blur-xl rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 text-center">
                      <Icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-cyan-400 mx-auto mb-1" />
                      <div className="text-xs sm:text-sm lg:text-base font-black text-white mb-0.5">
                        {achievement.label}
                      </div>
                      <div className="text-[10px] sm:text-xs text-slate-400 font-medium leading-tight">
                        {achievement.subtitle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA button - Mobile optimized */}
            <div className="flex justify-center lg:justify-start">
              <button 
                onClick={scrollToNext}
                className="group px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg sm:rounded-xl lg:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 text-sm sm:text-base"
              >
                <div className="flex items-center justify-center gap-2">
                  Explore My Journey
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column - Professional Photo - Mobile optimized with better zoom */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up order-1 lg:order-2">
            <div className="relative group">
              {/* Main photo container - Mobile optimized */}
              <div className="relative w-48 h-60 xs:w-56 xs:h-72 sm:w-72 sm:h-80 lg:w-96 lg:h-[28rem] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border-2 sm:border-3 lg:border-4 border-slate-700/50 group-hover:border-cyan-400/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Professional photo - Optimized positioning for mobile zoom */}
                <img 
                  src="/IMG_40211.jpg" 
                  alt="Mirza Zaheer - Senior Data Engineer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ 
                    objectPosition: '50% 10%',
                    transform: 'scale(1.15)',
                    transformOrigin: '50% 20%'
                  }}
                />
                
                {/* Modern subtle status badge - Redesigned */}
                <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 right-3 sm:right-4 lg:right-6">
                  <div className="bg-slate-900/60 backdrop-blur-2xl rounded-lg sm:rounded-xl border border-slate-600/20 p-2 sm:p-2.5 shadow-2xl">
                    <div className="flex items-center justify-center gap-2">
                      <div className="relative">
                        <Dot className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 animate-pulse" />
                        <div className="absolute inset-0 w-4 h-4 sm:w-5 sm:h-5 bg-emerald-400/30 rounded-full animate-ping"></div>
                      </div>
                      <span className="text-white/90 font-medium text-xs sm:text-sm tracking-wide">Open to Opportunities</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements - Mobile optimized */}
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg sm:rounded-xl lg:rounded-2xl backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <User className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-cyan-400" />
              </div>
              
              <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 lg:-bottom-4 lg:-left-4 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-md sm:rounded-lg lg:rounded-xl backdrop-blur-sm border border-purple-400/30 group-hover:scale-110 transition-transform duration-300"></div>
              
              <div className="absolute top-1/2 -left-3 sm:-left-4 lg:-left-6 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-sm sm:rounded-md lg:rounded-lg backdrop-blur-sm border border-emerald-400/30 group-hover:scale-110 transition-transform duration-300"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - Mobile optimized */}
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNext}
            className="animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors p-1 sm:p-2"
          >
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;