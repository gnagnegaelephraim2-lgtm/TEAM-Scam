
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
          >
            {isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-4 md:hidden relative z-10">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl bg-slate-200/50 dark:bg-slate-800 flex items-center justify-center text-gray-600 dark:text-gray-300"
          >
            {isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all active:scale-90 ${isMenuOpen ? 'bg-blue-600 text-white shadow-xl' : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'}`}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Menu (Right Aligned) */}
      <div className={`fixed top-0 right-0 h-screen w-[280px] bg-white dark:bg-slate-950 shadow-2xl z-40 transform transition-transform duration-500 ease-in-out border-l border-slate-100 dark:border-white/5 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-6 pb-12">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-8 text-left border-b border-slate-100 dark:border-white/5 pb-4">Menu Selection</p>
          
          <div className="space-y-4 flex-grow overflow-y-auto no-scrollbar">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                to={link.path}
                className={`group flex items-center justify-between p-4 rounded-2xl transition-all duration-300 active:scale-95 ${location.pathname === link.path ? `${link.color} text-white shadow-xl` : 'bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10'}`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${location.pathname === link.path ? 'bg-white/20' : 'bg-white dark:bg-slate-800 shadow-sm'}`}>
                    <i className={`fas ${link.icon} text-xs ${location.pathname === link.path ? 'text-white' : 'text-blue-600'}`}></i>
                  </div>
                  <span className="text-sm font-black uppercase tracking-widest">{link.name}</span>
                </div>
                <i className={`fas fa-chevron-right text-[10px] transition-transform group-hover:translate-x-1 ${location.pathname === link.path ? 'opacity-100' : 'opacity-30'}`}></i>
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100 dark:border-white/5 text-left">
            <div className="flex space-x-4 mb-6">
              <a href="https://www.youtube.com/@team_scaam" target="_blank" rel="noreferrer" className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-lg"><i className="fab fa-youtube"></i></a>
              <a href="https://www.instagram.com/TEAM_SCAAM" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gradient-to-tr from-yellow-400 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg"><i className="fab fa-instagram"></i></a>
            </div>
            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Team S.C.A.A.M © 2026</p>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div 
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-30 md:hidden"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
