import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CHALLENGES } from '../constants';

const Challenges: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [hash]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://i.ibb.co/LXcbQL8S/Pic1.jpg";
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    (e.target as HTMLImageElement).classList.add('loaded');
  };

  return (
    <div className="pt-24 pb-24 bg-white dark:bg-slate-950 transition-colors duration-200 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 text-left border-l-4 border-blue-600 pl-8 animate-fade-in">
          <h2 className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Strategic Timeline</h2>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
            E_Lab <span className="gradient-text">Challenges</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl font-medium">
            A precise chronological mapping of the eLab development phases. Optimized for speed and clarity.
          </p>
        </header>

        <div className="space-y-24 md:space-y-32">
          {CHALLENGES.map((challenge, index) => (
            <div 
              key={challenge.id} 
              id={challenge.id} 
              className={`flex flex-col lg:flex-row items-start gap-10 md:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} group text-left`}
            >
              <div className="w-full lg:w-5/12 sticky top-28">
                <div className="relative group/img">
                  <div className="absolute -inset-2 bg-blue-600/5 rounded-[32px] blur-xl opacity-0 group-hover/img:opacity-100 transition-all duration-300"></div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[36px] border-[6px] border-white dark:border-slate-900 shadow-xl ring-1 ring-slate-100 dark:ring-slate-800">
                    <img 
                      src={challenge.image} 
                      alt={challenge.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" 
                      loading="lazy"
                      decoding="async"
                      onLoad={handleImageLoad}
                      onError={handleImageError}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-[9px] font-black uppercase tracking-widest rounded-lg shadow-lg">
                        {challenge.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-7/12 pt-2">
                <div className="flex items-center space-x-3 mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-[1px] bg-blue-600"></div>
                  <span className="text-blue-600 font-black uppercase tracking-widest text-[9px]">Strategic Sprint 0{index + 1}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tight group-hover:text-blue-600 transition-colors duration-300">{challenge.title}</h2>
                <div className="space-y-5 text-slate-600 dark:text-gray-400 leading-relaxed font-medium text-sm md:text-base">
                  <p>{challenge.description}</p>
                </div>
                
                <div className="mt-8 bg-white dark:bg-slate-900/50 p-6 md:p-8 rounded-[32px] border border-slate-100 dark:border-white/5 relative overflow-hidden transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:border-blue-500/20">
                  <div className="absolute top-0 right-0 p-6 opacity-[0.03] dark:opacity-5 group-hover:opacity-10 transition-opacity">
                    <i className="fas fa-lightbulb text-5xl text-blue-600"></i>
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-[9px] font-black text-blue-600 uppercase tracking-[0.2em] mb-3">Key Take-Away</h4>
                    <p className="text-slate-900 dark:text-white font-bold italic text-base md:text-lg leading-relaxed">
                      "{challenge.impact}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Challenges;