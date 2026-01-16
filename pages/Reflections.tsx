import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TEAM_MEMBERS } from '../constants';

const Reflections: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [hash]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800";
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    (e.target as HTMLImageElement).classList.add('loaded');
  };

  return (
    <div className="pt-24 pb-32 bg-white dark:bg-[#030508] transition-colors duration-200 min-h-screen selection:bg-blue-500/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 text-left border-l-4 border-blue-600 pl-8 relative max-w-3xl animate-fade-in">
           <div className="absolute top-0 right-0 opacity-10 hidden lg:block animate-float">
              <i className="fas fa-journal-whills text-[100px] text-blue-600"></i>
           </div>
          <h2 className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Mission Continuity Archive</h2>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter leading-tight">
            E_lab<span className="text-blue-600">.</span><span className="bg-blue-600 text-white px-4 py-1.5 rounded-xl inline-block transform -rotate-1 ml-2 shadow-xl shadow-blue-600/20">Reflections</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl font-medium text-left">
            Tactical debriefs documenting the cognitive transitions within Team S.C.A.A.M. 
          </p>
        </header>

        <div className="space-y-32">
          {TEAM_MEMBERS.map((member) => {
             return (
               <div 
                 key={member.id} 
                 id={member.id}
                 className="group flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-20 items-start text-left"
               >
                 <div className="lg:col-span-4 w-full">
                    <div className="relative mb-8 max-w-[280px] mx-auto lg:mx-0 transition-transform duration-300 group-hover:-translate-y-2">
                      <div className="absolute -inset-4 bg-blue-600/10 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative aspect-square rounded-[36px] overflow-hidden border-[8px] border-white dark:border-slate-900 shadow-2xl ring-1 ring-slate-100 dark:ring-slate-800">
                         <img 
                           src={member.image} 
                           alt={member.name} 
                           className="w-full h-full object-cover grayscale-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                           loading="lazy"
                           decoding="async"
                           onLoad={handleImageLoad}
                           onError={handleImageError}
                         />
                      </div>

                      <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-600/40 transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                         <i className="fas fa-fingerprint text-xl"></i>
                      </div>
                    </div>
                    
                    <div className="lg:pl-2">
                       <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest rounded-lg mb-4 shadow-lg shadow-blue-600/20">
                          <span className="w-1 h-1 bg-white rounded-full animate-ping"></span>
                          <span>{member.role}</span>
                       </div>
                       <h3 className="text-3xl md:text-4xl font-black text-slate-950 dark:text-white tracking-tighter mb-2 leading-tight">{member.name}</h3>
                       <p className="text-[12px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-[0.4em]">{member.country}</p>
                    </div>
                 </div>

                 <div className="lg:col-span-8 w-full">
                    {member.journal ? (
                       <div className="relative">
                          <div className="relative border-2 border-blue-500/50 rounded-[28px] p-8 md:p-10 bg-white dark:bg-[#080b14] shadow-2xl group-hover:border-blue-400 transition-all duration-300 overflow-hidden">
                             <div className="absolute inset-0 pointer-events-none opacity-10 overflow-hidden">
                                <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-[50px] animate-float"></div>
                                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-600/10 rounded-full blur-[60px] animate-float" style={{ animationDelay: '1s' }}></div>
                             </div>

                             <div className="flex items-center space-x-4 mb-8 relative z-10">
                                <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 border border-blue-500/30 group-hover:rotate-12 transition-transform duration-200 shadow-md">
                                   <i className="fas fa-leaf text-sm"></i>
                                </div>
                                <div>
                                   <h4 className="text-[11px] font-black text-slate-900 dark:text-white uppercase tracking-[0.3em]">Personal Journal Entry</h4>
                                   <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-0.5 opacity-70">Mission Archive Log</p>
                                </div>
                             </div>

                             <div className="text-slate-700 dark:text-gray-300 text-base md:text-lg leading-[1.8] font-medium relative z-10 whitespace-pre-wrap">
                               {member.journal}
                             </div>

                             <div className="absolute bottom-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                <i className="fas fa-shield-halved text-5xl text-blue-600"></i>
                             </div>
                          </div>
                       </div>
                    ) : (
                      <div className="p-16 border-2 border-dashed border-slate-200 dark:border-white/10 rounded-[32px] text-center bg-white dark:bg-black/20">
                        <i className="fas fa-lock text-slate-300 dark:text-slate-800 text-3xl mb-4"></i>
                        <p className="text-slate-400 font-black uppercase tracking-[0.3em] text-[10px]">Auth Required</p>
                      </div>
                    )}
                 </div>
               </div>
             );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reflections;