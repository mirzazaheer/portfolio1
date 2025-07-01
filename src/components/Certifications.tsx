import React from 'react';
import { Award, CheckCircle, Star, Trophy } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      name: 'Snowflake SnowPro Core',
      provider: 'Snowflake',
      icon: '❄️',
      level: 'Professional',
      gradient: 'from-cyan-400 to-blue-500',
      description: 'Core certification for Snowflake data platform'
    },
    {
      name: 'Microsoft Certified: Azure AI Fundamentals',
      provider: 'Microsoft',
      icon: '🏢',
      level: 'Certified',
      gradient: 'from-blue-400 to-indigo-500',
      description: 'AI and machine learning fundamentals on Azure'
    },
    {
      name: 'dbt Certified Developer',
      provider: 'dbt Labs',
      icon: '🔧',
      level: 'Certified',
      gradient: 'from-orange-400 to-red-500',
      description: 'Data transformation and modeling expertise'
    },
    {
      name: 'Neo4j Certified Professional',
      provider: 'Neo4j',
      icon: '🔗',
      level: 'Professional',
      gradient: 'from-green-400 to-emerald-500',
      description: 'Graph database and analytics certification'
    },
    {
      name: 'Databricks Lakehouse Fundamentals',
      provider: 'Databricks',
      icon: '🧱',
      level: 'Certified',
      gradient: 'from-purple-400 to-pink-500',
      description: 'Unified analytics platform expertise'
    },
    {
      name: 'HackerRank SQL Advanced',
      provider: 'HackerRank',
      icon: '🏆',
      level: 'Advanced',
      gradient: 'from-yellow-400 to-orange-500',
      description: 'Advanced SQL programming and optimization'
    }
  ];

  return (
    <section id="certifications" className="py-8 sm:py-12 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white mb-3 sm:mb-4 lg:mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Certifications</span> & Achievements
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Industry-recognized certifications demonstrating expertise in cutting-edge data technologies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {certifications.map((cert, index) => (
            <div key={index} className="group relative">
              <div className="bg-slate-900/50 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-8 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500 hover:transform hover:scale-105 h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl lg:rounded-3xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
                    <div className="text-2xl sm:text-3xl lg:text-5xl">{cert.icon}</div>
                    <div className={`px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-full text-[10px] sm:text-xs lg:text-sm font-bold text-white bg-gradient-to-r ${cert.gradient} shadow-lg`}>
                      {cert.level}
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base lg:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300 leading-tight">
                    {cert.name}
                  </h3>
                  
                  <p className="text-slate-400 text-xs sm:text-sm lg:text-base mb-2 sm:mb-3 lg:mb-4 font-medium">{cert.provider}</p>
                  
                  <p className="text-slate-500 text-xs sm:text-sm mb-3 sm:mb-4 lg:mb-6 flex-grow leading-relaxed">{cert.description}</p>

                  <div className="flex items-center gap-1.5 sm:gap-2 text-cyan-400">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                    <span className="text-xs sm:text-sm lg:text-base font-semibold">Verified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Recognition section */}
        <div className="text-center">
          <div className="group relative bg-slate-900/50 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-12 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500 max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-500/5 rounded-xl sm:rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-yellow-400" />
                <h3 className="text-lg sm:text-xl lg:text-3xl font-bold text-white">Professional Recognition</h3>
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-yellow-400" />
              </div>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm lg:text-lg max-w-3xl mx-auto">
                Consistently recognized for excellence with <span className="text-yellow-400 font-semibold">multiple client appreciations</span> and 
                <span className="text-orange-400 font-semibold"> team awards</span> throughout my career. These certifications represent my commitment 
                to staying current with industry best practices and emerging technologies in the rapidly evolving data engineering landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;