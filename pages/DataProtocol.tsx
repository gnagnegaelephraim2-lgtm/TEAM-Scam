
import React from 'react';

const DataProtocol: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <header className="mb-16 text-left">
          <h2 className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Technical Standards</h2>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter">
            Data <span className="gradient-text">Protocol</span>
          </h1>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
        </header>

        <div className="prose prose-blue max-w-none text-gray-600 font-medium leading-relaxed space-y-8">
          <section>
            <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">The Competency Ledger</h3>
            <p>
              Mission Genesis utilizes a proprietary Competency Ledger to track student growth. Unlike traditional gradebooks, our ledger records the <strong>logic path</strong> a student takes to solve a problem. This data protocol ensures that we are measuring actual cognitive development rather than just the final answer.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-blue-50 p-8 rounded-[40px] border border-blue-100">
              <h4 className="text-blue-900 font-black mb-2 uppercase tracking-widest text-xs">Encryption Standard</h4>
              <p className="text-sm text-blue-800">AES-256 bit encryption at rest for all competency verification records.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100">
              <h4 className="text-gray-950 font-black mb-2 uppercase tracking-widest text-xs">Anonymization</h4>
              <p className="text-sm">Researchers analyze trends using anonymized ID pools to prevent bias.</p>
            </div>
          </div>

          <section>
            <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Storage & Redundancy</h3>
            <p>
              Data is stored on distributed nodes to ensure 99.9% availability for schools in the Southwest Region of Cameroon. This redundancy is critical for the real-time execution of 'The Hunt' challenges, where hundreds of students compete simultaneously.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Verification Audits</h3>
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
