import { ClipboardList, Send, CheckCircle, TrendingUp } from 'lucide-react';
import type { AssignmentStatsData } from '../types';

interface AssignmentStatsProps {
  stats: AssignmentStatsData | null;
}

export const AssignmentStats = ({ stats }: AssignmentStatsProps) => {
  if (!stats) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {/* Active Assignments */}
      <div className="bg-[#121814] border border-[#1b251e] rounded-xl p-5 flex flex-col justify-between h-32">
        <div className="flex justify-between items-start">
          <span className="text-zinc-400 text-sm font-medium">Active Assignments</span>
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <ClipboardList className="w-4 h-4 text-emerald-500" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">{stats.activeCount}</h3>
          <p className="text-xs text-zinc-500">{stats.activeDueThisWeek} due this week</p>
        </div>
      </div>

      {/* Submitted */}
      <div className="bg-[#121814] border border-[#1b251e] rounded-xl p-5 flex flex-col justify-between h-32">
        <div className="flex justify-between items-start">
          <span className="text-zinc-400 text-sm font-medium">Submitted</span>
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <Send className="w-4 h-4 text-emerald-500" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">{stats.submittedCount}</h3>
          <p className="text-xs text-zinc-500">Awaiting grading</p>
        </div>
      </div>

      {/* Graded */}
      <div className="bg-[#121814] border border-[#1b251e] rounded-xl p-5 flex flex-col justify-between h-32">
        <div className="flex justify-between items-start">
          <span className="text-zinc-400 text-sm font-medium">Graded</span>
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">{stats.gradedCount}</h3>
          <p className="text-xs text-emerald-500">+{stats.gradedThisMonth} this month</p>
        </div>
      </div>

      {/* Average Grade */}
      <div className="bg-[#121814] border border-[#1b251e] rounded-xl p-5 flex flex-col justify-between h-32">
        <div className="flex justify-between items-start">
          <span className="text-zinc-400 text-sm font-medium">Average Grade</span>
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-emerald-500" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">{stats.averageGrade}%</h3>
          <p className="text-xs text-emerald-500">+{stats.averageGradeChange}% from last month</p>
        </div>
      </div>
    </div>
  );
};
