interface TaskCardProps {
  courseCode: string;
  title: string;
  description: string;
  priority: string;
  status: string;
  risk?: string;
  deadline: string;
  progress: number;
}

export function TaskCard({ courseCode, title, description, priority, status, risk, deadline, progress }: TaskCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Not Started': return 'bg-slate-100 text-slate-600';
      case 'Ongoing': return 'bg-sky-50 text-sky-600';
      case 'Finished': return 'bg-emerald-50 text-emerald-600';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Urgent': return 'bg-red-50 text-red-600';
      case 'High': return 'bg-orange-50 text-orange-600';
      case 'Medium': return 'bg-blue-50 text-blue-600';
      case 'Low': return 'bg-slate-50 text-slate-600';
      default: return 'bg-slate-50 text-slate-600';
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm shadow-slate-200/40 border border-slate-100 flex flex-col gap-4 relative overflow-hidden transition-all hover:shadow-md group">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold">{courseCode}</span>
          <span className={`px-3 py-1 rounded-lg text-xs font-bold ${getStatusColor(status)}`}>
            {status}
          </span>
          <span className={`px-3 py-1 rounded-lg text-xs font-bold ${getPriorityColor(priority)}`}>
            {priority}
          </span>
          {risk && (
            <span className="px-3 py-1 bg-rose-50 text-rose-500 rounded-lg text-xs font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
              {risk}
            </span>
          )}
        </div>
        
        <button className="w-8 h-8 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>
      
      <div>
        <h3 className="text-lg font-bold text-slate-800">{title}</h3>
        <p className="text-sm text-slate-500 mt-2 leading-relaxed line-clamp-2">{description}</p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2 pt-4 border-t border-slate-50 gap-4">
        <div className="flex flex-col gap-1 w-full sm:w-auto">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Deadline</span>
          <span className="text-sm font-semibold text-slate-700">{deadline}</span>
        </div>
        
        <div className="flex flex-col gap-1.5 w-full sm:w-1/2 md:w-1/3">
          <div className="flex justify-between items-end">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Progress</span>
            <span className="text-xs font-bold text-slate-700">{progress}%</span>
          </div>
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-500 ${progress === 100 ? 'bg-emerald-400' : 'bg-blue-400'}`} 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
