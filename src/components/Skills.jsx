import React from 'react';
import { skills } from '../data/portfolioData';
import * as Icons from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const SkillCategory = ({ title, items, icon: CategoryIcon }) => {
  return (
    <div className="mb-20 last:mb-0">
      {/* Category Header */}
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
          <CategoryIcon size={20} />
        </div>
        <span>{title}</span>
      </h3>
      
      {/* Grid of skills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((skill, index) => {
          const Icon = Icons[skill.icon] || Icons.Code2;
          return (
            <ScrollReveal 
              key={index} 
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div 
                className="group flex items-start p-5 rounded-2xl glass-card border border-white/5 cursor-default hover:scale-[1.02] transition-all duration-300 h-full"
              >
                {/* Icon Container with dynamic glow */}
                <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-slate-800/80 border border-white/15 text-indigo-400 group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-blue-600 group-hover:text-white group-hover:border-indigo-400/30 transition-all duration-300">
                  <Icon size={20} className="transition-transform group-hover:scale-110" />
                </div>
                
                {/* Text: Name and Description */}
                <div className="ml-4">
                  <h4 className="font-bold text-slate-200 group-hover:text-white transition-colors text-sm sm:text-base leading-snug">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed group-hover:text-slate-300 transition-colors line-clamp-2">
                    {skill.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[30%] right-[20%] w-72 h-72 rounded-full bg-indigo-500/5 blur-[80px] animate-float-slow" />
        <div className="absolute bottom-[20%] left-[10%] w-80 h-80 rounded-full bg-cyan-500/5 blur-[90px] animate-float-fast" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <span className="text-[11px] font-mono tracking-[0.3em] text-indigo-400 uppercase block mb-3">
            Chapter 02 // The Arsenal
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            Technical Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Waterfall Categories */}
        <div className="max-w-6xl mx-auto space-y-16">
          <SkillCategory title="Artificial Intelligence & Data Science" items={skills.aiMl} icon={Icons.BrainCircuit} />
          <SkillCategory title="Web Development" items={skills.webDev} icon={Icons.Code2} />
          <SkillCategory title="Languages & Tools" items={skills.tools} icon={Icons.Wrench} />
        </div>

      </div>
    </section>
  );
};

export default Skills;
