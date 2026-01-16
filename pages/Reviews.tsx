import React from 'react';
import { Link } from 'react-router-dom';
import { TEAM_MEMBERS, SOCIALS } from '../constants';

const Reviews: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800";
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    (e.target as HTMLImageElement).classList.add('loaded');
  };

  const GALLERY_IMAGES = [
    { url: "https://i.ibb.co/hx4QB1Mk/Pic9.jpg", tag: "GENESIS_DISCOVERY", title: "Field Research Buea" },
    { url: "https://i.ibb.co/6cZ25Nky/S-A-2.jpg", tag: "GENESIS_INT_01", title: "Technical Blueprint" },
    { url: "https://i.ibb.co/4R7Fvd7v/S-B-2.jpg", tag: "LAB_OPERATIONS", title: "Innovation Lab" },
    { url: "https://i.ibb.co/P816TbB/F-1.jpg", tag: "HELP_LAB_BUEA", title: "Community Outreach" },
    { url: "https://i.ibb.co/XfdBfvKP/S-C-9.jpg", tag: "VISION_CORE_LAUNCH", title: "Core Architecture" },
    { url: "https://i.ibb.co/yFvhwTtr/S-M-2.jpg", tag: "DISCOVER_AFRICA", title: "Cultural Context" },
    { url: "https://i.ibb.co/rRrX6GbR/J-1.jpg", tag: "DIGITAL_FOOTPRINT", title: "Platform Alpha" },
    { url: "https://i.ibb.co/LXcbQL8S/Pic1.jpg", tag: "BUEA_THINK_TANK", title: "Strategic Session" }
  ];

  return (
    <div className="pt-20 bg-white dark:bg-slate-950 transition-colors duration-200 min-h-screen">
      {/* Hero Header Section */}
      <section className="relative py-20 md:py-28 overflow-hidden mb-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/5WxnqWFG/Pic6.jpg" 
            alt="Story Background" 
            className="w-full h-full object-cover"
            onError={handleImageError}
            onLoad={handleImageLoad}
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-white/80 dark:bg-slate-950/85 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white dark:via-slate-950/20 dark:to-slate-950"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in">
          <header className="text-center">
            <h2 className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] mb-6">Mission Debrief</h2>
            
            <div className="relative h-24 md:h-32 flex items-center justify-center mb-10">
              <span className="absolute text-[60px] md:text-[120px] font-black text-slate-200/50 dark:text-slate-900/40 uppercase tracking-tighter select-none">Our</span>
              <h1 className="relative text-4xl md:text-6xl font-black tracking-tighter z-10">
                <span className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow-xl inline-block transform -rotate-1">Story</span>
              </h1>
            </div>

            <p className="text-base md:text-xl text-slate-800 dark:text-gray-300 max-w-xl mx-auto leading-relaxed font-bold">
              Strategic reflections from the Team S.C.A.A.M think-tank on the evolution and deployment of Mission Genesis.
            </p>
          </header>
        </div>
      </section>

      {/* Reflections Timeline */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="space-y-12 md:space-y-16">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="group bg-white dark:bg-slate-900 rounded-[36px] p-6 md:p-10 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col lg:flex-row gap-10 items-center lg:items-start text-left">
              {/* Profile Picture */}
              <div className="shrink-0">
                <div className="relative">
                  <div className="absolute -inset-3 bg-blue-600 rounded-full opacity-0 group-hover:opacity-10 blur-xl transition-opacity"></div>
                  <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      onLoad={handleImageLoad}
                      onError={handleImageError}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>

              {/* Reflection Content */}
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-100/50 dark:border-blue-800/50">
                    {member.role}
                  </span>
                  <span className="text-[9px] font-bold text-slate-500 dark:text-gray-500 uppercase tracking-widest">
                    {member.country}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-black text-slate-950 dark:text-white mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-300">{member.name}</h3>
                
                <div className="relative mb-8 text-left">
                  <i className="fas fa-quote-left text-slate-100 dark:text-blue-900/10 text-5xl absolute -top-6 -left-6 -z-10"></i>
                  <p className="text-slate-700 dark:text-gray-400 text-base md:text-lg leading-relaxed italic font-medium relative z-10 text-left">
                    "{member.reflection}"
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 text-left">
                  <div className="max-w-md text-left">
                    <h4 className="text-[10px] font-black text-slate-500 dark:text-gray-500 uppercase tracking-[0.3em] mb-2 text-left">Core Contribution</h4>
                    <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed font-medium text-left">
                      {member.contribution}
                    </p>
                  </div>
                  
                  <Link to={`/reflections#${member.id}`} className="shrink-0 text-[10px] font-black text-blue-600 uppercase tracking-widest hover:translate-x-1 transition-transform whitespace-nowrap px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/20 active:scale-95">
                    Full Log <i className="fas fa-arrow-right ml-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optimized Mission Gallery Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30 relative overflow-hidden transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-left">
            <h2 className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4 text-left">Visual Documentation</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter text-left uppercase leading-none">
              Mission <span className="text-blue-600">Gallery</span>
            </h3>
            <p className="text-slate-500 dark:text-gray-400 mt-4 text-lg font-medium text-left">A pictorial journey through the genesis of an educational revolution.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((img, idx) => (
              <div 
                key={idx} 
                className={`group relative overflow-hidden rounded-[32px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${idx === 0 || idx === 3 || idx === 6 ? 'sm:row-span-2' : ''}`}
              >
                <div className="h-full overflow-hidden">
                  <img 
                    src={img.url} 
                    alt={img.tag} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="text-left">
                    <span className="text-blue-400 font-mono text-[9px] uppercase tracking-widest font-black block mb-2">ARCHIVE_ID: {img.tag}</span>
                    <p className="text-white font-black uppercase text-xs tracking-tighter">{img.title}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <i className="fas fa-expand text-[10px]"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Data Analysis Section - Transformed to White Mode */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <section className="mt-24 bg-white dark:bg-slate-900 rounded-[48px] p-10 md:p-16 text-center relative overflow-hidden group transition-all duration-500 shadow-2xl border border-slate-200 dark:border-white/10">
          <div className="absolute inset-0 z-0">
             <img 
               src="https://i.ibb.co/hx4QB1Mk/Pic9.jpg" 
               className="w-full h-full object-cover opacity-20 dark:opacity-10 group-hover:scale-105 transition-transform duration-[3s]" 
               alt="Background Analysis" 
               onLoad={handleImageLoad}
             />
             <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/80 backdrop-blur-[1px]"></div>
          </div>
          
          <div className="relative z-10 py-4">
            <h2 className="text-3xl md:text-6xl font-black text-slate-950 dark:text-white mb-6 tracking-tighter leading-none">
              Data <span className="text-blue-600">Analysis</span>
            </h2>
            <p className="text-sm md:text-xl text-slate-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-bold text-center uppercase tracking-wide">
              Validating educational gaps in Cameroon via real-time student profiling.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={`mailto:ayuksandrine5@gmail.com`} 
                className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95"
              >
                Contact Team
              </a>
              <Link 
                to="/data-hub"
                className="w-full sm:w-auto bg-slate-950 dark:bg-white text-white dark:text-slate-950 border border-slate-200 dark:border-white/10 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-slate-800 dark:hover:bg-slate-100 transition-all active:scale-95"
              >
                Access Data Hub
              </Link>
            </div>
          </div>
        </section>
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

export default Reviews;