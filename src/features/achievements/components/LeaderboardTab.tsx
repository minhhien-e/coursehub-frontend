import type { LeaderboardUser } from '../types';
import { cn } from '@/utils/cn';

interface LeaderboardTabProps {
  leaderboard: LeaderboardUser[];
}

export const LeaderboardTab = ({ leaderboard }: LeaderboardTabProps) => {
  return (
    <div className="bg-[#121814] border border-[#1b251e] rounded-xl overflow-hidden animate-in fade-in duration-300">
      <div className="w-full overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-zinc-500 bg-[#0a0e0c] border-b border-[#1b251e]">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium">Rank</th>
              <th scope="col" className="px-6 py-4 font-medium">Learner</th>
              <th scope="col" className="px-6 py-4 font-medium text-right">XP</th>
              <th scope="col" className="px-6 py-4 font-medium text-center">Level</th>
              <th scope="col" className="px-6 py-4 font-medium text-center">Badges</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1b251e]">
            {leaderboard.map((user) => {
              const isTop3 = user.rank <= 3;
              const rankColor = 
                user.rank === 1 ? "text-yellow-500 font-bold" :
                user.rank === 2 ? "text-slate-300 font-bold" :
                user.rank === 3 ? "text-orange-600 font-bold" :
                "text-zinc-500 font-medium";

              return (
                <tr 
                  key={user.id} 
                  className={cn(
                    "transition-colors",
                    user.isCurrentUser ? "bg-emerald-500/5 hover:bg-emerald-500/10" : "hover:bg-[#1a231d]/50"
                  )}
                >
                  {/* Rank */}
                  <td className="px-6 py-4">
                    <span className={cn(
                      "w-6 h-6 flex items-center justify-center rounded-full text-xs",
                      rankColor,
                      isTop3 && "bg-zinc-900"
                    )}>
                      {user.rank}
                    </span>
                  </td>

                  {/* Learner */}
                  <td className="px-6 py-4 font-medium text-white">
                    <div className="flex items-center gap-3">
                      <img 
                        src={user.avatar} 
                        alt={user.name} 
                        className="w-8 h-8 rounded-full bg-zinc-800 object-cover"
                      />
                      <span className={user.isCurrentUser ? "text-emerald-400" : ""}>
                        {user.name}
                      </span>
                    </div>
                  </td>

                  {/* XP */}
                  <td className="px-6 py-4 text-right font-medium text-zinc-300">
                    {user.xp.toLocaleString()}
                  </td>

                  {/* Level */}
                  <td className="px-6 py-4 text-center text-zinc-400">
                    {user.level}
                  </td>

                  {/* Badges */}
                  <td className="px-6 py-4 text-center font-medium text-zinc-300">
                    {user.badgesCount}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
