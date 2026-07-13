export function RemindersCard() {
  const reminders = [
    { id: 1, title: 'Kumpulkan Draft Laporan', time: 'Jatuh tempo dalam 12 jam', colorClass: 'bg-pink-500', bgLight: 'bg-pink-50/50' },
    { id: 2, title: 'Client Sync', time: 'Besok, 15.00', colorClass: 'bg-purple-500', bgLight: 'bg-purple-50/50' },
    { id: 3, title: 'Renew Server Domain', time: 'Besok, 17.00', colorClass: 'bg-blue-500', bgLight: 'bg-blue-50/50' },
  ];

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-slate-800">Pengingat &lt; 48 Jam</h3>
        <button className="text-[12px] text-pink-500 font-medium hover:text-pink-600 transition-colors">Lihat semua</button>
      </div>

      <div className="space-y-2">
        {reminders.map((reminder) => (
          <div key={reminder.id} className={`flex gap-3 items-center p-3 rounded-lg ${reminder.bgLight} transition-colors border border-transparent`}>
            <div className="flex-shrink-0">
              <div className={`w-2 h-2 rounded-full ${reminder.colorClass}`}></div>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-slate-700">{reminder.title}</p>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5">{reminder.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
