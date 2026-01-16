import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import VideoGrid from '../components/VideoGrid';
import { TEAM_MEMBERS } from '../constants';

const Home: React.FC = () => {
  const [teamVisible, setTeamVisible] = useState(false);
  const [problemVisible, setProblemVisible] = useState(false);
  const [missionVisible, setMissionVisible] = useState(false);
  const [solutionVisible, setSolutionVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  const teamSectionRef = useRef<HTMLElement>(null);
  const problemSectionRef = useRef<HTMLElement>(null);
  const missionSectionRef = useRef<HTMLElement>(null);
  const solutionSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === teamSectionRef.current) setTeamVisible(true);
            if (entry.target === problemSectionRef.current) setProblemVisible(true);
            if (entry.target === missionSectionRef.current) setMissionVisible(true);
            if (entry.target === solutionSectionRef.current) setSolutionVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (teamSectionRef.current) observer.observe(teamSectionRef.current);
    if (problemSectionRef.current) observer.observe(problemSectionRef.current);
    if (missionSectionRef.current) observer.observe(missionSectionRef.current);
    if (solutionSectionRef.current) observer.observe(solutionSectionRef.current);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://i.ibb.co/b5cSGrnw/Pic4.jpg";
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    (e.target as HTMLImageElement).classList.add('loaded');
  };

  return (
    <div className="min-h-screen transition-colors duration-200 bg-white dark:bg-slate-950">
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 lg:pb-0 lg:pt-24 overflow-hidden hero-pattern text-left">
        <div 
          className="absolute inset-0 z-0 opacity-[0.3] dark:opacity-[0.08] grayscale pointer-events-none will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        >
          <img 
            src="https://i.ibb.co/GvgnFhMG/Pic2.jpg" 
            className="w-full h-full object-cover scale-125" 
            alt="Technical Schematic Background"
            loading="eager"
            decoding="async"
            onLoad={handleImageLoad}
          />
          <div className="absolute inset-0 bg-white dark:bg-slate-950 opacity-40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="w-full lg:col-span-7 order-1 flex flex-col">
              <div className="inline-flex self-start items-center space-x-2 px-4 py-2 bg-white dark:bg-blue-900/30 border border-slate-200 dark:border-blue-800/50 rounded-full mb-6 lg:mb-8 animate-fade-in shadow-sm">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-ping"></span>
                <span className="text-[10px] font-black text-slate-600 dark:text-blue-300 uppercase tracking-[0.2em]">S.C.A.A.M Impact</span>
              </div>
              
              <div className="mb-4 lg:mb-8 min-h-[100px] md:min-h-[140px] lg:min-h-[260px] flex flex-col justify-center">
                <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[120px] font-black text-slate-900 dark:text-white leading-[0.85] tracking-tighter text-left uppercase mb-1 lg:mb-4">
                  TEAM
                </h1>
                <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[120px] font-black text-blue-600 leading-[0.85] tracking-tighter text-left uppercase">
                  S.C.A.A.M
                </h1>
              </div>

              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-gray-400 mb-8 lg:mb-12 leading-relaxed max-w-2xl font-medium">
                Equipping students with the knowledge, skills, and mindset to become active, innovative contributors to society.
              </p>
            </div>

            <div className="w-full lg:col-span-5 order-2 relative py-4 lg:py-0">
              <div className="relative">
                <div className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[480px] mx-auto aspect-[4/5] rounded-[40px] sm:rounded-[48px] lg:rounded-[56px] overflow-hidden border-[8px] lg:border-[12px] border-white dark:border-slate-800 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] ring-1 ring-slate-100 dark:ring-slate-700 transform rotate-1 lg:rotate-2 group">
                  <img 
                    src="https://i.ibb.co/svFD3GyR/Whats-App-Image-2026-01-07-at-4-50-45-PM-4.jpg" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                    loading="eager"
                    decoding="async"
                    onError={handleImageError}
                    onLoad={handleImageLoad}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 w-14 h-14 sm:w-20 sm:h-20 lg:w-28 lg:h-28 bg-blue-600 rounded-[20px] sm:rounded-[28px] lg:rounded-[32px] flex items-center justify-center text-white shadow-2xl animate-float z-20">
                  <i className="fas fa-microchip text-2xl sm:text-3xl lg:text-5xl"></i>
                </div>
              </div>
            </div>

            <div className="w-full lg:col-span-12 order-3 mt-10 lg:mt-0">
              <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-6 lg:gap-8">
                <Link 
                  to="/challenges" 
                  className="group relative bg-slate-900 dark:bg-black text-white px-10 py-5 rounded-[24px] text-[13px] font-black uppercase tracking-widest shadow-2xl hover:bg-blue-600 transition-all flex items-center justify-center space-x-4 active:scale-95 z-10 w-full sm:w-auto"
                >
                  <span>Challenges</span>
                  <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                </Link>

                <Link 
                  to="/reviews" 
                  className="w-full sm:w-auto bg-white dark:bg-slate-800/70 backdrop-blur-xl text-slate-900 dark:text-white px-10 py-5 rounded-[24px] text-[13px] font-black uppercase tracking-widest shadow-lg hover:bg-white dark:hover:bg-slate-700 transition-all text-center border border-slate-200 dark:border-white/10 active:scale-95"
                >
                  Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section 
        ref={problemSectionRef}
        id="problem-statement-info" 
        className="py-24 bg-slate-900 dark:bg-black relative overflow-hidden text-left"
      >
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=70&w=1200" 
            className="w-full h-full object-cover grayscale" 
            alt="Context" 
            loading="lazy"
            decoding="async"
            onLoad={handleImageLoad}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <h2 className={`text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tighter uppercase transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${problemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Problem <span className="text-blue-500">Statement</span>
              </h2>
              <h3 className={`text-xl md:text-2xl font-bold text-blue-500 mb-10 tracking-tight transition-all duration-1000 delay-200 ease-[cubic-bezier(0.25,1,0.5,1)] ${problemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                The Human Capital Constraints.
              </h3>
              <div className={`space-y-6 text-gray-400 text-base leading-relaxed font-medium transition-all duration-1000 delay-400 ease-[cubic-bezier(0.25,1,0.5,1)] ${problemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <p>
                  According to the World Bank Human Capital Index, children born in Cameroon today are expected to reach only <span className="text-white font-bold">38%</span> of their potential productivity as adults, compared to the 70% global average. Although about 44% of eligible children enroll in secondary school, these few students face a low likelihood of developing higher-order thinking skills (HOTS). This widespread underdevelopment of human capital undermines Cameroon’s potential for sustainable economic growth.
                </p>
              </div>
            </div>

            <div className={`relative order-1 lg:order-2 transition-all duration-1000 delay-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${problemVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="relative aspect-square max-w-[320px] mx-auto">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#1e293b" strokeWidth="8" />
                  <circle 
                    cx="50" cy="50" r="45" fill="none" 
                    stroke="#2563eb" strokeWidth="8" 
                    strokeDasharray="282.7" 
                    strokeDashoffset={problemVisible ? 175.2 : 282.7}
                    strokeLinecap="round"
                    className="transition-all duration-[1.5s] delay-500 ease-out"
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
      <section 
        ref={missionSectionRef}
        id="mission-statement-info" 
        className="py-24 bg-white dark:bg-slate-900 text-left transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
             <h2 className={`text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter uppercase transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Mission <span className="text-blue-600">Statement</span>
             </h2>
             <div className={`space-y-8 transition-all duration-1000 delay-200 ease-[cubic-bezier(0.25,1,0.5,1)] ${missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
               <p className="text-slate-600 dark:text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-4xl">
                  Our mission is to provide relevant quality education for secondary school students in <span className="text-blue-600">Cameroon</span>, equipping them with the knowledge, skills, and mindset to become active, innovative contributors to society.
               </p>
             </div>
          </div>
        </div>
      </section>

      <VideoGrid />

      {/* Team Section */}
      <section 
        ref={teamSectionRef} 
        className="py-24 bg-white dark:bg-black text-left transition-colors duration-200 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col md:flex-row items-end justify-between mb-20 gap-8 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-left">
              <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
                Our <span className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-xl inline-block ml-1">Team</span>
              </h3>
            </div>
            <Link to="/reviews" className="px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-black text-[13px] uppercase tracking-[0.2em] rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95 border border-slate-200 dark:border-white/5">
              Our Story
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <div 
                key={member.id} 
                className={`group text-center transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] transform ${
                  teamVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-square max-w-[180px] mx-auto rounded-[32px] overflow-hidden mb-6 border-4 border-white dark:border-slate-800 shadow-lg bg-white">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" 
                    loading="lazy"
                    decoding="async"
                    onLoad={handleImageLoad}
                    onError={handleImageError} 
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