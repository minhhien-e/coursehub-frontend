import { Lock, Footprints, Flame, Trophy, Brain, Zap, Heart, Medal, Calendar, Book, Star, Users, Crown } from 'lucide-react';
import type { Badge, BadgeRarity } from '../types';
import { cn } from '@/utils/cn';

interface BadgeCardProps {
  badge: Badge;
}

const iconMap: Record<string, any> = {
  footprints: Footprints,
  flame: Flame,
  trophy: Trophy,
  brain: Brain,
  zap: Zap,
  heart: Heart,
  medal: Medal,
  calendar: Calendar,
  book: Book,
  star: Star,
  users: Users,
  crown: Crown,
};

const rarityConfig: Record<BadgeRarity, { colorClass: string; bgClass: string }> = {
  Common: { colorClass: 'text-zinc-400', bgClass: 'bg-zinc-500/10 border-zinc-500/20 text-zinc-400' },
  Rare: { colorClass: 'text-blue-400', bgClass: 'bg-blue-500/10 border-blue-500/20 text-blue-400' },
  Epic: { colorClass: 'text-emerald-400', bgClass: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' },
  Legendary: { colorClass: 'text-orange-400', bgClass: 'bg-orange-500/10 border-orange-500/20 text-orange-400' },
};

export const BadgeCard = ({ badge }: BadgeCardProps) => {
  const Icon = badge.isEarned ? (iconMap[badge.iconType] || Trophy) : Lock;
  const rarityStyle = rarityConfig[badge.rarity];

  return (
    <div className={cn(
      "border rounded-xl p-5 flex items-start gap-4 transition-colors",
      badge.isEarned 
        ? "bg-[#121814] border-[#1b251e] hover:border-zinc-700" 
        : "bg-[#0d120f]/50 border-[#151c17] opacity-60"
    )}>
      
      {/* Icon */}
      <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border",
        badge.isEarned ? rarityStyle.bgClass : "bg-zinc-900/50 border-zinc-800 text-zinc-600"
      )}>
        <Icon size={24} className={badge.isEarned ? rarityStyle.colorClass : ""} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className={cn("font-semibold truncate", badge.isEarned ? "text-white" : "text-zinc-400")}>
            {badge.title}
          </h3>
          <span className={cn("text-[10px] px-1.5 py-0.5 rounded-md font-medium border", rarityStyle.bgClass)}>
            {badge.rarity}
          </span>
        </div>
        
        <p className={cn("text-sm mb-2", badge.isEarned ? "text-zinc-400" : "text-zinc-500")}>
          {badge.description}
        </p>
        
        {badge.isEarned && badge.earnedDate && (
          <p className="text-[11px] font-medium text-zinc-500">
            Earned {badge.earnedDate}
          </p>
        )}
        
        {!badge.isEarned && badge.requirement && (
          <p className="text-[11px] font-medium text-zinc-600">
            Requirement: {badge.requirement}
          </p>
        )}
      </div>

    </div>
  );
};
