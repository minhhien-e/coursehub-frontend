import { X, Star, FileText } from 'lucide-react';
import type { Assignment } from '../types';
import { useEffect } from 'react';

interface AssignmentFeedbackModalProps {
  assignment: Assignment;
  isOpen: boolean;
  onClose: () => void;
}

export const AssignmentFeedbackModal = ({ assignment, isOpen, onClose }: AssignmentFeedbackModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-[#0d120f] border border-[#1b251e] rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 pb-4 flex items-start justify-between">
          <div>
            <h2 className="text-lg font-bold text-white">Assignment Feedback</h2>
            <p className="text-sm text-zinc-400 mt-1">
              {assignment.title} — {assignment.course}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-1 text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-md transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 pt-2 space-y-6">
          {/* Grade Section */}
          <div className="flex items-center justify-between bg-[#121814] border border-[#1b251e] p-4 rounded-xl">
            <span className="text-sm font-medium text-zinc-300">Grade</span>
            <div className="flex items-center gap-2">
              <Star size={18} className="text-orange-500 fill-orange-500" />
              <span className="font-bold text-white">
                {assignment.grade !== undefined && assignment.totalScore !== undefined
                  ? `${assignment.grade}/${assignment.totalScore}`
                  : 'N/A'}
              </span>
            </div>
          </div>

          {/* Instructor Feedback */}
          {assignment.instructorFeedback && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Instructor Feedback</label>
              <div className="bg-[#121814] border border-[#1b251e] p-4 rounded-xl">
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {assignment.instructorFeedback}
                </p>
              </div>
            </div>
          )}

          {/* Your Submission */}
          {assignment.submissionNotes && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Your Submission</label>
              <div className="bg-[#121814] border border-[#1b251e] p-4 rounded-xl">
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {assignment.submissionNotes}
                </p>
              </div>
            </div>
          )}

          {/* Submitted Files */}
          {assignment.submittedFiles && assignment.submittedFiles.length > 0 && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Submitted Files</label>
              <div className="space-y-2">
                {assignment.submittedFiles.map((file, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FileText size={16} className="text-zinc-500" />
                    <a href={file.url} className="text-sm text-zinc-400 hover:text-white hover:underline transition-colors">
                      {file.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 pt-4 flex items-center justify-end border-t border-[#1b251e] bg-[#0a0e0c]">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium bg-[#1b251e] hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
