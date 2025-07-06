import React from 'react';
import { Award, CheckCircle, Star, Trophy, Zap } from 'lucide-react';

const Certifications: React.FC = () => {
  // SVG Logo Components for each certification
  const SnowflakeLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      {/* Correct Snowflake company logo - stylized snowflake with 6 points */}
      <g fill="currentColor">
        <path d="M12 2l1.5 2.6L12 7.2 10.5 4.6 12 2z"/>
        <path d="M19.8 6l-2.6 1.5L14.6 6l2.6-1.5L19.8 6z"/>
        <path d="M19.8 18l-2.6-1.5L14.6 18l2.6 1.5L19.8 18z"/>
        <path d="M12 22l-1.5-2.6L12 16.8l1.5 2.6L12 22z"/>
        <path d="M4.2 18l2.6-1.5L9.4 18l-2.6 1.5L4.2 18z"/>
        <path d="M4.2 6l2.6 1.5L9.4 6l-2.6-1.5L4.2 6z"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
        <path d="M12 8v8M8.5 10l7 4M8.5 14l7-4"/>
      </g>
    </svg>
  );

  const MicrosoftLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path fill="#F25022" d="M1 1h10v10H1z"/>
      <path fill="#00A4EF" d="M13 1h10v10H13z"/>
      <path fill="#7FBA00" d="M1 13h10v10H1z"/>
      <path fill="#FFB900" d="M13 13h10v10H13z"/>
    </svg>
  );

  const DbtLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  );

  const Neo4jLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <path stroke="currentColor" strokeWidth="2" d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
    </svg>
  );

  const DatabricksLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path fill="currentColor" d="M12 2l8 4.5v11L12 22l-8-4.5v-11L12 2zm0 2.5L6 7.5v9l6 3.5 6-3.5v-9L12 4.5z"/>
      <path fill="currentColor" d="M12 8l4 2.5v5L12 18l-4-2.5v-5L12 8z"/>
    </svg>
  );

  const HackerRankLogo = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path fill="currentColor" d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.5L19 8.5v7L12 19.5 5 15.5v-7L12 4.5z"/>
      <path fill="currentColor" d="M8 10h8v4H8z"/>
    </svg>
  );

  const certifications = [
    {
      name: 'Snowflake SnowPro Core',
      provider: 'Snowflake',
      logo: SnowflakeLogo,
      level: 'Professional',
      gradient: 'from-cyan-400 to-blue-500',
      year: '2023',
      logoColor: 'text-cyan-400'
    },
    {
      name: 'Azure AI Fundamentals',
      provider: 'Microsoft',
      logo: MicrosoftLogo,
      level: 'Certified',
      gradient: 'from-blue-400 to-indigo-500',
      year: '2023',
      logoColor: 'text-blue-400'
    },
    {
      name: 'dbt Certified Developer',
      provider: 'dbt Labs',
      logo: DbtLogo,
      level: 'Certified',
      gradient: 'from-orange-400 to-red-500',
      year: '2025',
      logoColor: 'text-orange-400'
    },
    {
      name: 'Neo4j Certified Professional',
      provider: 'Neo4j',
      logo: Neo4jLogo,
      level: 'Professional',
      gradient: 'from-green-400 to-emerald-500',
      year: '2023',
      logoColor: 'text-green-400'
    },
    {
      name: 'Databricks Lakehouse Fundamentals',
      provider: 'Databricks',
      logo: DatabricksLogo,
      level: 'Certified',
      gradient: 'from-purple-400 to-pink-500',
      year: '2023',
      logoColor: 'text-purple-400'
    },
    {
      name: 'HackerRank SQL Advanced',
      provider: 'HackerRank',
      logo: HackerRankLogo,
      level: 'Advanced',
      gradient: 'from-yellow-400 to-orange-500',
      year: '2022',
      logoColor: 'text-yellow-400'
    }
  ];

  const achievements = [
    { icon: Trophy, label: 'Multiple Client Appreciations', count: '8+' },
    { icon: Star, label: 'Team Excellence Awards', count: '5+' },
    { icon: Zap, label: 'Innovation Recognition', count: '3+' }
  ];

  return (
    <section id="certifications" className="py-6 sm:py-8 lg:py-16 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 sm:mb-3 lg:mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Certifications</span> & Recognition
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Industry-recognized expertise in cutting-edge data technologies
          </p>
        </div>

        {/* Certifications Grid - Clean and modern with real logos */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 mb-6 sm:mb-8 lg:mb-10">
          {certifications.map((cert, index) => {
            const LogoComponent = cert.logo;
            return (
              <div key={index} className="group relative">
                <div className="bg-slate-900/70 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-5 border border-slate-800/60 hover:border-slate-700/60 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-8 rounded-xl sm:rounded-2xl lg:rounded-3xl transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Header with clean logo and badge */}
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${cert.logoColor} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <LogoComponent />
                      </div>
                      <div className={`px-2 py-1 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] lg:text-xs font-bold text-white bg-gradient-to-r ${cert.gradient} shadow-sm`}>
                        {cert.level}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="text-xs sm:text-sm lg:text-base font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300 leading-tight line-clamp-2">
                        {cert.name}
                      </h3>
                      
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <p className="text-slate-400 text-[10px] sm:text-xs font-medium truncate">{cert.provider}</p>
                        <span className="text-cyan-400 text-[9px] sm:text-[10px] font-semibold">{cert.year}</span>
                      </div>
                    </div>

                    {/* Verification badge */}
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400" />
                      <span className="text-cyan-400 text-[9px] sm:text-[10px] font-semibold">Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievements - Streamlined horizontal layout */}
        <div className="max-w-4xl mx-auto">
          <div className="group relative bg-slate-900/60 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 border border-slate-800/60 hover:border-slate-700/60 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-500/5 rounded-xl sm:rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400" />
                <h3 className="text-sm sm:text-base lg:text-xl font-bold text-white">Professional Recognition</h3>
              </div>
              
              {/* Achievements in horizontal layout */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="text-center p-2 sm:p-3 bg-slate-800/30 rounded-lg sm:rounded-xl border border-slate-700/30">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400 mx-auto mb-1 sm:mb-2" />
                      <div className="text-lg sm:text-xl lg:text-2xl font-black text-white mb-0.5 sm:mb-1">{achievement.count}</div>
                      <div className="text-[10px] sm:text-xs lg:text-sm text-slate-400 font-medium leading-tight">{achievement.label}</div>
                    </div>
                  );
                })}
              </div>
              
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm lg:text-base text-center">
                Consistently recognized for excellence with <span className="text-yellow-400 font-semibold">multiple client appreciations</span> and 
                <span className="text-orange-400 font-semibold"> innovation awards</span> throughout my career journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;