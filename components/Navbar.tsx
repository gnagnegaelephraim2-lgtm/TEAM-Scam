
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', icon: 'fa-house', color: 'bg-blue-600' },
    { name: 'Challenges', path: '/challenges', icon: 'fa-trophy', color: 'bg-indigo-600' },
    { name: 'Story', path: '/reviews', icon: 'fa-book-open', color: 'bg-emerald-600' },
    { name: 'Reflections', path: '/reflections', icon: 'fa-journal-whills', color: 'bg-amber-600' },
    { name: 'Data Hub', path: '/data-hub', icon: 'fa-database', color: 'bg-slate-900' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled || isMenuOpen ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/5 py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group relative z-10">
          <div className="relative">
            <div className="absolute -inset-1 bg-blue-600 rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg transform group-hover:scale-105 transition-transform">
              G
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-black text-lg tracking-tighter text-gray-900 dark:text-white leading-none">
              TEAM <span className="text-blue-600">S.C.A.A.M</span>
            </span>
            <span className="text-[8px] font-bold text-gray-400 uppercase tracking-[0.3em] mt-1">MISSION GENESIS</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[12px] font-black uppercase tracking-widest transition-all hover:text-blue-600 relative py-1 ${location.pathname === link.path ? 'text-blue-600' : 'text-gray-500 dark:text-gray-400'}`}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 rounded-full"></span>
              )}
            </Link>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl bg-slate-200/50 dark:bg-slate-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-all active:scale-95"
          >
            {isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-3 md:hidden relative z-10">
          <button 
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg bg-slate-200/50 dark:bg-slate-800 flex items-center justify-center text-gray-600 dark:text-gray-300"
          >
            {isDarkMode ? <i className="fas fa-sun text-sm"></i> : <i className="fas fa-moon text-sm"></i>}
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all active:scale-90 ${isMenuOpen ? 'bg-blue-600 text-white shadow-xl' : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'}`}
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-sm`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Menu (Right Aligned) */}
      <div className={`fixed top-0 right-0 h-screen w-[260px] bg-white dark:bg-[#080b14] shadow-[0_0_50px_rgba(0,0,0,0.3)] z-[110] transform transition-transform duration-500 ease-in-out border-l border-slate-100 dark:border-white/5 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Close Button Inside Panel */}
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-4 w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-slate-900 dark:hover:text-white transition-all active:scale-90 z-[120]"
          aria-label="Close menu"
        >
          <i className="fas fa-times text-xl"></i>
        </button>

        <div className="flex flex-col h-full pt-20 px-4 pb-8 overflow-y-auto no-scrollbar">
          
          {/* Social Icons */}
          <div className="flex space-x-3 mb-8">
            <a href="https://www.youtube.com/@team_scaam" target="_blank" rel="noreferrer" className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:scale-105 active:scale-95">
              <i className="fab fa-youtube text-lg"></i>
            </a>
            <a href="https://www.instagram.com/TEAM_SCAAM" target="_blank" rel="noreferrer" className="w-10 h-10 bg-slate-900 dark:bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white hover:bg-gradient-to-tr from-yellow-400 to-purple-600 transition-all shadow-md">
              <i className="fab fa-instagram text-lg"></i>
            </a>
          </div>

          <p className="text-[9px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.4em] mb-6 text-left border-b border-slate-100 dark:border-white/5 pb-3">Menu Selection</p>
          
          <div className="space-y-3 flex-grow">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`group flex items-center justify-between p-3.5 rounded-2xl transition-all duration-300 active:scale-95 ${isActive ? 'bg-blue-600 text-white shadow-[0_8px_20px_-4px_rgba(37,99,235,0.4)]' : 'bg-slate-50 dark:bg-[#121826] text-slate-900 dark:text-white border border-transparent dark:border-white/5 hover:border-blue-500/30'}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isActive ? 'bg-white/20' : 'bg-white dark:bg-slate-800 shadow-sm'}`}>
                      <i className={`fas ${link.icon} text-xs ${isActive ? 'text-white' : 'text-blue-600'}`}></i>
                    </div>
                    <span className="text-[12px] font-black uppercase tracking-widest">{link.name}</span>
                  </div>
                  <i className={`fas fa-chevron-right text-[9px] transition-transform group-hover:translate-x-1 ${isActive ? 'opacity-100' : 'opacity-20'}`}></i>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5 text-left">
            <p className="text-[8px] font-bold text-gray-400 uppercase tracking-[0.3em]">Team S.C.A.A.M © 2026</p>
            <p className="text-[7px] font-medium text-gray-500 uppercase tracking-widest mt-1">Genesis-Alpha Deployment</p>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div 
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-[2px] z-30 md:hidden animate-fade-in"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
