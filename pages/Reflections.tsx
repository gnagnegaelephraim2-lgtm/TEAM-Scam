
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

  return (
    <div className="pt-32 pb-24 bg-white dark:bg-[#05070a] transition-colors duration-300 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-left border-l-4 border-blue-600 pl-8 relative">
           <div className="absolute top-0 right-0 opacity-10 hidden lg:block">
              <i className="fas fa-journal-whills text-[120px] text-blue-600"></i>
           </div>
          <h2 className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Leadership Journals</h2>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
            E_lab<span className="bg-blue-600 text-white px-4 rounded-xl inline-block transform -rotate-1">Reflections</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl font-medium">
            Internal debriefs from the Team S.C.A.A.M think-tank. Personal journals documenting the psychological and operational shifts during the Mission Genesis lifecycle.
          </p>
        </header>

        <div className="space-y-32">
          {TEAM_MEMBERS.map((member, index) => {
             return (
               <div 
                 key={member.id} 
                 id={member.id}
                 className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20 items-start"
               >
                 {/* Left Column: Visual Identity */}
                 <div className="lg:col-span-4 sticky top-32 w-full">
                    <div className="relative mb-8 group">
                      <div className="absolute -inset-4 bg-blue-600/10 rounded-[48px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden border-[10px] border-white dark:border-slate-800 shadow-2xl ring-1 ring-slate-100 dark:ring-slate-700 transform hover:scale-[1.02] transition-transform duration-500">
                         <img 
                           src={member.image} 
                           alt={member.name} 
                           className="w-full h-full object-cover"
                           onError={handleImageError}
                           loading="lazy"
                           decoding="async"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </div>
                    
                    <div className="text-left">
                       <div className="flex items-center space-x-2 mb-3">
                          <span className="px-3 py-1 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest rounded-lg">{member.role}</span>
                       </div>
                       <h3 className="text-4xl font-black text-slate-950 dark:text-white tracking-tighter mb-2">{member.name}</h3>
                       <p className="text-[10px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-[0.4em]">{member.country}</p>
                    </div>
                 </div>

                 {/* Right Column: Reflections & Contribution */}
                 <div className="lg:col-span-8 space-y-12 text-left">
                    {/* The Reflection Quote - In sentence form as requested */}
                    <div className="relative">
                       <i className="fas fa-quote-left text-blue-600/10 text-8xl absolute -top-10 -left-10 select-none"></i>
                       <p className="text-2xl md:text-3xl text-slate-800 dark:text-gray-300 font-medium italic leading-[1.4] tracking-tight relative z-10 border-l-2 border-blue-500/20 pl-8">
                         "{member.reflection}"
                       </p>
                    </div>

                    {/* Contribution Section */}
                    <div className="bg-slate-50 dark:bg-white/[0.03] rounded-[40px] p-10 md:p-12 border border-slate-100 dark:border-white/5 shadow-sm">
                       <h4 className="text-[11px] font-black text-blue-600 dark:text-blue-500 uppercase tracking-[0.4em] mb-6">Core Contribution</h4>
                       <p className="text-slate-700 dark:text-gray-400 text-lg md:text-xl leading-relaxed font-medium">
                         {member.contribution}
                       </p>
                    </div>

                    {/* Long Form Journal Entry */}
                    {member.journal && (
                       <div className="pt-12 border-t border-slate-100 dark:border-white/5">
                          <div className="flex items-center space-x-4 mb-8">
                             <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                                <i className="fas fa-pen-nib text-sm"></i>
                             </div>
                             <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Personal Journal Entry</h4>
                          </div>
                          <div className="text-slate-600 dark:text-gray-500 text-base leading-[1.8] whitespace-pre-wrap font-medium font-sans">
                             {member.journal}
                          </div>
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
