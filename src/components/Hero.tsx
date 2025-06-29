import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Phone, Mail, Linkedin, Github, Download, ArrowRight } from 'lucide-react';

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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
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
          
          {/* Contact info - mobile optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50">
              <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span className="text-slate-300 text-sm sm:text-base">+91-9952383523</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50">
              <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span className="text-slate-300 text-sm sm:text-base truncate">mirzazaheer65@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50">
              <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span className="text-slate-300 text-sm sm:text-base">Chennai, Tamil Nadu</span>
            </div>
          </div>

          {/* CTA buttons - mobile optimized */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="w-full sm:w-auto group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <div className="flex items-center justify-center gap-2">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </div>
            </button>
            <button 
              onClick={scrollToNext}
              className="w-full sm:w-auto group px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white font-semibold rounded-2xl border border-slate-700/50 hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-center gap-2">
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6 mb-16">
            <a href="#" className="group p-4 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors" />
            </a>
            <a href="#" className="group p-4 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-500/50 transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6 text-slate-400 group-hover:text-slate-300 transition-colors" />
            </a>
            <a href="mailto:mirzazaheer65@gmail.com" className="group p-4 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110">
              <Mail className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            </a>
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