export function TaskFilter() {
  return (
    <div className="flex flex-col md:flex-row gap-3 mb-6">
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input 
          type="text" 
          placeholder="Cari agenda, tugas, atau meeting..." 
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-100 focus:border-pink-300 text-[13px] text-slate-700 font-medium placeholder-slate-400 transition-all"
        />
      </div>

      <div className="flex flex-wrap sm:flex-nowrap gap-3">
        <select className="flex-1 sm:flex-none bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-[13px] text-slate-600 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-100 focus:border-pink-300 cursor-pointer min-w-[130px] transition-all outline-none">
          <option value="All">Semua Tipe</option>
          <option value="Task">Task</option>
          <option value="Meeting">Meeting</option>
          <option value="Daily">Daily Plan</option>
        </select>

        <select className="flex-1 sm:flex-none bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-[13px] text-slate-600 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-100 focus:border-pink-300 cursor-pointer min-w-[130px] transition-all outline-none">
          <option value="All">Semua Status</option>
          <option value="Not Started">Not Started</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Finished">Finished</option>
        </select>
        
        <select className="flex-1 sm:flex-none bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-[13px] text-slate-600 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-100 focus:border-pink-300 cursor-pointer min-w-[130px] transition-all outline-none">
          <option value="All">Semua Prioritas</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Urgent">Urgent</option>
        </select>
      </div>
    </div>
  );
}
