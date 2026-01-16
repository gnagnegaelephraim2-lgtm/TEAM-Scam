import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const DATA_SOURCES = [
  { name: "MINESEC", full: "Ministry of Secondary Education", url: "https://www.minesec.gov.cm", icon: "fa-building-columns", color: "blue" },
  { name: "INS", full: "National Institute of Statistics", url: "https://www.ins-cameroun.cm", icon: "fa-chart-pie", color: "emerald" },
  { name: "UNESCO", full: "UIS Cameroon Profile", url: "http://uis.unesco.org/en/country/cm", icon: "fa-globe", color: "indigo" },
  { name: "World Bank", full: "Education Data Portal", url: "https://data.worldbank.org/country/cameroon", icon: "fa-database", color: "sky" }
];

const DataHub: React.FC = () => {
  const [bootSequence, setBootSequence] = useState(true);
  const [logs, setLogs] = useState<string[]>([]);
  const [systemUptime, setSystemUptime] = useState('00:00:00');
  const [activeModule, setActiveModule] = useState<boolean>(false);
  const [moduleLoading, setModuleLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState(0);
  
  // Command Line State
  const [commandInput, setCommandInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>(["SESSION ESTABLISHED. TYPE 'HELP' FOR COMMANDS."]);
  const historyEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    historyEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [terminalHistory]);

  useEffect(() => {
    // Simulate boot sequence - accelerated
    const messages = [
      "INITIALIZING MISSION GENESIS DATA HUB...",
      "ESTABLISHING SECURE LINK TO NATIONAL NODE...",
      "LOADING NEURAL COMPETENCY MAPPINGS...",
      "SYNCING WITH CAMEROON IMPACT ANALYTICS...",
      "SYSTEM STATUS: OPTIMAL",
      "WELCOME, OPERATOR."
    ];
    
    let current = 0;
    const interval = setInterval(() => {
      if (current < messages.length) {
        setLogs(prev => [...prev, messages[current]]);
        current++;
      } else {
        clearInterval(interval);
        setTimeout(() => setBootSequence(false), 200);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const diff = Date.now() - start;
      const h = Math.floor(diff / 3600000).toString().padStart(2, '0');
      const m = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
      const s = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
      setSystemUptime(`${h}:${m}:${s}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLaunchModule = () => {
    setModuleLoading(true);
    let p = 0;
    const interval = setInterval(() => {
      p += 5;
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setModuleLoading(false);
        setActiveModule(true);
      }
    }, 50);
  };

  const processCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commandInput.trim()) return;

    const cmd = commandInput.toLowerCase().trim();
    setTerminalHistory(prev => [...prev, `> ${commandInput.toUpperCase()}`]);

    let response = "";
    switch (cmd) {
      case 'help':
        response = "AVAILABLE COMMANDS: STATUS, CLEAR, SCAN, LAUNCH, STATS, WHOAMI, DATA";
        break;
      case 'status':
        response = `SYSTEM STABLE. UPTIME: ${systemUptime}. DATA ACCURACY: 98.4%. NODES: 4 ACTIVE.`;
        break;
      case 'clear':
        setTerminalHistory(["TERMINAL BUFFER PURGED."]);
        setCommandInput('');
        return;
      case 'scan':
        response = "SCANNING NATIONAL COMPETENCY MATRIX... NO ANOMALIES DETECTED.";
        break;
      case 'launch':
        handleLaunchModule();
        response = "INITIATING UPLINK PROTOCOL...";
        break;
      case 'stats':
      case 'data':
        response = "FETCHING EXTERNAL UPLINKS: [MINESEC], [INS], [UNESCO], [WORLD BANK]. ACCESS VIA REPOSITORY GRID.";
        break;
      case 'whoami':
        response = "OPERATOR ROLE: GENESIS STRATEGIST. ACCESS LEVEL: ALPHA.";
        break;
      default:
        response = `COMMAND NOT RECOGNIZED: '${cmd}'. TYPE 'HELP' FOR SYSTEM PROTOCOLS.`;
    }

    // Direct response without delay
    setTerminalHistory(prev => [...prev, response]);
    setCommandInput('');
  };

  if (bootSequence) {
    return (
      <div className="fixed inset-0 bg-[#0f172a] flex items-center justify-center z-[200] font-mono p-8">
        <div className="max-w-xl w-full">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-ping"></div>
            <span className="text-blue-500 font-black text-sm uppercase tracking-[0.3em]">System Boot</span>
          </div>
          <div className="space-y-3">
            {logs.map((log, i) => (
              <div key={i} className="text-emerald-500 text-xs md:text-sm animate-fade-in flex items-center">
                <span className="mr-3 text-emerald-900 opacity-50">[{new Date().toLocaleTimeString()}]</span>
                <span className="font-bold">{log}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 h-1 w-full bg-emerald-950 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 animate-[loading_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white pt-24 pb-32 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden relative">
      {/* HUD Background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#1e3a8a22_0%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
      </div>

      {/* Module Loading Overlay */}
      {moduleLoading && (
        <div className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-xl flex items-center justify-center p-8">
           <div className="max-w-md w-full text-center">
              <div className="mb-8">
                 <i className="fas fa-satellite-dish text-4xl text-blue-500 animate-pulse"></i>
              </div>
              <h2 className="text-xl font-black uppercase tracking-widest mb-4">Establishing Uplink</h2>
              <p className="text-gray-500 text-xs mb-8 uppercase tracking-widest font-bold font-mono text-center">Synchronizing Simulation Parameters for National-Skill-Audit</p>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mb-4">
                 <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${progress}%` }}></div>
              </div>
              <p className="text-[10px] font-mono text-center text-blue-400">{progress}% MAPPED</p>
           </div>
        </div>
      )}

      {/* Active Module Simulation Overlay */}
      {activeModule && (
        <div className="fixed inset-0 z-[250] bg-[#0f172a] flex flex-col p-4 md:p-8 animate-fade-in">
           <header className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
              <div className="flex items-center space-x-4">
                 <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-black">M</div>
                 <div className="text-left">
                    <h2 className="text-sm font-black uppercase tracking-widest">Active Module: Structural Audit</h2>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Scenario: Failure Prevention Simulation</p>
                 </div>
              </div>
              <button 
                onClick={() => setActiveModule(false)}
                className="px-4 py-2 border border-red-500/30 text-red-500 text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-red-500 hover:text-white transition-all"
              >
                 Abort Session
              </button>
           </header>

           <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8 overflow-hidden">
              <div className="lg:col-span-8 bg-black border border-white/5 rounded-3xl p-6 relative overflow-hidden flex flex-col">
                 <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                 <div className="flex-grow flex items-center justify-center relative">
                    <div className="w-full h-48 flex items-end justify-center space-x-1 mb-12">
                       {[40, 60, 80, 100, 120, 100, 80, 60, 40].map((h, i) => (
                          <div key={i} className="w-8 bg-blue-500/20 border-t border-blue-500/50 relative group" style={{ height: `${h}px` }}>
                             <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">NODE_{i}</div>
                          </div>
                       ))}
                    </div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-500/30 animate-[scan_4s_linear_infinite] shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
                 </div>
                 
                 <div className="h-32 bg-white/[0.02] border border-white/5 rounded-2xl p-4 font-mono text-[10px] text-emerald-500 overflow-y-auto space-y-1 text-left">
                    <p className="opacity-50 tracking-widest">{"»» RUNNING STRESS ANALYSIS..."}</p>
                    <p>VERIFYING VECTOR: FORCE_X = 142.5kN</p>
                    <p>VERIFYING VECTOR: FORCE_Y = 289.1kN</p>
                    <p className="text-yellow-500">WARNING: ANOMALY DETECTED IN STRUCTURAL_ANCHOR</p>
                    <p>ADJUSTING LOGIC PARAMS: ACCURACY = 99.1%</p>
                    <p className="text-blue-400">INPUT REQUIRED: CONFIRM LOAD CAPACITY</p>
                 </div>
              </div>

              <div className="lg:col-span-4 space-y-6 flex flex-col">
                 <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex-grow text-left">
                    <h3 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-6">Verification Protocol</h3>
                    <div className="space-y-6">
                       <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                          <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Calculated Load Capacity</p>
                          <input type="text" placeholder="Value in kN" className="w-full bg-transparent border-b border-blue-500/50 py-2 outline-none text-xl font-black focus:border-blue-500 transition-colors" />
                       </div>
                       
                       <div className="grid grid-cols-2 gap-4">
                          <button className="py-4 bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all">Submit Calc</button>
                          <button className="py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Request Data</button>
                       </div>
                    </div>
                 </div>
                 
                 <div className="bg-blue-600 rounded-3xl p-6 text-white text-left shadow-2xl">
                    <h4 className="text-xs font-black uppercase tracking-widest mb-2">Academic Alignment</h4>
                    <p className="text-[10px] font-medium opacity-80 leading-relaxed mb-4">This simulation verifies national mastery of <strong>Structural Equilibrium</strong> and <strong>Vector Calculus</strong> protocols.</p>
                    <a href="https://www.ins-cameroun.cm" target="_blank" rel="noreferrer" className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition-all">
                      <i className="fas fa-chart-line text-[8px]"></i>
                      <span className="text-[8px] font-black uppercase tracking-widest">Verify Statistics</span>
                    </a>
                 </div>
              </div>
           </div>
           
           <style>{`
              @keyframes scan { 
                0% { transform: translateY(0); } 
                50% { transform: translateY(100%); } 
                100% { transform: translateY(0); }
              }
           `}</style>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-start mb-12 gap-8 animate-fade-in text-left">
          <div className="text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-600/10 border border-blue-500/20 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Active Node: GENESIS-BUEA-ALPHA</span>
            </div>
            <div className="inline-block border-2 border-dashed border-blue-500/40 rounded-3xl p-8 mb-4 text-left">
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white uppercase text-left leading-[0.9]">
                MISSION<br/>
                GENESIS <span className="text-blue-500">DATA HUB</span>
              </h1>
              <p className="text-[9px] font-bold text-blue-400 uppercase tracking-[0.4em] mt-4 opacity-60 text-left">Mission Genesis Data Hub</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-12 ml-4">
            <div className="text-left border-l-2 border-white/10 pl-8">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">System Uptime</p>
              <p className="font-mono text-3xl font-bold text-blue-500">{systemUptime}</p>
            </div>
            <div className="text-left border-l-2 border-white/10 pl-8">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Data Accuracy</p>
              <p className="font-mono text-3xl font-bold text-emerald-500">98.4%</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Main Dashboard Section */}
          <div className="lg:col-span-8 space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Visual Analytics Card */}
            <div className="bg-white/[0.03] border border-white/10 rounded-[40px] p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8">
                <i className="fas fa-microchip text-4xl text-blue-600/20 group-hover:scale-110 transition-transform"></i>
              </div>
              
              <div className="inline-block border border-slate-100/10 dark:border-white/10 rounded-2xl p-4 mb-8">
                <h3 className="text-2xl font-black tracking-tight flex items-center space-x-3 text-left">
                  <i className="fas fa-chart-network text-blue-500"></i>
                  <span>Cognitive Skills Balance</span>
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6 text-left">
                  {[
                    { label: "Critical Thinking", value: 46, status: "Under-practiced", color: "yellow" },
                    { label: "Problem Solving", value: 12, status: "Very Low", color: "red" },
                    { label: "Memorization Domination", value: 94, status: "Dominant", color: "blue" },
                  ].map((skill) => (
                    <div key={skill.label}>
                      <div className="flex justify-between text-[11px] font-black uppercase tracking-widest mb-2">
                        <div className="flex items-center space-x-2">
                           <span className="text-gray-400">{skill.label}</span>
                           <span className={`text-[8px] px-2 py-0.5 rounded bg-${skill.color}-500/10 text-${skill.color}-500 border border-${skill.color}-500/20`}>{skill.status}</span>
                        </div>
                        <span className="text-white">{skill.value}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-[2s] ${
                             skill.color === 'red' ? 'bg-red-500' : 
                             skill.color === 'yellow' ? 'bg-yellow-500' : 
                             skill.color === 'orange' ? 'bg-orange-500' : 'bg-blue-600'
                          }`}
                          style={{ width: `${skill.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="relative aspect-square flex items-center justify-center border border-white/10 rounded-3xl p-8 m-2 transition-colors bg-white/[0.01]">
                  <div className="absolute inset-4 border border-red-500/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
                  <div className="absolute inset-10 border border-blue-500/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                  <div className="absolute inset-16 border border-white/5 rounded-full"></div>
                  
                  <div className="text-center relative z-10">
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Cognitive Balance</p>
                    <div className="flex flex-col items-center">
                       <p className="text-5xl font-black text-white leading-none">Skewed</p>
                       <p className="text-xl font-black text-blue-500 mt-2 tracking-tight">(6.3%)</p>
                    </div>
                    <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mt-6">Rote-Heavy Economy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Repository Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/[0.03] border border-white/10 rounded-[40px] p-8 text-left">
                <h4 className="text-[11px] font-black text-blue-500 uppercase tracking-widest mb-6 text-left">Official Data Uplinks</h4>
                <div className="grid grid-cols-1 gap-4">
                  {DATA_SOURCES.map((source) => (
                    <a 
                      key={source.name} 
                      href={source.url} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center space-x-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/5 hover:border-blue-500/30 transition-all group"
                    >
                      <div className={`w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform`}>
                        <i className={`fas ${source.icon} text-sm`}></i>
                      </div>
                      <div className="flex-grow text-left">
                        <p className="text-[11px] font-black text-white uppercase tracking-tight">{source.name}</p>
                        <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">{source.full}</p>
                      </div>
                      <i className="fas fa-external-link-alt text-[8px] text-gray-600"></i>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-blue-600 rounded-[40px] p-10 flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden group border border-white/10">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-bolt text-2xl text-white"></i>
                </div>
                <h4 className="text-sm font-black text-white mb-6 uppercase tracking-tighter opacity-80">MISSION GENESIS</h4>
                <p className="text-xs text-white/70 mb-8 font-bold uppercase tracking-widest leading-relaxed">AN IMMERSIVE ECOSYSTEM TRANSFORMING EDUCATION IN CAMEROON BY SHIFTING FROM ROTE MEMORIZATION TO ACTIVE, APPLIED INNOVATION THROUGH REAL-WORLD LOGIC MISSIONS.</p>
                <a 
                  href="https://mission-genesis.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-white text-blue-600 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gray-100 transition-all active:scale-95 shadow-xl block text-center"
                >
                  Launch APP
                </a>
              </div>
            </div>
          </div>

          {/* Right Column Stats */}
          <div className="lg:col-span-4 space-y-8 animate-fade-in text-left" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-[40px] p-8 text-white relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-[40px] -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
              <h4 className="text-[11px] font-black uppercase tracking-widest opacity-60 mb-8">Cameroon Impact Analytics</h4>
              <div className="space-y-8">
                <div>
                  <p className="text-5xl font-black tracking-tighter">70%</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mt-1">Vision 2035 Benchmark</p>
                </div>
                <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white w-[38%] animate-[grow_2s_ease-out]"></div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-2xl font-black">38%</p>
                    <p className="text-[9px] font-bold uppercase tracking-widest opacity-80 mt-1 text-left">Current Baseline</p>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-300 font-black">+14%</p>
                    <p className="text-[9px] font-bold uppercase tracking-widest opacity-80 mt-1 text-right">Growth Index</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-[40px] p-8">
              <h4 className="text-[11px] font-black text-gray-500 uppercase tracking-widest mb-6">Strategic Nodes</h4>
              <div className="space-y-6">
                {[
                  { label: "BUEA-CENTRAL", val: "ACTIVE", color: "blue" },
                  { label: "COASTAL-NODE", val: "SYNCING", color: "emerald" },
                  { label: "NORTHERN-UPLINK", val: "OFFLINE", color: "red" }
                ].map(node => (
                   <div key={node.label} className="flex items-center justify-between">
                      <span className="text-xs font-black text-white">{node.label}</span>
                      <span className={`text-[8px] font-black px-2 py-0.5 rounded border border-${node.color}-500/20 bg-${node.color}-500/10 text-${node.color}-500`}>{node.val}</span>
                   </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/40 border border-emerald-500/20 rounded-[40px] p-8 group">
              <h4 className="text-[11px] font-black text-emerald-500 uppercase tracking-widest mb-4 flex items-center">
                <i className="fas fa-vial mr-2"></i>
                Pilot Insights
              </h4>
              <p className="text-[11px] font-bold text-gray-400 leading-relaxed uppercase tracking-wider text-left">
                Our study of <span className="text-white">50+ students</span> in Buea showed a <span className="text-emerald-400">14% growth</span> in critical thinking velocity using immersive logic challenges.
              </p>
            </div>
          </div>
        </div>

        {/* HUD Command Terminal (Fixed Bottom) */}
        <div className="fixed bottom-0 left-0 w-full bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-white/10 p-4 md:px-8 z-[150] animate-in slide-in-from-bottom duration-500 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
           <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4">
              <div className="flex-grow w-full">
                 <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden h-24 md:h-16 flex flex-col md:flex-row items-stretch">
                    <div className="flex-grow overflow-y-auto p-3 font-mono text-[10px] text-emerald-500/80 custom-scrollbar text-left">
                       {terminalHistory.map((h, i) => (
                          <div key={i} className="flex items-start">
                             <span className="opacity-40 mr-2">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
                             <span>{h}</span>
                          </div>
                       ))}
                       <div ref={historyEndRef} />
                    </div>
                    <form onSubmit={processCommand} className="flex items-center border-t md:border-t-0 md:border-l border-white/10 bg-black/40 px-4 group">
                       <span className="text-blue-500 font-mono text-sm mr-3 font-black group-focus-within:animate-pulse">HUB:</span>
                       <input 
                          type="text" 
                          value={commandInput}
                          onChange={(e) => setCommandInput(e.target.value)}
                          placeholder="ENTER PROTOCOL (TRY 'HELP')..." 
                          className="bg-transparent text-white font-mono text-sm outline-none py-3 md:py-0 w-full md:w-64 placeholder:text-gray-700 uppercase tracking-widest"
                       />
                       <button type="submit" className="hidden">Execute</button>
                    </form>
                 </div>
              </div>
              <div className="hidden lg:flex items-center space-x-6 shrink-0">
                 <div className="text-right">
                    <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Network Load</p>
                    <p className="text-xs font-mono font-bold text-white">12.4 GB/S</p>
                 </div>
                 <div className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center relative">
                    <div className="absolute inset-1 border border-emerald-500/20 rounded-full border-t-emerald-500 animate-spin"></div>
                    <i className="fas fa-shield-halved text-blue-500 text-sm"></i>
                 </div>
              </div>
           </div>
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.2);
          border-radius: 10px;
        }
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes grow {
          0% { width: 0; }
          100% { width: 38%; }
        }
      `}</style>
    </div>
  );
};

export default DataHub;