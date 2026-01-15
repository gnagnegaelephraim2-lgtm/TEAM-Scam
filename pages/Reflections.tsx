import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { TEAM_MEMBERS } from '../constants';

// Sub-component for dynamic word reveal effect with trailing neon cursor
const TypingWords: React.FC<{ text: string }> = ({ text }) => {
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const words = useMemo(() => text.split(/\s+/), [text]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let currentWordIndex = 0;
    setDisplayedWords([]);
    
    const interval = setInterval(() => {
      if (currentWordIndex < words.length) {
        setDisplayedWords((prev) => [...prev, words[currentWordIndex]]);
        currentWordIndex++;
      } else {
        clearInterval(interval);
      }
    }, 18); // High-speed data stream effect

    return () => clearInterval(interval);
  }, [isVisible, words]);

  return (
    <div ref={containerRef} className="text-slate-700 dark:text-gray-300 text-base md:text-lg leading-[1.8] font-medium relative z-10 text-left">
      {displayedWords.map((word, idx) => (
        <span 
          key={idx} 
          className="inline-block animate-word-flow mr-1.5"
        >
          {word}
        </span>
      ))}
      <span className="inline-block w-2 h-5 bg-blue-500 ml-1 animate-pulse align-middle shadow-[0_0_12px_#3b82f6]"></span>
    </div>
  );
};

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
          <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl font-medium">
            Tactical debriefs documenting the cognitive transitions within Team S.C.A.A.M. 
          </p>
        </header>

        <div className="space-y-32">
          {TEAM_MEMBERS.map((member) => {
             return (
               <div 
                 key={member.id} 
                 id={member.id}
                 className="group flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-20 items-start"
               >
                 {/* Left Column: Profile Card - Snappy interaction */}
                 <div className="lg:col-span-4 w-full">
                    <div className="relative mb-8 max-w-[280px] mx-auto lg:mx-0 transition-transform duration-300 group-hover:-translate-y-2">
                      <div className="absolute -inset-4 bg-blue-600/10 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative aspect-square rounded-[36px] overflow-hidden border-[8px] border-white dark:border-slate-900 shadow-2xl ring-1 ring-slate-100 dark:ring-slate-800">
                         <img 
                           src={member.image} 
                           alt={member.name} 
                           className="w-full h-full object-cover grayscale-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                           onError={handleImageError}
                           loading="lazy"
                           decoding="async"
                         />
                      </div>

                      {/* Floating Badge */}
                      <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-600/40 transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                         <i className="fas fa-fingerprint text-xl"></i>
                      </div>
                    </div>
                    
                    <div className="text-left lg:pl-2">
                       <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest rounded-lg mb-4 shadow-lg shadow-blue-600/20">
                          <span className="w-1 h-1 bg-white rounded-full animate-ping"></span>
                          <span>{member.role}</span>
                       </div>
                       <h3 className="text-3xl md:text-4xl font-black text-slate-950 dark:text-white tracking-tighter mb-2 leading-tight">{member.name}</h3>
                       <p className="text-[12px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-[0.4em]">{member.country}</p>
                    </div>
                 </div>

                 {/* Right Column: High-Speed Journal Box */}
                 <div className="lg:col-span-8 w-full text-left">
                    {member.journal ? (
                       <div className="relative">
                          <div className="relative border-2 border-blue-500/50 rounded-[28px] p-8 md:p-10 bg-white dark:bg-[#080b14] shadow-2xl group-hover:border-blue-400 transition-all duration-300 overflow-hidden">
                             
                             <div className="absolute inset-0 pointer-events-none opacity-10 overflow-hidden">
                                <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-[50px] animate-float"></div>
                                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-600/10 rounded-full blur-[60px] animate-float" style={{ animationDelay: '1s' }}></div>
                             </div>

                             {/* Header inside the box */}
                             <div className="flex items-center space-x-4 mb-8 relative z-10">
                                <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 border border-blue-500/30 group-hover:rotate-12 transition-transform duration-200 shadow-md">
                                   <i className="fas fa-leaf text-sm"></i>
                                </div>
                                <div>
                                   <h4 className="text-[11px] font-black text-slate-900 dark:text-white uppercase tracking-[0.3em]">Personal Journal Entry</h4>
                                   <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-0.5 opacity-70">Mission Archive Log</p>
                                </div>
                             </div>

                             {/* Dynamic Content */}
                             <TypingWords text={member.journal} />

                             <div className="absolute bottom-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                <i className="fas fa-shield-halved text-5xl text-blue-600"></i>
                             </div>
                          </div>
                          
                          {/* Footnote */}
                          <div className="mt-8 flex justify-center items-center space-x-8 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                             <div className="w-12 h-[1px] bg-blue-600"></div>
                             <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] whitespace-nowrap">E_LAB LOG REPOSITORY</span>
                             <div className="w-12 h-[1px] bg-blue-600"></div>
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
      
      <style>{`
        @keyframes word-flow {
          from { 
            opacity: 0; 
            transform: translateY(8px) scale(0.99); 
            filter: blur(4px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
            filter: blur(0); 
          }
        }
        .animate-word-flow {
          animation: word-flow 0.3s cubic-bezier(0.1, 0.9, 0.2, 1) forwards;
          opacity: 0;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-12px) rotate(1.5deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Reflections;