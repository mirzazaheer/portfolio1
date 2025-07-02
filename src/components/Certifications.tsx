import React from 'react';
import { Award, CheckCircle, Star, Trophy, Zap } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      name: 'Snowflake SnowPro Core',
      provider: 'Snowflake',
      icon: '❄️',
      level: 'Professional',
      gradient: 'from-cyan-400 to-blue-500',
      year: '2024'
    },
    {
      name: 'Azure AI Fundamentals',
      provider: 'Microsoft',
      icon: '🏢',
      level: 'Certified',
      gradient: 'from-blue-400 to-indigo-500',
      year: '2024'
    },
    {
      name: 'dbt Certified Developer',
      provider: 'dbt Labs',
      icon: '🔧',
      level: 'Certified',
      gradient: 'from-orange-400 to-red-500',
      year: '2023'
    },
    {
      name: 'Neo4j Certified Professional',
      provider: 'Neo4j',
      icon: '🔗',
      level: 'Professional',
      gradient: 'from-green-400 to-emerald-500',
      year: '2023'
    },
    {
      name: 'Databricks Lakehouse Fundamentals',
      provider: 'Databricks',
      icon: '🧱',
      level: 'Certified',
      gradient: 'from-purple-400 to-pink-500',
      year: '2023'
    },
    {
      name: 'HackerRank SQL Advanced',
      provider: 'HackerRank',
      icon: '🏆',
      level: 'Advanced',
      gradient: 'from-yellow-400 to-orange-500',
      year: '2022'
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

        {/* Certifications Grid - More compact and sleek */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-10">
          {certifications.map((cert, index) => (
            <div key={index} className="group relative">
              <div className="bg-slate-900/60 backdrop-blur-xl rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 border border-slate-800/60 hover:border-slate-700/60 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-8 rounded-lg sm:rounded-xl lg:rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  {/* Header with icon and badge */}
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <div className="text-lg sm:text-xl lg:text-2xl">{cert.icon}</div>
                    <div className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-[8px] sm:text-[10px] lg:text-xs font-bold text-white bg-gradient-to-r ${cert.gradient} shadow-sm`}>
                      {cert.level}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xs sm:text-sm lg:text-base font-bold text-white mb-1 sm:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300 leading-tight line-clamp-2">
                      {cert.name}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-slate-400 text-[10px] sm:text-xs font-medium truncate">{cert.provider}</p>
                      <span className="text-cyan-400 text-[9px] sm:text-[10px] font-semibold">{cert.year}</span>
                    </div>
                  </div>

                  {/* Verification badge */}
                  <div className="flex items-center gap-1 mt-2 sm:mt-3">
                    <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cyan-400" />
                    <span className="text-cyan-400 text-[9px] sm:text-[10px] font-semibold">Verified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
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