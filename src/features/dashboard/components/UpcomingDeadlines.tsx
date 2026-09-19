import { FileCode, ClipboardList } from 'lucide-react';

const deadlines = [
  { 
    id: 1,
    title: 'Build a Compound Component', 
    course: 'Advanced React Patterns', 
    date: 'Jun 5', 
    type: 'assignment' 
  },
  { 
    id: 2,
    title: 'Module 3 Assessment', 
    course: 'Advanced React Patterns', 
    date: 'Jun 8', 
    type: 'quiz' 
  },
  { 
    id: 3,
    title: 'Design System Project', 
    course: 'UI/UX Design Masterclass', 
    date: 'Jun 12', 
    type: 'assignment' 
  },
  { 
    id: 4,
    title: 'Midterm Exam', 
    course: 'UI/UX Design Masterclass', 
    date: 'Jun 18', 
    type: 'quiz' 
  },
];

export const UpcomingDeadlines = () => {
  return (
    <div className="bg-[#0a0e0c] border border-[#1b251e] rounded-xl overflow-hidden mb-6">
      
      <div className="p-5 border-b border-[#1b251e]">
        <h3 className="text-lg font-bold text-white">Upcoming Deadlines</h3>
      </div>

      <div className="divide-y divide-[#1b251e]">
        {deadlines.map(item => (
          <div key={item.id} className="p-4 flex gap-3 items-start hover:bg-[#121814] transition-colors group cursor-pointer">
            <div className="mt-1 w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
              {item.type === 'assignment' ? (
                <FileCode size={16} className="text-emerald-500" />
              ) : (
                <ClipboardList size={16} className="text-orange-500" />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm text-white truncate mb-0.5 group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h4>
              <p className="text-[11px] text-zinc-500 truncate mb-2">{item.course}</p>
              
              <div className="flex items-center gap-2 text-[10px] font-bold">
                <span className="bg-red-500/10 text-red-500 border border-red-500/20 px-1.5 py-0.5 rounded flex items-center gap-1 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  Overdue
                </span>
                <span className="text-zinc-500">{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};
