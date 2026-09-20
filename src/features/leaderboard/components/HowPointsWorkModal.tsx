import { X, BookOpen, Target, Star, Flame, Award, Trophy } from 'lucide-react';
import { cn } from '@/utils/cn';

interface HowPointsWorkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HowPointsWorkModal = ({ isOpen, onClose }: HowPointsWorkModalProps) => {
  if (!isOpen) return null;

  const pointRules = [
    {
      title: 'Course Completion',
      description: 'Complete all lessons in a course',
      points: '100 XP',
      icon: BookOpen,
    },
    {
      title: 'Quiz Perfect Score',
      description: 'Score 100% on any quiz',
      points: '50 XP',
      icon: Target,
    },
    {
      title: 'Quiz Pass',
      description: 'Pass a quiz with 70%+ score',
      points: '25 XP',
      icon: Star,
    },
    {
      title: 'Daily Streak',
      description: 'Log in and study every day',
      points: '10 XP',
      icon: Flame,
    },
    {
      title: 'Badge Earned',
      description: 'Earn any achievement badge',
      points: '15 XP',
      icon: Award,
    },
    {
      title: 'Assignment Graded',
      description: 'Submit and get graded on an assignment',
      points: '30 XP',
      icon: Trophy,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#0f1a14] border border-borderDim rounded-2xl w-full max-w-md shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-borderDim flex items-start justify-between shrink-0">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">How Points Work</h2>
            <p className="text-sm text-textMuted">
              Earn XP by completing courses, quizzes, and maintaining streaks.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-textMuted hover:text-textMain transition-colors p-1"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-3">
          {pointRules.map((rule, index) => {
            const Icon = rule.icon;
            return (
              <div key={index} className="bg-surfaceHighlight border border-borderDim rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">{rule.title}</h3>
                    <p className="text-xs text-textMuted">{rule.description}</p>
                  </div>
                </div>
                <div className="bg-fuchsia-500/20 text-fuchsia-400 font-bold text-[11px] px-2.5 py-1 rounded-full whitespace-nowrap">
                  {rule.points}
                </div>
              </div>
            );
          })}

          <div className="mt-6 p-4 rounded-xl border border-borderDim bg-surfaceHighlight">
            <p className="text-sm text-textMuted">
              <span className="font-bold text-white">Levels:</span> Every 500 XP earns you a new level. Higher levels unlock exclusive badges and recognition on the leaderboard.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-borderDim flex justify-end shrink-0 bg-surface/50">
          <button 
            onClick={onClose}
            className="px-6 py-2 rounded-xl text-sm font-bold text-white bg-borderDim hover:bg-[#233027] transition-colors border border-borderDim"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
