import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { BrainCircuit, Code2, Cpu, User, Mail } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About = () => {
  const corePillars = [
    {
      title: "Intelligent Systems",
      subtitle: "AI & Machine Learning",
      description: "Harnessing deep learning model training (YOLOv8, UNet, ResNet) and semantic searches using vector databases for predictive data insight.",
      icon: BrainCircuit,
      color: "from-purple-500/20 to-indigo-500/20",
      iconColor: "text-purple-400",
      borderColor: "group-hover:border-purple-500/30"
    },
    {
      title: "Full-Stack Development",
      subtitle: "The MERN Stack & Beyond",
      description: "Developing robust full-stack applications with high reliability, dynamic reactivity, modern styling, and optimized databases.",
      icon: Code2,
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-cyan-400",
      borderColor: "group-hover:border-cyan-500/30"
    },
    {
      title: "IoT & Hardware Integration",
      subtitle: "Real-time Operations",
      description: "Streaming low-latency visual feeds via WebRTC, processing data through FastAPI, and integrating physical sensors for critical environment safety.",
      icon: Cpu,
      color: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-400",
      borderColor: "group-hover:border-emerald-500/30"
    }
  ];

  return (
    <section
      id="about"
      className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[11px] font-mono tracking-[0.3em] text-indigo-400 uppercase block mb-3">
            Chapter 01 // The Origin
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Story Bio */}
          <ScrollReveal direction="left" className="lg:col-span-7 h-full">
            <div className="glass-panel rounded-[2rem] p-8 sm:p-10 border border-white/10 relative overflow-hidden shadow-2xl h-full">
              {/* Corner visual embellishments */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-500/10 to-transparent pointer-events-none" />

            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <User size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-200 font-mono tracking-tight">
                system_bio.log
              </h3>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed space-y-6">
              {personalInfo.about}
            </p>

            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-slate-400 text-xs font-mono mb-1">Focus</div>
                <div className="text-white font-semibold text-sm">AI & Web Integration</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-slate-400 text-xs font-mono mb-1">Affiliation</div>
                <div className="text-white font-semibold text-sm">Sri Eshwar College of Engineering</div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="text-slate-400 text-xs font-mono mb-3">Contact Me</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <a
                  href="https://github.com/MukilanMK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 p-3 rounded-xl glass-pill border border-white/5 text-slate-300 hover:text-white hover:border-indigo-500/35 transition-all text-xs font-semibold hover:scale-[1.03]"
                >
                  <svg className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mukilan-muthukumar-6a9a23314/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 p-3 rounded-xl glass-pill border border-white/5 text-slate-300 hover:text-white hover:border-blue-500/35 transition-all text-xs font-semibold hover:scale-[1.03]"
                >
                  <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:mukil6854@gmail.com"
                  className="flex items-center justify-center space-x-2 p-3 rounded-xl glass-pill border border-white/5 text-slate-300 hover:text-white hover:border-red-500/35 transition-all text-xs font-semibold hover:scale-[1.03]"
                >
                  <Mail size={16} className="text-red-400" />
                  <span>Email</span>
                </a>
                <a
                  href="https://www.instagram.com/itzzzmemukiluhhh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 p-3 rounded-xl glass-pill border border-white/5 text-slate-300 hover:text-white hover:border-pink-500/35 transition-all text-xs font-semibold hover:scale-[1.03]"
                >
                  <svg className="w-4 h-4 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Interactive Capability Cards */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal direction="right" key={idx}>
                  <div
                    className="group glass-card rounded-2xl p-6 border border-white/5 flex items-start space-x-5 cursor-default hover:scale-[1.02] transition-all duration-300"
                  >
                    {/* Glowing background behind icon */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg`}>
                    <Icon size={22} className={`${pillar.iconColor} transition-transform group-hover:rotate-6`} />
                  </div>

                  {/* Text details */}
                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase block mb-1">
                      {pillar.subtitle}
                    </span>
                    <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 group-hover:text-cyan-400">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                      {pillar.description}
                    </p>
                  </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
