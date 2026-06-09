import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, Terminal, Sparkles } from 'lucide-react';
import profilePic from '../assets/pic.jpg';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blurValue = Math.min(scrollY / 15, 20); // Increase blur as you scroll down, max 20px

  return (
    <section
      id="home"
      className="min-h-screen max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between pt-32 pb-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden"
    >

      {/* Edge-to-Edge Mobile Image with Bottom Fade (Mobile Only) */}
      <div
        className="absolute top-[80px] left-0 w-full h-[45vh] lg:hidden z-0 pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
        }}
      >
        <img
          src={profilePic}
          alt={personalInfo.name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Circular Frame Image on the Left (Desktop Only) */}
      <div
        className="hidden lg:block relative w-[350px] h-[350px] xl:w-[450px] xl:h-[450px] rounded-full overflow-hidden border-4 border-graphite shadow-[8px_8px_0px_#191919] z-0 flex-shrink-0 lg:mr-12"
      >
        <img
          src={profilePic}
          alt={personalInfo.name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Content on the Right (No Box, No Animation) */}
      <div className="max-w-2xl xl:max-w-3xl w-full relative z-10 mt-[45vh] lg:mt-0">
        <div className="flex flex-col justify-center text-left">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-extrabold text-graphite tracking-tight mb-6">
            <span className="block text-graphite text-sm sm:text-base md:text-lg font-mono tracking-[0.2em] uppercase mb-3">
              Initializing Experience
            </span>
            Hi, I'm <span className="block lg:inline-block text-graphite font-black mt-2 lg:mt-0">
              {personalInfo.name.replace('Muthukumar K', 'Muthukumar\u00A0K')}
            </span>
          </h1>

          {/* Role Text */}
          <div className="flex flex-wrap items-center justify-start gap-2 text-graphite text-sm sm:text-base md:text-lg font-bold mb-6 font-mono bg-biscuit border-2 border-graphite w-auto max-w-full px-4 py-2 shadow-[4px_4px_0px_#191919]">
            <Terminal size={18} className="text-orange flex-shrink-0" />
            <span className="break-words">{personalInfo.role}</span>
          </div>

          {/* Description */}
          <p className="text-graphite text-sm sm:text-base mb-10 leading-relaxed max-w-xl font-medium">
            {personalInfo.description}
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
            <a
              href="#about"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-white bg-graphite border-2 border-graphite hover:bg-orange hover:text-graphite shadow-[4px_4px_0px_#191919] hover:shadow-[6px_6px_0px_#191919] hover:-translate-y-1 transition-all duration-300"
            >
              Begin Journey
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#projects"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-graphite bg-white border-2 border-graphite hover:bg-biscuit shadow-[4px_4px_0px_#191919] hover:shadow-[6px_6px_0px_#191919] hover:-translate-y-1 transition-all duration-300"
            >
              <Sparkles className="mr-2 w-4 h-4 text-orange" />
              View Creations
            </a>
          </div>
        </div>
      </div>

      {/* Story Prompt Indicator at Bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 pointer-events-none select-none z-10">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-graphite font-bold">
          Scroll to Advance
        </span>
        <div className="w-[2px] h-10 bg-graphite relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-orange animate-[bounce_2s_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
