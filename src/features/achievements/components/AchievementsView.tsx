import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchAchievementsData, setActiveTab } from '../store/achievementsSlice';
import { ProgressCard } from './ProgressCard';
import { BadgesTab } from './BadgesTab';
import { LeaderboardTab } from './LeaderboardTab';
import { Loader2 } from 'lucide-react';
import { cn } from '@/utils/cn';

export const AchievementsView = () => {
  const dispatch = useAppDispatch();
  const { badges, leaderboard, progress, activeTab, isLoading, error } = useAppSelector((state) => state.achievements);

  useEffect(() => {
    dispatch(fetchAchievementsData());
  }, [dispatch]);

  if (isLoading && (!progress || badges.length === 0)) {
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

  if (!progress) return null;

  return (
    <div className="p-6 md:p-8 max-w-5xl mx-auto animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-white mb-2">Achievements</h1>
        <p className="text-zinc-400">{progress.earnedBadges} of {progress.totalBadges} badges earned</p>
      </div>

      {/* Progress */}
      <ProgressCard progress={progress} />

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6 bg-[#121814] p-1.5 rounded-lg border border-[#1b251e] w-fit">
        <button
          onClick={() => dispatch(setActiveTab('badges'))}
          className={cn(
            "px-4 py-1.5 rounded-md text-sm font-medium transition-colors",
            activeTab === 'badges'
              ? "bg-zinc-800 text-white shadow-sm"
              : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
          )}
        >
          Badges ({progress.totalBadges})
        </button>
        <button
          onClick={() => dispatch(setActiveTab('leaderboard'))}
          className={cn(
            "px-4 py-1.5 rounded-md text-sm font-medium transition-colors",
            activeTab === 'leaderboard'
              ? "bg-zinc-800 text-white shadow-sm"
              : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
          )}
        >
          Leaderboard
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'badges' ? (
          <BadgesTab badges={badges} />
        ) : (
          <LeaderboardTab leaderboard={leaderboard} />
        )}
      </div>
      
    </div>
  );
};
