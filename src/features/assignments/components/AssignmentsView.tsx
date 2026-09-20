import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchAssignments, fetchAssignmentStats, setStatusFilter } from '../store/assignmentsSlice';
import { AssignmentStats } from './AssignmentStats';
import { AssignmentTable } from './AssignmentTable';
import { SubmitAssignmentModal } from './SubmitAssignmentModal';
import { AssignmentFeedbackModal } from './AssignmentFeedbackModal';
import { Loader2 } from 'lucide-react';
import { cn } from '@/utils/cn';
import type { Assignment } from '../types';

export const AssignmentsView = () => {
  const dispatch = useAppDispatch();
  const { items, stats, statusFilter, isLoading, error } = useAppSelector((state) => state.assignments);

  const [submitModalAssignment, setSubmitModalAssignment] = useState<Assignment | null>(null);
  const [feedbackModalAssignment, setFeedbackModalAssignment] = useState<Assignment | null>(null);

  useEffect(() => {
    dispatch(fetchAssignments());
    dispatch(fetchAssignmentStats());
  }, [dispatch]);

  const activeCount = items.filter(i => i.status === 'pending' || i.status === 'late').length;
  const submittedCount = items.filter(i => i.status === 'submitted').length;
  const gradedCount = items.filter(i => i.status === 'graded').length;

  const tabs: { id: 'all' | 'active' | 'submitted' | 'graded'; label: string; count: number }[] = [
    { id: 'all', label: 'All', count: items.length },
    { id: 'active', label: 'Active', count: activeCount },
    { id: 'submitted', label: 'Submitted', count: submittedCount },
    { id: 'graded', label: 'Graded', count: gradedCount },
  ];

  const filteredItems = useMemo(() => {
    if (statusFilter === 'all') return items;
    if (statusFilter === 'active') return items.filter(i => i.status === 'pending' || i.status === 'late');
    return items.filter(i => i.status === statusFilter);
  }, [items, statusFilter]);

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-white mb-2">Assignments</h1>
        <p className="text-textMuted">Track and submit your course assignments.</p>
      </div>

      {isLoading && items.length === 0 ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="w-10 h-10 text-emerald-500 animate-spin" />
        </div>
      ) : error ? (
        <div className="flex justify-center items-center py-20 text-red-500">
          {error}
        </div>
      ) : (
        <>
          {/* Stats */}
          <AssignmentStats stats={stats} />

          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-6 bg-surfaceHighlight p-1.5 rounded-lg border border-borderDim w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => dispatch(setStatusFilter(tab.id))}
                className={cn(
                  "px-4 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2",
                  statusFilter === tab.id
                    ? "bg-zinc-800 text-white shadow-sm"
                    : "text-textMuted hover:text-textMain hover:bg-surfaceHighlight"
                )}
              >
                {tab.label}
                <span className={cn(
                  "text-xs rounded-full px-1.5 py-0.5",
                  statusFilter === tab.id ? "bg-emerald-500/20 text-emerald-400" : "bg-zinc-800 text-textMuted"
                )}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Table */}
          <AssignmentTable 
            assignments={filteredItems}
            onSubmitClick={(assignment) => setSubmitModalAssignment(assignment)}
            onViewClick={(assignment) => setFeedbackModalAssignment(assignment)}
          />
        </>
      )}

      {/* Modals */}
      {submitModalAssignment && (
        <SubmitAssignmentModal 
          assignment={submitModalAssignment} 
          isOpen={true} 
          onClose={() => setSubmitModalAssignment(null)} 
        />
      )}
      {feedbackModalAssignment && (
        <AssignmentFeedbackModal 
          assignment={feedbackModalAssignment} 
          isOpen={true} 
          onClose={() => setFeedbackModalAssignment(null)} 
        />
      )}
      
    </div>
  );
};
