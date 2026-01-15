
import React from 'react';
import { Link } from 'react-router-dom';
import { SOCIALS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative border-t border-white/5">
      {/* Decorative Gradient Flare */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] -mb-48 -mr-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-20">
          <div className="lg:col-span-5 text-left">
            <Link to="/" className="flex items-center space-x-3 mb-10 group">
              <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-600/20">G</div>
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tighter text-white">
                  TEAM <span className="text-blue-600">S.C.A.A.M</span>
                </span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">MISSION GENESIS</span>
              </div>
            </Link>
            <p className="text-gray-400 text-lg max-w-sm mb-12 leading-relaxed font-medium">
              Revolutionizing secondary education in Cameroon by replacing passive listening with active, immersive problem-solving.
            </p>
            <div className="flex space-x-6">
              <a 
                href={SOCIALS.YOUTUBE} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all shadow-xl group"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube text-xl group-hover:scale-110 transition-transform"></i>
              </a>
              <a 
                href={SOCIALS.INSTAGRAM} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:border-transparent transition-all shadow-xl group"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-xl group-hover:scale-110 transition-transform"></i>
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12 text-left">
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-8 text-blue-500">Navigation</h4>
              <ul className="space-y-5 text-gray-400 font-bold text-sm">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/challenges" className="hover:text-white transition-colors">Challenges</Link></li>
                <li><Link to="/reviews" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link to="/reflections" className="hover:text-white transition-colors">Reflections</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-8 text-blue-500">Legal</h4>
              <ul className="space-y-5 text-gray-400 font-bold text-sm">
                <li><Link to="/privacy-shield" className="hover:text-white transition-colors">Privacy Shield</Link></li>
                <li><Link to="/data-protocol" className="hover:text-white transition-colors">Data Protocol</Link></li>
                <li><Link to="/terms-of-mission" className="hover:text-white transition-colors">Terms of Mission</Link></li>
              </ul>
            </div>
            
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-8 text-blue-500">Origin</h4>
              <div className="flex flex-col space-y-2">
                <span className="text-white font-black text-sm uppercase">Team S.C.A.A.M</span>
                <span className="text-gray-400 text-xs font-medium leading-relaxed uppercase">Southwest Region<br/>Republic of Cameroon</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-600">
          <p className="mb-4 md:mb-0">© 2025 Mission Genesis. System developed by Team S.C.A.A.M.</p>
          <div className="flex space-x-8">
            <span className="text-slate-800">Academic Innovation Research</span>
            <span className="text-slate-800">Competency Ledger Alpha v1.2</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
