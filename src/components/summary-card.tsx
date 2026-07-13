interface SummaryCardProps {
  title: string;
  count: number;
  accentClass: string;
}

export function SummaryCard({ title, count, accentClass }: SummaryCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-white flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_8px_24px_rgba(59,130,246,0.06)] hover:border-blue-50 transition-all hover:-translate-y-0.5">
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${accentClass}`}></div>
      <span className="text-slate-500 font-bold text-[10px] uppercase tracking-wider mb-1.5">{title}</span>
      <span className="text-2xl font-extrabold text-slate-800 tracking-tight transition-all">{count}</span>
    </div>
  );
}
