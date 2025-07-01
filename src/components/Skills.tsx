import React from 'react';
import { Database, Cloud, Code, Wrench, Monitor, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'Snowflake', level: 95 },
        { name: 'Databricks', level: 90 },
        { name: 'Redshift', level: 85 },
        { name: 'SQL Server', level: 88 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MySQL', level: 80 },
        { name: 'Neo4j', level: 75 }
      ],
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Cloud & Tools',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 92 },
        { name: 'Azure', level: 88 },
        { name: 'S3', level: 90 },
        { name: 'Glue', level: 88 },
        { name: 'Lambda', level: 85 },
        { name: 'SQS', level: 83 },
        { name: 'GitHub', level: 90 }
      ],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 92 },
        { name: 'SQL', level: 95 },
        { name: 'Shell Script', level: 85 },
        { name: 'JavaScript', level: 78 }
      ],
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      title: 'Frameworks',
      icon: Wrench,
      skills: [
        { name: 'Spark', level: 88 },
        { name: 'dbt', level: 92 },
        { name: 'PySpark', level: 85 },
        { name: 'Kafka', level: 80 }
      ],
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Development Tools',
      icon: Monitor,
      skills: [
        { name: 'VS Code', level: 90 },
        { name: 'DBeaver', level: 88 },
        { name: 'Talend', level: 75 },
        { name: 'Git', level: 85 }
      ],
      gradient: 'from-rose-500 to-orange-500'
    },
    {
      title: 'Operating Systems',
      icon: Cpu,
      skills: [
        { name: 'Linux', level: 85 },
        { name: 'Windows', level: 88 },
        { name: 'macOS', level: 80 }
      ],
      gradient: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <section id="skills" className="py-8 sm:py-12 lg:py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white mb-3 sm:mb-4 lg:mb-6 tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise across modern data engineering technologies and platforms
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="group relative bg-slate-900/50 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-8 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500 hover:transform hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl lg:rounded-3xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-5 lg:mb-8">
                    <div className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br ${category.gradient} bg-opacity-10 rounded-lg sm:rounded-xl lg:rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-gradient-to-br ${category.gradient} bg-clip-text text-transparent`} />
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex justify-between items-center mb-1.5 sm:mb-2 lg:mb-3">
                          <span className="text-slate-300 font-medium text-xs sm:text-sm lg:text-base">{skill.name}</span>
                          <span className="text-cyan-400 text-[10px] sm:text-xs lg:text-sm font-bold">{skill.level}%</span>
                        </div>
                        <div className="relative w-full bg-slate-800/50 rounded-full h-1.5 sm:h-2 lg:h-3 overflow-hidden">
                          <div 
                            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                            style={{ width: `${skill.level}%` }}
                          >
                            <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;