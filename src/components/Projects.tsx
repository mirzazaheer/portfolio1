import React from 'react';
import { ExternalLink, Github, Brain, Cpu, Building, Users, ArrowRight, Database, Activity, Bot, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Taxi Demand Prediction',
      subtitle: 'M.Tech Dissertation Project',
      description: 'Advanced ML model to predict taxi demand using NYC trip data and weather patterns. Implemented comprehensive time series forecasting with multiple ML techniques for accurate demand prediction and resource optimization.',
      technologies: ['Databricks', 'Snowflake', 'Python', 'Pandas', 'Scikit-learn', 'Spark', 'Machine Learning', 'Time Series'],
      features: [
        'Real-time demand forecasting with 95% accuracy',
        'Weather data integration and correlation analysis',
        'Advanced time series analysis and pattern recognition',
        'Scalable ML pipeline with automated retraining'
      ],
      icon: Cpu,
      gradient: 'from-cyan-400 to-blue-500',
      category: 'Machine Learning & Analytics'
    },
    {
      title: 'Healthcare AI Chatbot',
      subtitle: 'NLP & AI Project',
      description: 'Intelligent conversational AI system for automated disease diagnosis and patient response management. Built with advanced NLP capabilities for medical query understanding and contextual response generation.',
      technologies: ['Python', 'NLP', 'TensorFlow', 'Machine Learning', 'Flask', 'Natural Language Processing', 'AI'],
      features: [
        'Automated disease diagnosis with symptom analysis',
        'Medical query processing and understanding',
        'Intelligent response automation and recommendations',
        'Patient interaction system with conversation memory'
      ],
      icon: Bot,
      gradient: 'from-green-400 to-emerald-500',
      category: 'AI & Natural Language Processing'
    },
    {
      title: 'Hospital Management System',
      subtitle: 'Full-Stack Enterprise Solution',
      description: 'Comprehensive hospital management platform with patient records, appointment scheduling, staff management, and inventory tracking. Built with modern web technologies and robust database architecture.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Database Management', 'Web Development', 'System Architecture'],
      features: [
        'Complete patient record management system',
        'Automated appointment scheduling and notifications',
        'Staff management with role-based access control',
        'Real-time inventory tracking and alerts'
      ],
      icon: Building,
      gradient: 'from-purple-500 to-pink-500',
      category: 'Full-Stack Development'
    },
    {
      title: 'Attendance Management System',
      subtitle: 'Enterprise Automation Solution',
      description: 'Automated attendance tracking system with real-time monitoring, comprehensive reporting, and HR integration. Streamlined workforce management with advanced analytics and automated notifications.',
      technologies: ['Web Development', 'Database Design', 'Automation', 'Reporting', 'Analytics', 'System Integration'],
      features: [
        'Real-time attendance tracking and monitoring',
        'Automated reporting with customizable dashboards',
        'Advanced analytics with trend analysis',
        'Seamless HR system integration and notifications'
      ],
      icon: Users,
      gradient: 'from-orange-400 to-red-500',
      category: 'Enterprise Systems'
    },
    {
      title: 'Data Pipeline Automation',
      subtitle: 'ETL & Data Engineering',
      description: 'Scalable data pipeline automation framework for enterprise data processing. Built robust ETL processes with error handling, monitoring, and automated data quality validation.',
      technologies: ['Python', 'SQL', 'ETL', 'Data Engineering', 'Automation', 'Monitoring'],
      features: [
        'Automated ETL pipeline with error recovery',
        'Real-time data quality monitoring',
        'Scalable processing architecture',
        'Comprehensive logging and alerting system'
      ],
      icon: Database,
      gradient: 'from-blue-500 to-purple-600',
      category: 'Data Engineering'
    },
    {
      title: 'Real-time Analytics Dashboard',
      subtitle: 'Business Intelligence Solution',
      description: 'Interactive real-time analytics dashboard for business intelligence and data visualization. Provides actionable insights with dynamic reporting and customizable metrics.',
      technologies: ['Analytics', 'Visualization', 'Real-time Processing', 'Business Intelligence', 'Dashboard'],
      features: [
        'Real-time data visualization and insights',
        'Interactive dashboard with drill-down capabilities',
        'Customizable metrics and KPI tracking',
        'Automated report generation and distribution'
      ],
      icon: Activity,
      gradient: 'from-teal-400 to-cyan-500',
      category: 'Business Intelligence'
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
            Innovative solutions showcasing expertise in data engineering, machine learning, and full-stack development
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
                      <p className="text-sm text-slate-400 font-medium">{project.subtitle}</p>
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
                      <span className="text-sm">View Project</span>
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
                Currently working on several exciting data engineering and machine learning projects. 
                Stay tuned for updates on enterprise-scale solutions and innovative analytics platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;