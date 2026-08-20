import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      id="navbar"
      className={`${
        isScrolled
          ? 'fixed py-4 bg-white/80 backdrop-blur-md shadow-md border-b border-slate-200/50'
          : 'absolute py-6 bg-transparent'
      } top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 lg:px-20 z-50 transition-all duration-300`}
    >
      {/* Logo */}
      <a href="#home" className="flex items-center gap-3 group focus:outline-none">
        <img
          src="/logo.png"
          alt="Aman Singh Logo"
          className="h-10 w-auto rounded-lg shadow-sm object-contain bg-white p-1 border border-slate-200 group-hover:scale-105 transition-transform duration-300"
        />
        <span
          className={`font-extrabold tracking-wide text-lg select-none ${
            isScrolled ? 'text-slate-950' : 'text-slate-950 dark:text-white'
          }`}
        >
          AMAN SINGH
        </span>
      </a>

      {/* Desktop Navigation Links */}
      <nav className="hidden lg:flex items-center gap-10">
        <ul className="flex items-center gap-8 list-none m-0 p-0">
          <li>
            <a
              href="#about"
              className={`text-sm font-semibold tracking-wide hover:text-indigo-600 transition-colors duration-300 ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`text-sm font-semibold tracking-wide hover:text-indigo-600 transition-colors duration-300 ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`text-sm font-semibold tracking-wide hover:text-indigo-600 transition-colors duration-300 ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#achievements"
              className={`text-sm font-semibold tracking-wide hover:text-indigo-600 transition-colors duration-300 ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              Achievements
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          className={`px-6 py-3 rounded-full text-xs font-extrabold tracking-wider uppercase shadow-md transition-all duration-300 ${
            isScrolled
              ? 'bg-indigo-600 text-white hover:bg-indigo-700'
              : 'bg-white text-slate-950 hover:bg-indigo-600 hover:text-white'
          }`}
        >
          Contact me
        </a>
      </nav>

      {/* Mobile Navigation Menu Toggle Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden flex flex-col justify-between w-6 h-5 focus:outline-none z-50"
        aria-label="Toggle Menu"
      >
        <span
          className={`w-full h-0.5 rounded transition-transform duration-300 origin-left ${
            isMobileMenuOpen ? 'rotate-45 translate-x-[2px] translate-y-[1.5px]' : ''
          } ${isScrolled ? 'bg-slate-950' : 'bg-slate-950 dark:bg-white'}`}
        ></span>
        <span
          className={`w-full h-0.5 rounded transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-0' : 'opacity-105'
          } ${isScrolled ? 'bg-slate-950' : 'bg-slate-950 dark:bg-white'}`}
        ></span>
        <span
          className={`w-full h-0.5 rounded transition-transform duration-300 origin-left ${
            isMobileMenuOpen ? '-rotate-45 translate-x-[2px] -translate-y-[1.5px]' : ''
          } ${isScrolled ? 'bg-slate-950' : 'bg-slate-950 dark:bg-white'}`}
        ></span>
      </button>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-slate-950/98 backdrop-blur-lg flex flex-col justify-center items-center gap-8 transition-transform duration-300 ease-in-out z-40 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <a
          href="#about"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors"
        >
          About me
        </a>
        <a
          href="#skills"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors"
        >
          Skills
        </a>
        <a
          href="#projects"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors"
        >
          Projects
        </a>
        <a
          href="#achievements"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors"
        >
          Achievements
        </a>
        <a
          href="#contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="bg-indigo-600 text-white px-8 py-4 rounded-full text-base font-extrabold tracking-wider uppercase mt-4 hover:bg-indigo-500 transition-colors"
        >
          Contact me
        </a>
      </div>
    </header>
  );
}
