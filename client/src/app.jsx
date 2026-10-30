import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-emerald-400 font-mono p-6 flex flex-col justify-between">
      {/* FMC Header */}
      <header className="border-b border-emerald-800 pb-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold tracking-widest">[ FMC-371 INITIALIZED ]</h1>
          <p className="text-xs text-emerald-600">SYSTEM STATUS: ONLINE (CONNECTED TO MONGODB ATLAS)</p>
        </div>
        <div className="text-right text-sm">
          <span className="bg-emerald-950 border border-emerald-700 px-3 py-1 rounded text-emerald-300">
            ACTIVE FLIGHT: PORTFOLIO-01
          </span>
        </div>
      </header>

      {/* Main FMC Display Area */}
      <main className="my-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-emerald-800 bg-slate-900/50 p-4 rounded">
          <h2 className="text-emerald-500 font-bold mb-2 text-sm">&gt; TELEMETRY_FEED</h2>
          <p className="text-xs text-slate-400">Ready to pull live project and backend metrics from Express API.</p>
        </div>
        <div className="border border-emerald-800 bg-slate-900/50 p-4 rounded">
          <h2 className="text-emerald-500 font-bold mb-2 text-sm">&gt; ACARS_LOGS</h2>
          <p className="text-xs text-slate-400">Communication and contact portal interface loading...</p>
        </div>
        <div className="border border-emerald-800 bg-slate-900/50 p-4 rounded">
          <h2 className="text-emerald-500 font-bold mb-2 text-sm">&gt; SYS_NAV</h2>
          <p className="text-xs text-slate-400">Navigation modules for software engineering credentials.</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-emerald-900 pt-4 text-xs text-emerald-700 flex justify-between">
        <span>LAT/LONG: 26.02° S / 28.23° E (JHB)</span>
        <span>AVIONICS READY</span>
      </footer>
    </div>
  );
}