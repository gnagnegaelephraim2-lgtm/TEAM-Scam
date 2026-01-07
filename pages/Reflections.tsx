
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TEAM_MEMBERS } from '../constants';

const Reflections: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to ensure the DOM is fully rendered before scrolling
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
    <div className="pt-32 pb-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-left border-l-4 border-blue-600 pl-8 relative">
           <div className="absolute top-0 right-0 opacity-10 hidden lg:block">
              <i className="fas fa-book-open text-[120px] text-blue-600"></i>
           </div>
          <h2 className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Leadership Journals</h2>
          <h1 className="text-4xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">
            E_lab<span className="bg-blue-600 text-white px-4 rounded-xl inline-block transform -rotate-1">Reflections</span>
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl font-medium">
            Internal debriefs from the Team S.C.A.A.M think-tank. These personal journals document the psychological and operational shifts experienced during the Mission Genesis lifecycle.
          </p>
        </header>

        <div className="space-y-24 relative">
          {/* Timeline Connector */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 dark:bg-slate-800 hidden lg:block -translate-x-1/2"></div>

          {TEAM_MEMBERS.map((member, index) => {
             const isEven = index % 2 === 0;
             const journalText = member.journal || member.reflection;
             return (
               <div 
                 key={member.id} 
                 id={member.id}
                 className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
               >
                 {/* Journal Entry Card */}
                 <div className="w-full lg:w-3/5 group">
                   <div className="relative p-10 md:p-14 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[50px] shadow-sm group-hover:shadow-2xl transition-all duration-700 overflow-hidden">
                      {/* Quote Mark Decoration */}
                      <div className="absolute top-0 right-0 p-12 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                         <i className="fas fa-quote-right text-[120px] text-blue-600"></i>
                      </div>

                      <div className="relative z-10 text-left">
                        <div className="flex items-center space-x-3 mb-8">
                           <div className="w-8 h-[2px] bg-blue-600"></div>
                           <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Entry ID: {member.id.toUpperCase()}-00{index + 1}</span>
                        </div>
                        
                        <div className="text-gray-700 dark:text-slate-300 text-lg md:text-xl leading-relaxed italic font-medium mb-12 font-serif whitespace-pre-wrap">
                          "{journalText}"
                        </div>

                        <div className="pt-10 border-t border-slate-50 dark:border-slate-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                           <div>
                              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Functional Contribution</h4>
                              <p className="text-sm font-bold text-gray-900 dark:text-white">{member.contribution}</p>
                           </div>
                           <div className="shrink-0 flex items-center space-x-2">
                              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                              <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest">Validated Entry</span>
                           </div>
                        </div>
                      </div>
                   </div>
                 </div>

                 {/* Member Info / Spacer */}
                 <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left">
                   <div className="relative mb-8">
                     <div className="absolute -inset-4 bg-blue-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-[40px] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl transform group-hover:rotate-3 transition-transform duration-500">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover"
                          onError={handleImageError}
                        />
                     </div>
                   </div>
                   <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-2 tracking-tighter">{member.name}</h3>
                   <div className="flex flex-col gap-1">
                      <span className="text-blue-600 font-black uppercase tracking-widest text-xs">{member.role}</span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{member.country}</span>
                   </div>
                 </div>

                 {/* Desktop Center Dot */}
                 <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-950 shadow-lg hidden lg:block z-20"></div>
               </div>
             );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reflections;
