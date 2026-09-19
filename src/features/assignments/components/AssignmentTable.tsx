import { FileText, Send, Eye, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import type { Assignment, AssignmentStatus } from '../types';
import { cn } from '@/utils/cn';

interface AssignmentTableProps {
  assignments: Assignment[];
  onSubmitClick?: (assignment: Assignment) => void;
  onViewClick?: (assignment: Assignment) => void;
}

const statusConfig: Record<AssignmentStatus, { label: string; icon: any; colorClass: string }> = {
  pending: { label: 'pending', icon: Clock, colorClass: 'text-orange-500 border-orange-500/30 bg-orange-500/10' },
  submitted: { label: 'submitted', icon: CheckCircle2, colorClass: 'text-blue-500 border-blue-500/30 bg-blue-500/10' },
  graded: { label: 'graded', icon: CheckCircle2, colorClass: 'text-emerald-500 border-emerald-500/30 bg-emerald-500/10' },
  late: { label: 'late', icon: AlertCircle, colorClass: 'text-yellow-500 border-yellow-500/30 bg-yellow-500/10' },
};

export const AssignmentTable = ({ assignments, onSubmitClick, onViewClick }: AssignmentTableProps) => {
  return (
    <div className="w-full overflow-x-auto bg-[#121814] rounded-xl border border-[#1b251e]">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-zinc-400 uppercase bg-[#0d120f] border-b border-[#1b251e]">
          <tr>
            <th className="px-6 py-4 font-semibold">Title</th>
            <th className="px-6 py-4 font-semibold">Course</th>
            <th className="px-6 py-4 font-semibold">Due Date</th>
            <th className="px-6 py-4 font-semibold">Status</th>
            <th className="px-6 py-4 font-semibold text-center">Grade</th>
            <th className="px-6 py-4 font-semibold text-center">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#1b251e]">
          {assignments.map((assignment) => {
            const config = statusConfig[assignment.status];
            const StatusIcon = config.icon;

            return (
              <tr key={assignment.id} className="hover:bg-[#1a231d]/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-zinc-500 shrink-0" />
                    <span className="font-medium text-zinc-200">{assignment.title}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-zinc-400">
                  {assignment.course}
                </td>
                <td className="px-6 py-4 text-zinc-400">
                  {assignment.dueDate}
                </td>
                <td className="px-6 py-4">
                  <div className={cn(
                    "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium capitalize",
                    config.colorClass
                  )}>
                    <StatusIcon className="w-3.5 h-3.5" />
                    {config.label}
                  </div>
                </td>
                <td className="px-6 py-4 text-center text-zinc-200 font-medium">
                  {assignment.grade !== undefined && assignment.totalScore !== undefined
                    ? `${assignment.grade}/${assignment.totalScore}`
                    : '--'}
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center">
                    {(assignment.status === 'pending' || assignment.status === 'late' && assignment.grade === undefined) ? (
                      <button 
                        className="w-8 h-8 rounded-lg bg-[#1b251e] hover:bg-emerald-500/20 text-zinc-400 hover:text-emerald-400 flex items-center justify-center transition-colors"
                        onClick={() => onSubmitClick?.(assignment)}
                        title="Submit Assignment"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    ) : assignment.status === 'graded' || assignment.status === 'late' ? (
                      <button 
                        className="w-8 h-8 rounded-lg bg-[#1b251e] hover:bg-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
                        onClick={() => onViewClick?.(assignment)}
                        title="View Grade"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    ) : (
                      <span className="text-zinc-600">--</span>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
          {assignments.length === 0 && (
            <tr>
              <td colSpan={6} className="px-6 py-8 text-center text-zinc-500">
                No assignments found for this filter.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
