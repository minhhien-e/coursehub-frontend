import { Trophy, Zap, Flame, Award } from 'lucide-react';
import type { LeaderboardStats } from '../types';

interface LeaderboardStatsProps {
  stats: LeaderboardStats;
}

export const LeaderboardStatsOverview = ({ stats }: LeaderboardStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-8">
      
      {/* Rank */}
      <div className="bg-surfaceHighlight border border-borderDim rounded-xl p-5 flex flex-col justify-between group hover:border-[#233027] transition-colors">
        <div className="flex justify-between items-start mb-4">
          <p className="text-sm font-medium text-textMuted">Your Rank</p>
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <Trophy size={16} className="text-emerald-500" />
          </div>
        </div>
        <div>
          <p className="text-3xl font-extrabold text-white">#{stats.currentRank}</p>
          <p className="text-xs font-medium text-emerald-500 mt-2">
            Up {stats.rankChange} spots this week
          </p>
        </div>
      </div>

      {/* XP */}
      <div className="bg-surfaceHighlight border border-borderDim rounded-xl p-5 flex flex-col justify-between group hover:border-[#233027] transition-colors">
        <div className="flex justify-between items-start mb-4">
          <p className="text-sm font-medium text-textMuted">Your XP</p>
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <Zap size={16} className="text-emerald-500" />
          </div>
        </div>
        <div>
          <p className="text-3xl font-extrabold text-white">{stats.currentXp.toLocaleString()}</p>
          <p className="text-xs font-medium text-emerald-500 mt-2">
            +{stats.xpChange} this week
          </p>
        </div>
      </div>

      {/* Streak */}
      <div className="bg-surfaceHighlight border border-borderDim rounded-xl p-5 flex flex-col justify-between group hover:border-[#233027] transition-colors">
        <div className="flex justify-between items-start mb-4">
          <p className="text-sm font-medium text-textMuted">Current Streak</p>
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <Flame size={16} className="text-emerald-500" />
          </div>
        </div>
        <div>
          <p className="text-3xl font-extrabold text-white">{stats.currentStreak} days</p>
          <p className="text-xs font-medium text-textMuted mt-2">
            Personal best: {stats.personalBestStreak} days
          </p>
        </div>
      </div>

      {/* Badges */}
      <div className="bg-surfaceHighlight border border-borderDim rounded-xl p-5 flex flex-col justify-between group hover:border-[#233027] transition-colors">
        <div className="flex justify-between items-start mb-4">
          <p className="text-sm font-medium text-textMuted">Badges Earned</p>
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <Award size={16} className="text-emerald-500" />
          </div>
        </div>
        <div>
          <p className="text-3xl font-extrabold text-white">{stats.badgesEarned}</p>
          <p className="text-xs font-medium text-emerald-500 mt-2">
            +{stats.badgesChange} this month
          </p>
        </div>
      </div>

    </div>
  );
};
