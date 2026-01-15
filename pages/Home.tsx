
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import VideoGrid from '../components/VideoGrid';
import { TEAM_MEMBERS } from '../constants';

const Home: React.FC = () => {
  const [teamVisible, setTeamVisible] = useState(false);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const teamSectionRef = useRef<HTMLElement>(null);

  const fullText1 = "TEAM";
  const fullText2 = "S.C.A.A.M";

  useEffect(() => {
    // Scroll listener for parallax effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Typewriter animation logic
    let charIndex1 = 0;
    const type1 = setInterval(() => {
      setText1(fullText1.slice(0, charIndex1 + 1));
      charIndex1++;
      if (charIndex1 === fullText1.length) {
        clearInterval(type1);
        
        // Start second word after a small delay
        let charIndex2 = 0;
        setTimeout(() => {
          const type2 = setInterval(() => {
            setText2(fullText2.slice(0, charIndex2 + 1));
            charIndex2++;
            if (charIndex2 === fullText2.length) clearInterval(type2);
          }, 120);
        }, 200);
      }
    }, 150);

    // Scroll observer for team section
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTeamVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (teamSectionRef.current) {
      observer.observe(teamSectionRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(type1);
      observer.disconnect();
    };
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://i.ibb.co/b5cSGrnw/Pic4.jpg";
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 lg:pb-0 lg:pt-24 overflow-hidden hero-pattern">
        {/* Parallax Background Layer */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.4] dark:opacity-[0.1] grayscale pointer-events-none will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <img 
            src="https://i.ibb.co/GvgnFhMG/Pic2.jpg" 
            className="w-full h-full object-cover scale-110" 
            alt="Technical Schematic Background"
            decoding="async"
          />
        </div>

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-[120px] opacity-40 -mr-48 -mt-48 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/40 dark:bg-indigo-900/10 rounded-full blur-[100px] opacity-30 -ml-24 -mb-24"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* 1st Place: Title + Description (Ordered first on mobile) */}
            <div className="w-full lg:col-span-7 order-1 text-left flex flex-col">
              <div className="inline-flex self-start items-center space-x-2 px-4 py-2 bg-white dark:bg-blue-900/30 border border-slate-200 dark:border-blue-800/50 rounded-full mb-6 lg:mb-8 animate-fade-in shadow-sm">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-ping"></span>
                <span className="text-[10px] font-black text-slate-600 dark:text-blue-300 uppercase tracking-[0.2em]">S.C.A.A.M Impact</span>
              </div>
              
              <div className="mb-4 lg:mb-8 min-h-[100px] md:min-h-[140px] lg:min-h-[260px] flex flex-col justify-center">
                <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[120px] font-black text-slate-900 dark:text-white leading-[0.85] tracking-tighter text-left uppercase mb-1 lg:mb-4 relative">
                  {text1}
                  {text1.length > 0 && text1.length < fullText1.length && (
                    <span className="inline-block w-[4px] lg:w-[6px] h-[0.8em] bg-blue-600 ml-2 animate-pulse align-middle"></span>
                  )}
                </h1>
                <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[120px] font-black text-blue-600 leading-[0.85] tracking-tighter text-left uppercase relative">
                  {text2}
                  {text2.length >= 0 && text1.length === fullText1.length && text2.length < fullText2.length && (
                    <span className="inline-block w-[4px] lg:w-[6px] h-[0.8em] bg-slate-900 dark:bg-white ml-2 animate-pulse align-middle"></span>
                  )}
                </h1>
              </div>

              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-gray-400 mb-8 lg:mb-12 leading-relaxed max-w-2xl font-medium text-left">
                Equipping students with the knowledge, skills, and mindset to become active, innovative contributors to society.
              </p>
            </div>

            {/* 2nd Place: Hero Image (Ordered after text on mobile) */}
            <div className="w-full lg:col-span-5 order-2 relative py-4 lg:py-0">
              <div className="relative">
                <div className="relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[480px] mx-auto aspect-[4/5] rounded-[32px] sm:rounded-[40px] lg:rounded-[56px] overflow-hidden border-[6px] lg:border-[12px] border-white dark:border-slate-800 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] ring-1 ring-slate-100 dark:ring-slate-700 transform rotate-1 lg:rotate-2">
                  <img 
                    src="https://i.ibb.co/svFD3GyR/Whats-App-Image-2026-01-07-at-4-50-45-PM-4.jpg" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover transition-transform duration-[2.5s] hover:scale-105"
                    onError={handleImageError}
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
                </div>

                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 lg:-bottom-8 lg:-right-8 w-12 h-12 sm:w-16 sm:h-16 lg:w-28 lg:h-28 bg-blue-600 rounded-2xl lg:rounded-[32px] flex items-center justify-center text-white shadow-2xl animate-float z-20">
                  <i className="fas fa-microchip text-xl sm:text-2xl lg:text-5xl"></i>
                </div>
              </div>
            </div>

            {/* 3rd Place: CTA Buttons (Final order on mobile) */}
            <div className="w-full lg:col-span-12 order-3 text-left mt-8 lg:mt-0">
              <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-5 lg:gap-8">
                <div className="relative group w-full sm:w-auto">
                  <Link 
                    to="/challenges" 
                    className="group relative bg-slate-900 dark:bg-black text-white px-10 py-5 rounded-[24px] text-[13px] font-black uppercase tracking-widest shadow-2xl hover:bg-blue-600 transition-all flex items-center justify-center space-x-4 active:scale-95 z-10"
                  >
                    <span>Challenges</span>
                    <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                  </Link>
                </div>

                <Link 
                  to="/reviews" 
                  className="w-full sm:w-auto bg-white dark:bg-slate-800/70 backdrop-blur-xl text-slate-900 dark:text-white px-10 py-5 rounded-[24px] text-[13px] font-black uppercase tracking-widest shadow-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-center border border-slate-200 dark:border-white/10 active:scale-95"
                >
                  Our Story
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section id="problem-statement-info" className="py-24 bg-slate-900 dark:bg-black relative overflow-hidden text-left">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=70&w=1200" 
            className="w-full h-full object-cover grayscale" 
            alt="Context" 
            loading="lazy"
            decoding="async"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="text-left order-2 lg:order-1">
              <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Problem Statement</span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-10 leading-[1.1] tracking-tighter">
                The <span className="text-blue-500">Human Capital</span> Constraints.
              </h2>
              <div className="space-y-6 text-gray-400 text-base leading-relaxed font-medium">
                <p>
                  According to the World Bank Human Capital Index, children born in Cameroon today are expected to reach only <span className="text-white font-bold">38%</span> of their potential productivity as adults, compared to the 70% global average. Although about 44% of eligible children enroll in secondary school, these few students face a low likelihood of developing higher-order thinking skills (HOTS). This widespread underdevelopment of human capital undermines Cameroon’s potential for sustainable economic growth.
                </p>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-square max-w-[320px] mx-auto">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#1e293b" strokeWidth="8" />
                  <circle 
                    cx="50" cy="50" r="45" fill="none" 
                    stroke="#2563eb" strokeWidth="8" 
                    strokeDasharray="282.7" 
                    strokeDashoffset="175.2" 
                    strokeLinecap="round"
                    className="transition-all duration-[2s] ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-6xl font-black text-white leading-none">38%</span>
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-2 text-center px-8">National Benchmark</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section id="mission-statement-info" className="py-24 bg-white dark:bg-slate-900 text-left transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-left">
             <h2 className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-8 text-left">Mission Statement</h2>
             <div className="space-y-8">
               <p className="text-slate-600 dark:text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-4xl">
                  Our mission is to provide relevant quality education for secondary school students in <span className="text-blue-600">Cameroon</span>, equipping them with the knowledge, skills, and mindset to become active, innovative contributors to society.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Proposed Solution Section */}
      <section id="proposed-solution" className="py-24 bg-slate-900 dark:bg-black text-left transition-colors duration-300 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none grayscale">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=70&w=1200" 
            className="w-full h-full object-cover" 
            alt="Context" 
            loading="lazy"
            decoding="async"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl text-left mb-16">
             <h2 className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] mb-6 text-left">Proposed Solution</h2>
             <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-4xl">
                Mission Genesis is an AI-powered learning platform that transforms how secondary school students in Cameroon learn, think, and apply knowledge. It shifts education from rote memorization to real-world problem-solving, skill development, and opportunity discovery.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: 'Measure Skills, Not Grades', 
                icon: 'fa-id-card-clip', 
                desc: 'Traditional grades hide real ability. Mission Genesis replaces exams with a Skill Passport that tracks how students grow in problem-solving, systems thinking, innovation, and resilience. Progress is measured by decisions made, strategies tested, and adaptability—not just right or wrong answers.',
              },
              { 
                title: 'Learn by Doing, Not Memorization', 
                icon: 'fa-vial-circle-check', 
                desc: 'Mission Genesis turns academic concepts into interactive missions set in real African contexts. Instead of memorizing formulas, students apply physics, math, biology, and chemistry to solve real community problems—building critical thinking, creativity, and applied reasoning through action.',
              }
            ].map((pillar) => (
              <div key={pillar.title} className="group relative bg-white/5 dark:bg-white/5 p-10 rounded-[40px] border border-white/10 transition-all duration-500 hover:bg-white/10 hover:shadow-2xl hover:-translate-y-2 overflow-hidden text-left">
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-blue-500 mb-8 shadow-sm border border-white/10 transform group-hover:scale-110 group-hover:rotate-6 transition-all">
                    <i className={`fas ${pillar.icon} text-xl`}></i>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-600 transition-colors text-left">{pillar.title}</h4>
                  <p className="text-gray-400 leading-relaxed font-medium text-base text-left">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoGrid />

      {/* Team Section */}
      <section ref={teamSectionRef} className="py-24 bg-white dark:bg-black text-left transition-colors duration-300 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="text-left">
              <h3 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter text-left">
                Our <span className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-xl inline-block ml-1">Team</span>
              </h3>
            </div>
            <Link to="/reviews" className="px-10 py-5 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-black text-[13px] uppercase tracking-[0.2em] rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95 border border-slate-200 dark:border-white/5">
              Our Story
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <div 
                key={member.id} 
                className={`group text-center transition-all duration-1000 ease-out transform ${
                  teamVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-12 scale-90'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative aspect-square max-w-[180px] mx-auto rounded-[32px] overflow-hidden mb-6 border-4 border-slate-50 dark:border-slate-800 shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" 
                    onError={handleImageError} 
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h5 className="text-sm font-black text-slate-900 dark:text-white leading-tight mb-1">{member.name}</h5>
                <p className="text-[9px] font-bold text-blue-600 uppercase tracking-widest">{member.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
