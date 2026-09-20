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

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-white mb-2">Achievements</h1>
        <p className="text-textMuted">{progress?.earnedBadges || 0} of {progress?.totalBadges || 0} badges earned</p>
      </div>

      {isLoading && (!progress || badges.length === 0) ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="w-10 h-10 text-emerald-500 animate-spin" />
        </div>
      ) : error ? (
        <div className="flex justify-center items-center py-20 text-red-500">
          {error}
        </div>
      ) : progress ? (
        <>
          {/* Progress */}
          <ProgressCard progress={progress} />

          {/* Tabs */}
          <div className="flex items-center gap-2 mb-6 bg-surfaceHighlight p-1.5 rounded-lg border border-borderDim w-fit">
            <button
              onClick={() => dispatch(setActiveTab('badges'))}
              className={cn(
                "px-4 py-1.5 rounded-md text-sm font-medium transition-colors",
                activeTab === 'badges'
                  ? "bg-zinc-800 text-white shadow-sm"
                  : "text-textMuted hover:text-textMain hover:bg-surfaceHighlight"
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
                  : "text-textMuted hover:text-textMain hover:bg-surfaceHighlight"
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
        </>
      ) : null}
      
    </div>
  );
};
