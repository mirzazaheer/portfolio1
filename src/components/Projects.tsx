import React from 'react';
import { ExternalLink, Github, Brain, Cpu, Building, Users, ArrowRight, Database, Activity, Bot, Calendar, Cloud, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    // Professional/Job-related Projects First
    {
      title: 'Enterprise Data Pipeline Modernization',
      subtitle: 'AWS SQS + Iceberg Architecture',
      client: 'Kellanova (Fortune 500 Food Company)',
      description: 'Architected and implemented scalable data ingestion pipeline using AWS SQS, replacing Lambda bottlenecks. Designed Iceberg-based ACID-compliant data lake operations with automated file processing and cost optimization.',
      technologies: ['AWS SQS', 'Apache Iceberg', 'Snowflake', 'Glue', 'Python', 'Spark', 'S3', 'Lambda'],
      features: [
        'Eliminated Lambda-based bottlenecks with SQS bulk processing',
        'Implemented ACID transactions with Apache Iceberg tables',
        'Automated S3 to Snowflake/Redshift data loading',
        'Achieved 70% cost reduction in compute resources'
      ],
      icon: Cloud,
      gradient: 'from-cyan-400 to-blue-500',
      category: 'Enterprise Data Engineering'
    },
    {
      title: 'Smart Factory Analytics Platform',
      subtitle: 'Manufacturing Intelligence Solution',
      client: 'Kellanova (Fortune 500 Food Company)',
      description: 'Developed comprehensive analytics platform for manufacturing operations with real-time data processing, predictive maintenance insights, and automated workflow orchestration using modern cloud technologies.',
      technologies: ['Snowflake', 'dbt', 'AWS Glue', 'Redshift', 'GitHub Actions', 'Python'],
      features: [
        'Real-time manufacturing data ingestion and processing',
        'Advanced data modeling with dbt for optimization',
        'Automated workflow orchestration and deployments',
        'Predictive analytics for operational efficiency'
      ],
      icon: Activity,
      gradient: 'from-purple-600 to-pink-500',
      category: 'Manufacturing Intelligence'
    },
    {
      title: 'Financial Services Data Lake',
      subtitle: 'Azure Fabric & Databricks Solution',
      client: 'Alegeus (US Fintech Company)',
      description: 'Architected enterprise data lake for fintech company using Azure Fabric and Databricks. Implemented Silver/Gold layer transformations, real-time streaming with Kafka, and comprehensive data validation frameworks.',
      technologies: ['Azure Fabric', 'Databricks', 'Delta Lake', 'Kafka', 'CosmosDB', 'Python', 'Java'],
      features: [
        'Multi-layered data lake architecture (Bronze/Silver/Gold)',
        'Real-time streaming data processing with Kafka',
        'Advanced validation and reconciliation tools',
        'Microservices-based data synchronization'
      ],
      icon: Zap,
      gradient: 'from-pink-500 to-rose-500',
      category: 'Financial Data Engineering'
    },
    {
      title: 'Unified Customer Data Platform',
      subtitle: 'Multi-Source Integration & Analytics',
      client: 'Capri Holdings (Luxury Fashion Conglomerate)',
      description: 'Built comprehensive customer data platform integrating CRM, Twilio, Workday, and O365 data sources. Implemented real-time ingestion with Snowpipe, advanced data quality frameworks, and automated validation dashboards.',
      technologies: ['Snowflake', 'Snowpipe', 'Python', 'REST APIs', 'AWS Lambda', 'Talend', 'PowerBI'],
      features: [
        'Multi-source data integration with PII compliance',
        'Real-time ingestion using Snowpipe and AWS Lambda',
        'Advanced data quality validation framework',
        'Automated reconciliation and repair mechanisms'
      ],
      icon: Database,
      gradient: 'from-blue-500 to-purple-600',
      category: 'Customer Analytics Platform'
    },
    {
      title: 'Enterprise Data Warehouse Modernization',
      subtitle: 'Cloud Migration & Analytics Platform',
      client: 'Capri Holdings (Luxury Fashion Conglomerate)',
      description: 'Led comprehensive data warehouse modernization from on-premise to cloud, implementing Azure Synapse Analytics and Databricks for enhanced analytics capabilities and business intelligence reporting.',
      technologies: ['Azure Synapse', 'Azure Databricks', 'ADLS Gen2', 'ADF', 'PowerBI', 'Spark'],
      features: [
        'Complete data warehouse migration to cloud',
        'Silver/Gold layer data transformations',
        'Advanced analytics and business intelligence',
        'Scalable data processing with Spark'
      ],
      icon: Cloud,
      gradient: 'from-emerald-400 to-teal-500',
      category: 'Data Warehouse Modernization'
    },
    {
      title: 'Retail Analytics Data Pipeline',
      subtitle: 'E-commerce Intelligence Solution',
      client: 'Michael Kors (Luxury Fashion Brand)',
      description: 'Developed optimized data pipeline for retail operations enabling advanced MSTR reporting. Streamlined sales and inventory analytics with automated data processing and real-time insights.',
      technologies: ['Snowflake', 'Talend', 'Shell Script', 'AWS', 'MicroStrategy'],
      features: [
        'Optimized retail data pipeline architecture',
        'Advanced sales and inventory analytics',
        'Real-time MSTR reporting capabilities',
        'Automated data validation and quality checks'
      ],
      icon: Activity,
      gradient: 'from-orange-400 to-red-500',
      category: 'Retail Analytics'
    },
    {
      title: 'Wholesale Operations Data Platform',
      subtitle: 'Supply Chain Intelligence System',
      client: 'Michael Kors (Luxury Fashion Brand)',
      description: 'Architected robust wholesale data platform with advanced exception handling and automated workflows. Integrated SharePoint and Power Automate for seamless data operations and business process automation.',
      technologies: ['Snowflake', 'Talend', 'SharePoint', 'Power Automate', 'Shell Script'],
      features: [
        'Comprehensive wholesale data feed processing',
        'Advanced exception handling mechanisms',
        'Automated workflow orchestration',
        'Business process integration and optimization'
      ],
      icon: Building,
      gradient: 'from-yellow-400 to-orange-500',
      category: 'Supply Chain Analytics'
    },
    
    // Personal/Academic Projects
    {
      title: 'Predictive Analytics for Urban Mobility',
      subtitle: 'M.Tech Dissertation - Machine Learning',
      client: 'Academic Research Project',
      description: 'Advanced machine learning model for taxi demand prediction using NYC trip data, weather patterns, and temporal analysis. Implemented comprehensive time series forecasting with 95% accuracy for resource optimization.',
      technologies: ['Databricks', 'Snowflake', 'Python', 'Pandas', 'Scikit-learn', 'Spark', 'Time Series Analysis'],
      features: [
        'Real-time demand forecasting with 95% accuracy',
        'Weather data integration and correlation analysis',
        'Advanced time series analysis and pattern recognition',
        'Scalable ML pipeline with automated retraining'
      ],
      icon: Cpu,
      gradient: 'from-rose-500 to-orange-500',
      category: 'Machine Learning & Analytics'
    },
    {
      title: 'AI-Powered Healthcare Assistant',
      subtitle: 'NLP & Conversational AI',
      client: 'Personal Innovation Project',
      description: 'Intelligent conversational AI system for automated medical diagnosis and patient interaction. Built with advanced NLP capabilities for medical query understanding and contextual response generation.',
      technologies: ['Python', 'NLP', 'TensorFlow', 'Machine Learning', 'Flask', 'Natural Language Processing'],
      features: [
        'Automated disease diagnosis with symptom analysis',
        'Medical query processing and understanding',
        'Intelligent response automation and recommendations',
        'Patient interaction system with conversation memory'
      ],
      icon: Bot,
      gradient: 'from-orange-500 to-yellow-500',
      category: 'AI & Natural Language Processing'
    },
    {
      title: 'Enterprise Hospital Management System',
      subtitle: 'Full-Stack Healthcare Solution',
      client: 'Academic Capstone Project',
      description: 'Comprehensive hospital management platform with patient records, appointment scheduling, staff management, and inventory tracking. Built with modern web technologies and robust database architecture.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Database Management', 'System Architecture'],
      features: [
        'Complete patient record management system',
        'Automated appointment scheduling and notifications',
        'Staff management with role-based access control',
        'Real-time inventory tracking and alerts'
      ],
      icon: Building,
      gradient: 'from-yellow-500 to-green-500',
      category: 'Healthcare Technology'
    },
    {
      title: 'Workforce Analytics & Automation',
      subtitle: 'HR Intelligence Platform',
      client: 'Personal Development Project',
      description: 'Automated attendance tracking system with real-time monitoring, comprehensive reporting, and HR integration. Streamlined workforce management with advanced analytics and automated notifications.',
      technologies: ['Web Development', 'Database Design', 'Analytics', 'Reporting', 'System Integration'],
      features: [
        'Real-time attendance tracking and monitoring',
        'Automated reporting with customizable dashboards',
        'Advanced analytics with trend analysis',
        'Seamless HR system integration and notifications'
      ],
      icon: Users,
      gradient: 'from-green-500 to-teal-500',
      category: 'HR Technology'
    }
  ];

  return (
    <section id="projects" className="py-16 lg:py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade solutions showcasing expertise in data engineering, cloud architecture, and scalable analytics platforms
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div key={index} className="group relative bg-slate-900/50 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500 hover:transform hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${project.gradient} bg-opacity-10 rounded-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <Icon className={`w-8 h-8 bg-gradient-to-br ${project.gradient} bg-clip-text text-transparent`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-10 text-xs font-medium rounded-full border border-slate-700/50`}>
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300 mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-400 font-medium mb-2">{project.subtitle}</p>
                      <p className="text-xs text-cyan-400 font-semibold">{project.client}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed mb-6 text-sm lg:text-base">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-cyan-400" />
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-slate-400">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs font-medium rounded-full border border-slate-700/50 hover:border-cyan-400/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">View Details</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white font-semibold rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300">
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Source Code</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional projects note */}
        <div className="text-center mt-16">
          <div className="group relative bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500 max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <Calendar className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">More Projects Coming Soon</h3>
              <p className="text-slate-400 leading-relaxed">
                Currently architecting several cutting-edge data engineering and machine learning solutions. 
                Stay tuned for updates on enterprise-scale platforms and innovative analytics architectures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;