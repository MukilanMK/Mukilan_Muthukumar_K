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
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 p-4 md:p-6 ${isScrolled ? 'translate-y-0' : 'translate-y-0 md:translate-y-2'
        }`}
    >
      <nav
        className={`mx-auto max-w-7xl transition-all duration-500 relative border-2 border-graphite ${isScrolled
            ? 'bg-white shadow-[4px_4px_0px_#191919] py-3 px-6'
            : 'bg-white shadow-[8px_8px_0px_#191919] py-4 px-6 md:px-10'
          }`}
      >
        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-biscuit overflow-hidden border-t-2 border-graphite">
          <div
            className="h-full bg-orange transition-all duration-75"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="flex justify-between items-center pb-1">
          {/* Logo */}
          <a href="#home" className="group flex items-center space-x-2 text-lg sm:text-xl font-heading font-bold tracking-tighter text-graphite whitespace-nowrap">
            <span className="text-graphite group-hover:text-orange transition-all duration-300">
              Mukilan Muthukumar K
            </span>
            <span className="text-orange animate-pulse">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold px-4 py-2 border-2 border-transparent hover:border-graphite hover:bg-biscuit transition-all duration-300 text-graphite"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-graphite hover:bg-biscuit border-2 border-transparent hover:border-graphite transition-all"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 mt-3 bg-white border-2 border-graphite overflow-hidden transition-all duration-300 origin-top shadow-[4px_4px_0px_#191919] ${mobileMenuOpen
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
                className="block px-4 py-2.5 text-base font-bold text-graphite hover:bg-biscuit border-2 border-transparent hover:border-graphite transition-colors"
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
