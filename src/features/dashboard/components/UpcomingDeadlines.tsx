import { FileCode, ClipboardList } from 'lucide-react';

import { UpcomingDeadline } from '../types';

export const UpcomingDeadlines = ({ deadlines }: { deadlines: UpcomingDeadline[] }) => {
  return (
    <div className="bg-surface border border-borderDim rounded-xl overflow-hidden mb-6">
      
      <div className="p-5 border-b border-borderDim">
        <h3 className="text-lg font-bold text-white">Upcoming Deadlines</h3>
      </div>

      <div className="divide-y divide-[#1b251e]">
        {deadlines.map(item => (
          <div key={item.id} className="p-4 flex gap-3 items-start hover:bg-surfaceHighlight transition-colors group cursor-pointer">
            <div className="mt-1 w-8 h-8 rounded bg-zinc-900 border border-borderDim flex items-center justify-center shrink-0">
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
              <p className="text-[11px] text-textMuted truncate mb-2">{item.course}</p>
              
              <div className="flex items-center gap-2 text-[10px] font-bold">
                <span className="bg-red-500/10 text-red-500 border border-red-500/20 px-1.5 py-0.5 rounded flex items-center gap-1 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  Overdue
                </span>
                <span className="text-textMuted">{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};
