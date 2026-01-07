
import React from 'react';
import { Link } from 'react-router-dom';
import { TEAM_MEMBERS, SOCIALS } from '../constants';

const Reviews: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800";
  };

  return (
    <div className="pt-32 pb-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center">
          <h2 className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] mb-8">Mission Debrief</h2>
          
          <div className="relative h-32 md:h-48 flex items-center justify-center mb-12">
            <span className="absolute text-[80px] md:text-[180px] font-black text-slate-100 dark:text-slate-900 uppercase tracking-tighter select-none">Our</span>
            <h1 className="relative text-4xl md:text-7xl font-black tracking-tighter z-10">
              <span className="bg-blue-600 text-white px-6 md:px-10 py-2 md:py-4 rounded-xl shadow-2xl inline-block transform -rotate-1">Story</span>
            </h1>
          </div>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
            Strategic reflections from the Team S.C.A.A.M think-tank on the evolution and deployment of Mission Genesis.
          </p>
        </header>

        <div className="space-y-16">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="group bg-white dark:bg-slate-900 rounded-[40px] p-8 md:p-12 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col lg:flex-row gap-12 items-center lg:items-start text-left">
              {/* Profile Picture */}
              <div className="shrink-0">
                <div className="relative">
                  <div className="absolute -inset-3 bg-blue-600 rounded-full opacity-5 blur-xl group-hover:opacity-20 transition-opacity"></div>
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                      onError={handleImageError}
                    />
                  </div>
                </div>
              </div>

              {/* Reflection Content */}
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-100/50 dark:border-blue-800/50">
                    {member.role}
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                    {member.country}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-gray-950 dark:text-white mb-6 tracking-tight group-hover:text-blue-600 transition-colors">{member.name}</h3>
                
                <div className="relative mb-10">
                  <i className="fas fa-quote-left text-blue-50 dark:text-blue-900/10 text-6xl absolute -top-8 -left-8 -z-10"></i>
                  <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed italic font-medium relative z-10">
                    "{member.reflection}"
                  </p>
                </div>

                <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-between items-end">
                  <div className="max-w-md">
                    <h4 className="text-[11px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.3em] mb-4">Core Contribution</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed font-medium">
                      {member.contribution}
                    </p>
                  </div>
                  
                  <div className="relative p-2 ml-4">
                    <Link to={`/reflections#${member.id}`} className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:underline whitespace-nowrap px-4 py-2 block">
                      Read Full Reflection <i className="fas fa-arrow-right ml-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Data Analysis Section */}
        <section className="mt-32 bg-gray-950 dark:bg-black rounded-[60px] p-16 text-center relative overflow-hidden group transition-colors shadow-2xl">
          <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <div className="relative z-10 py-8">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              Data <span className="text-blue-500">Analysis</span>
            </h2>
            <p className="text-gray-400 dark:text-gray-500 mb-12 max-w-2xl mx-auto text-lg leading-relaxed font-medium text-center">
              We conducted research by sending questionnaires to over 50 students in Cameroon aged between 12-18 to validate our assumptions about the current educational landscape.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a 
                href={`mailto:ayuksandrine5@gmail.com`} 
                className="bg-blue-600 text-white px-10 py-5 rounded-[24px] font-black uppercase tracking-widest text-[12px] hover:bg-blue-500 transition-all shadow-2xl shadow-blue-600/20 active:scale-95"
              >
                Contact Us
              </a>
              <Link 
                to="/data-hub"
                className="bg-white/5 text-white border border-white/10 px-10 py-5 rounded-[24px] font-black uppercase tracking-widest text-[12px] hover:bg-white/10 transition-all active:scale-95"
              >
                Enter Data Hub
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Reviews;
