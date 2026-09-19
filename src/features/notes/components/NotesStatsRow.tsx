import { FileText, BookOpen, Clock, Pin } from 'lucide-react';
import type { NotesStats } from '../types';

interface NotesStatsRowProps {
  stats: NotesStats;
}

export const NotesStatsRow = ({ stats }: NotesStatsRowProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
      
      <div className="bg-[#121814] border border-[#1b251e] rounded-xl p-5 flex justify-between items-start">
        <div>
          <p className="text-zinc-400 text-sm font-medium mb-1">Total Notes</p>
          <h3 className="text-2xl font-extrabold text-white mb-2">{stats.total}</h3>
          <p className="text-xs font-medium text-emerald-500">+{stats.totalGrowth} this month</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
          <FileText size={20} className="text-emerald-500" />
        </div>
      </div>

      <div className="bg-[#121814] border border-[#1b251e] rounded-xl p-5 flex justify-between items-start">
        <div>
          <p className="text-zinc-400 text-sm font-medium mb-1">Courses with Notes</p>
          <h3 className="text-2xl font-extrabold text-white mb-2">{stats.coursesWithNotes}</h3>
          <p className="text-xs font-medium text-zinc-500">Across {stats.coursesWithNotes} courses</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
          <BookOpen size={20} className="text-emerald-500" />
        </div>
      </div>

      <div className="bg-[#121814] border border-[#1b251e] rounded-xl p-5 flex justify-between items-start">
        <div>
          <p className="text-zinc-400 text-sm font-medium mb-1">This Week</p>
          <h3 className="text-2xl font-extrabold text-white mb-2">{stats.thisWeek}</h3>
          <p className="text-xs font-medium text-zinc-500">New notes created</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
          <Clock size={20} className="text-emerald-500" />
        </div>
      </div>

      <div className="bg-[#121814] border border-[#1b251e] rounded-xl p-5 flex justify-between items-start">
        <div>
          <p className="text-zinc-400 text-sm font-medium mb-1">Pinned Notes</p>
          <h3 className="text-2xl font-extrabold text-white mb-2">{stats.pinned}</h3>
          <p className="text-xs font-medium text-zinc-500">Quick access items</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
          <Pin size={20} className="text-emerald-500" />
        </div>
      </div>

    </div>
  );
};
