import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchBookmarksData, setActiveFilter, setCreateModalOpen } from '../store/bookmarksSlice';
import { BookmarksStatsRow } from './BookmarksStatsRow';
import { BookmarkList } from './BookmarkList';
import { CreateCollectionModal } from './CreateCollectionModal';
import { Loader2, Plus, Search } from 'lucide-react';
import { cn } from '@/utils/cn';

export const BookmarksView = () => {
  const dispatch = useAppDispatch();
  const { items, stats, activeFilter, isCreateModalOpen, isLoading, error } = useAppSelector((state) => state.bookmarks);

  useEffect(() => {
    dispatch(fetchBookmarksData());
  }, [dispatch]);

  const coursesCount = items.filter(b => b.type === 'Course').length;
  const lessonsCount = items.filter(b => b.type === 'Lesson').length;

  const filters = ['All', 'Courses', 'Lessons', 'Collections'] as const;

  const getFilterLabel = (filter: string) => {
    if (filter === 'All') return `All (${items.length})`;
    if (filter === 'Courses') return `Courses (${coursesCount})`;
    if (filter === 'Lessons') return `Lessons (${lessonsCount})`;
    if (filter === 'Collections') return `Collections (3)`;
    return filter;
  };

  const filteredItems = items.filter(item => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Courses') return item.type === 'Course';
    if (activeFilter === 'Lessons') return item.type === 'Lesson';
    if (activeFilter === 'Collections') return false; // In a real app, we'd render collections here
    return true;
  });

  if (isLoading && (!stats || items.length === 0)) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <Loader2 className="w-10 h-10 text-emerald-500 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2">Bookmarks</h1>
          <p className="text-zinc-400">Your saved courses and lessons for quick access.</p>
        </div>
        <button 
          onClick={() => dispatch(setCreateModalOpen(true))}
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
        >
          <Plus size={18} />
          Create Collection
        </button>
      </div>

      {/* Stats */}
      {stats && <BookmarksStatsRow stats={stats} />}

      {/* Search and Filters */}
      <div className="mb-6">
        <div className="relative mb-6">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input 
            type="text" 
            placeholder="Search bookmarks..."
            className="w-full bg-[#121814] border border-[#1b251e] rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-zinc-600 outline-none focus:border-emerald-500 transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 bg-[#121814] p-1.5 rounded-lg border border-[#1b251e] w-fit">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => dispatch(setActiveFilter(filter))}
              className={cn(
                "px-4 py-1.5 rounded-md text-sm font-medium transition-colors",
                activeFilter === filter
                  ? "bg-zinc-800 text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
              )}
            >
              {getFilterLabel(filter)}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      {activeFilter === 'Collections' ? (
        <div className="text-center py-12 bg-[#121814] border border-[#1b251e] rounded-xl text-zinc-500">
          Collections view coming soon...
        </div>
      ) : (
        <BookmarkList bookmarks={filteredItems} />
      )}

      {/* Modal */}
      <CreateCollectionModal 
        isOpen={isCreateModalOpen} 
        onClose={() => dispatch(setCreateModalOpen(false))} 
      />
      
    </div>
  );
};
