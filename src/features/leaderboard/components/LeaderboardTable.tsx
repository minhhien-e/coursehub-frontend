import { Flame } from 'lucide-react';
import type { LeaderboardUser } from '../types';
import { cn } from '@/utils/cn';

interface LeaderboardTableProps {
  users: LeaderboardUser[];
}

export const LeaderboardTable = ({ users }: LeaderboardTableProps) => {
  return (
    <div className="bg-[#121814] border border-[#1b251e] rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#1b251e] bg-[#0a0e0c]/50">
              <th className="py-4 px-6 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Rank</th>
              <th className="py-4 px-6 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Student</th>
              <th className="py-4 px-6 text-xs font-semibold text-zinc-500 uppercase tracking-wider text-center">Level</th>
              <th className="py-4 px-6 text-xs font-semibold text-zinc-500 uppercase tracking-wider text-right">XP Points</th>
              <th className="py-4 px-6 text-xs font-semibold text-zinc-500 uppercase tracking-wider text-center">Badges</th>
              <th className="py-4 px-6 text-xs font-semibold text-zinc-500 uppercase tracking-wider text-center">Courses</th>
              <th className="py-4 px-6 text-xs font-semibold text-zinc-500 uppercase tracking-wider text-right">Streak</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1b251e]">
            {users.map((user) => {
              
              const rankColor = 
                user.rank === 1 ? 'text-amber-500' :
                user.rank === 2 ? 'text-zinc-300' :
                user.rank === 3 ? 'text-orange-500' :
                'text-zinc-400';

              return (
                <tr 
                  key={user.id} 
                  className={cn(
                    "hover:bg-[#1a231d] transition-colors",
                    user.isCurrentUser ? "bg-[#0f1a14] border-l-2 border-l-emerald-500" : ""
                  )}
                >
                  <td className="py-4 px-6 font-bold">
                    <span className={rankColor}>{user.rank}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                      <span className="font-bold text-white whitespace-nowrap">
                        {user.name}
                        {user.isCurrentUser && <span className="text-zinc-500 font-medium ml-2 text-xs">(You)</span>}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-zinc-300 font-medium text-center">{user.level}</td>
                  <td className="py-4 px-6 text-sm text-white font-bold text-right">{user.xp.toLocaleString()}</td>
                  <td className="py-4 px-6 text-sm text-zinc-300 font-medium text-center">{user.badges}</td>
                  <td className="py-4 px-6 text-sm text-zinc-300 font-medium text-center">{user.courses}</td>
                  <td className="py-4 px-6 text-sm text-white font-bold text-right">
                    <div className="flex items-center justify-end gap-1 text-amber-500">
                      <Flame size={14} />
                      {user.streak}
                    </div>
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
