import { ArrowRight, Medal, Heart, Zap, Brain } from 'lucide-react';
import { cn } from '@/utils/cn';

const achievements = [
  { id: 1, title: 'Triple Threat', rarity: 'Epic', icon: Medal, colorClass: 'text-emerald-400', bgClass: 'bg-emerald-500/10 border-emerald-500/20' },
  { id: 2, title: 'Helpful Hand', rarity: 'Rare', icon: Heart, colorClass: 'text-blue-400', bgClass: 'bg-blue-500/10 border-blue-500/20' },
  { id: 3, title: 'Two-Week Streak', rarity: 'Rare', icon: Zap, colorClass: 'text-blue-400', bgClass: 'bg-blue-500/10 border-blue-500/20' },
  { id: 4, title: 'Quiz Whiz', rarity: 'Rare', icon: Brain, colorClass: 'text-blue-400', bgClass: 'bg-blue-500/10 border-blue-500/20' },
];

export const RecentAchievements = () => {
  return (
    <div className="bg-[#0a0e0c] border border-[#1b251e] rounded-xl overflow-hidden mb-6">
      
      <div className="p-5 flex justify-between items-center">
        <h3 className="text-lg font-bold text-white">Recent Achievements</h3>
        <button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
          View all <ArrowRight size={14} />
        </button>
      </div>

      <div className="px-5 pb-5 grid grid-cols-2 gap-3">
        {achievements.map(ach => (
          <div key={ach.id} className={cn("rounded-lg p-3 border flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform", ach.bgClass)}>
            <ach.icon size={20} className={cn("mb-2", ach.colorClass)} />
            <h4 className={cn("font-bold text-[11px] mb-0.5", ach.colorClass)}>{ach.title}</h4>
            <p className="text-[9px] text-zinc-400 uppercase tracking-wider">{ach.rarity}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};
