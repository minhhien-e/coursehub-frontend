import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchNotesData } from '../store/notesSlice';
import { NotesStatsRow } from './NotesStatsRow';
import { NoteGrid } from './NoteGrid';
import { Loader2, Search, Plus, ChevronDown } from 'lucide-react';

export const NotesView = () => {
  const dispatch = useAppDispatch();
  const { items, stats, isLoading, error } = useAppSelector((state) => state.notes);

  useEffect(() => {
    dispatch(fetchNotesData());
  }, [dispatch]);

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2">My Notes</h1>
          <p className="text-textMuted">Personal notes taken during your courses.</p>
        </div>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20">
          <Plus size={18} />
          New Note
        </button>
      </div>

      {isLoading && (!stats || items.length === 0) ? (
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
          {stats && <NotesStatsRow stats={stats} />}

          {/* Filters */}
          <div className="mb-6 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-textMuted" />
              <input 
                type="text" 
                placeholder="Search notes..."
                className="w-full bg-surfaceHighlight border border-borderDim rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-textMuted outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
            <div className="relative shrink-0">
              <select className="appearance-none bg-surfaceHighlight border border-borderDim rounded-xl px-4 py-3 pr-10 text-white outline-none focus:border-emerald-500 transition-colors cursor-pointer w-full md:w-48">
                <option value="all">All Courses</option>
                <option value="recent">Recently Added</option>
                <option value="pinned">Pinned First</option>
              </select>
              <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-textMuted pointer-events-none" />
            </div>
          </div>

          {/* Grid */}
          <NoteGrid notes={items} />
        </>
      )}
      
    </div>
  );
};
