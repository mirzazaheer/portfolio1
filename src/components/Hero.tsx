import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Sparkles, Zap, Target, User, Dot } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const titles = [
    'Senior Data Engineer & Cloud Architect',
    'Enterprise Data Pipeline Specialist', 
    'Scalable Analytics Solutions Expert',
    'Modern Data Stack Innovator',
    'Cloud-Native Data Platform Builder'
  ];

  useEffect(() => {
    // Trigger the animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
      // Dispatch a custom event to signal header to show profile photo
      window.dispatchEvent(new Event('show-header-photo'));
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

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

      {/* Ultra-Modern Sleek Photo Animation */}
      <div className={`fixed inset-0 z-50 pointer-events-none transition-all duration-[2500ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isLoaded ? 'opacity-0' : 'opacity-100'
      }`}>
        {/* Modern sleek photo with perfect positioning logic */}
        <div
          className={`absolute transition-all duration-[2500ms] ease-[cubic-bezier(0.23,1,0.32,1)]
            ${isLoaded
              ? // Mobile: Move to top-left (next to MZ logo), Desktop: Move to top-right
                'left-16 top-4 sm:left-auto sm:right-8 sm:top-5 w-10 h-10 sm:w-12 sm:h-12 scale-100 opacity-0 blur-sm'
              : // Initial position: Center screen with modern sizing
                'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-40 sm:w-40 sm:h-48 lg:w-48 lg:h-60 scale-100 opacity-100'}
          `}
        >
          {/* Ultra-modern photo container with sleek design */}
          <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-slate-700/40 shadow-2xl shadow-cyan-500/20">
            {/* Modern gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-purple-600/15"></div>
            
            {/* Sleek animated border */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-500/20 to-purple-600/30 rounded-2xl sm:rounded-3xl animate-pulse"></div>
            </div>
            
            {/* Professional photo */}
            <img 
              src="/IMG_40211.jpg" 
              alt="Mirza Zaheer - Senior Data Engineer"
              className="w-full h-full object-cover relative z-10"
              style={{ 
                objectPosition: '50% 10%',
                transform: 'scale(1.1)',
                transformOrigin: '50% 20%'
              }}
            />
            
            {/* Modern glass effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
            
            {/* Sleek light streak */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl sm:rounded-3xl">
              <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-white/15 via-white/8 to-transparent transform -skew-x-12 animate-pulse"></div>
            </div>
            
            {/* Modern floating particles */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-1/3 left-1/5 w-0.5 h-0.5 bg-blue-400/70 rounded-full animate-pulse delay-700"></div>
              <div className="absolute bottom-1/3 right-1/5 w-0.5 h-0.5 bg-purple-400/60 rounded-full animate-pulse delay-1100"></div>
            </div>
          </div>
          
          {/* Modern loading indicator - stays centered */}
          <div className={`absolute -bottom-16 sm:-bottom-20 left-1/2 transform -translate-x-1/2 text-center transition-all duration-1000 ${
            isLoaded ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 font-semibold text-sm sm:text-base animate-pulse">
              Loading Portfolio...
            </div>
            <div className="flex justify-center mt-3">
              <div className="flex space-x-1">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-bounce delay-150"></div>
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full animate-bounce delay-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10 pt-16 sm:pt-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-16 items-center min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-6rem)]">
          {/* Left Column - Text Content */}
          <div className={`text-center lg:text-left order-2 lg:order-1 flex flex-col justify-center transition-all duration-[2000ms] delay-2000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-12'
          }`}>
            {/* Main heading */}
            <div className="mb-3 sm:mb-4 lg:mb-6">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 sm:mb-3 tracking-tight leading-tight">
                <span className="block">MIRZA</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                  ZAHEER
                </span>
              </h1>
              <div className="h-8 xs:h-10 sm:h-12 lg:h-20 flex items-center justify-center lg:justify-start">
                <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-light text-slate-300 leading-relaxed font-mono tracking-wide text-center lg:text-left px-2">
                  {displayText}
                  <span className="animate-pulse text-cyan-400 font-thin">|</span>
                </span>
              </div>
            </div>

            {/* Enhanced description */}
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-3 sm:mb-4 lg:mb-6 leading-relaxed text-center lg:text-left px-2 lg:px-0">
              Transforming enterprise data landscapes with <span className="text-cyan-400 font-semibold">4+ years</span> of expertise in 
              building <span className="text-blue-400 font-semibold">scalable, cloud-native</span> data solutions that drive business intelligence.
            </p>
            
            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6 max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div 
                    key={index}
                    className="group relative bg-slate-800/30 backdrop-blur-xl rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 text-center">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-cyan-400 mx-auto mb-1" />
                      <div className="text-sm sm:text-base lg:text-lg font-black text-white mb-0.5">
                        {achievement.label}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-400 font-medium leading-tight">
                        {achievement.subtitle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA button */}
            <div className="flex justify-center lg:justify-start">
              <button 
                onClick={scrollToNext}
                className="group px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg sm:rounded-xl lg:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 text-sm sm:text-base"
              >
                <div className="flex items-center justify-center gap-2">
                  Explore My Journey
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column - Placeholder for desktop layout balance */}
          <div className={`flex justify-center lg:justify-end order-1 lg:order-2 transition-all duration-[2500ms] delay-1500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}>
            {/* Desktop placeholder - maintains layout balance */}
            <div className="hidden lg:block relative">
              <div className="w-48 h-60 lg:w-64 lg:h-80 rounded-3xl bg-gradient-to-br from-slate-800/20 to-slate-700/20 border border-slate-700/30 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 rounded-3xl"></div>
                <div className="flex items-center justify-center h-full">
                  <div className="text-slate-500 text-center">
                    <User className="w-12 h-12 mx-auto mb-3 opacity-30" />
                    <p className="text-sm opacity-50">Portfolio Loading...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className={`absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-[1500ms] delay-3000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={scrollToNext}
            className="animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors p-1 sm:p-2 hover:scale-110 transform duration-300"
          >
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;