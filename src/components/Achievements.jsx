import React, { useState } from 'react';
import { achievements } from '../data/portfolioData';
import { Trophy, Calendar, ShieldCheck, Milestone } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Achievements = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section 
      id="achievements" 
      className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Decorative background gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 rounded-full bg-purple-500/5 blur-[120px] animate-float-slow" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <span className="text-[11px] font-mono tracking-[0.3em] text-indigo-400 uppercase block mb-3">
            Chapter 04 // The Milestones
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            Key Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Story timeline circuit */}
        <div className="relative ml-4 md:ml-0">
          
          {/* Glowing central timeline wire */}
          <div className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.3)]" />

          {achievements.map((achievement, index) => {
            const isEven = index % 2 === 0;
            const isHovered = hoveredIdx === index;
            
            return (
              <ScrollReveal 
                direction={isEven ? 'left' : 'right'} 
                key={achievement.id}
                className="mb-12 md:mb-16 last:mb-0"
              >
                <div 
                  className="relative group"
                  onMouseEnter={() => setHoveredIdx(index)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                <div className={`md:flex items-center justify-between w-full ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}>
                  
                  {/* Glowing Node Point */}
                  <div className="absolute left-[11px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <div className={`w-6 h-6 rounded-full bg-slate-950 border-[3.5px] transition-all duration-500 ${
                      isHovered 
                        ? 'border-cyan-400 scale-125 shadow-[0_0_15px_#22d3ee]' 
                        : 'border-indigo-500 group-hover:border-indigo-400'
                    }`} />
                    {/* Glowing pulse ring */}
                    {isHovered && (
                      <div className="absolute -inset-2 rounded-full border border-cyan-400/30 animate-ping pointer-events-none" />
                    )}
                  </div>

                  {/* Card Container */}
                  <div className={`pl-10 md:pl-0 md:w-[45%] ${
                    isEven ? 'md:text-left' : 'md:text-right'
                  }`}>
                    <div 
                      className={`glass-card p-6 sm:p-8 rounded-[2rem] border relative overflow-hidden transition-all duration-300 ${
                        isHovered 
                          ? 'border-indigo-500/40 bg-slate-900/40 scale-[1.02] shadow-[0_12px_30px_rgba(99,102,241,0.2)]' 
                          : 'border-white/5'
                      }`}
                    >
                      {/* Interactive glow overlay */}
                      <div className={`absolute top-0 bottom-0 w-1/2 pointer-events-none -z-10 bg-gradient-to-r from-indigo-600/5 to-transparent transition-opacity duration-500 ${
                        isEven ? 'left-0' : 'right-0'
                      } ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

                      {/* Header Title with Trophy icon */}
                      <div className={`flex items-center space-x-2 text-indigo-400 mb-3 ${
                        !isEven && 'md:justify-end md:space-x-reverse'
                      }`}>
                        <Trophy size={20} className={isHovered ? 'animate-bounce text-yellow-400' : 'text-indigo-400'} />
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {achievement.title}
                        </h3>
                      </div>

                      {/* Calendar date tag */}
                      <div className={`flex items-center text-xs font-mono text-slate-400 mb-4 ${
                        !isEven && 'md:justify-end md:space-x-reverse'
                      }`}>
                        <Calendar size={13} className="mr-1.5" />
                        <span>{achievement.date}</span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {achievement.description}
                      </p>

                    </div>
                  </div>

                  {/* Empty spacer for grid alignment */}
                  <div className="hidden md:block w-[45%]" />

                </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
