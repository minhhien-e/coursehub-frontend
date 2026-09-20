import type { Note } from '../types';
import { NoteCard } from './NoteCard';

interface NoteGridProps {
  notes: Note[];
}

export const NoteGrid = ({ notes }: NoteGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
      {notes.map(note => (
        <NoteCard key={note.id} note={note} />
      ))}
      
      {notes.length === 0 && (
        <div className="col-span-full text-center py-12 bg-surfaceHighlight border border-borderDim rounded-xl">
          <p className="text-textMuted">No notes found.</p>
        </div>
      )}
    </div>
  );
};
