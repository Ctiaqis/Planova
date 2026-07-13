import Link from 'next/link';
import { Sidebar } from '@/components/sidebar';

export default function AddTask() {
  return (
    <div className="flex min-h-screen bg-slate-50/50">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <div className="flex-1 overflow-y-auto px-8 pb-12 pt-8">
          
          <div className="max-w-[700px] mx-auto w-full">
            <div className="mb-6">
              <Link href="/my-tasks" className="text-[12px] font-medium text-slate-500 hover:text-pink-500 flex items-center gap-1 mb-2 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                Kembali
              </Link>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Tambah Agenda Baru</h1>
              <p className="text-slate-500 mt-1 font-medium text-sm">Tambahkan task, meeting, atau daily plan baru.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <form className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-semibold text-slate-700">Tipe Agenda</label>
                    <select className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-100 focus:border-pink-300 text-[13px] text-slate-600 font-medium">
                      <option value="Task">Task</option>
                      <option value="Meeting">Meeting</option>
                      <option value="Daily">Daily Plan</option>
                    </select>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-semibold text-slate-700">Judul</label>
                    <input type="text" placeholder="Masukkan judul..." className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-100 focus:border-pink-300 text-[13px] text-slate-700 font-medium" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-semibold text-slate-700">Tanggal/Deadline</label>
                    <input type="text" placeholder="Contoh: Besok, 10:00" className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-100 focus:border-pink-300 text-[13px] text-slate-700 font-medium" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[13px] font-semibold text-slate-700">Prioritas</label>
                    <select className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-100 focus:border-pink-300 text-[13px] text-slate-600 font-medium">
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                      <option value="Urgent">Urgent</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[13px] font-semibold text-slate-700">Status</label>
                    <select className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-100 focus:border-pink-300 text-[13px] text-slate-600 font-medium">
                      <option value="Not Started">Not Started</option>
                      <option value="Ongoing">Ongoing</option>
                      <option value="Finished">Finished</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[13px] font-semibold text-slate-700">Keterangan / Notes</label>
                  <textarea rows={4} placeholder="Tambahkan deskripsi atau catatan..." className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-100 focus:border-pink-300 text-[13px] text-slate-700 font-medium resize-none"></textarea>
                </div>

                <div className="pt-2 flex gap-3 justify-end">
                  <Link href="/my-tasks" className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg text-sm font-semibold transition-colors">
                    Batal
                  </Link>
                  <button type="button" className="px-5 py-2.5 bg-pink-500 hover:bg-pink-600 text-white rounded-lg text-sm font-semibold shadow-sm transition-colors">
                    Simpan Agenda
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
