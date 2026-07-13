export function DashboardHeader() {
  return (
    <header className="flex flex-col sm:flex-row sm:items-end justify-between py-6 mb-4 gap-4 px-2">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
          Selamat datang kembali, Balqis
        </h2>
        
        {/* Compact Overview Pills */}
        <div className="flex flex-wrap items-center gap-3 mt-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-slate-100 shadow-sm cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
            <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">Total:</span>
            <span className="text-[13px] font-semibold text-slate-700">24</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-pink-100 shadow-sm cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
            <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">Ongoing:</span>
            <span className="text-[13px] font-semibold text-pink-600">5</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-purple-100 shadow-sm cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
            <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">Near Deadline:</span>
            <span className="text-[13px] font-semibold text-purple-600">3</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-rose-100 shadow-sm cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">High Risk:</span>
            <span className="text-[13px] font-semibold text-rose-600">2</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 pb-1">
        <button className="w-9 h-9 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-400 hover:text-pink-500 hover:border-pink-200 transition-all hover:shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="w-9 h-9 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-400 hover:text-pink-500 hover:border-pink-200 transition-all hover:shadow-md relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
        </button>
        <div className="w-9 h-9 rounded-full bg-pink-100 border border-pink-200 shadow-sm flex items-center justify-center text-pink-600 font-bold cursor-pointer hover:bg-pink-200 transition-colors text-sm">
          B
        </div>
      </div>
    </header>
  );
}
