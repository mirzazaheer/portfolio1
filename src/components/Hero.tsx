import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, ArrowRight, Sparkles, Zap, Target } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Senior Data Engineer',
    'Cloud Data Architect', 
    'Pipeline Specialist',
    'Analytics Expert'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    
    if (!isDeleting && displayText === currentTitle) {
      setTimeout(() => setIsDeleting(true), 2000);
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
    }, isDeleting ? 50 : 100);
    
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
    { icon: Sparkles, label: '5+', subtitle: 'Certifications' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Download Resume Button - Fixed Position */}
      <button className="fixed top-24 right-6 z-40 group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/90 to-blue-600/90 backdrop-blur-sm text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 text-sm">
        <Download className="w-4 h-4 group-hover:animate-bounce" />
        <span className="hidden sm:inline">Resume</span>
      </button>

      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Main heading with enhanced mobile optimization */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white mb-4 tracking-tight">
              <span className="block">MIRZA</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                ZAHEER
              </span>
            </h1>
            <div className="h-12 sm:h-16 flex items-center justify-center">
              <span className="text-lg sm:text-xl lg:text-3xl font-light text-slate-300">
                {displayText}
                <span className="animate-pulse text-cyan-400">|</span>
              </span>
            </div>
          </div>

          {/* Enhanced description */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-4xl mx-auto mb-12 leading-relaxed px-4">
            Driven Data Engineer with <span className="text-cyan-400 font-semibold">4+ years</span> of experience across the data lifecycle. 
            Building <span className="text-blue-400 font-semibold">scalable, cost-effective</span> data pipelines using modern cloud stacks.
          </p>
          
          {/* Achievement Stats - Modern Visual Elements */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-slate-800/30 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                      {achievement.label}
                    </div>
                    <div className="text-sm text-slate-400 font-medium">
                      {achievement.subtitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA button - single centered button */}
          <div className="flex justify-center mb-16">
            <button 
              onClick={scrollToNext}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <div className="flex items-center justify-center gap-2">
                Explore My Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>

          {/* Modern floating elements */}
          <div className="relative mb-16">
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="group relative">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg"></div>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="group relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-purple-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg"></div>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="group relative">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-2xl backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg"></div>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors p-2"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;