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
    return { gradient: 'hidden', border: 'border-2 border-graphite', glow: 'shadow-[8px_8px_0px_#191919]', badge: 'bg-white text-graphite font-bold border-2 border-graphite' };
  };


  return (
    <section
      id="projects"
      className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-mono tracking-[0.3em] text-orange font-bold uppercase block mb-3">
            Chapter 03 // The Creations
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-graphite mb-4">
            Featured Creations
          </h2>
          <div className="w-20 h-2 bg-graphite mx-auto"></div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 max-w-2xl mx-auto">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-1.5 px-4 py-2 text-xs sm:text-sm font-bold border-2 transition-all duration-300 ${activeFilter === filter.id
                  ? 'bg-graphite border-graphite text-white shadow-[4px_4px_0px_#191919] -translate-y-1'
                  : 'bg-white border-graphite text-graphite hover:bg-biscuit shadow-[2px_2px_0px_#191919]'
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
            <div className="absolute left-[11px] lg:left-1/2 top-0 bottom-0 w-[4px] bg-graphite -translate-x-1/2 z-0" />

            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              const theme = getProjectTheme(project.id);

              return (
                <ScrollReveal
                  key={project.id}
                  direction={isEven ? 'left' : 'right'}
                  className="mb-16 lg:mb-20 last:mb-0 mt-8"
                >
                  <div className="relative group">
                    <div className={`lg:flex items-center justify-between w-full ${isEven ? 'lg:flex-row-reverse' : ''
                      }`}>

                      {/* Glowing Node Point */}
                      <div className="absolute left-[11px] lg:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                        <div className="w-6 h-6 bg-orange border-[4px] border-graphite transition-all duration-500" />
                      </div>

                      {/* Card Container */}
                      <div className={`pl-10 lg:pl-0 lg:w-[45%] ${isEven ? 'lg:text-left' : 'lg:text-right'
                        }`}>
                        <div
                          className={`flex flex-col folder-card overflow-visible relative transition-all duration-500 mt-4 group-hover:-translate-y-2 ${theme.border
                            } ${theme.glow}`}
                        >
                          <div className="folder-tab">P_{index + 1}</div>
                          {/* Inner Gradient Blend */}
                          <div className={`absolute inset-0 bg-gradient-to-br -z-10 pointer-events-none ${theme.gradient}`} />

                          {/* Details Block */}
                          <div className="w-full p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                              <div className={`flex items-center justify-between mb-4 ${!isEven && 'lg:flex-row-reverse'}`}>
                                <span className={`inline-block px-3 py-1 text-[10px] font-mono font-bold tracking-wider ${theme.badge}`}>
                                  {project.domain}
                                </span>
                                <span className="text-graphite font-mono text-[10px] font-bold border-2 border-graphite px-2 py-1 bg-white">
                                  CREATION {index + 1} / {filteredProjects.length}
                                </span>
                              </div>

                              <h3 className={`text-xl sm:text-2xl font-black font-heading text-graphite mb-2 tracking-tight leading-tight ${!isEven && 'lg:text-right'}`}>
                                {project.title}
                              </h3>

                              <div className={`flex items-center text-xs font-mono font-bold text-graphite mb-4 ${!isEven && 'lg:justify-end'}`}>
                                <Calendar size={13} className="mr-1.5" />
                                <span>{project.period}</span>
                              </div>

                              <div className={`flex items-center text-[10px] font-mono font-bold text-graphite mb-4 bg-white p-1.5 px-2 border-2 border-graphite w-fit ${!isEven && 'lg:ml-auto'}`}>
                                <span className="text-orange font-black mr-1.5">User:</span>
                                {project.targetUser}
                              </div>
                            </div>

                            <div className="space-y-4 mt-auto">
                              <div>
                                <h4 className={`text-[10px] font-mono tracking-wider font-bold text-graphite uppercase mb-2 ${!isEven && 'lg:text-right'}`}>
                                  Tech Stack
                                </h4>
                                <div className={`flex flex-wrap gap-1.5 ${!isEven && 'lg:justify-end'}`}>
                                  {project.technologies.map((tech, idx) => (
                                    <span
                                      key={idx}
                                      className="px-2 py-0.5 text-[10px] font-bold border-2 border-graphite bg-white text-graphite shadow-[2px_2px_0px_#191919]"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div className={`pt-3 border-t-2 border-graphite flex ${!isEven && 'justify-end'}`}>
                                <button
                                  onClick={() => openModal(project)}
                                  className={`group/btn inline-flex items-center space-x-1.5 text-xs font-bold text-orange hover:text-graphite transition-colors ${!isEven && 'flex-row-reverse space-x-reverse'}`}
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
          <div className="text-center py-16 folder-card p-10 border-2 border-graphite max-w-xl mx-auto shadow-[8px_8px_0px_#191919] mt-10">
            <div className="folder-tab">NO MATCH</div>
            <Search size={40} className="mx-auto text-graphite mb-4 animate-bounce" />
            <h3 className="text-lg font-bold font-heading text-graphite mb-2">No projects found</h3>
            <p className="text-graphite font-medium text-sm">
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
