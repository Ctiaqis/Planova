import Link from 'next/link';

export function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-slate-100 flex flex-col h-full sticky top-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Planova</h1>
        <p className="text-sm text-slate-400 mt-1 font-medium">Student Task Planner</p>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 text-slate-900 font-semibold shadow-sm shadow-slate-100/50">
          <div className="w-5 h-5 rounded-md bg-blue-100 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          </div>
          Dashboard
        </Link>
        <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors font-medium">
          <div className="w-5 h-5 rounded-md bg-slate-50 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
          </div>
          My Tasks
        </Link>
        <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors font-medium">
          <div className="w-5 h-5 rounded-md bg-slate-50 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
          </div>
          Calendar
        </Link>
        <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors font-medium">
          <div className="w-5 h-5 rounded-md bg-slate-50 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
          </div>
          AI Planner
        </Link>
        <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors font-medium">
          <div className="w-5 h-5 rounded-md bg-slate-50 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
          </div>
          Analytics
        </Link>
        <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors font-medium">
          <div className="w-5 h-5 rounded-md bg-slate-50 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
          </div>
          Settings
        </Link>
      </nav>

      <div className="p-4 mt-auto mb-4 px-4 space-y-1">
        <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors font-medium">
          Help
        </Link>
        <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors font-medium">
          Logout
        </Link>
      </div>
    </aside>
  );
}
