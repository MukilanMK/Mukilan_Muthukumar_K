import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 p-4 md:p-6 ${isScrolled ? 'translate-y-0' : 'translate-y-0 md:translate-y-2'
        }`}
    >
      <nav
        className={`mx-auto max-w-7xl rounded-3xl transition-all duration-500 relative border ${isScrolled
            ? 'bg-slate-950/95 border-white/10 shadow-2xl backdrop-blur-3xl py-3 px-6'
            : 'bg-slate-950/90 border-white/10 shadow-lg backdrop-blur-3xl py-4 px-6 md:px-10'
          }`}
      >
        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 transition-all duration-75 shadow-[0_0_8px_#3b82f6]"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="group flex items-center space-x-2 text-lg sm:text-xl font-bold tracking-tighter text-slate-100 whitespace-nowrap">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 group-hover:brightness-125 transition-all duration-300">
              Mukilan Muthukumar K
            </span>
            <span className="text-cyan-400 animate-pulse">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 mt-3 bg-slate-950/95 border border-white/15 backdrop-blur-3xl rounded-2xl overflow-hidden transition-all duration-300 origin-top shadow-2xl ${mobileMenuOpen
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
            }`}
        >
          <div className="px-3 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
