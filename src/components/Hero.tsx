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
    }, 800);
    
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

      {/* Animated Profile Photo - Full Screen Initial with Smoother Animation */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-[2500ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
        isLoaded 
          ? 'opacity-0 pointer-events-none' 
          : 'opacity-100 bg-slate-950/95 backdrop-blur-xl'
      }`}>
        <div className={`relative transition-all duration-[2500ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          isLoaded 
            ? 'scale-0 rotate-[360deg] opacity-0' 
            : 'scale-100 rotate-0 opacity-100'
        }`}>
          {/* Large initial photo with smoother scaling */}
          <div className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[30rem] rounded-3xl overflow-hidden border-4 border-cyan-400/50 shadow-2xl shadow-cyan-500/25">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-blue-500/30"></div>
            <img 
              src="/IMG_40211.jpg" 
              alt="Mirza Zaheer - Senior Data Engineer"
              className="w-full h-full object-cover transition-transform duration-[2500ms] ease-out"
              style={{ 
                objectPosition: '50% 10%',
                transform: 'scale(1.15)',
                transformOrigin: '50% 20%'
              }}
            />
            {/* Smoother loading shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
          </div>
          
          {/* Loading text with smoother fade */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
            <div className="text-cyan-400 font-bold text-lg sm:text-xl animate-pulse">
              Loading Portfolio...
            </div>
            <div className="flex justify-center mt-4">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10 pt-16 sm:pt-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-16 items-center min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-6rem)]">
          {/* Left Column - Text Content - Mobile Optimized for Smaller Photo */}
          <div className={`text-center lg:text-left order-2 lg:order-1 flex flex-col justify-center transition-all duration-[1800ms] delay-1200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
          }`}>
            {/* Main heading - Better mobile spacing */}
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

            {/* Enhanced description - Better mobile spacing */}
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-3 sm:mb-4 lg:mb-6 leading-relaxed text-center lg:text-left px-2 lg:px-0">
              Transforming enterprise data landscapes with <span className="text-cyan-400 font-semibold">4+ years</span> of expertise in 
              building <span className="text-blue-400 font-semibold">scalable, cloud-native</span> data solutions that drive business intelligence.
            </p>
            
            {/* Achievement Stats - Optimized for mobile with smaller photo */}
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

            {/* CTA button - Better mobile sizing */}
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

          {/* Right Column - Smaller Professional Photo with Smoother Animation */}
          <div className={`flex justify-center lg:justify-end order-1 lg:order-2 transition-all duration-[2500ms] delay-800 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}>
            <div className="relative group">
              {/* Smaller photo container with smoother reveal */}
              <div className={`relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border-2 sm:border-3 lg:border-4 border-slate-700/50 group-hover:border-cyan-400/50 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                isLoaded 
                  ? 'w-32 h-40 xs:w-36 xs:h-44 sm:w-48 sm:h-60 lg:w-64 lg:h-80 animate-fade-in-up' 
                  : 'w-0 h-0'
              }`}>
                {/* Base gradient overlay with smoother transition */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 group-hover:opacity-30 transition-opacity duration-700"></div>
                
                {/* Enhanced Glass Light Effect with smoother animations */}
                <div className={`absolute inset-0 group-hover:opacity-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}>
                  {/* Primary glass overlay with enhanced gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-[0.5px] rounded-xl sm:rounded-2xl lg:rounded-3xl"></div>
                  
                  {/* Smoother animated diagonal light streak */}
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white/15 via-white/8 to-transparent transform -skew-x-12 translate-x-2 sm:translate-x-4 animate-pulse"></div>
                  </div>
                  
                  {/* Enhanced rim lighting with smoother animation */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent animate-pulse"></div>
                    <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-white/20 via-transparent to-transparent animate-pulse delay-300"></div>
                  </div>
                  
                  {/* Soft inner glow with enhanced pulsing */}
                  <div className="absolute inset-1 sm:inset-2 bg-gradient-to-br from-cyan-400/8 via-transparent to-blue-500/8 rounded-lg sm:rounded-xl lg:rounded-2xl animate-pulse delay-500"></div>
                  
                  {/* Enhanced animated light particles with smoother timing */}
                  <div className="absolute top-1/4 right-1/4 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/50 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute top-1/3 left-1/5 w-0.5 h-0.5 bg-cyan-300/70 rounded-full animate-pulse delay-700"></div>
                  <div className="absolute bottom-1/3 right-1/3 w-0.5 h-0.5 bg-blue-300/60 rounded-full animate-pulse delay-1100"></div>
                  <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-purple-300/50 rounded-full animate-pulse delay-1400"></div>
                </div>
                
                {/* Professional photo with ultra-smooth reveal */}
                <img 
                  src="/IMG_40211.jpg" 
                  alt="Mirza Zaheer - Senior Data Engineer"
                  className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] relative z-10 ${
                    isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  }`}
                  style={{ 
                    objectPosition: '50% 10%',
                    transform: 'scale(1.15)',
                    transformOrigin: '50% 20%'
                  }}
                />
                
                {/* Status badge with smoother slide-up animation */}
                <div className={`absolute bottom-2 sm:bottom-3 lg:bottom-4 left-2 sm:left-3 lg:left-4 right-2 sm:right-3 lg:right-4 z-20 transition-all duration-[1200ms] delay-1800 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  <div className="bg-slate-900/70 backdrop-blur-2xl rounded-md sm:rounded-lg border border-slate-600/30 p-1.5 sm:p-2 shadow-2xl hover:bg-slate-900/85 transition-all duration-500">
                    <div className="flex items-center justify-center gap-1.5">
                      <div className="relative">
                        <Dot className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 animate-pulse" />
                        <div className="absolute inset-0 w-3 h-3 sm:w-4 sm:h-4 bg-emerald-400/30 rounded-full animate-ping"></div>
                      </div>
                      <span className="text-white/90 font-medium text-[10px] sm:text-xs tracking-wide">Available</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements with smoother staggered animations */}
              <div className={`absolute -top-1 -right-1 sm:-top-2 sm:-right-2 lg:-top-3 lg:-right-3 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-md sm:rounded-lg lg:rounded-xl backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center group-hover:scale-110 transition-all duration-[1200ms] delay-1200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                isLoaded ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-4 rotate-45'
              }`}>
                <User className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-cyan-400" />
              </div>
              
              <div className={`absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 lg:-bottom-3 lg:-left-3 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-sm sm:rounded-md lg:rounded-lg backdrop-blur-sm border border-purple-400/30 group-hover:scale-110 transition-all duration-[1200ms] delay-1400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                isLoaded ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-4 -rotate-45'
              }`}></div>
              
              <div className={`absolute top-1/2 -left-2 sm:-left-3 lg:-left-4 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-sm sm:rounded-md backdrop-blur-sm border border-emerald-400/30 group-hover:scale-110 transition-all duration-[1200ms] delay-1600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                isLoaded ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 -translate-x-4 rotate-90'
              }`}></div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator with smoother delayed animation */}
        <div className={`absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-[1200ms] delay-2200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
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