import React from 'react';
import { skills } from '../data/portfolioData';
import * as Icons from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const SkillCategory = ({ title, items, icon: CategoryIcon }) => {
  return (
    <div className="mb-20 last:mb-0">
      {/* Category Header */}
      <h3 className="text-xl sm:text-2xl font-bold font-heading text-graphite mb-8 flex items-center space-x-3">
        <div className="w-10 h-10 bg-white border-2 border-graphite flex items-center justify-center text-graphite shadow-[2px_2px_0px_#191919]">
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
                className="group flex items-start p-5 bg-white border-2 border-graphite cursor-default hover:-translate-y-1 transition-all duration-300 h-full shadow-[4px_4px_0px_#191919] hover:shadow-[6px_6px_0px_#191919] hover:bg-biscuit"
              >
                {/* Icon Container */}
                <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center bg-white border-2 border-graphite text-graphite transition-all duration-300 shadow-[2px_2px_0px_#191919]">
                  <Icon size={20} className="transition-transform group-hover:scale-110 group-hover:text-orange" />
                </div>
                
                {/* Text: Name and Description */}
                <div className="ml-4">
                  <h4 className="font-bold font-heading text-graphite transition-colors text-sm sm:text-base leading-snug">
                    {skill.name}
                  </h4>
                  <p className="text-xs font-medium text-graphite mt-1.5 leading-relaxed transition-colors line-clamp-2">
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <span className="text-[11px] font-mono tracking-[0.3em] font-bold text-orange uppercase block mb-3">
            Chapter 02 // The Arsenal
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-graphite mb-4">
            Technical Expertise
          </h2>
          <div className="w-20 h-2 bg-graphite mx-auto"></div>
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
