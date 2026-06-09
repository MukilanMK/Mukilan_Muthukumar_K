import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
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
    { id: 'achievements', label: 'The Milestones', num: '04' },
    { id: 'contact', label: 'The Connection', num: '05' }
  ];

  return (
    <div className="relative min-h-screen text-graphite bg-biscuit font-sans selection:bg-orange/30 selection:text-graphite overflow-x-hidden">
      
      {/* Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-gradient-to-br from-biscuit via-[#EFEADD] to-[#FDFCFB]">
      </div>

      {/* Floating Storytelling Navigation */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center space-y-6">
       
        <div className="p-3.5 bg-white border-2 border-graphite flex flex-col items-center space-y-5 shadow-[4px_4px_0px_#191919]">
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
                  className={`w-2.5 h-2.5 rounded-none transition-all duration-500 ${
                    isActive 
                      ? 'bg-orange scale-125 border border-graphite' 
                      : 'bg-biscuit border border-graphite group-hover:bg-orange group-hover:scale-110'
                  }`}
                />
                
                {/* Tooltip */}
                <div className="absolute right-12 py-1.5 px-3 bg-white border-2 border-graphite opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-[4px_4px_0px_#191919]">
                  <span className="text-[10px] font-bold text-orange mr-2">{chapter.num}</span>
                  <span className="text-xs font-semibold text-graphite font-heading">{chapter.label}</span>
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
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
