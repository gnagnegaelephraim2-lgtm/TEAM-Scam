
import React from 'react';

const DataProtocol: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-300 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <header className="mb-16 text-left">
          <h2 className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Technical Standards</h2>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">
            Data <span className="gradient-text">Protocol</span>
          </h1>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
        </header>

        <div className="prose prose-blue max-w-none text-slate-800 dark:text-gray-400 font-medium leading-relaxed space-y-8">
          <section>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">The Competency Ledger</h3>
            <p>
              Mission Genesis utilizes a proprietary Competency Ledger to track student growth. Unlike traditional gradebooks, our ledger records the <strong>logic path</strong> a student takes to solve a problem. This data protocol ensures that we are measuring actual cognitive development rather than just the final answer.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-blue-100 dark:bg-blue-900/20 p-8 rounded-[40px] border border-blue-300 dark:border-blue-800/50 text-left">
              <h4 className="text-blue-900 dark:text-blue-400 font-black mb-2 uppercase tracking-widest text-xs">Encryption Standard</h4>
              <p className="text-sm text-blue-950 dark:text-blue-300/80 font-bold">AES-256 bit encryption at rest for all competency verification records.</p>
            </div>
            <div className="bg-slate-100/50 dark:bg-slate-900 p-8 rounded-[40px] border border-slate-400 dark:border-slate-800 shadow-sm text-left">
              <h4 className="text-slate-950 dark:text-white font-black mb-2 uppercase tracking-widest text-xs">Anonymization</h4>
              <p className="text-sm font-bold">Researchers analyze trends using anonymized ID pools to prevent bias.</p>
            </div>
          </div>

          <section>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Storage & Redundancy</h3>
            <p>
              Data is stored on distributed nodes to ensure 99.9% availability for schools in the Southwest Region of Cameroon. This redundancy is critical for the real-time execution of 'The Hunt' challenges, where hundreds of students compete simultaneously.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Verification Audits</h3>
            <p>
              Monthly technical audits are performed by the S.C.A.A.M technical team to ensure the integrity of our Verification Engine. Any anomalies in the competency ledger are flagged and investigated by the Impact Analyst.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DataProtocol;
