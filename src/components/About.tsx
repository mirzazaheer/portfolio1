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
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Passionate about transforming raw data into actionable insights through innovative engineering solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left column - Story & Education */}
          <div className="space-y-6 sm:space-y-8">
            <div className="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 text-center sm:text-left">Professional Journey</h3>
                <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                    With over <span className="text-cyan-400 font-semibold">4 years of experience</span> in data engineering, 
                    I've architected and implemented robust data solutions across diverse industries. My expertise spans from 
                    building real-time ingestion pipelines to creating comprehensive analytics platforms that drive business decisions.
                  </p>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                    I specialize in modern cloud technologies including <span className="text-blue-400 font-semibold">Snowflake, Databricks, AWS, and Azure</span>, 
                    with a strong focus on scalability, cost optimization, and performance. My approach combines technical excellence 
                    with business acumen to deliver solutions that truly make an impact.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-4 sm:mb-6">
                  <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Education Excellence</h3>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <div className="p-4 sm:p-6 bg-slate-800/30 rounded-xl sm:rounded-2xl border border-slate-700/30">
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-cyan-400 mb-2 text-center sm:text-left">M.Tech – Data Science & Engineering</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-slate-300 text-sm sm:text-base text-center sm:text-left">
                      <span>BITS Pilani (WILP)</span>
                      <span className="hidden sm:block">•</span>
                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>2022–2024</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 bg-slate-800/30 rounded-xl sm:rounded-2xl border border-slate-700/30">
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-400 mb-2 text-center sm:text-left">B.Tech – Software Engineering</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-slate-300 text-sm sm:text-base text-center sm:text-left">
                      <span>SRM Institute, Chennai</span>
                      <span className="hidden sm:block">•</span>
                      <span className="text-emerald-400 font-medium">First Class with Distinction</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-400 mt-2 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>2017–2021</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500 hover:transform hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-5 rounded-2xl sm:rounded-3xl transition-opacity duration-500`}></div>
                  <div className="relative z-10 text-center">
                    <div className={`flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${highlight.gradient} bg-opacity-10 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                      <Icon className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br ${highlight.gradient} bg-clip-text text-transparent`} />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-xs sm:text-sm lg:text-base">{highlight.description}</p>
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