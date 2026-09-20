import { Book, PlaySquare, MoreHorizontal } from 'lucide-react';
import type { Bookmark } from '../types';
import { cn } from '@/utils/cn';

interface BookmarkItemProps {
  bookmark: Bookmark;
}

const tagColors: Record<string, string> = {
  'Favorites': 'bg-pink-500/20 text-pink-400',
  'Study Later': 'bg-purple-500/20 text-purple-400',
  'Exam Prep': 'bg-blue-500/20 text-blue-400',
};

export const BookmarkItem = ({ bookmark }: BookmarkItemProps) => {
  return (
    <div className="bg-surfaceHighlight border border-borderDim rounded-xl p-5 hover:border-borderDim transition-colors group">
      
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-surface border border-borderDim flex items-center justify-center shrink-0">
          {bookmark.type === 'Course' ? (
            <Book size={20} className="text-textMuted group-hover:text-emerald-500 transition-colors" />
          ) : (
            <PlaySquare size={20} className="text-textMuted group-hover:text-emerald-500 transition-colors" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1.5">
                <h3 className="text-white font-semibold truncate group-hover:text-emerald-400 transition-colors">
                  {bookmark.title}
                </h3>
                <span className="text-[10px] font-medium text-textMuted bg-zinc-800 px-2 py-0.5 rounded-full border border-borderDim">
                  {bookmark.type}
                </span>
                {bookmark.tags.map(tag => (
                  <span key={tag} className={cn("text-[10px] font-medium px-2 py-0.5 rounded-full", tagColors[tag] || "bg-zinc-800 text-textMuted")}>
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-2 text-xs text-textMuted">
                {bookmark.parentTitle && (
                  <>
                    <span>{bookmark.parentTitle}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  </>
                )}
                <span>Bookmarked {bookmark.dateAdded}</span>
              </div>
            </div>

            <button className="text-textMuted hover:text-textMain transition-colors p-1">
              <MoreHorizontal size={18} />
            </button>
          </div>

          {/* Progress */}
          <div className="mt-6 flex flex-col gap-2">
            <div className="flex justify-between items-center text-xs font-medium">
              <span className="text-textMuted">Progress</span>
              <span className="text-textMuted">{bookmark.progress}%</span>
            </div>
            <div className="w-full h-1.5 bg-surface rounded-full overflow-hidden border border-borderDim">
              <div 
                className="h-full bg-emerald-500 rounded-full" 
                style={{ width: `${bookmark.progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
