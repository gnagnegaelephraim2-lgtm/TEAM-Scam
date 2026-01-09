
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

  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-left border-l-4 border-blue-600 pl-8">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
            E_Lab <span className="gradient-text">Challenges</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl font-medium">
            A meticulous chronological mapping of the eLab development phases, tracing our evolution from initial discovery to mission deployment.
          </p>
        </header>

        <div className="space-y-32">
          {CHALLENGES.map((challenge, index) => (
            <div 
              key={challenge.id} 
              id={challenge.id} 
              className={`flex flex-col lg:flex-row items-start gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-5/12 sticky top-32">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-blue-600/5 rounded-[32px] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[40px] border-[8px] border-white dark:border-slate-800 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700">
                    <img 
                      src={challenge.image} 
                      alt={challenge.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                      onError={handleImageError}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg">
                        {challenge.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-7/12 text-left">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-[2px] bg-blue-600"></div>
                  <span className="text-blue-600 font-black uppercase tracking-widest text-[10px]">Strategic Sprint 0{index + 1}</span>
                </div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">{challenge.title}</h2>
                <div className="space-y-6 text-slate-600 dark:text-gray-400 leading-relaxed font-medium text-base">
                  <p>{challenge.description}</p>
                </div>
                
                <div className="mt-10 bg-white dark:bg-slate-900 p-8 rounded-[40px] border border-slate-100 dark:border-slate-800 relative overflow-hidden group/card transition-colors shadow-sm">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] dark:opacity-5">
                    <i className="fas fa-lightbulb text-6xl text-blue-600"></i>
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-3">Key Take-Away</h4>
                    <p className="text-slate-900 dark:text-white font-bold italic text-lg leading-relaxed">
                      "{challenge.impact}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Challenges;
