export function TaskFilter() {
  return (
    <div className="flex flex-col xl:flex-row gap-4 mb-8">
      {/* Search Bar */}
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input 
          type="text" 
          placeholder="Cari tugas, mata kuliah, atau deskripsi..." 
          className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-100 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-slate-700 font-medium placeholder-slate-400 transition-shadow"
        />
      </div>

      <div className="flex flex-wrap sm:flex-nowrap gap-4">
        {/* Status Filter */}
        <select className="flex-1 sm:flex-none bg-white border border-slate-100 rounded-xl px-4 py-3.5 text-slate-600 font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 cursor-pointer min-w-[140px]">
          <option value="All">All Status</option>
          <option value="Not Started">Not Started</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Finished">Finished</option>
          <option value="High Risk">High Risk</option>
        </select>
        
        {/* Priority Filter */}
        <select className="flex-1 sm:flex-none bg-white border border-slate-100 rounded-xl px-4 py-3.5 text-slate-600 font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 cursor-pointer min-w-[140px]">
          <option value="All">All Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Urgent">Urgent</option>
        </select>
      </div>
    </div>
  );
}
