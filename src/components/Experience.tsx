import React from 'react';
import { Calendar, MapPin, Building, ChevronRight, Zap } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Mastek',
      role: 'Senior Software Engineer',
      period: 'Oct 2024 – Present',
      location: 'Mumbai, India',
      client: 'Kellanova',
      technologies: ['Snowflake', 'dbt', 'AWS', 'SQS', 'Glue', 'Iceberg'],
      achievements: [
        'Architected & implemented SQS-based ingestion pipeline replacing Lambda model, improving scalability',
        'Designed and migrated to Iceberg tables for ACID-compliant data lake operations',
        'Created custom Data Extractor to automate S3 to Snowflake/Redshift loads',
        'Refactored legacy File Register for performance & modularity',
        'Developed reusable Spark & Python pipelines and fixed critical production bugs'
      ],
      isActive: true,
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      company: 'Mastek',
      role: 'Senior Software Engineer',
      period: 'Sep 2023 – Aug 2024',
      location: 'Mumbai, India',
      client: 'Alegeus',
      technologies: ['Azure Fabric', 'Databricks', 'Snowflake', 'Delta Lake', 'Python', 'CosmosDB', 'Kafka'],
      achievements: [
        'Developed Silver/Gold layer transformations for data lake architecture',
        'Built custom validation & reconciliation tools for data quality assurance',
        'Created data sync tools using Python and Java microservices',
        'Implemented real-time streaming solutions using Kafka'
      ],
      isActive: false,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      company: 'InfoCepts',
      role: 'Executive Data Engineer',
      period: 'Jan 2023 – Aug 2024',
      location: 'Pune, India',
      client: 'Capri Holdings',
      technologies: ['Synapse', 'Databricks', 'Snowflake', 'dbt', 'Python', 'Lambda', 'Snowpipe'],
      achievements: [
        'Built comprehensive data pipelines in Synapse & Databricks',
        'Developed Snowflake & dbt jobs for data transformation',
        'Integrated APIs using Snowpipe + Lambda for real-time ingestion',
        'Implemented validation dashboards and reconciliation logic',
        'Created automation scripts for data quality monitoring'
      ],
      isActive: false,
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      company: 'InfoCepts',
      role: 'Associate Data Engineer',
      period: 'Sep 2021 – Dec 2022',
      location: 'Pune, India',
      client: 'Michael Kors, Capri Holdings',
      technologies: ['Snowflake', 'ETL', 'Shell Script', 'PowerShell', 'SQL'],
      achievements: [
        'Developed robust ETL jobs and Snowflake stored procedures',
        'Created Shell & PowerShell scripts for automation',
        'Implemented exception handling & metadata logging',
        'Received multiple client appreciations and team awards'
      ],
      isActive: false,
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experience</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A journey through innovative data engineering solutions and impactful projects
          </p>
        </div>

        <div className="relative">
          {/* Enhanced timeline line for mobile */}
          <div className="absolute left-4 sm:left-6 lg:left-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 lg:transform lg:-translate-x-0.5 rounded-full"></div>

          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-start ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Enhanced timeline dot */}
                <div className="absolute left-4 sm:left-6 lg:left-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-2 sm:border-4 border-slate-950 lg:transform lg:-translate-x-1/2 z-10 shadow-lg shadow-cyan-500/50">
                  {exp.isActive && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping"></div>
                      <Zap className="absolute inset-0 w-2 h-2 sm:w-3 sm:h-3 text-white m-auto animate-pulse" />
                    </>
                  )}
                </div>

                {/* Content card - mobile optimized */}
                <div className={`w-full lg:w-5/12 ml-10 sm:ml-16 lg:ml-0 ${
                  index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                }`}>
                  <div className="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500 hover:transform hover:scale-105">
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 rounded-2xl sm:rounded-3xl transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
                        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-0">
                          <Building className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 flex-shrink-0" />
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{exp.company}</h3>
                          {exp.isActive && (
                            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-bold rounded-full animate-pulse">
                              CURRENT
                            </span>
                          )}
                        </div>
                      </div>

                      <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3 sm:mb-4">
                        {exp.role}
                      </h4>
                      
                      {/* Meta info - mobile optimized */}
                      <div className="flex flex-col gap-2 sm:gap-3 mb-4 sm:mb-6 text-xs sm:text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                          <span>{exp.location}</span>
                        </div>
                        {exp.client && (
                          <div className="flex items-center gap-2">
                            <span className="text-slate-500">Client:</span>
                            <span className="text-cyan-400 font-medium">{exp.client}</span>
                          </div>
                        )}
                      </div>

                      {/* Technologies */}
                      <div className="mb-4 sm:mb-6">
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-2 py-1 sm:px-3 sm:py-1 bg-slate-800/50 text-slate-300 text-xs font-medium rounded-full border border-slate-700/50 hover:border-cyan-400/50 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-2 sm:space-y-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base text-slate-300">
                            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 mt-0.5 sm:mt-1 flex-shrink-0" />
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;