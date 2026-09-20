import { Flame } from 'lucide-react';
import type { LeaderboardUser } from '../types';
import { cn } from '@/utils/cn';

interface LeaderboardTableProps {
  users: LeaderboardUser[];
}

export const LeaderboardTable = ({ users }: LeaderboardTableProps) => {
  return (
    <div className="bg-surfaceHighlight border border-borderDim rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-borderDim bg-surface/50">
              <th className="py-4 px-6 text-xs font-semibold text-textMuted uppercase tracking-wider">Rank</th>
              <th className="py-4 px-6 text-xs font-semibold text-textMuted uppercase tracking-wider">Student</th>
              <th className="py-4 px-6 text-xs font-semibold text-textMuted uppercase tracking-wider text-center">Level</th>
              <th className="py-4 px-6 text-xs font-semibold text-textMuted uppercase tracking-wider text-right">XP Points</th>
              <th className="py-4 px-6 text-xs font-semibold text-textMuted uppercase tracking-wider text-center">Badges</th>
              <th className="py-4 px-6 text-xs font-semibold text-textMuted uppercase tracking-wider text-center">Courses</th>
              <th className="py-4 px-6 text-xs font-semibold text-textMuted uppercase tracking-wider text-right">Streak</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1b251e]">
            {users.map((user) => {
              
              const rankColor = 
                user.rank === 1 ? 'text-amber-500' :
                user.rank === 2 ? 'text-textMuted' :
                user.rank === 3 ? 'text-orange-500' :
                'text-textMuted';

              return (
                <tr 
                  key={user.id} 
                  className={cn(
                    "hover:bg-surfaceHighlight transition-colors",
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
                        {user.isCurrentUser && <span className="text-textMuted font-medium ml-2 text-xs">(You)</span>}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-textMuted font-medium text-center">{user.level}</td>
                  <td className="py-4 px-6 text-sm text-white font-bold text-right">{user.xp.toLocaleString()}</td>
                  <td className="py-4 px-6 text-sm text-textMuted font-medium text-center">{user.badges}</td>
                  <td className="py-4 px-6 text-sm text-textMuted font-medium text-center">{user.courses}</td>
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
