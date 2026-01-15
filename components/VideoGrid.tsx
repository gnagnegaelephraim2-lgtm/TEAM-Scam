import React from 'react';
import { VIDEOS, SOCIALS } from '../constants';

const VideoGrid: React.FC = () => {
  const FALLBACK_THUMBNAIL = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=70&w=800";

  const handleOpenVideo = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="video-showcase" className="py-20 bg-white dark:bg-slate-900/50 relative overflow-hidden transition-colors duration-200">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1e40af 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight tracking-tighter uppercase mb-2">
              Mission <span className="gradient-text">Archives</span>
            </h2>
            <h3 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-4">
              Challenge Showcase Portfolio
            </h3>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              Direct access to Mission Genesis documentation. Snappy, optimized playback for rapid insight.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              href={SOCIALS.YOUTUBE}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-red-600 text-white rounded-xl text-[10px] font-black hover:bg-red-700 transition-all shadow-lg shadow-red-600/20 flex items-center justify-center space-x-2 group active:scale-95"
            >
              <i className="fab fa-youtube text-base"></i>
              <span>Official Channel</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEOS.map((video, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={video.id}
                onClick={() => handleOpenVideo(video.url)}
                className={`group cursor-pointer bg-white dark:bg-slate-800 rounded-[28px] overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col ${isFeatured ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <div
                  className={`relative overflow-hidden ${isFeatured ? 'aspect-[21/9]' : 'aspect-video'}`}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = FALLBACK_THUMBNAIL;
                    }}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/5 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 group-hover:bg-white group-hover:text-blue-600 transition-all duration-200">
                      <i className="fas fa-play text-[9px] ml-1"></i>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest rounded-lg">
                      {video.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h4 className={`font-black text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors leading-tight ${isFeatured ? 'text-xl md:text-2xl' : 'text-lg'}`}>
                      {video.title}
                    </h4>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-700 mt-4">
                    <div className="text-[9px] font-black text-blue-600 flex items-center space-x-2 tracking-[0.2em] group/btn">
                      <span>OPEN STREAM</span>
                      <i className="fas fa-external-link-alt text-[7px] group-hover/btn:translate-x-1 transition-transform"></i>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoGrid;