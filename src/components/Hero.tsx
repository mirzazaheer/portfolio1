import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Sparkles, Zap, Target } from 'lucide-react';

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
    }, 1200);
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

      {/* Clean Photo Animation with Perfect Positioning */}
      <div className={`fixed inset-0 z-50 pointer-events-none transition-all duration-[2200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isLoaded ? 'opacity-0' : 'opacity-100'
      }`}>
        {/* Perfect positioning for both mobile and desktop */}
        <div
          className={`absolute transition-all duration-[2200ms] ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isLoaded
              ? // Mobile: Move to exact header position next to MZ logo, Desktop: Move to exact header position
                'left-16 top-4 sm:left-auto sm:right-8 sm:top-5 w-10 h-10 sm:w-12 sm:h-12 scale-100 opacity-0'
              : // Initial position: Center screen with modern sizing
                'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-40 sm:w-48 sm:h-60 lg:w-56 lg:h-72 scale-100 opacity-100'}
          `}
        >
          <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-slate-700/50 shadow-2xl shadow-cyan-500/25">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/15 to-blue-500/15"></div>
            <img 
              src="/IMG_40211.jpg" 
              alt="Mirza Zaheer - Senior Data Engineer"
              className="w-full h-full object-cover transition-all duration-[2200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ 
                objectPosition: '50% 10%',
                transform: 'scale(1.1)',
                transformOrigin: '50% 20%'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent animate-pulse"></div>
          </div>
          
          {/* Loading text stays centered */}
          <div className="absolute -bottom-16 sm:-bottom-20 left-1/2 transform -translate-x-1/2 text-center">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 font-bold text-lg sm:text-xl animate-pulse">
              Initializing Portfolio...
            </div>
            <div className="flex justify-center mt-4">
              <div className="flex space-x-1.5">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-bounce delay-150"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full animate-bounce delay-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container with Perfect Header Clearance and Optimized Desktop Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen pt-24 sm:pt-28 lg:pt-20 pb-16 sm:pb-20 lg:pb-16">
          {/* Left Column - Text Content (Mobile: Centered, Desktop: Left Aligned) */}
          <div className={`text-center lg:text-left order-2 lg:order-1 flex flex-col justify-center transition-all duration-[2000ms] delay-1500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-12'
          }`}>
            {/* Main heading with perfect spacing and no overlap */}
            <div className="mb-6 sm:mb-8 lg:mb-8">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-white mb-4 sm:mb-5 lg:mb-5 tracking-tight leading-[0.85] lg:leading-[0.8]">
                <span className="block">MIRZA</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                  ZAHEER
                </span>
              </h1>
              <div className="h-8 xs:h-10 sm:h-12 lg:h-12 xl:h-14 flex items-center justify-center lg:justify-start">
                <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl font-light text-slate-300 leading-relaxed font-mono tracking-wide">
                  {displayText}
                  <span className="animate-pulse text-cyan-400 font-thin">|</span>
                </span>
              </div>
            </div>

            {/* Enhanced description with perfect spacing */}
            <p className="text-sm xs:text-base sm:text-lg lg:text-base xl:text-lg 2xl:text-xl text-slate-400 max-w-2xl lg:max-w-full xl:max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 lg:mb-8 leading-relaxed px-2 lg:px-0">
              Transforming enterprise data landscapes with <span className="text-cyan-400 font-semibold">4+ years</span> of expertise in 
              building <span className="text-blue-400 font-semibold">scalable, cloud-native</span> data solutions that drive business intelligence.
            </p>
            
            {/* Achievement Stats - Clean and Responsive with better desktop sizing */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-4 xl:gap-5 mb-6 sm:mb-8 lg:mb-8 max-w-md sm:max-w-lg lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div 
                    key={index}
                    className="group relative bg-slate-800/40 backdrop-blur-xl rounded-lg sm:rounded-xl lg:rounded-xl xl:rounded-2xl p-3 sm:p-4 lg:p-4 xl:p-5 border border-slate-700/60 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/8 to-blue-500/8 rounded-lg sm:rounded-xl lg:rounded-xl xl:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 text-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-cyan-400 mx-auto mb-2" />
                      <div className="text-base sm:text-lg lg:text-lg xl:text-xl font-black text-white mb-1">
                        {achievement.label}
                      </div>
                      <div className="text-xs sm:text-sm lg:text-sm xl:text-base text-slate-400 font-medium leading-tight">
                        {achievement.subtitle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA button with enhanced styling and better desktop positioning */}
            <div className="flex justify-center lg:justify-start">
              <button 
                onClick={scrollToNext}
                className="group px-6 sm:px-8 lg:px-8 xl:px-10 py-3 sm:py-4 lg:py-4 xl:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg sm:rounded-xl lg:rounded-xl xl:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 text-sm sm:text-base lg:text-base xl:text-lg"
              >
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  Explore My Journey
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column - Empty space for desktop balance, hidden on mobile */}
          <div className="hidden lg:block order-1 lg:order-2">
            {/* This creates the balanced two-column layout on desktop while keeping mobile centered */}
          </div>
        </div>

        {/* Enhanced scroll indicator with better desktop positioning */}
        <div className={`absolute bottom-6 sm:bottom-8 lg:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-[1500ms] delay-2500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={scrollToNext}
            className="animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors p-2 hover:scale-110 transform duration-300"
          >
            <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;