import { ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';

import { mockRecentAchievements as achievements } from '../data/mockDashboard';

export const RecentAchievements = () => {
  return (
    <div className="bg-surface border border-borderDim rounded-xl overflow-hidden mb-6">
      
      <div className="p-5 flex justify-between items-center">
        <h3 className="text-lg font-bold text-white">Recent Achievements</h3>
        <button className="text-sm font-medium text-textMuted hover:text-textMain transition-colors flex items-center gap-1">
          View all <ArrowRight size={14} />
        </button>
      </div>

      <div className="px-5 pb-5 grid grid-cols-2 gap-3">
        {achievements.map(ach => (
          <div key={ach.id} className={cn("rounded-lg p-3 border flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform", ach.bgClass)}>
            <ach.icon size={20} className={cn("mb-2", ach.colorClass)} />
            <h4 className={cn("font-bold text-[11px] mb-0.5", ach.colorClass)}>{ach.title}</h4>
            <p className="text-[9px] text-textMuted uppercase tracking-wider">{ach.rarity}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};
