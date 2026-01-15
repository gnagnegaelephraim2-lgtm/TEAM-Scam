
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
    { name: 'Home', path: '/' },
    { name: 'Challenges', path: '/challenges' },
    { name: 'Story', path: '/reviews' },
    { name: 'Reflections', path: '/reflections' },
    { name: 'Data Hub', path: '/data-hub' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled || isMenuOpen ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/5 py-3 shadow-[0_2px_20px_rgba(0,0,0,0.02)]' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group relative z-10">
          <div className="relative">
            <div className="absolute -inset-1 bg-blue-600 rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg transform group-hover:scale-105 transition-transform">
              G
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-black text-xl tracking-tighter text-gray-900 dark:text-white leading-none">
              TEAM <span className="text-blue-600">S.C.A.A.M</span>
            </span>
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.3em] mt-1">MISSION GENESIS</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[13px] font-black uppercase tracking-widest transition-all hover:text-blue-600 relative py-1 ${location.pathname === link.path ? 'text-blue-600' : 'text-gray-500 dark:text-gray-400'}`}
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
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <i className="fas fa-sun text-lg animate-fade-in"></i>
            ) : (
              <i className="fas fa-moon text-lg animate-fade-in"></i>
            )}
          </button>
        </div>

        {/* Mobile Menu Controls */}
        <div className="flex items-center space-x-4 md:hidden relative z-10">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl bg-slate-200/50 dark:bg-slate-800 flex items-center justify-center text-gray-600 dark:text-gray-300"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center transition-all active:scale-90"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white/98 dark:bg-slate-950/98 backdrop-blur-2xl md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6 pt-20">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              to={link.path}
              style={{ transitionDelay: `${idx * 50}ms` }}
              className={`text-2xl font-black uppercase tracking-[0.15em] transition-all hover:scale-110 active:scale-95 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} ${location.pathname === link.path ? 'text-blue-600' : 'text-slate-800 dark:text-slate-200'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className={`pt-10 border-t border-slate-200 dark:border-slate-800 w-full text-center transition-all delay-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-6">Mission Genesis</p>
            <div className="flex justify-center space-x-10 text-slate-400 text-xl">
               <a href="https://www.youtube.com/@team_scaam" target="_blank" rel="noreferrer"><i className="fab fa-youtube hover:text-blue-600 transition-colors"></i></a>
               <a href="https://www.instagram.com/TEAM_SCAAM" target="_blank" rel="noreferrer"><i className="fab fa-instagram hover:text-blue-600 transition-colors"></i></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
