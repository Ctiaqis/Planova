import { Sidebar } from '@/components/sidebar';
import { TaskFilter } from '@/components/task-filter';
import { TaskCard } from '@/components/task-card';

export default function MyTasks() {
  const dummyTasks = [
    {
      id: 1,
      courseCode: 'CS101',
      title: 'Data Structures Final Project',
      description: 'Complete the final implementation of the Red-Black tree algorithms and draft the accompanying technical report explaining the time complexities.',
      priority: 'Urgent',
      status: 'Ongoing',
      risk: 'High Risk',
      deadline: 'Today, 23:59',
      progress: 75,
    },
    {
      id: 2,
      courseCode: 'ENG205',
      title: 'Literature Essay Draft',
      description: 'Write the first draft of the literature review essay focusing on the Victorian era themes.',
      priority: 'Medium',
      status: 'Not Started',
      deadline: 'Besok, 10:00',
      progress: 0,
    },
    {
      id: 3,
      courseCode: 'MATH201',
      title: 'Calculus Assignment 4',
      description: 'Solve the integration problems from chapter 8 and upload the scanned PDF to the student portal.',
      priority: 'High',
      status: 'Ongoing',
      deadline: 'Jumat, 20:00',
      progress: 40,
    },
    {
      id: 4,
      courseCode: 'PHY102',
      title: 'Lab Report: Kinematics',
      description: 'Format the lab results and calculate the standard deviations for the kinematics experiment data.',
      priority: 'Low',
      status: 'Finished',
      deadline: 'Senin Depan, 23:59',
      progress: 100,
    },
    {
      id: 5,
      courseCode: 'CS102',
      title: 'Web Dev Portfolio',
      description: 'Create a responsive portfolio website using React and Tailwind CSS. Deploy to Vercel.',
      priority: 'Medium',
      status: 'Ongoing',
      deadline: '15 Okt, 12:00',
      progress: 60,
    }
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <div className="flex-1 overflow-y-auto px-8 pb-12 pt-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-800 tracking-tight">My Tasks</h1>
              <p className="text-slate-500 mt-2 font-medium">Kelola dan pantau semua tugas kuliahmu di satu tempat.</p>
            </div>
            
            <button className="flex items-center justify-center gap-2 px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-sm font-semibold shadow-sm shadow-blue-500/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Tambah Tugas
            </button>
          </div>

          <TaskFilter />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {dummyTasks.map((task) => (
              <TaskCard
                key={task.id}
                courseCode={task.courseCode}
                title={task.title}
                description={task.description}
                priority={task.priority}
                status={task.status}
                risk={task.risk}
                deadline={task.deadline}
                progress={task.progress}
              />
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
