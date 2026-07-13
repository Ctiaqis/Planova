export function TaskDistribution() {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-white hover:shadow-[0_8px_24px_rgba(59,130,246,0.06)] transition-all">
      <h3 className="text-sm font-bold text-slate-800 mb-4">Distribusi Tugas</h3>
      
      <div className="flex items-center justify-center mb-5 relative">
        <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-sm relative hover:scale-105 transition-transform duration-500" 
             style={{
               background: `conic-gradient(
                 #60a5fa 0% 50%, 
                 #f472b6 50% 80%, 
                 #e2e8f0 80% 100%
               )`
             }}>
          <div className="w-[72px] h-[72px] bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
            <span className="text-lg font-bold text-slate-800">24</span>
            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Tugas</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-1">
        <div className="flex items-center justify-between text-[11px] p-2 rounded-lg hover:bg-slate-50/50 transition-colors">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <span className="text-slate-600 font-medium">Academic</span>
          </div>
          <span className="font-bold text-slate-800">50%</span>
        </div>
        <div className="flex items-center justify-between text-[11px] p-2 rounded-lg hover:bg-slate-50/50 transition-colors">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-pink-400"></div>
            <span className="text-slate-600 font-medium">Personal</span>
          </div>
          <span className="font-bold text-slate-800">30%</span>
        </div>
        <div className="flex items-center justify-between text-[11px] p-2 rounded-lg hover:bg-slate-50/50 transition-colors">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
            <span className="text-slate-600 font-medium">Other</span>
          </div>
          <span className="font-bold text-slate-800">20%</span>
        </div>
      </div>
    </div>
  );
}
