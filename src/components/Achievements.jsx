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


      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <span className="text-[11px] font-mono tracking-[0.3em] font-bold text-orange uppercase block mb-3">
            Chapter 04 // The Milestones
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-graphite mb-4">
            Key Achievements
          </h2>
          <div className="w-20 h-2 bg-graphite mx-auto"></div>
        </div>

        {/* Story timeline circuit */}
        <div className="relative ml-4 md:ml-0">
          
          {/* Glowing central timeline wire */}
          <div className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-[4px] bg-graphite -translate-x-1/2 z-0" />

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
                    <div className={`w-6 h-6 bg-orange border-[4px] transition-all duration-500 ${
                      isHovered 
                        ? 'border-graphite scale-125' 
                        : 'border-graphite group-hover:scale-110'
                    }`} />
                  </div>

                  {/* Card Container */}
                  <div className={`pl-10 md:pl-0 md:w-[45%] ${
                    isEven ? 'md:text-left' : 'md:text-right'
                  }`}>
                    <div 
                      className={`folder-card mt-4 p-6 sm:p-8 overflow-visible relative transition-all duration-300 shadow-[8px_8px_0px_#191919] ${
                        isHovered 
                          ? 'bg-white -translate-y-2' 
                          : ''
                      }`}
                    >
                      <div className="folder-tab text-[10px]">A_{index + 1}</div>

                      {/* Header Title with Trophy icon */}
                      <div className={`flex items-center space-x-2 text-graphite mb-3 ${
                        !isEven && 'md:justify-end md:space-x-reverse'
                      }`}>
                        <Trophy size={20} className={isHovered ? 'animate-bounce text-orange' : 'text-graphite'} />
                        <h3 className="text-lg sm:text-xl font-bold font-heading text-graphite group-hover:text-orange transition-colors duration-300">
                          {achievement.title}
                        </h3>
                      </div>

                      {/* Calendar date tag */}
                      <div className={`flex items-center text-xs font-mono font-bold text-graphite mb-4 ${
                        !isEven && 'md:justify-end md:space-x-reverse'
                      }`}>
                        <Calendar size={13} className="mr-1.5" />
                        <span>{achievement.date}</span>
                      </div>

                      {/* Description */}
                      <p className="text-graphite font-medium text-sm sm:text-base leading-relaxed">
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
