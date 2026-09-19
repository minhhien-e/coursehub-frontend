import { Bookmark as BookmarkIcon, BookOpen, GraduationCap, GitPullRequest } from 'lucide-react';
import type { BookmarksStats } from '../types';

interface BookmarksStatsProps {
  stats: BookmarksStats;
}

export const BookmarksStatsRow = ({ stats }: BookmarksStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
      
      <div className="bg-[#121814] border border-[#1b251e] rounded-xl p-5 flex justify-between items-start">
        <div>
          <p className="text-zinc-400 text-sm font-medium mb-1">Total Bookmarks</p>
          <h3 className="text-2xl font-extrabold text-white mb-2">{stats.total}</h3>
          <p className="text-xs font-medium text-emerald-500">+{stats.totalGrowth} this week</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
          <BookmarkIcon size={20} className="text-emerald-500" />
        </div>
      </div>

      <div className="bg-[#121814] border border-[#1b251e] rounded-xl p-5 flex justify-between items-start">
        <div>
          <p className="text-zinc-400 text-sm font-medium mb-1">Courses Saved</p>
          <h3 className="text-2xl font-extrabold text-white mb-2">{stats.coursesSaved}</h3>
          <p className="text-xs font-medium text-zinc-500">Across {stats.collections} categories</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
          <BookOpen size={20} className="text-emerald-500" />
        </div>
      </div>

      <div className="bg-[#121814] border border-[#1b251e] rounded-xl p-5 flex justify-between items-start">
        <div>
          <p className="text-zinc-400 text-sm font-medium mb-1">Lessons Saved</p>
          <h3 className="text-2xl font-extrabold text-white mb-2">{stats.lessonsSaved}</h3>
          <p className="text-xs font-medium text-emerald-500">+2 this week</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
          <GraduationCap size={20} className="text-emerald-500" />
        </div>
      </div>

      <div className="bg-[#121814] border border-[#1b251e] rounded-xl p-5 flex justify-between items-start">
        <div>
          <p className="text-zinc-400 text-sm font-medium mb-1">Collections</p>
          <h3 className="text-2xl font-extrabold text-white mb-2">{stats.collections}</h3>
          <p className="text-xs font-medium text-zinc-500">Favorites, Study Later, Exam Prep</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
          <GitPullRequest size={20} className="text-emerald-500" />
        </div>
      </div>

    </div>
  );
};
