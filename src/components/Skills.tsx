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
      title: 'Cloud Platforms',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 92 },
        { name: 'Azure', level: 88 },
        { name: 'Synapse', level: 85 },
        { name: 'ADF', level: 83 },
        { name: 'S3', level: 90 },
        { name: 'Glue', level: 88 },
        { name: 'Lambda', level: 85 },
        { name: 'SQS', level: 83 }
      ],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Programming',
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
      title: 'Dev Tools',
      icon: Monitor,
      skills: [
        { name: 'VS Code', level: 90 },
        { name: 'DBeaver', level: 88 },
        { name: 'Talend', level: 75 },
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 90 }
      ],
      gradient: 'from-rose-500 to-orange-500'
    },
    {
      title: 'Systems',
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
    <section id="skills" className="py-6 sm:py-8 lg:py-16 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 sm:mb-3 lg:mb-4 tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Expertise</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Comprehensive mastery of modern data engineering technologies
          </p>
        </div>

        {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="group relative bg-slate-900/60 backdrop-blur-xl rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-slate-800/60 hover:border-slate-700/60 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-8 rounded-lg sm:rounded-xl lg:rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-5">
                    <div className={`flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br ${category.gradient} bg-opacity-15 rounded-md sm:rounded-lg lg:rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 bg-gradient-to-br ${category.gradient} bg-clip-text text-transparent`} />
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-2 sm:space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex justify-between items-center mb-1 sm:mb-1.5">
                          <span className="text-slate-300 font-medium text-xs sm:text-sm">{skill.name}</span>
                          <span className="text-cyan-400 text-[10px] sm:text-xs font-bold">{skill.level}%</span>
                        </div>
                        <div className="relative w-full bg-slate-800/60 rounded-full h-1 sm:h-1.5 lg:h-2 overflow-hidden">
                          <div 
                            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out shadow-sm`}
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