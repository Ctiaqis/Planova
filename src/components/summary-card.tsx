interface SummaryCardProps {
  title: string;
  count: number;
  accentClass: string;
}

export function SummaryCard({ title, count, accentClass }: SummaryCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm shadow-slate-200/40 border border-slate-100 flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
      <div className={`absolute top-0 left-0 w-full h-1 ${accentClass}`}></div>
      <span className="text-slate-500 font-medium text-sm mb-4">{title}</span>
      <span className="text-4xl font-bold text-slate-800 tracking-tight">{count}</span>
    </div>
  );
}
