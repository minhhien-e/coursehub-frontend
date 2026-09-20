import { Zap, Award } from 'lucide-react';
import type { LeaderboardUser } from '../types';
import { cn } from '@/utils/cn';

interface PodiumProps {
  topUsers: LeaderboardUser[];
}

export const Podium = ({ topUsers }: PodiumProps) => {
  if (topUsers.length < 3) return null;

  // Podium order: 2nd, 1st, 3rd
  const podiumOrder = [topUsers[1], topUsers[0], topUsers[2]];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 items-end">
      {podiumOrder.map((user) => {
        const isFirst = user.rank === 1;
        const rankColor = 
          user.rank === 1 ? 'text-amber-500 bg-amber-500/10 border-amber-500/20' :
          user.rank === 2 ? 'text-textMuted bg-zinc-300/10 border-zinc-300/20' :
          'text-orange-500 bg-orange-500/10 border-orange-500/20';

        return (
          <div 
            key={user.id} 
            className={cn(
              "bg-surfaceHighlight border border-borderDim rounded-2xl p-6 flex flex-col items-center text-center relative",
              isFirst ? "md:h-64 h-auto shadow-lg shadow-amber-500/5 border-amber-500/20" : "md:h-56 h-auto"
            )}
          >
            {/* Rank Badge */}
            <div className={cn(
              "absolute -top-4 w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm",
              rankColor,
              isFirst ? "w-10 h-10 -top-5 text-lg" : ""
            )}>
              {user.rank}
            </div>

            {/* Avatar */}
            <div className={cn(
              "relative mb-4 rounded-full p-1",
              isFirst ? "bg-gradient-to-b from-amber-500 to-amber-700" : "bg-borderDim"
            )}>
              <img 
                src={user.avatar} 
                alt={user.name} 
                className={cn(
                  "rounded-full border-4 border-[#121814]",
                  isFirst ? "w-20 h-20" : "w-16 h-16"
                )} 
              />
            </div>

            <h3 className="font-bold text-white text-lg">{user.name}</h3>
            <p className="text-sm text-textMuted mb-4">Level {user.level}</p>

            <div className="flex flex-col items-center gap-2 mt-auto">
              <div className="flex items-center gap-1 text-emerald-500 font-bold">
                <Zap size={16} />
                {user.xp.toLocaleString()} XP
              </div>
              <div className="flex items-center gap-1 text-textMuted text-xs font-medium bg-borderDim px-2.5 py-1 rounded-full">
                <Award size={14} />
                {user.badges} badges
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
};
