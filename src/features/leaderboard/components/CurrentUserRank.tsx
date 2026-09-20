import { Zap, Flame, Award } from 'lucide-react';
import type { LeaderboardUser } from '../types';

interface CurrentUserRankProps {
  user: LeaderboardUser;
}

export const CurrentUserRank = ({ user }: CurrentUserRankProps) => {
  return (
    <div className="bg-[#0f1a14] border border-[#15271d] rounded-2xl p-6 flex items-center justify-between mb-10 shadow-lg shadow-emerald-500/5">
      
      <div className="flex items-center gap-6">
        <div className="w-12 h-12 rounded-full bg-borderDim flex items-center justify-center text-emerald-500 font-bold text-lg border border-[#233027]">
          #{user.rank}
        </div>
        
        <div className="flex items-center gap-4">
          <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full border-2 border-emerald-500/20" />
          <div>
            <p className="font-bold text-white text-lg flex items-center gap-2">
              {user.name} <span className="text-emerald-500 text-sm font-medium">(You)</span>
            </p>
            <p className="text-sm text-textMuted">Level {user.level}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-8 hidden md:flex">
        <div className="flex items-center gap-2">
          <Zap size={18} className="text-emerald-500" />
          <span className="font-bold text-white">{user.xp.toLocaleString()} <span className="text-textMuted font-medium text-sm">XP</span></span>
        </div>
        <div className="flex items-center gap-2">
          <Flame size={18} className="text-emerald-500" />
          <span className="font-bold text-white">{user.streak} <span className="text-textMuted font-medium text-sm">day streak</span></span>
        </div>
        <div className="flex items-center gap-2">
          <Award size={18} className="text-emerald-500" />
          <span className="font-bold text-white">{user.badges} <span className="text-textMuted font-medium text-sm">badges</span></span>
        </div>
      </div>

    </div>
  );
};
