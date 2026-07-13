import { Sidebar } from '@/components/sidebar';
import { DashboardHeader } from '@/components/dashboard-header';
import { PriorityTaskCard } from '@/components/priority-task-card';
import { RemindersCard } from '@/components/reminders-card';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50/50">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <div className="flex-1 overflow-y-auto px-6 pb-12 pt-4">
          
          <div className="max-w-[1024px] mx-auto w-full px-2">
            <DashboardHeader />

            <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6 mt-6">
              
              <div className="space-y-4 px-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-slate-800 tracking-tight">Agenda Hari Ini</h3>
                  <button className="text-[12px] text-pink-500 font-medium hover:text-pink-600 transition-colors">Lihat semua</button>
                </div>
                
                <div className="space-y-3">
                  <PriorityTaskCard
                    type="Meeting"
                    title="Design Sync: Planova UI V2"
                    description="Discussing the new pink theme and clean UI guidelines with the product team."
                    priority="High"
                    deadline="10:00 AM"
                    showButtons={true}
                  />
                  
                  <PriorityTaskCard
                    type="Task"
                    title="Review Pull Requests"
                    description="Check the latest PRs for the authentication module."
                    priority="Medium"
                    deadline="02:00 PM"
                    showButtons={false}
                  />

                  <PriorityTaskCard
                    type="Daily"
                    title="Read 10 Pages of React Book"
                    priority="Low"
                    deadline="08:00 PM"
                    showButtons={true}
                  />
                </div>
              </div>

              <div className="space-y-4 mt-2 lg:mt-0">
                <RemindersCard />
              </div>
              
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
