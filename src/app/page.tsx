import { Sidebar } from '@/components/sidebar';
import { DashboardHeader } from '@/components/dashboard-header';
import { SummaryCard } from '@/components/summary-card';
import { PriorityTaskCard } from '@/components/priority-task-card';
import { TaskDistribution } from '@/components/task-distribution';
import { RemindersCard } from '@/components/reminders-card';

export default function Home() {
  const summaryData = [
    { title: 'Total Tasks', count: 24, accentClass: 'bg-blue-400' },
    { title: 'Not Started', count: 8, accentClass: 'bg-slate-300' },
    { title: 'Ongoing', count: 5, accentClass: 'bg-sky-400' },
    { title: 'Finished', count: 11, accentClass: 'bg-emerald-400' },
    { title: 'Near Deadline', count: 3, accentClass: 'bg-purple-400' },
    { title: 'High Risk', count: 2, accentClass: 'bg-rose-400' },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <div className="flex-1 overflow-y-auto px-8 pb-12 pt-2">
          <DashboardHeader />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {summaryData.map((data, index) => (
              <SummaryCard
                key={index}
                title={data.title}
                count={data.count}
                accentClass={data.accentClass}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2 space-y-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-800 tracking-tight">Prioritas Hari Ini</h3>
                <button className="text-sm text-blue-500 font-semibold hover:text-blue-600 transition-colors">Lihat semua</button>
              </div>
              
              <div className="space-y-4">
                <PriorityTaskCard
                  course="CS101"
                  title="Data Structures Final Project"
                  description="Complete the final implementation of the Red-Black tree algorithms and draft the accompanying technical report."
                  priority="Urgent"
                  risk="High Risk"
                  deadline="Today 11:59PM"
                  progress="75%"
                  showButtons={true}
                />
                
                <PriorityTaskCard
                  course="ENG205"
                  title="Literature Essay Draft"
                  priority="Medium"
                  deadline="Tomorrow 10:00AM"
                  showButtons={false}
                />
              </div>
            </div>

            <div className="space-y-6">
              <RemindersCard />
              <TaskDistribution />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
