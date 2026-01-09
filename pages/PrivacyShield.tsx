
import React from 'react';

const PrivacyShield: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-300 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <header className="mb-16">
          <h2 className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4 text-left">Legal Framework</h2>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter text-left">
            Privacy <span className="gradient-text">Shield</span>
          </h1>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
        </header>

        <div className="prose prose-blue max-w-none text-slate-800 dark:text-gray-400 font-medium leading-relaxed space-y-8">
          <section>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Mission Integrity & Data Ethics</h3>
            <p>
              Mission Genesis is committed to the highest standards of data ethics. As an innovation think-tank operating in Buea, Team S.C.A.A.M recognizes that student data is a sacred trust. Our Privacy Shield framework ensures that every piece of information collected from competency metrics to simulation results is used exclusively for pedagogical enhancement.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Data Collection Scope</h3>
            <p>
              We collect minimal personal identifiers. Our focus is on <strong>behavioral metadata</strong> and <strong>competency acquisition</strong>. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Problem-solving velocity within STEM simulations.</li>
              <li>Collaborative engagement scores during 'The Hunt'.</li>
              <li>High-Order Thinking Skills (HOTS) progression curves.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Regional Compliance</h3>
            <p>
              Our protocols are designed to align with the Republic of Cameroon's emerging digital safety standards and the broader CEMAC regional data protection guidelines. We utilize end-to-end encryption for all data transmissions between schools in Buea and our central verification engine.
            </p>
          </section>

          <section className="bg-slate-100/80 dark:bg-slate-900 p-8 rounded-[40px] border border-slate-400 dark:border-slate-800 mt-12 shadow-sm">
            <h4 className="text-slate-950 dark:text-white font-black mb-2">Transparency Note</h4>
            <p className="text-sm italic">
              "We believe that students should own their progress. At any point, a participant can request a full audit of the skill verification data stored under their unique Mission ID." — Team S.C.A.A.M Legal Dept.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyShield;
