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
      className="min-h-screen flex items-center justify-end pt-32 pb-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden"
    >
      {/* Decorative Interactive Blobs specific to Hero */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[15%] w-72 h-72 rounded-full bg-blue-500/5 blur-[80px]" />
        <div className="absolute bottom-[20%] right-[15%] w-80 h-80 rounded-full bg-indigo-500/5 blur-[90px]" />
      </div>

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

      {/* Fixed Full-height Image on the Left with Fade Effect and Scroll Blur (Desktop Only) */}
      <div
        className="hidden lg:block fixed top-0 -left-[10%] lg:-left-[15%] w-[110%] lg:w-[60%] h-full z-[-1] pointer-events-none"
        style={{ filter: `blur(${blurValue}px)`, transition: 'filter 0.1s ease-out' }}
      >
        <img
          src={profilePic}
          alt={personalInfo.name}
          className="w-full h-full object-cover border-none"
          style={{
            maskImage: 'linear-gradient(to right, black 50%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 50%, transparent 100%)'
          }}
        />
        {/* Dark Purple Gradient Overlay that fades in with the blur */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-purple-950/60 to-transparent mix-blend-overlay"
          style={{
            opacity: blurValue / 20,
            transition: 'opacity 0.1s ease-out',
            maskImage: 'linear-gradient(to right, black 50%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 50%, transparent 100%)'
          }}
        />
      </div>

      {/* Content on the Right (No Box, No Animation) */}
      <div className="max-w-3xl w-full relative z-10 lg:mr-12 mt-[45vh] lg:mt-0">
        <div className="flex flex-col justify-center text-left">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            <span className="block text-slate-400 text-sm sm:text-base md:text-lg font-mono tracking-[0.2em] uppercase mb-3">
              Initializing Experience
            </span>
            Hi, I'm <span className="block lg:inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-black lg:whitespace-nowrap mt-2 lg:mt-0">
              {personalInfo.name}
            </span>
          </h1>

          {/* Role Text */}
          <div className="flex items-center justify-start space-x-2 text-indigo-300 text-sm sm:text-base md:text-lg font-medium mb-6 font-mono">
            <Terminal size={18} className="text-indigo-400 flex-shrink-0" />
            <span>{personalInfo.role}</span>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base mb-10 leading-relaxed max-w-xl">
            {personalInfo.description}
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
            <a
              href="#about"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:brightness-110 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Begin Journey
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#projects"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white glass-pill rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <Sparkles className="mr-2 w-4 h-4 text-indigo-400 group-hover:animate-pulse" />
              View Creations
            </a>
          </div>
        </div>
      </div>

      {/* Story Prompt Indicator at Bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 pointer-events-none select-none z-10">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-slate-500 animate-pulse">
          Scroll to Advance
        </span>
        <div className="w-[1.5px] h-10 bg-gradient-to-b from-slate-600 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-cyan-400 animate-[bounce_2s_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
