import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Building, ChevronRight, Zap, ChevronDown, ChevronUp } from 'lucide-react';

const Experience: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Check on mount
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const experiences = [
    {
      company: 'Mastek',
      role: 'Software Specialist 1',
      period: 'Jan 2025 – Present',
      location: 'Mumbai, India',
      client: 'Kellanova',
      technologies: ['Snowflake', 'dbt', 'AWS Glue', 'SQS', 'Step Functions', 'CloudFormation', 'Python', 'Apache Iceberg', 'Spark', 'CI/CD'],
      summary: 'Driving end-to-end orchestration, deployment automation, and test-driven development for scalable, reliable data pipelines.',
      achievements: [
        'Architected AWS Step Functions to orchestrate complex workflows across ingestion, transformation, and data validation stages',
        'Designed and implemented a robust automated testing framework covering data integrity, schema drift, and pipeline regressions',
        'Developed reusable, modular Glue jobs (PySpark + Python Shell) aligned with Iceberg table requirements and ACID guarantees',
        'Built a config-driven ingestion system integrated with SQS, supporting retries, DLQs, and dynamic file handling',
        'Delivered metadata-driven dbt models to streamline business logic and enable scalable transformation pipelines',
        'Automated infrastructure provisioning with AWS CloudFormation templates for Glue jobs, IAM, and Step Function stacks',
        'Integrated pipelines with CI/CD workflows to support seamless testing and deployment across environments',
        'Actively mentor team members, contribute to code reviews, and enforce engineering best practices'
      ],
      isActive: true,
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      company: 'Mastek',
      role: 'Senior Software Engineer',
      period: 'Oct 2024 – Dec 2024',
      location: 'Mumbai, India',
      client: 'Kellanova',
      technologies: ['Snowflake', 'dbt', 'AWS', 'SQS', 'Glue', 'Iceberg'],
      summary: 'Architected scalable data pipelines with SQS-based ingestion and Iceberg tables for ACID-compliant operations.',
      achievements: [
        'Architected & implemented SQS-based ingestion pipeline replacing Lambda model, improving scalability',
        'Designed and migrated to Iceberg tables for ACID-compliant data lake operations',
        'Created custom Data Extractor to automate S3 to Snowflake/Redshift loads',
        'Refactored legacy File Register for performance & modularity',
        'Developed reusable Spark & Python pipelines and fixed critical production bugs'
      ],
      isActive: false,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      company: 'Mastek',
      role: 'Senior Software Engineer',
      period: 'Sep 2023 – Aug 2024',
      location: 'Mumbai, India',
      client: 'Alegeus',
      technologies: ['Azure Fabric', 'Databricks', 'Snowflake', 'Delta Lake', 'Python', 'CosmosDB', 'Kafka'],
      summary: 'Built enterprise data lake with Silver/Gold transformations and real-time streaming solutions.',
      achievements: [
        'Developed Silver/Gold layer transformations for data lake architecture',
        'Built custom validation & reconciliation tools for data quality assurance',
        'Created data sync tools using Python and Java microservices',
        'Implemented real-time streaming solutions using Kafka'
      ],
      isActive: false,
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      company: 'InfoCepts',
      role: 'Executive Data Engineer',
      period: 'Jan 2023 – Aug 2024',
      location: 'Pune, India',
      client: 'Capri Holdings',
      technologies: ['Synapse', 'Databricks', 'Snowflake', 'dbt', 'Python', 'Lambda', 'Snowpipe'],
      summary: 'Led comprehensive data pipeline development with Synapse, Databricks, and real-time API integrations.',
      achievements: [
        'Built comprehensive data pipelines in Synapse & Databricks',
        'Developed Snowflake & dbt jobs for data transformation',
        'Integrated APIs using Snowpipe + Lambda for real-time ingestion',
        'Implemented validation dashboards and reconciliation logic',
        'Created automation scripts for data quality monitoring'
      ],
      isActive: false,
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      company: 'InfoCepts',
      role: 'Associate Data Engineer',
      period: 'Sep 2021 – Dec 2022',
      location: 'Pune, India',
      client: 'Michael Kors, Capri Holdings',
      technologies: ['Snowflake', 'ETL', 'Shell Script', 'PowerShell', 'SQL'],
      summary: 'Developed robust ETL processes and automation scripts with multiple client recognitions.',
      achievements: [
        'Developed robust ETL jobs and Snowflake stored procedures',
        'Created Shell & PowerShell scripts for automation',
        'Implemented exception handling & metadata logging',
        'Received multiple client appreciations and team awards'
      ],
      isActive: false,
      gradient: 'from-rose-500 to-orange-500'
    },
    {
      company: 'InfoCepts',
      role: 'Assistant Data Engineer',
      period: 'Jun 2021 – Aug 2021',
      location: 'Pune, India',
      client: 'Michael Kors',
      technologies: ['Snowflake', 'Netezza', 'MySQL', 'DB2', 'Data Streamer', 'Shell Script'],
      summary: 'Enhanced warehouse operations through data migration from Netezza to Snowflake and ETL development.',
      achievements: [
        'Developed ETL scripts and converted Netezza SQL to Snowflake SQL',
        'Successfully migrated data from On-Premise to Cloud Snowflake',
        'Created metadata, new instances and maintenance for IDS (InfoCepts Data Streamer)',
        'Scheduled warehouse housekeeping tasks and handled manual data refresh',
        'Collaborated with Solutions Team for IDS enhancements'
      ],
      isActive: false,
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      company: 'InfoCepts',
      role: 'Database Developer Trainee',
      period: 'Mar 2021 – May 2021',
      location: 'Pune, India',
      client: 'InfoCepts Boot Camp',
      technologies: ['MS SQL Server', 'Linux', 'Informatica', 'MicroStrategy', 'Data Analytics'],
      summary: 'Completed comprehensive 3-month boot camp covering database fundamentals, ETL, and advanced analytics.',
      achievements: [
        'Successfully completed intensive 3-month training program',
        'Mastered SQL Essentials and Linux Fundamentals',
        'Gained hands-on experience with MS SQL Server and MicroStrategy',
        'Learned Informatica PowerCenter and Data Warehouse Design',
        'Completed Quality Assurance and Advanced Analytics modules'
      ],
      isActive: false,
      gradient: 'from-yellow-500 to-green-500'
    },
    {
      company: 'KaaShiv InfoTech',
      role: 'Web Development Intern',
      period: 'Jun 2019',
      location: 'Chennai, India',
      client: 'Front End Development Project',
      technologies: ['HTML', 'CSS', 'PHP', 'JavaScript'],
      summary: 'Gained practical experience in web development technologies and user interface design.',
      achievements: [
        'Developed responsive web pages using HTML, CSS, and JavaScript',
        'Implemented dynamic functionality with PHP backend integration',
        'Enhanced user experience through improved interface design',
        'Assisted senior developers in project development and maintenance'
      ],
      isActive: false,
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="experience" className="py-8 sm:py-12 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white mb-3 sm:mb-4 lg:mb-6 tracking-tight">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experience</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A journey through innovative data engineering solutions and impactful projects
          </p>
        </div>

        <div className="relative">
          {/* Enhanced timeline line */}
          <div className="absolute left-3 sm:left-4 lg:left-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 lg:transform lg:-translate-x-0.5 rounded-full"></div>

          <div className="space-y-4 sm:space-y-6 lg:space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-start ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Enhanced timeline dot */}
                <div className="absolute left-3 sm:left-4 lg:left-1/2 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-2 sm:border-3 lg:border-4 border-slate-950 lg:transform lg:-translate-x-1/2 z-10 shadow-lg shadow-cyan-500/50">
                  {exp.isActive && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping"></div>
                      <Zap className="absolute inset-0 w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 text-white m-auto animate-pulse" />
                    </>
                  )}
                </div>

                {/* Content card - Compact for mobile */}
                <div className={`w-full lg:w-5/12 ml-8 sm:ml-10 lg:ml-0 ${
                  index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                }`}>
                  <div className="group relative bg-slate-900/50 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-8 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500 hover:transform hover:scale-105">
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl lg:rounded-3xl transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      {/* Compact Header */}
                      <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16 bg-gradient-to-br ${exp.gradient} bg-opacity-10 rounded-lg sm:rounded-xl lg:rounded-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <Building className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8 bg-gradient-to-br ${exp.gradient} bg-clip-text text-transparent`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                            <h3 className="text-sm sm:text-base lg:text-xl font-bold text-white">{exp.company}</h3>
                            {exp.isActive && (
                              <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-[10px] sm:text-xs font-bold rounded-full animate-pulse">
                                CURRENT
                              </span>
                            )}
                          </div>
                          <h4 className="text-xs sm:text-sm lg:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-1 sm:mb-2">
                            {exp.role}
                          </h4>
                          {exp.client && (
                            <p className="text-[10px] sm:text-xs text-cyan-400 font-semibold">{exp.client}</p>
                          )}
                        </div>
                      </div>

                      {/* Compact Meta info */}
                      <div className="flex flex-col gap-1 sm:gap-2 mb-3 sm:mb-4 text-[10px] sm:text-xs text-slate-400">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cyan-400" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cyan-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Compact Technologies - Show only first 4 on mobile */}
                      <div className="mb-3 sm:mb-4">
                        <div className="flex flex-wrap gap-1 sm:gap-1.5">
                          {exp.technologies.slice(0, isMobile ? 4 : exp.technologies.length).map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-slate-800/50 text-slate-300 text-[9px] sm:text-xs font-medium rounded-full border border-slate-700/50 hover:border-cyan-400/50 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                          {isMobile && exp.technologies.length > 4 && (
                            <span className="px-1.5 py-0.5 bg-slate-700/50 text-slate-400 text-[9px] font-medium rounded-full">
                              +{exp.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Summary - always visible but compact */}
                      <div className="mb-3 sm:mb-4">
                        <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed line-clamp-2 sm:line-clamp-none">
                          {exp.summary}
                        </p>
                      </div>

                      {/* Collapsible achievements for all screen sizes */}
                      <div>
                        <button
                          onClick={() => toggleExpanded(index)}
                          className="flex items-center gap-1 sm:gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-xs sm:text-sm font-medium mb-2 sm:mb-3 group/btn"
                        >
                          {expandedItems.includes(index) ? (
                            <>
                              <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:scale-110 transition-transform" />
                              Hide Details
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:scale-110 transition-transform" />
                              View Details
                            </>
                          )}
                        </button>
                        
                        {expandedItems.includes(index) && (
                          <ul className="space-y-1.5 sm:space-y-2 animate-fade-in-up">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs lg:text-sm text-slate-300">
                                <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                <span className="leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
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