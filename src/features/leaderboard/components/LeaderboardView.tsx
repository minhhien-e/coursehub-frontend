import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchLeaderboard } from '../store/leaderboardSlice';
import { LeaderboardStatsOverview } from './LeaderboardStatsOverview';
import { CurrentUserRank } from './CurrentUserRank';
import { Podium } from './Podium';
import { LeaderboardTable } from './LeaderboardTable';
import { HowPointsWorkModal } from './HowPointsWorkModal';
import { HelpCircle, Loader2 } from 'lucide-react';
import { cn } from '@/utils/cn';

export const LeaderboardView = () => {
  const dispatch = useAppDispatch();
  const { list, stats, isLoading } = useAppSelector((state) => state.leaderboard);
  const [timePeriod, setTimePeriod] = useState<'Weekly' | 'Monthly' | 'All Time'>('Weekly');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchLeaderboard());
  }, [dispatch]);

  const currentUser = list.find(user => user.isCurrentUser);

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2">Leaderboard</h1>
          <p className="text-textMuted">See how you rank among fellow learners.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 text-sm font-bold text-textMuted bg-surfaceHighlight border border-borderDim hover:bg-surfaceHighlight px-4 py-2 rounded-xl transition-colors"
        >
          <HelpCircle size={16} className="text-textMuted" />
          How Points Work
        </button>
      </div>

      {isLoading && list.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="w-10 h-10 text-emerald-500 animate-spin" />
        </div>
      ) : (
        <>
          {/* Stats Overview */}
          {stats && <LeaderboardStatsOverview stats={stats} />}

          {/* Current User Rank Highlight */}
          {currentUser && <CurrentUserRank user={currentUser} />}

          {/* Time Period Toggle */}
          <div className="flex items-center gap-2 mb-8 bg-surfaceHighlight p-1 rounded-xl border border-borderDim w-fit">
            {['Weekly', 'Monthly', 'All Time'].map((period) => (
              <button
                key={period}
                onClick={() => setTimePeriod(period as any)}
                className={cn(
                  "px-4 py-1.5 rounded-lg text-sm font-bold transition-colors",
                  timePeriod === period 
                    ? "bg-[#233027] text-white" 
                    : "text-textMuted hover:text-textMuted"
                )}
              >
                {period}
              </button>
            ))}
          </div>

          {/* Podium */}
          <Podium topUsers={list} />

          {/* Leaderboard Table */}
          <LeaderboardTable users={list} />
        </>
      )}

      {/* Points Information Modal */}
      <HowPointsWorkModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};
