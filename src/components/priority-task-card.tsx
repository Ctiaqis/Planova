interface PriorityTaskCardProps {
  type: string;
  title: string;
  description?: string;
  priority: string;
  deadline: string;
  showButtons?: boolean;
}

export function PriorityTaskCard({ type, title, description, priority, deadline, showButtons }: PriorityTaskCardProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex flex-col gap-2 relative transition-all hover:shadow-md hover:border-pink-50">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-medium uppercase tracking-wide">{type}</span>
            {priority === 'Urgent' && (
              <span className="px-2 py-0.5 bg-rose-50 text-rose-600 rounded text-[10px] font-medium uppercase tracking-wide">Urgent</span>
            )}
            {priority === 'High' && (
              <span className="px-2 py-0.5 bg-orange-50 text-orange-600 rounded text-[10px] font-medium uppercase tracking-wide">High</span>
            )}
            {priority === 'Medium' && (
              <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-[10px] font-medium uppercase tracking-wide">Medium</span>
            )}
            {priority === 'Low' && (
              <span className="px-2 py-0.5 bg-slate-50 text-slate-500 rounded text-[10px] font-medium uppercase tracking-wide">Low</span>
            )}
            <span className="ml-auto text-[11px] font-medium text-slate-500">{deadline}</span>
          </div>
          <h3 className="text-[14px] font-semibold text-slate-800 leading-tight">{title}</h3>
          {description && <p className="text-[12px] text-slate-500 mt-1 leading-snug line-clamp-1">{description}</p>}
        </div>
      </div>

      {showButtons && (
        <div className="flex gap-2 justify-end mt-1 border-t border-slate-50 pt-2.5">
          <button className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-lg text-[11px] font-medium transition-colors">
            Jadwalkan Ulang
          </button>
          <button className="px-3 py-1.5 bg-pink-500 hover:bg-pink-600 text-white rounded-lg text-[11px] font-medium shadow-sm transition-all">
            Tandai Selesai
          </button>
        </div>
      )}
    </div>
  );
}
