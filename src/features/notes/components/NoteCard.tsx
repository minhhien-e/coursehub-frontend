import { Pin, MoreHorizontal } from 'lucide-react';
import type { Note } from '../types';
import { cn } from '@/utils/cn';

interface NoteCardProps {
  note: Note;
}

export const NoteCard = ({ note }: NoteCardProps) => {
  return (
    <div className="bg-[#121814] border border-[#1b251e] hover:border-zinc-700 transition-colors rounded-xl p-6 flex flex-col group h-full">
      
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          {note.isPinned && (
            <Pin size={14} className="text-emerald-500 fill-emerald-500 shrink-0" />
          )}
          <h3 className="font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
            {note.title}
          </h3>
        </div>
        <button className="text-zinc-500 hover:text-white transition-colors">
          <MoreHorizontal size={18} />
        </button>
      </div>

      <p className="text-sm text-zinc-400 leading-relaxed mb-6 line-clamp-4 flex-1">
        {note.snippet}
      </p>

      <div className="mt-auto pt-4 border-t border-[#1b251e]">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-full border border-transparent", note.courseTagColor)}>
            {note.course}
          </span>
          {note.lesson && (
            <span className="text-[10px] font-medium text-zinc-400">
              {note.lesson}
            </span>
          )}
        </div>
        
        <p className="text-[11px] text-zinc-500">
          {note.dateAdded}
        </p>
      </div>

    </div>
  );
};
