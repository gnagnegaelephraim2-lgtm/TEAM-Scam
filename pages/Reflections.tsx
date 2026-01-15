import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { TEAM_MEMBERS } from '../constants';

// Sub-component for dynamic word reveal effect with trailing cursor
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
    }, 40);

    return () => clearInterval(interval);
  }, [isVisible, words]);

  return (
    <div ref={containerRef} className="text-slate-700 dark:text-gray-300 text-lg md:text-xl leading-[1.8] font-medium relative z-10 text-left">
      {displayedWords.map((word, idx) => (
        <span 
          key={idx} 
          className="inline-block animate-word-flow mr-1"
        >
          {word}
        </span>
      ))}
      <span className="inline-block w-2 h-6 bg-blue-600 ml-1 animate-pulse align-middle shadow-[0_0_10px_#2563eb]"></span>
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
    <div className="pt-32 pb-48 bg-white dark:bg-[#05070a] transition-colors duration-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-32 text-left border-l-4 border-blue-600 pl-8 relative max-w-4xl">
           <div className="absolute top-0 right-0 opacity-10 hidden lg:block">
              <i className="fas fa-journal-whills text-[120px] text-blue-600"></i>
           </div>
          <h2 className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Leadership Journals</h2>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter leading-[0.9]">
            E_lab<span className="bg-blue-600 text-white px-4 rounded-xl inline-block transform -rotate-1 ml-2">Reflections</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl font-medium mt-6">
            Elite tactical debriefs documenting the development of Mission Genesis. Every entry captures a unique leadership perspective from within Team S.C.A.A.M.
          </p>
        </header>

        <div className="space-y-48">
          {TEAM_MEMBERS.map((member) => {
             return (
               <div 
                 key={member.id} 
                 id={member.id}
                 className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-24 items-start"
               >
                 {/* Left Column: Visual Identity (Details below photo) */}
                 <div className="lg:col-span-4 w-full">
                    <div className="relative mb-10 group max-w-[340px] mx-auto lg:mx-0">
                      <div className="absolute -inset-2 bg-blue-600/20 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative aspect-square rounded-[40px] overflow-hidden border-[8px] border-white dark:border-slate-800 shadow-2xl ring-1 ring-slate-100 dark:ring-slate-700">
                         <img 
                           src={member.image} 
                           alt={member.name} 
                           className="w-full h-full object-cover grayscale-50 group-hover:grayscale-0 transition-all duration-700"
                           onError={handleImageError}
                           loading="lazy"
                           decoding="async"
                         />
                      </div>
                    </div>
                    
                    <div className="text-left lg:pl-2">
                       <div className="inline-block px-4 py-2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg mb-6 shadow-lg shadow-blue-600/30">
                          {member.role}
                       </div>
                       <h3 className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white tracking-tighter mb-2 leading-tight">{member.name}</h3>
                       <p className="text-[12px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-[0.4em]">{member.country}</p>
                    </div>
                 </div>

                 {/* Right Column: High-Impact Journal Box */}
                 <div className="lg:col-span-8 w-full text-left">
                    {member.journal ? (
                       <div className="relative">
                          {/* The Blue Bordered Container Box */}
                          <div className="relative border-2 border-blue-500/40 rounded-[24px] p-8 md:p-12 bg-slate-50/50 dark:bg-blue-900/5 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.1)] overflow-hidden">
                             {/* Top Left Header INSIDE the box */}
                             <div className="flex items-center space-x-4 mb-10">
                                <div className="w-11 h-11 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600 border border-blue-500/20">
                                   <i className="fas fa-feather-pointed text-sm"></i>
                                </div>
                                <div>
                                   <h4 className="text-[11px] font-black text-slate-800 dark:text-white uppercase tracking-[0.3em]">Personal Journal Entry</h4>
                                   <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">Mission Archive Log</p>
                                </div>
                             </div>

                             {/* The Content */}
                             <TypingWords text={member.journal} />

                             {/* Decorative Background Element */}
                             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl rounded-full"></div>
                          </div>
                          
                          {/* Centered Footer below the box */}
                          <div className="mt-12 flex justify-center items-center space-x-6 opacity-40">
                             <div className="w-16 h-[1px] bg-blue-600/30"></div>
                             <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] whitespace-nowrap">E_LAB ARCHIVE LOG</span>
                             <div className="w-16 h-[1px] bg-blue-600/30"></div>
                          </div>
                       </div>
                    ) : (
                      <div className="p-16 border-2 border-dashed border-slate-100 dark:border-white/5 rounded-[40px] text-center">
                        <i className="fas fa-lock text-slate-200 dark:text-slate-800 text-4xl mb-6"></i>
                        <p className="text-slate-400 font-black uppercase tracking-[0.3em] text-[10px]">Journal Entry Classified</p>
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
            transform: translateY(14px) scale(0.98); 
            filter: blur(8px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
            filter: blur(0); 
          }
        }
        .animate-word-flow {
          animation: word-flow 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Reflections;