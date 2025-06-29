import React, { useState } from 'react';
import { Mail, MapPin, Send, Linkedin, Github, Calendar, MessageCircle, User, FileText } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mirzazaheer65@gmail.com',
      href: 'mailto:mirzazaheer65@gmail.com',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#',
      gradient: 'from-purple-400 to-pink-500'
    }
  ];

  const personalDetails = [
    { label: 'Nationality', value: 'Indian', icon: User },
    { label: 'Passport', value: 'Available', icon: FileText },
    { label: 'Languages', value: 'English, Hindi, Assamese, Urdu, Bengali', icon: MessageCircle }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your next data engineering project or explore collaboration opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="space-y-6 sm:space-y-8">
            <div className="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
                  <Send className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2 sm:mb-3">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-3 sm:px-4 sm:py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl sm:rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400/50 focus:bg-slate-800/70 transition-all duration-300 text-sm sm:text-base"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2 sm:mb-3">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-3 sm:px-4 sm:py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl sm:rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400/50 focus:bg-slate-800/70 transition-all duration-300 text-sm sm:text-base"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-300 mb-2 sm:mb-3">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-3 sm:px-4 sm:py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl sm:rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400/50 focus:bg-slate-800/70 transition-all duration-300 text-sm sm:text-base"
                      placeholder="Enter subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2 sm:mb-3">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 py-3 sm:px-4 sm:py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl sm:rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400/50 focus:bg-slate-800/70 transition-all duration-300 resize-none text-sm sm:text-base"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 text-sm sm:text-base"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Social Links */}
            <div className="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-pink-500/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">Connect With Me</h3>
                <div className="flex gap-3 sm:gap-4">
                  <a
                    href="https://www.linkedin.com/in/mirza-zaheer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40 text-blue-400 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 group-hover/social:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://github.com/mirzazaheer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-slate-500/10 hover:bg-slate-500/20 border border-slate-500/20 hover:border-slate-500/40 text-slate-400 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-5 h-5 sm:w-6 sm:h-6 group-hover/social:scale-110 transition-transform" />
                  </a>
                  <a
                    href="mailto:mirzazaheer65@gmail.com"
                    className="group/social flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 hover:border-cyan-500/40 text-cyan-400 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-110"
                  >
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 group-hover/social:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info & Personal Details */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Information */}
            <div className="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-teal-500/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8">Contact Information</h3>
                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.href}
                        className="group/contact flex items-center gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8 bg-slate-800/30 hover:bg-slate-800/50 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105"
                      >
                        <div className={`flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${info.gradient} bg-opacity-10 rounded-xl sm:rounded-2xl group-hover/contact:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br ${info.gradient} bg-clip-text text-transparent`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm sm:text-base text-slate-400 font-medium mb-1">{info.label}</p>
                          <p className="text-slate-300 font-semibold truncate text-base sm:text-lg">{info.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Personal Details - Streamlined */}
            <div className="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-red-500/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8">Personal Details</h3>
                <div className="space-y-4 sm:space-y-6">
                  {personalDetails.map((detail, index) => {
                    const Icon = detail.icon;
                    return (
                      <div key={index} className="flex items-start gap-4 p-4 sm:p-6 bg-slate-800/20 rounded-xl sm:rounded-2xl border border-slate-700/30">
                        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-cyan-400/10 rounded-lg sm:rounded-xl flex-shrink-0">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-slate-400 text-sm sm:text-base font-medium mb-1">{detail.label}</p>
                          <p className="text-slate-300 font-semibold text-sm sm:text-base leading-relaxed">{detail.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-emerald-500/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Availability</h3>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Currently <span className="text-green-400 font-semibold">available</span> for new opportunities and consulting projects. 
                  Open to discussing <span className="text-cyan-400 font-semibold">full-time positions</span>, contract work, and collaborative ventures 
                  in data engineering and analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;