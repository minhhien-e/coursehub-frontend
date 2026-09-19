import type { Badge } from '../types';
import { BadgeCard } from './BadgeCard';

interface BadgesTabProps {
  badges: Badge[];
}

export const BadgesTab = ({ badges }: BadgesTabProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in duration-300">
      {badges.map(badge => (
        <BadgeCard key={badge.id} badge={badge} />
      ))}
    </div>
  );
};
