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
    <section id="about" className="py-6 sm:py-8 lg:py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 sm:mb-3 lg:mb-4 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about transforming raw data into actionable insights through innovative engineering solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-start">
          {/* Left column - Story & Education - Much more compact for mobile */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <div className="group relative bg-slate-900/60 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 border border-slate-800/60 hover:border-slate-700/60 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-xl sm:rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-base sm:text-lg lg:text-2xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">Professional Journey</h3>
                <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-left">
                  <p className="text-slate-300 leading-relaxed text-xs sm:text-sm lg:text-base text-justify hyphens-auto">
                    With over <span className="text-cyan-400 font-semibold">4 years of experience</span> in data engineering, 
                    I've architected and implemented robust data solutions across diverse industries. My expertise spans from 
                    building real-time ingestion pipelines to creating comprehensive analytics platforms that drive business decisions.
                  </p>
                  <p className="text-slate-300 leading-relaxed text-xs sm:text-sm lg:text-base text-justify hyphens-auto">
                    I specialize in modern cloud technologies including <span className="text-blue-400 font-semibold">Snowflake, Databricks, AWS, and Azure</span>, 
                    with a strong focus on scalability, cost optimization, and performance. My approach combines technical excellence 
                    with business acumen to deliver solutions that truly make an impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Much more compact Education Section for mobile */}
            <div className="group relative bg-slate-900/60 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 border border-slate-800/60 hover:border-slate-700/60 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl sm:rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 mb-2 sm:mb-3 lg:mb-4">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-400" />
                  <h3 className="text-base sm:text-lg lg:text-2xl font-bold text-white">Education</h3>
                </div>
                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                  {/* M.Tech - More compact */}
                  <div className="p-2 sm:p-3 lg:p-4 bg-slate-800/30 rounded-lg sm:rounded-xl border border-slate-700/30">
                    <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-cyan-400 mb-0.5 sm:mb-1">M.Tech – Data Science & Engineering</h4>
                    <div className="flex flex-col gap-0.5 sm:gap-1 text-slate-300 text-[10px] sm:text-xs lg:text-sm">
                      <span className="font-medium">BITS Pilani (WILP)</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        <span className="text-slate-400">2022–2024</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* B.Tech - More compact */}
                  <div className="p-2 sm:p-3 lg:p-4 bg-slate-800/30 rounded-lg sm:rounded-xl border border-slate-700/30">
                    <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-blue-400 mb-0.5 sm:mb-1">B.Tech – Software Engineering</h4>
                    <div className="flex flex-col gap-0.5 sm:gap-1 text-slate-300 text-[10px] sm:text-xs lg:text-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2">
                        <span className="font-medium">SRM Institute, Chennai</span>
                        <span className="text-emerald-400 font-medium text-[9px] sm:text-[10px] lg:text-xs">First Class with Distinction</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-400">
                        <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        <span>2017–2021</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Compact Highlights grid for mobile */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-slate-900/60 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-2 sm:p-3 lg:p-6 border border-slate-800/60 hover:border-slate-700/60 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-8 rounded-xl sm:rounded-2xl lg:rounded-3xl transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className={`flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-gradient-to-br ${highlight.gradient} bg-opacity-10 rounded-md sm:rounded-lg lg:rounded-xl mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                      <Icon className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-gradient-to-br ${highlight.gradient} bg-clip-text text-transparent`} />
                    </div>
                    <h3 className="text-xs sm:text-sm lg:text-lg font-bold text-white mb-1 sm:mb-2 lg:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300 text-center leading-tight">
                      {highlight.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-[10px] sm:text-xs lg:text-sm text-center">{highlight.description}</p>
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