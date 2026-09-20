import { X, Clock, BookOpen } from 'lucide-react';
import type { CalendarEvent, CalendarEventType } from '../types';
import { useEffect } from 'react';
import { cn } from '@/utils/cn';

interface EventModalProps {
  event: CalendarEvent;
  isOpen: boolean;
  onClose: () => void;
}

const typeConfig: Record<CalendarEventType, { label: string; bgClass: string }> = {
  assignment: { label: 'Assignment', bgClass: 'bg-emerald-500/20 text-emerald-500 border border-emerald-500/30' },
  live_session: { label: 'Live Session', bgClass: 'bg-blue-500/20 text-blue-400 border border-blue-500/30' },
  quiz: { label: 'Quiz', bgClass: 'bg-orange-500/20 text-orange-500 border border-orange-500/30' },
};

export const EventModal = ({ event, isOpen, onClose }: EventModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const config = typeConfig[event.type];

  // Format date correctly
  const d = new Date(event.date);
  const formattedDate = d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-[#0d120f] border border-borderDim rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 pb-4 flex items-start justify-between">
          <div className="pr-4">
            <h2 className="text-lg font-bold text-white leading-tight">{event.title}</h2>
            <p className="text-sm text-textMuted mt-1">{event.course}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-1 text-textMuted hover:text-textMain hover:bg-surfaceHighlight rounded-md transition-colors shrink-0"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 pt-2 space-y-5">
          {/* Badge */}
          <div>
            <span className={cn("text-xs font-medium px-2.5 py-1 rounded-full", config.bgClass)}>
              {config.label}
            </span>
          </div>

          {/* Date & Time */}
          <div className="flex items-center gap-3 text-textMuted">
            <Clock size={16} className="text-textMuted" />
            <span className="text-sm">
              {formattedDate} {event.time ? `at ${event.time}` : ''}
            </span>
          </div>

          {/* Description */}
          {event.description && (
            <div className="bg-surfaceHighlight border border-borderDim p-4 rounded-xl">
              <p className="text-sm text-textMuted leading-relaxed">
                {event.description}
              </p>
            </div>
          )}

          {/* Course */}
          <div className="flex items-center gap-3 text-textMuted">
            <BookOpen size={16} className="text-textMuted" />
            <span className="text-sm">{event.course}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-4 flex items-center justify-end border-t border-borderDim bg-surface">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium bg-borderDim hover:bg-surfaceHighlight text-textMuted hover:text-textMain rounded-lg transition-colors border border-transparent hover:border-borderDim"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
