import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import ScrollReveal from './ScrollReveal';
import { ArrowRight, Filter, Search, Calendar } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'Artificial Intelligence' },
    { id: 'web', label: 'Full-Stack Web' },
    { id: 'systems', label: 'IoT & Real-time' }
  ];

  // Filter projects based on description, domain, or technology
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    const tech = project.technologies.join(' ').toLowerCase();
    const domain = project.domain.toLowerCase();
    const desc = project.description.toLowerCase();

    if (activeFilter === 'ai') {
      return tech.includes('yolo') || tech.includes('unet') || tech.includes('resnet') || tech.includes('llm') || tech.includes('vector') || tech.includes('deep learning') || domain.includes('ai') || desc.includes('vision') || desc.includes('gemini');
    }
    if (activeFilter === 'web') {
      return tech.includes('mern') || tech.includes('mongodb') || tech.includes('react') || tech.includes('node') || tech.includes('express') || tech.includes('fastapi') || tech.includes('webrtc');
    }
    if (activeFilter === 'systems') {
      return tech.includes('iot') || tech.includes('sensor') || tech.includes('location') || tech.includes('geofencing') || domain.includes('safety') || desc.includes('cctv') || desc.includes('emergency');
    }
    return true;
  });

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  // Color schemes mapped to project themes
  const getProjectTheme = (id) => {
    const themes = {
      1: { gradient: 'from-blue-600/15 via-indigo-600/10 to-transparent', border: 'border-blue-500/25', glow: 'shadow-[0_0_40px_rgba(59,130,246,0.15)]', badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
      2: { gradient: 'from-indigo-600/15 via-purple-600/10 to-transparent', border: 'border-indigo-500/25', glow: 'shadow-[0_0_40px_rgba(99,102,241,0.15)]', badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' },
      3: { gradient: 'from-red-600/15 via-orange-600/10 to-transparent', border: 'border-red-500/25', glow: 'shadow-[0_0_40px_rgba(239,68,68,0.15)]', badge: 'bg-red-500/10 text-red-400 border-red-500/20' },
      4: { gradient: 'from-pink-600/15 via-rose-600/10 to-transparent', border: 'border-rose-500/25', glow: 'shadow-[0_0_40px_rgba(244,63,94,0.15)]', badge: 'bg-rose-500/10 text-rose-400 border-rose-500/20' },
      5: { gradient: 'from-amber-600/15 via-yellow-600/10 to-transparent', border: 'border-amber-500/25', glow: 'shadow-[0_0_40px_rgba(245,158,11,0.15)]', badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
      6: { gradient: 'from-violet-600/15 via-fuchsia-600/10 to-transparent', border: 'border-violet-500/25', glow: 'shadow-[0_0_40px_rgba(139,92,246,0.15)]', badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20' },
      7: { gradient: 'from-emerald-600/15 via-teal-600/10 to-transparent', border: 'border-emerald-500/25', glow: 'shadow-[0_0_40px_rgba(16,185,129,0.15)]', badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
      8: { gradient: 'from-cyan-600/15 via-blue-600/10 to-transparent', border: 'border-cyan-500/25', glow: 'shadow-[0_0_40px_rgba(6,182,212,0.15)]', badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
      9: { gradient: 'from-teal-600/15 via-emerald-600/10 to-transparent', border: 'border-teal-500/25', glow: 'shadow-[0_0_40px_rgba(20,184,166,0.15)]', badge: 'bg-teal-500/10 text-teal-400 border-teal-500/20' },
      10: { gradient: 'from-orange-600/15 via-red-600/10 to-transparent', border: 'border-orange-500/25', glow: 'shadow-[0_0_40px_rgba(249,115,22,0.15)]', badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
    };
    return themes[id] || { gradient: 'from-blue-600/15 via-indigo-600/10 to-transparent', border: 'border-white/10', glow: '', badge: 'bg-white/5 text-slate-300 border-white/10' };
  };


  return (
    <section
      id="projects"
      className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-mono tracking-[0.3em] text-indigo-400 uppercase block mb-3">
            Chapter 03 // The Creations
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            Featured Creations
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 max-w-2xl mx-auto">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-300 ${activeFilter === filter.id
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/25 scale-[1.02]'
                  : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-white hover:bg-white/5'
                }`}
            >
              <Filter size={12} />
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Timeline Project Feed Container */}
        {filteredProjects.length > 0 ? (
          <div className="relative ml-4 lg:ml-0 max-w-6xl mx-auto">
            {/* Glowing central timeline wire */}
            <div className="absolute left-[11px] lg:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.3)] z-0" />

            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              const theme = getProjectTheme(project.id);

              return (
                <ScrollReveal
                  key={project.id}
                  direction={isEven ? 'left' : 'right'}
                  className="mb-12 lg:mb-16 last:mb-0"
                >
                  <div className="relative group">
                    <div className={`lg:flex items-center justify-between w-full ${isEven ? 'lg:flex-row-reverse' : ''
                      }`}>

                      {/* Glowing Node Point */}
                      <div className="absolute left-[11px] lg:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                        <div className="w-6 h-6 rounded-full bg-slate-950 border-[3.5px] border-indigo-500 group-hover:border-cyan-400 group-hover:scale-125 group-hover:shadow-[0_0_15px_#22d3ee] transition-all duration-500" />
                        <div className="absolute -inset-2 rounded-full border border-cyan-400/30 opacity-0 group-hover:opacity-100 group-hover:animate-ping pointer-events-none transition-opacity" />
                      </div>

                      {/* Card Container */}
                      <div className={`pl-10 lg:pl-0 lg:w-[45%] ${isEven ? 'lg:text-left' : 'lg:text-right'
                        }`}>
                        <div
                          className={`flex flex-col glass-panel rounded-[2rem] border overflow-hidden shadow-2xl relative transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_12px_30px_rgba(99,102,241,0.2)] ${theme.border
                            } ${theme.glow}`}
                        >
                          {/* Inner Gradient Blend */}
                          <div className={`absolute inset-0 bg-gradient-to-br -z-10 pointer-events-none ${theme.gradient}`} />

                          {/* Details Block */}
                          <div className="w-full p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                              <div className={`flex items-center justify-between mb-4 ${!isEven && 'lg:flex-row-reverse'}`}>
                                <span className={`inline-block px-3 py-1 text-[10px] font-mono font-bold tracking-wider rounded-full border ${theme.badge}`}>
                                  {project.domain}
                                </span>
                                <span className="text-slate-500 font-mono text-[10px] font-bold">
                                  CREATION {index + 1} / {filteredProjects.length}
                                </span>
                              </div>

                              <h3 className={`text-xl sm:text-2xl font-extrabold text-white mb-2 tracking-tight leading-tight ${!isEven && 'lg:text-right'}`}>
                                {project.title}
                              </h3>

                              <div className={`flex items-center text-xs font-mono text-slate-400 mb-4 ${!isEven && 'lg:justify-end'}`}>
                                <Calendar size={13} className="mr-1.5" />
                                <span>{project.period}</span>
                              </div>

                              <div className={`flex items-center text-[10px] font-mono text-slate-400 mb-4 bg-white/5 p-1.5 px-2 rounded border border-white/5 w-fit ${!isEven && 'lg:ml-auto'}`}>
                                <span className="text-indigo-400 font-bold mr-1.5">User:</span>
                                {project.targetUser}
                              </div>
                            </div>

                            <div className="space-y-4 mt-auto">
                              <div>
                                <h4 className={`text-[10px] font-mono tracking-wider text-slate-500 uppercase mb-2 ${!isEven && 'lg:text-right'}`}>
                                  Tech Stack
                                </h4>
                                <div className={`flex flex-wrap gap-1.5 ${!isEven && 'lg:justify-end'}`}>
                                  {project.technologies.map((tech, idx) => (
                                    <span
                                      key={idx}
                                      className="px-2 py-0.5 rounded text-[10px] font-semibold glass-pill border border-white/5 text-slate-300"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div className={`pt-3 border-t border-white/10 flex ${!isEven && 'justify-end'}`}>
                                <button
                                  onClick={() => openModal(project)}
                                  className={`group/btn inline-flex items-center space-x-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors ${!isEven && 'flex-row-reverse space-x-reverse'}`}
                                >
                                  <span>Deep Dive Specifications</span>
                                  <ArrowRight size={14} className={`transition-transform ${isEven ? 'group-hover/btn:translate-x-1' : 'group-hover/btn:-translate-x-1'}`} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Empty spacer for grid alignment */}
                      <div className="hidden lg:block lg:w-[45%]" />

                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 glass-panel rounded-3xl border border-white/10 max-w-xl mx-auto">
            <Search size={40} className="mx-auto text-slate-500 mb-4 animate-bounce" />
            <h3 className="text-lg font-bold text-white mb-2">No projects found</h3>
            <p className="text-slate-400 text-sm">
              We couldn't find any creations matching this category.
            </p>
          </div>
        )}

      </div>

      {/* Details Dialog */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;
