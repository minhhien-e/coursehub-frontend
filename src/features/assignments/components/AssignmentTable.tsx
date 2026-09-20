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
    <div className="w-full overflow-x-auto bg-surfaceHighlight rounded-xl border border-borderDim">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-textMuted uppercase bg-[#0d120f] border-b border-borderDim">
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
              <tr key={assignment.id} className="hover:bg-surfaceHighlight/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-textMuted shrink-0" />
                    <span className="font-medium text-textMain">{assignment.title}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-textMuted">
                  {assignment.course}
                </td>
                <td className="px-6 py-4 text-textMuted">
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
                <td className="px-6 py-4 text-center text-textMain font-medium">
                  {assignment.grade !== undefined && assignment.totalScore !== undefined
                    ? `${assignment.grade}/${assignment.totalScore}`
                    : '--'}
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center">
                    {(assignment.status === 'pending' || assignment.status === 'late' && assignment.grade === undefined) ? (
                      <button 
                        className="w-8 h-8 rounded-lg bg-borderDim hover:bg-emerald-500/20 text-textMuted hover:text-emerald-400 flex items-center justify-center transition-colors"
                        onClick={() => onSubmitClick?.(assignment)}
                        title="Submit Assignment"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    ) : assignment.status === 'graded' || assignment.status === 'late' ? (
                      <button 
                        className="w-8 h-8 rounded-lg bg-borderDim hover:bg-zinc-700 text-textMuted hover:text-textMain flex items-center justify-center transition-colors"
                        onClick={() => onViewClick?.(assignment)}
                        title="View Grade"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    ) : (
                      <span className="text-textMuted">--</span>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
          {assignments.length === 0 && (
            <tr>
              <td colSpan={6} className="px-6 py-8 text-center text-textMuted">
                No assignments found for this filter.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
