import { X, Upload, Send } from 'lucide-react';
import type { Assignment } from '../types';
import { useEffect } from 'react';

interface SubmitAssignmentModalProps {
  assignment: Assignment;
  isOpen: boolean;
  onClose: () => void;
}

export const SubmitAssignmentModal = ({ assignment, isOpen, onClose }: SubmitAssignmentModalProps) => {
  // Prevent scrolling when modal is open
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

  const handleSubmit = () => {
    // Mock submit behavior
    alert(`Successfully submitted assignment: ${assignment.title}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-[#0d120f] border border-borderDim rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 pb-4 flex items-start justify-between">
          <div>
            <h2 className="text-lg font-bold text-white">Submit Assignment</h2>
            <p className="text-sm text-textMuted mt-1">
              {assignment.title} — {assignment.course}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-1 text-textMuted hover:text-textMain hover:bg-surfaceHighlight rounded-md transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 pt-2 space-y-6">
          {/* Upload Section */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-textMuted">Upload Files</label>
            <div className="border-2 border-dashed border-borderDim hover:border-emerald-500/50 bg-surfaceHighlight rounded-xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer transition-colors group">
              <div className="w-10 h-10 rounded-full bg-zinc-800/50 group-hover:bg-emerald-500/10 flex items-center justify-center transition-colors">
                <Upload size={20} className="text-textMuted group-hover:text-emerald-500 transition-colors" />
              </div>
              <div className="text-center">
                <p className="text-sm text-textMuted">Drag & drop files here, or click to browse</p>
                <p className="text-xs text-textMuted mt-1">PDF, ZIP, or code files up to 50MB</p>
              </div>
            </div>
          </div>

          {/* Notes Section */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-textMuted">Notes (optional)</label>
            <textarea 
              className="w-full min-h-[100px] bg-surfaceHighlight border border-borderDim rounded-xl p-3 text-sm text-white placeholder:text-textMuted focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
              placeholder="Add any notes or comments about your submission..."
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-4 flex items-center justify-end gap-3 border-t border-borderDim bg-surface">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-textMuted hover:text-textMain hover:bg-surfaceHighlight rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={handleSubmit}
            className="px-4 py-2 text-sm font-medium bg-emerald-500 hover:bg-emerald-600 text-black rounded-lg flex items-center gap-2 transition-colors"
          >
            <Send size={16} />
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
