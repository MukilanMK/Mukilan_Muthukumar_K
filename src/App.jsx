import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'achievements'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const chapters = [
    { id: 'home', label: 'Portal', num: '00' },
    { id: 'about', label: 'The Origin', num: '01' },
    { id: 'skills', label: 'The Arsenal', num: '02' },
    { id: 'projects', label: 'The Creations', num: '03' },
    { id: 'achievements', label: 'The Milestones', num: '04' }
  ];

  return (
    <div className="relative min-h-screen text-slate-100 bg-slate-950 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
      
      {/* Liquid Glass Background Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Blob 1 - Indigo */}
        <div className="absolute top-[-10%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-indigo-600/15 blur-[100px] animate-blob-morph" />
        
        {/* Blob 2 - Purple */}
        <div className="absolute top-[30%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-purple-600/15 blur-[120px] animate-blob-morph-delayed" />
        
        {/* Blob 3 - Cyan */}
        <div className="absolute bottom-[-10%] left-[10%] w-[32rem] h-[32rem] rounded-full bg-cyan-500/10 blur-[90px] animate-blob-morph" />
        
        {/* Grid pattern overlay for tech aesthetic */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Floating Storytelling Navigation */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center space-y-6">
       
        <div className="p-3.5 rounded-full bg-slate-900/50 backdrop-blur-xl border border-white/10 flex flex-col items-center space-y-5 shadow-2xl">
          {chapters.map((chapter) => {
            const isActive = activeSection === chapter.id;
            return (
              <a
                key={chapter.id}
                href={`#${chapter.id}`}
                className="group relative flex items-center justify-center w-8 h-8"
                aria-label={`Go to ${chapter.label}`}
              >
                {/* Dot */}
                <div 
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                    isActive 
                      ? 'bg-cyan-400 scale-125 shadow-[0_0_12px_#22d3ee]' 
                      : 'bg-slate-600 group-hover:bg-slate-400 group-hover:scale-110'
                  }`}
                />
                
                {/* Tooltip */}
                <div className="absolute right-12 py-1.5 px-3 rounded-lg bg-slate-900/90 border border-white/10 backdrop-blur-md opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-xl">
                  <span className="text-[10px] font-bold text-cyan-400 mr-2">{chapter.num}</span>
                  <span className="text-xs font-semibold text-slate-200">{chapter.label}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
      </main>
      <Footer />
    </div>
  )
}

export default App
