interface PriorityTaskCardProps {
  course: string;
  title: string;
  description?: string;
  priority: string;
  risk?: string;
  deadline: string;
  progress?: string;
  showButtons?: boolean;
}

export function PriorityTaskCard({ course, title, description, priority, risk, deadline, progress, showButtons }: PriorityTaskCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm shadow-slate-200/40 border border-slate-100 flex flex-col gap-4 relative overflow-hidden transition-all hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-semibold">{course}</span>
          {priority === 'Urgent' && (
            <span className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">Urgent</span>
          )}
          {priority === 'Medium' && (
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold">Medium</span>
          )}
          {risk === 'High Risk' && (
            <span className="px-3 py-1 bg-rose-50 text-rose-500 rounded-lg text-xs font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
              High Risk
            </span>
          )}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-bold text-slate-800">{title}</h3>
        {description && <p className="text-sm text-slate-500 mt-2 leading-relaxed">{description}</p>}
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-2 pt-4 border-t border-slate-50 gap-4">
        <div className="flex flex-col gap-1 w-full sm:w-auto">
          <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Deadline</span>
          <span className="text-sm font-semibold text-slate-700">{deadline}</span>
        </div>
        
        {progress && progress !== 'optional/simple' && (
          <div className="flex flex-col gap-1.5 w-full sm:w-1/3">
            <div className="flex justify-between items-end">
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Progress</span>
              <span className="text-xs font-bold text-slate-700">{progress}</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-400 rounded-full" style={{ width: progress }}></div>
            </div>
          </div>
        )}

        {showButtons && (
          <div className="flex gap-2 w-full sm:w-auto sm:justify-end">
            <button className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl text-sm font-semibold transition-colors">
              Jadwalkan Ulang
            </button>
            <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-semibold shadow-sm transition-colors">
              Tandai Selesai
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
