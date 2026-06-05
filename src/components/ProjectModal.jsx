import React from 'react';
import { X, User2, BookOpen, Layers } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Immersive backdrop blur overlay */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      {/* Glassmorphic Modal Box */}
      <div className="relative glass-modal rounded-[2rem] w-full max-w-3xl max-h-[85vh] overflow-y-auto transform transition-all duration-300 animate-[fadeIn_0.3s_ease-out] border border-white/10 shadow-2xl">
        {/* Glow accent lines */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        
        <div className="p-6 sm:p-10">
          {/* Close Button floating dock style */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 hover:rotate-90"
            aria-label="Close details"
          >
            <X size={20} />
          </button>
          
          {/* Header Metadata */}
          <div className="mb-8 pr-12">
            <div className="flex items-center space-x-3 mb-4">
              <span className="px-3.5 py-1 text-[10px] font-mono font-bold tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-800/30 rounded-full uppercase">
                {project.domain}
              </span>
            </div>
            
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {project.title}
            </h3>
            
            <div className="inline-flex items-center text-xs font-mono text-slate-300 bg-white/5 border border-white/5 rounded-lg p-2.5">
              <User2 size={14} className="text-indigo-400 mr-2" />
              <span className="text-slate-400 mr-2">Target Audience:</span>
              <span className="font-semibold text-white">{project.targetUser}</span>
            </div>
          </div>
          
          {/* Divider */}
          <div className="w-full h-[1px] bg-white/10 mb-8" />
          
          {/* Section: Overview */}
          <div className="mb-8">
            <h4 className="text-sm font-mono tracking-widest text-indigo-400 uppercase mb-3 flex items-center">
              <BookOpen size={16} className="mr-2" />
              System Overview
            </h4>
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              {project.description}
            </p>
          </div>
          
          {/* Section: Core Technologies */}
          <div>
            <h4 className="text-sm font-mono tracking-widest text-indigo-400 uppercase mb-4 flex items-center">
              <Layers size={16} className="mr-2" />
              Core Architecture & Tech
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 text-sm font-semibold text-slate-200 glass-pill border border-white/5 rounded-xl hover:scale-105 transition-transform"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
