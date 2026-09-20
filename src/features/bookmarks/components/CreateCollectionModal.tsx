import { X } from 'lucide-react';

interface CreateCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateCollectionModal = ({ isOpen, onClose }: CreateCollectionModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-surface border border-borderDim rounded-xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-5 border-b border-borderDim flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-white">Create Collection</h2>
            <p className="text-xs text-textMuted mt-1">Organize your bookmarks into a named collection.</p>
          </div>
          <button 
            onClick={onClose}
            className="text-textMuted hover:text-textMain transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-1.5">Name</label>
            <input 
              type="text" 
              placeholder="Collection name..."
              className="w-full bg-surfaceHighlight border border-emerald-500/50 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-lg px-4 py-2.5 text-white placeholder:text-textMuted outline-none transition-all shadow-[0_0_10px_rgba(16,185,129,0.1)]"
              autoFocus
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1.5">Description</label>
            <textarea 
              placeholder="What is this collection for?"
              rows={3}
              className="w-full bg-surfaceHighlight border border-borderDim focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-lg px-4 py-2.5 text-white placeholder:text-textMuted outline-none transition-all resize-none"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 bg-surfaceHighlight border-t border-borderDim flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-sm font-medium text-textMuted hover:text-textMain hover:bg-surfaceHighlight transition-colors border border-transparent hover:border-borderDim"
          >
            Cancel
          </button>
          <button 
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-emerald-500 hover:bg-emerald-600 text-white transition-colors shadow-lg shadow-emerald-500/20"
          >
            Create
          </button>
        </div>

      </div>
    </div>
  );
};
