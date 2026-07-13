export function RemindersCard() {
  const reminders = [
    { id: 1, title: 'Kumpulkan Draft', time: 'Jatuh tempo dalam 12 jam', colorClass: 'bg-rose-400', ringClass: 'ring-rose-100' },
    { id: 2, title: 'Belajar Kelompok', time: 'Besok, 15.00', colorClass: 'bg-blue-400', ringClass: 'ring-blue-100' },
    { id: 3, title: 'Kembalikan Buku Perpustakaan', time: 'Besok, 17.00', colorClass: 'bg-emerald-400', ringClass: 'ring-emerald-100' },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm shadow-slate-200/40 border border-slate-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-bold text-slate-800">Pengingat &lt; 48 Jam</h3>
        <button className="text-xs text-blue-500 font-semibold hover:text-blue-600">Lihat semua</button>
      </div>

      <div className="space-y-5">
        {reminders.map((reminder) => (
          <div key={reminder.id} className="flex gap-4 items-start">
            <div className="mt-1.5 flex-shrink-0">
              <div className={`w-2 h-2 rounded-full ${reminder.colorClass} ring-4 ${reminder.ringClass}`}></div>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-700">{reminder.title}</p>
              <p className="text-xs text-slate-400 mt-0.5 font-medium">{reminder.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
