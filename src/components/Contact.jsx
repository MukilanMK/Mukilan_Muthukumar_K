import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:mukil6854@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden max-w-7xl mx-auto">
      <div className="relative z-10">
        <div className="text-center mb-16">
          <span className="text-[11px] font-mono tracking-[0.3em] text-orange font-bold uppercase block mb-3">
            Chapter 05 // The Connection
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-graphite mb-4">
            Let's build something together
          </h2>
          <div className="w-20 h-2 bg-graphite mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left Column: Form */}
          <ScrollReveal direction="left" className="w-full">
            <div className="folder-card p-8 sm:p-10 shadow-[8px_8px_0px_#191919]">
              <div className="folder-tab">CONTACT_FORM</div>
              <form onSubmit={handleSubmit} className="space-y-6 mt-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold font-mono text-graphite mb-2 uppercase">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border-2 border-graphite p-3 focus:outline-none focus:border-orange transition-colors text-graphite font-medium shadow-[4px_4px_0px_#191919] focus:shadow-[2px_2px_0px_#191919]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold font-mono text-graphite mb-2 uppercase">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border-2 border-graphite p-3 focus:outline-none focus:border-orange transition-colors text-graphite font-medium shadow-[4px_4px_0px_#191919] focus:shadow-[2px_2px_0px_#191919]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold font-mono text-graphite mb-2 uppercase">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-white border-2 border-graphite p-3 focus:outline-none focus:border-orange transition-colors text-graphite font-medium shadow-[4px_4px_0px_#191919] focus:shadow-[2px_2px_0px_#191919] resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center space-x-2 bg-graphite text-white font-bold py-4 px-6 border-2 border-graphite hover:bg-orange hover:text-graphite hover:-translate-y-1 shadow-[4px_4px_0px_#191919] hover:shadow-[6px_6px_0px_#191919] transition-all duration-300"
                >
                  <span>Send Message</span>
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Right Column: Social Links */}
          <ScrollReveal direction="right" className="w-full h-full">
            <div className="folder-card p-8 sm:p-10 shadow-[8px_8px_0px_#191919] h-full flex flex-col justify-center">
              <div className="folder-tab">NETWORK</div>
              <p className="text-lg font-medium text-graphite mb-8 leading-relaxed">
                Whether you have a project in mind, a question, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:mukil6854@gmail.com"
                  className="flex items-center space-x-4 p-4 bg-biscuit border-2 border-graphite hover:-translate-y-1 hover:bg-white shadow-[4px_4px_0px_#191919] transition-all group"
                >
                  <div className="w-12 h-12 bg-white border-2 border-graphite flex items-center justify-center group-hover:bg-orange group-hover:text-white transition-colors">
                    <Mail size={24} className="text-graphite group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block font-bold font-mono text-sm text-graphite uppercase">Email</span>
                    <span className="block font-medium text-graphite group-hover:text-orange transition-colors">mukil6854@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/mukilan-muthukumar-6a9a23314/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-biscuit border-2 border-graphite hover:-translate-y-1 hover:bg-white shadow-[4px_4px_0px_#191919] transition-all group"
                >
                  <div className="w-12 h-12 bg-white border-2 border-graphite flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6 text-graphite group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div>
                    <span className="block font-bold font-mono text-sm text-graphite uppercase">LinkedIn</span>
                    <span className="block font-medium text-graphite group-hover:text-blue-500 transition-colors">Mukilan Muthukumar K</span>
                  </div>
                </a>

                <a
                  href="https://github.com/MukilanMK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-biscuit border-2 border-graphite hover:-translate-y-1 hover:bg-white shadow-[4px_4px_0px_#191919] transition-all group"
                >
                  <div className="w-12 h-12 bg-white border-2 border-graphite flex items-center justify-center group-hover:bg-gray-800 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6 text-graphite group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </div>
                  <div>
                    <span className="block font-bold font-mono text-sm text-graphite uppercase">GitHub</span>
                    <span className="block font-medium text-graphite group-hover:text-gray-800 transition-colors">@MukilanMK</span>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
