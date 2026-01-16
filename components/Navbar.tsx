import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CHALLENGES, TEAM_MEMBERS, VIDEOS } from '../constants';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

interface SearchResult {
  id: string;
  title: string;
  category: 'Challenge' | 'Team Member' | 'Video';
  path: string;
  description?: string;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const input = document.getElementById('global-search') as HTMLInputElement;
        input?.focus();
      }
      if (e.key === 'Escape') {
        setIsSearchFocused(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Search logic
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results: SearchResult[] = [];

    // Search Challenges
    CHALLENGES.forEach(c => {
      if (c.title.toLowerCase().includes(query) || c.description.toLowerCase().includes(query)) {
        results.push({
          id: c.id,
          title: c.title,
          category: 'Challenge',
          path: `/challenges#${c.id}`,
          description: c.date
        });
      }
    });

    // Search Team Members
    TEAM_MEMBERS.forEach(m => {
      if (m.name.toLowerCase().includes(query) || m.role.toLowerCase().includes(query) || (m.journal && m.journal.toLowerCase().includes(query))) {
        results.push({
          id: m.id,
          title: m.name,
          category: 'Team Member',
          path: `/reflections#${m.id}`,
          description: m.role
        });
      }
    });

    // Search Videos
    VIDEOS.forEach(v => {
      if (v.title.toLowerCase().includes(query) || v.category.toLowerCase().includes(query)) {
        results.push({
          id: v.id,
          title: v.title,
          category: 'Video',
          path: '/', // Home page has the video grid
          description: v.category
        });
      }
    });

    setSearchResults(results.slice(0, 8)); // Limit results
  }, [searchQuery]);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchFocused(false);
    setSearchQuery('');
  }, [location]);

  const handleResultClick = (path: string, id: string) => {
    setIsSearchFocused(false);
    setSearchQuery('');
    
    if (path === '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('video-showcase');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(path);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: 'fa-house' },
    { name: 'Challenges', path: '/challenges', icon: 'fa-trophy' },
    { name: 'Story', path: '/reviews', icon: 'fa-book-open' },
    { name: 'Reflections', path: '/reflections', icon: 'fa-journal-whills' },
    { name: 'Data Hub', path: '/data-hub', icon: 'fa-database' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled || isMenuOpen ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/5 py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group relative z-10 shrink-0">
          <div className="relative">
            <div className="absolute -inset-1 bg-blue-600 rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg transform group-hover:scale-105 transition-transform">
              G
            </div>
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-black text-lg tracking-tighter text-gray-900 dark:text-white leading-none">
              TEAM <span className="text-blue-600">S.C.A.A.M</span>
            </span>
            <span className="text-[8px] font-bold text-gray-400 uppercase tracking-[0.3em] mt-1">MISSION GENESIS</span>
          </div>
        </Link>
        
        {/* Global Search Bar - Desktop */}
        <div ref={searchRef} className="hidden lg:block relative max-w-md w-full mx-8">
          <div className={`relative flex items-center transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
            <div className="absolute left-4 text-slate-400">
              <i className={`fas ${isSearchFocused ? 'fa-circle-notch fa-spin text-blue-500' : 'fa-search'}`}></i>
            </div>
            <input
              id="global-search"
              type="text"
              placeholder="Search genesis archives..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              className="w-full h-11 bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-2xl pl-12 pr-16 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white dark:focus:bg-slate-900 transition-all text-slate-900 dark:text-white"
            />
            <div className="absolute right-4 flex items-center space-x-1 pointer-events-none">
              <span className="text-[10px] font-black bg-slate-200 dark:bg-white/10 px-1.5 py-0.5 rounded text-slate-500">⌘</span>
              <span className="text-[10px] font-black bg-slate-200 dark:bg-white/10 px-1.5 py-0.5 rounded text-slate-500">K</span>
            </div>
          </div>

          {/* Search Results Dropdown */}
          {isSearchFocused && searchQuery && (
            <div className="absolute top-full mt-3 w-full bg-white dark:bg-slate-950 rounded-[28px] border border-slate-200 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden animate-fade-in backdrop-blur-xl">
              <div className="p-2">
                {searchResults.length > 0 ? (
                  searchResults.map((result) => (
                    <button
                      key={`${result.category}-${result.id}`}
                      onClick={() => handleResultClick(result.path, result.id)}
                      className="w-full flex items-center space-x-4 p-4 hover:bg-slate-50 dark:hover:bg-white/5 rounded-2xl transition-all text-left group"
                    >
                      <div className="w-10 h-10 bg-slate-100 dark:bg-slate-900 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <i className={`fas ${result.category === 'Challenge' ? 'fa-trophy' : result.category === 'Team Member' ? 'fa-user-ninja' : 'fa-video'} text-xs opacity-60 group-hover:opacity-100`}></i>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center space-x-2">
                          <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{result.category}</span>
                          <span className="text-[10px] text-slate-400">•</span>
                          <span className="text-[10px] text-slate-400 font-bold uppercase truncate">{result.description}</span>
                        </div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{result.title}</p>
                      </div>
                      <i className="fas fa-arrow-right text-[10px] text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"></i>
                    </button>
                  ))
                ) : (
                  <div className="p-8 text-center">
                    <i className="fas fa-search-minus text-2xl text-slate-200 dark:text-slate-800 mb-3"></i>
                    <p className="text-sm text-slate-500 font-medium">No records found for "{searchQuery}"</p>
                  </div>
                )}
              </div>
              <div className="bg-slate-50 dark:bg-white/5 px-6 py-3 flex justify-between items-center">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Genesis Index v1.2</span>
                <span className="text-[9px] font-bold text-slate-400">ESC to close</span>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 shrink-0">
          <div className="flex items-center space-x-6 mr-4 border-r border-slate-200 dark:border-white/10 pr-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[12px] font-black uppercase tracking-widest transition-all hover:text-blue-600 relative py-1 ${location.pathname === link.path ? 'text-blue-600' : 'text-gray-500 dark:text-gray-400'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-all active:scale-95 shadow-sm border border-slate-100 dark:border-transparent"
          >
            {isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-3 md:hidden relative z-10">
          <button 
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center text-gray-600 dark:text-gray-300 border border-slate-100 dark:border-transparent shadow-sm"
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
      <div className={`fixed top-0 right-0 h-screen w-[300px] bg-white dark:bg-[#080b14] shadow-[0_0_50px_rgba(0,0,0,0.3)] z-[110] transform transition-transform duration-500 ease-in-out border-l border-slate-100 dark:border-white/5 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-4 w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-slate-900 dark:hover:text-white transition-all active:scale-90 z-[120]"
          aria-label="Close menu"
        >
          <i className="fas fa-times text-xl"></i>
        </button>

        <div className="flex flex-col h-full pt-20 px-4 pb-8 overflow-y-auto no-scrollbar">
          
          {/* Mobile Search */}
          <div className="mb-8 px-2">
            <div className="relative">
              <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
              <input
                type="text"
                placeholder="Search archives..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs font-bold outline-none text-slate-900 dark:text-white"
              />
            </div>
            
            {searchQuery && (
              <div className="mt-4 space-y-2">
                {searchResults.map((result) => (
                  <button
                    key={`${result.category}-${result.id}-mob`}
                    onClick={() => handleResultClick(result.path, result.id)}
                    className="w-full flex items-center p-3 bg-slate-50 dark:bg-white/5 rounded-xl text-left border border-transparent hover:border-blue-500/30 transition-all"
                  >
                    <div className="flex-grow min-w-0">
                      <p className="text-[8px] font-black text-blue-600 uppercase tracking-widest">{result.category}</p>
                      <p className="text-[11px] font-bold text-slate-900 dark:text-white truncate">{result.title}</p>
                    </div>
                    <i className="fas fa-chevron-right text-[8px] text-slate-300 ml-2"></i>
                  </button>
                ))}
              </div>
            )}
          </div>

          <p className="text-[9px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.4em] mb-6 text-left border-b border-slate-100 dark:border-white/5 pb-3">Menu Selection</p>
          
          <div className="space-y-3 flex-grow">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`group flex items-center justify-between p-3.5 rounded-2xl transition-all duration-300 active:scale-95 ${isActive ? 'bg-blue-600 text-white shadow-[0_8px_20px_-4px_rgba(37,99,235,0.4)]' : 'bg-white dark:bg-[#121826] text-slate-900 dark:text-white border border-slate-100 dark:border-white/5 shadow-sm'}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isActive ? 'bg-white/20' : 'bg-white dark:bg-slate-800 shadow-sm'}`}>
                      <i className={`fas ${link.icon} text-xs ${isActive ? 'text-white' : 'text-blue-600'}`}></i>
                    </div>
                    <span className="text-[12px] font-black uppercase tracking-widest">{link.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5 text-left">
            <p className="text-[8px] font-bold text-gray-400 uppercase tracking-[0.3em]">Team S.C.A.A.M © 2026</p>
          </div>
        </div>
      </div>

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