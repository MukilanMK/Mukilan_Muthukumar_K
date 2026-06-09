import React from 'react';
import { X, User2, BookOpen, Layers } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Immersive backdrop blur overlay */}
      <div 
        className="absolute inset-0 bg-white/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      {/* Glassmorphic Modal Box */}
      <div className="relative bg-white border-2 border-graphite shadow-[8px_8px_0px_#191919] w-full max-w-3xl max-h-[85vh] overflow-y-auto transform transition-all duration-300 animate-[fadeIn_0.3s_ease-out]">
        {/* Glow accent lines */}
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-graphite" />
        
        <div className="p-6 sm:p-10">
          {/* Close Button floating dock style */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-graphite hover:text-orange bg-white hover:bg-biscuit border-2 border-graphite shadow-[2px_2px_0px_#191919] transition-all duration-300 hover:-translate-y-1"
            aria-label="Close details"
          >
            <X size={20} />
          </button>
          
          {/* Header Metadata */}
          <div className="mb-8 pr-12">
            <div className="flex items-center space-x-3 mb-4">
              <span className="px-3.5 py-1 text-[10px] font-mono font-bold tracking-wider text-graphite bg-white border-2 border-graphite uppercase">
                {project.domain}
              </span>
            </div>
            
            <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-graphite tracking-tight leading-tight mb-4">
              {project.title}
            </h3>
            
            <div className="inline-flex items-center text-xs font-mono font-bold text-graphite bg-biscuit border-2 border-graphite p-2.5">
              <User2 size={14} className="text-orange mr-2" />
              <span className="text-graphite mr-2">Target Audience:</span>
              <span className="font-black text-graphite">{project.targetUser}</span>
            </div>
          </div>
          
          {/* Divider */}
          <div className="w-full h-[2px] bg-graphite mb-8" />
          
          {/* Section: Overview */}
          <div className="mb-8">
            <h4 className="text-sm font-mono tracking-widest font-bold text-orange uppercase mb-3 flex items-center">
              <BookOpen size={16} className="mr-2" />
              System Overview
            </h4>
            <p className="text-graphite font-medium leading-relaxed text-base sm:text-lg">
              {project.description}
            </p>
          </div>
          
          {/* Section: Core Technologies */}
          <div>
            <h4 className="text-sm font-mono tracking-widest font-bold text-orange uppercase mb-4 flex items-center">
              <Layers size={16} className="mr-2" />
              Core Architecture & Tech
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 text-sm font-bold text-graphite bg-white border-2 border-graphite shadow-[2px_2px_0px_#191919] hover:-translate-y-1 transition-transform"
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
