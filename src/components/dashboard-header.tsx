export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between py-6 px-8 mb-4">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Selamat datang kembali, Balqis 👋</h2>
        <p className="text-slate-500 mt-1 font-medium">Ini ringkasan tugasmu hari ini.</p>
      </div>
      <div className="flex items-center gap-4">
        <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-sm font-semibold shadow-sm shadow-blue-500/30 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Tambah Tugas
        </button>
        <button className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-400 rounded-full border-2 border-white"></span>
        </button>
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-200 to-indigo-300 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center text-white font-bold">
          B
        </div>
      </div>
    </header>
  );
}
