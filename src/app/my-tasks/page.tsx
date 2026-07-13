import Link from 'next/link';
import { Sidebar } from '@/components/sidebar';
import { TaskFilter } from '@/components/task-filter';

export default function MyTasks() {
  const dummyTasks = [
    {
      id: 1,
      type: 'Meeting',
      title: 'Design Sync',
      priority: 'Urgent',
      status: 'Ongoing',
      deadline: 'Hari ini, 10:00',
      description: 'Discussing new UI guidelines.',
    },
    {
      id: 2,
      type: 'Task',
      title: 'Literature Essay Draft',
      priority: 'Medium',
      status: 'Not Started',
      deadline: 'Besok, 10:00',
      description: 'Write the first draft.',
    },
    {
      id: 3,
      type: 'Daily',
      title: 'Workout Session',
      priority: 'High',
      status: 'Ongoing',
      deadline: 'Jumat, 07:00',
      description: 'Morning cardio and weights.',
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Not Started': return 'bg-slate-100 text-slate-600';
      case 'Ongoing': return 'bg-blue-50 text-blue-600';
      case 'Finished': return 'bg-emerald-50 text-emerald-600';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Urgent': return 'bg-pink-50 text-pink-600';
      case 'High': return 'bg-orange-50 text-orange-600';
      case 'Medium': return 'bg-blue-50 text-blue-600';
      case 'Low': return 'bg-slate-50 text-slate-600';
      default: return 'bg-slate-50 text-slate-600';
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50/50">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <div className="flex-1 overflow-y-auto px-8 pb-12 pt-8">
          
          <div className="max-w-[1024px] mx-auto w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Daftar Agenda</h1>
                <p className="text-slate-500 mt-1 font-medium text-sm">Kelola Task, Meeting, dan Daily Plan di satu tempat.</p>
              </div>
              
              <Link href="/add-task" className="flex items-center justify-center gap-2 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-xl text-sm font-semibold shadow-sm transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                Tambah Agenda
              </Link>
            </div>

            <TaskFilter />

            {/* Horizontal List Cards */}
            <div className="space-y-3">
              {dummyTasks.map((task) => (
                <div key={task.id} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md hover:border-pink-100 transition-all">
                  
                  <div className="flex items-center gap-4 w-full md:w-[35%]">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-medium uppercase tracking-wide bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{task.type}</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide ${getStatusColor(task.status)}`}>{task.status}</span>
                      </div>
                      <h3 className="text-[14px] font-semibold text-slate-800">{task.title}</h3>
                    </div>
                  </div>

                  <div className="w-full md:w-[25%]">
                    <p className="text-[12px] text-slate-500 line-clamp-2 leading-relaxed">{task.description}</p>
                  </div>

                  <div className="flex items-center gap-4 w-full md:w-[40%] justify-between md:justify-end">
                    <div className="flex flex-col items-start md:items-end gap-1">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide ${getPriorityColor(task.priority)}`}>{task.priority}</span>
                      <span className="text-[11px] font-medium text-slate-500">{task.deadline}</span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 ml-2">
                      <button className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                      </button>
                      <button className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors" title="Delete">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
