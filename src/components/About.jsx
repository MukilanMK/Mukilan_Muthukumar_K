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
          <span className="text-[11px] font-mono tracking-[0.3em] text-orange font-bold uppercase block mb-3">
            Chapter 01 // The Origin
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-graphite mb-4">
            About Me
          </h2>
          <div className="w-20 h-2 bg-graphite mx-auto"></div>
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Story Bio */}
          <ScrollReveal direction="left" className="lg:col-span-7 h-full mt-8 lg:mt-0">
            <div className="folder-card p-8 sm:p-10 h-full mt-8 lg:mt-0 shadow-[8px_8px_0px_#191919]">
              <div className="folder-tab">BIO.LOG</div>
              
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white border-2 border-graphite flex items-center justify-center text-graphite shadow-[2px_2px_0px_#191919]">
                <User size={20} />
              </div>
              <h3 className="text-xl font-bold text-graphite font-heading tracking-tight">
                system_bio.log
              </h3>
            </div>

            <p className="text-graphite font-medium text-base sm:text-lg leading-relaxed space-y-6">
              {personalInfo.about}
            </p>

            <div className="mt-8 pt-8 border-t-2 border-graphite grid grid-cols-2 gap-4">
              <div className="p-4 bg-white border-2 border-graphite shadow-[4px_4px_0px_#191919]">
                <div className="text-graphite font-bold text-xs font-mono mb-1">Focus</div>
                <div className="text-graphite font-bold font-heading text-sm">AI & Web Integration</div>
              </div>
              <div className="p-4 bg-white border-2 border-graphite shadow-[4px_4px_0px_#191919]">
                <div className="text-graphite font-bold text-xs font-mono mb-1">Affiliation</div>
                <div className="text-graphite font-bold font-heading text-sm">Sri Eshwar College of Engineering</div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t-2 border-graphite">
              <div className="text-graphite font-bold text-xs font-mono mb-3">Contact Me</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <a
                  href="https://github.com/MukilanMK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 p-3 glass-pill text-graphite hover:bg-orange hover:-translate-y-1 hover:shadow-[4px_4px_0px_#191919] transition-all text-xs font-bold font-mono"
                >
                  <svg className="w-4 h-4 text-graphite" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mukilan-muthukumar-6a9a23314/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 p-3 glass-pill text-graphite hover:bg-blue-400 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#191919] transition-all text-xs font-bold font-mono"
                >
                  <svg className="w-4 h-4 text-graphite" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:mukil6854@gmail.com"
                  className="flex items-center justify-center space-x-2 p-3 glass-pill text-graphite hover:bg-red-400 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#191919] transition-all text-xs font-bold font-mono"
                >
                  <Mail size={16} className="text-graphite" />
                  <span>Email</span>
                </a>
                <a
                  href="https://www.instagram.com/itzzzmemukiluhhh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 p-3 glass-pill text-graphite hover:bg-pink-400 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#191919] transition-all text-xs font-bold font-mono"
                >
                  <svg className="w-4 h-4 text-graphite" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
          <div className="lg:col-span-5 flex flex-col space-y-8 mt-12 lg:mt-0">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal direction="right" key={idx}>
                  <div
                    className="group folder-card p-6 flex items-start space-x-5 cursor-default mt-4"
                  >
                    <div className="folder-tab">
                      CORE_{idx + 1}
                    </div>
                    {/* Glowing background behind icon */}
                  <div className={`flex-shrink-0 w-12 h-12 bg-white border-2 border-graphite flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-[2px_2px_0px_#191919]`}>
                    <Icon size={22} className={`text-graphite transition-transform group-hover:rotate-6`} />
                  </div>

                  {/* Text details */}
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-orange uppercase block mb-1">
                      {pillar.subtitle}
                    </span>
                    <h4 className="text-lg font-bold font-heading text-graphite mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-sm font-medium text-graphite leading-relaxed">
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
