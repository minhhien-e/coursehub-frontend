import { Trophy } from 'lucide-react';
import type { UserProgress } from '../types';

interface ProgressCardProps {
  progress: UserProgress;
}

export const ProgressCard = ({ progress }: ProgressCardProps) => {
  return (
    <div className="bg-surfaceHighlight border border-borderDim rounded-xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
      
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
          <Trophy className="text-emerald-500 w-8 h-8" />
        </div>
        <div>
          <p className="text-textMuted font-medium mb-1">Level {progress.currentLevel}</p>
          <h2 className="text-3xl font-extrabold text-white">{progress.currentXp} XP</h2>
        </div>
      </div>

      <div className="w-full md:max-w-md">
        <div className="flex items-center justify-between text-sm font-medium mb-3">
          <span className="text-textMuted">Level {progress.currentLevel}</span>
          <span className="text-textMuted">Level {progress.currentLevel + 1}</span>
        </div>
        
        {/* Progress Bar */}
        <div className="h-2 w-full bg-borderDim rounded-full overflow-hidden mb-3">
          <div 
            className="h-full bg-emerald-500 rounded-full" 
            style={{ width: '60%' }} // Static for mockup, ideally calculated: (currentXp - levelBaseXp) / (levelNextXp - levelBaseXp) * 100
          />
        </div>
        
        <p className="text-xs font-medium text-textMuted">
          {progress.xpToNextLevel} XP to next level
        </p>
      </div>

    </div>
  );
};
