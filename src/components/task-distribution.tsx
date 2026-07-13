export function TaskDistribution() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm shadow-slate-200/40 border border-slate-100">
      <h3 className="text-base font-bold text-slate-800 mb-6">Distribusi Tugas</h3>
      
      <div className="flex items-center justify-center mb-8 relative">
        <div className="w-32 h-32 rounded-full flex items-center justify-center relative shadow-sm" 
             style={{
               background: `conic-gradient(
                 #93c5fd 0% 50%, 
                 #c4b5fd 50% 80%, 
                 #e2e8f0 80% 100%
               )`
             }}>
          <div className="w-24 h-24 bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
            <span className="text-2xl font-bold text-slate-800">24</span>
            <span className="text-xs text-slate-400 font-medium">Tugas</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-300"></div>
            <span className="text-slate-600 font-medium">Academic</span>
          </div>
          <span className="font-semibold text-slate-800">50%</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-300"></div>
            <span className="text-slate-600 font-medium">Personal</span>
          </div>
          <span className="font-semibold text-slate-800">30%</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-200"></div>
            <span className="text-slate-600 font-medium">Other</span>
          </div>
          <span className="font-semibold text-slate-800">20%</span>
        </div>
      </div>
    </div>
  );
}
