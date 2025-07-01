import React from 'react';
import { Database, Cloud, Code, Award, GraduationCap, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Expert in building scalable data pipelines and ETL processes',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Proficient in AWS, Azure, and modern cloud data platforms',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Strong programming skills in Python, SQL, and modern frameworks',
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      icon: Award,
      title: 'Certified',
      description: 'Multiple industry certifications including Snowflake and Databricks',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="about" className="py-8 sm:py-12 lg:py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white mb-3 sm:mb-4 lg:mb-6 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Passionate about transforming raw data into actionable insights through innovative engineering solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start">
          {/* Left column - Story & Education - Compact for mobile */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="group relative bg-slate-900/50 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-xl sm:rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">Professional Journey</h3>
                <div className="space-y-3 sm:space-y-4 lg:space-y-6 text-left">
                  <p className="text-slate-300 leading-relaxed text-xs sm:text-sm lg:text-lg text-justify hyphens-auto">
                    With over <span className="text-cyan-400 font-semibold">4 years of experience</span> in data engineering, 
                    I've architected and implemented robust data solutions across diverse industries. My expertise spans from 
                    building real-time ingestion pipelines to creating comprehensive analytics platforms that drive business decisions.
                  </p>
                  <p className="text-slate-300 leading-relaxed text-xs sm:text-sm lg:text-lg text-justify hyphens-auto">
                    I specialize in modern cloud technologies including <span className="text-blue-400 font-semibold">Snowflake, Databricks, AWS, and Azure</span>, 
                    with a strong focus on scalability, cost optimization, and performance. My approach combines technical excellence 
                    with business acumen to deliver solutions that truly make an impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Compact Education Section */}
            <div className="group relative bg-slate-900/50 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:p-8 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl sm:rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-6">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-purple-400" />
                  <h3 className="text-lg sm:text-xl lg:text-3xl font-bold text-white">Education Excellence</h3>
                </div>
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  <div className="p-3 sm:p-4 lg:p-6 bg-slate-800/30 rounded-lg sm:rounded-xl lg:rounded-2xl border border-slate-700/30">
                    <h4 className="text-sm sm:text-base lg:text-xl font-semibold text-cyan-400 mb-1 sm:mb-2">M.Tech – Data Science & Engineering</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-slate-300 text-xs sm:text-sm lg:text-base">
                      <span>BITS Pilani (WILP)</span>
                      <span className="hidden sm:block">•</span>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>2022–2024</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 lg:p-6 bg-slate-800/30 rounded-lg sm:rounded-xl lg:rounded-2xl border border-slate-700/30">
                    <h4 className="text-sm sm:text-base lg:text-xl font-semibold text-blue-400 mb-1 sm:mb-2">B.Tech – Software Engineering</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-slate-300 text-xs sm:text-sm lg:text-base">
                      <span>SRM Institute, Chennai</span>
                      <span className="hidden sm:block">•</span>
                      <span className="text-emerald-400 font-medium">First Class with Distinction</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 text-slate-400 mt-1 sm:mt-2 text-xs sm:text-sm">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>2017–2021</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Compact Highlights grid for mobile */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-slate-900/50 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-8 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500 hover:transform hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl lg:rounded-3xl transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className={`flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${highlight.gradient} bg-opacity-10 rounded-lg sm:rounded-xl lg:rounded-2xl mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                      <Icon className={`w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-gradient-to-br ${highlight.gradient} bg-clip-text text-transparent`} />
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-2xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300 text-center">
                      {highlight.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-xs sm:text-sm lg:text-base text-center">{highlight.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;