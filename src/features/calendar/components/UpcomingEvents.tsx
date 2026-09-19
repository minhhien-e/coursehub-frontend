import { Video, FileText, AlertCircle } from 'lucide-react';
import type { CalendarEvent, CalendarEventType } from '../types';
import { cn } from '@/utils/cn';

interface UpcomingEventsProps {
  events: CalendarEvent[];
}

const typeConfig: Record<CalendarEventType, { icon: any; colorClass: string; bgClass: string }> = {
  assignment: { icon: FileText, colorClass: 'text-emerald-500', bgClass: 'bg-emerald-500/10 border-emerald-500/20' },
  live_session: { icon: Video, colorClass: 'text-blue-500', bgClass: 'bg-blue-500/10 border-blue-500/20' },
  quiz: { icon: AlertCircle, colorClass: 'text-orange-500', bgClass: 'bg-orange-500/10 border-orange-500/20' },
};

export const UpcomingEvents = ({ events }: UpcomingEventsProps) => {
  // Filter for upcoming events and sort by date
  const todayStr = new Date().toISOString().split('T')[0];
  
  const upcomingEvents = [...events]
    .filter(e => e.date >= todayStr)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 10); // Show max 10

  const formatEventDate = (dateStr: string, time?: string) => {
    const d = new Date(dateStr);
    const formatted = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    return time ? `${formatted} @ ${time}` : formatted;
  };

  return (
    <div className="bg-[#121814] border border-[#1b251e] rounded-xl flex flex-col h-full max-h-[800px]">
      <div className="p-6 border-b border-[#1b251e]">
        <h2 className="text-xl font-bold text-white">Upcoming Events</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {upcomingEvents.length === 0 ? (
          <p className="text-zinc-500 text-sm text-center py-8">No upcoming events.</p>
        ) : (
          upcomingEvents.map(event => {
            const config = typeConfig[event.type];
            const Icon = config.icon;
            
            return (
              <div 
                key={event.id}
                className="bg-[#0a0e0c] border border-[#1b251e] rounded-xl p-4 flex gap-4 hover:border-zinc-700 transition-colors"
              >
                <div className={cn(
                  "w-10 h-10 shrink-0 rounded-lg flex items-center justify-center border",
                  config.bgClass
                )}>
                  <Icon size={18} className={config.colorClass} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="text-zinc-200 font-semibold text-sm truncate">{event.title}</h4>
                  <p className="text-zinc-500 text-xs truncate mt-0.5">{event.course}</p>
                  <p className="text-zinc-400 text-xs mt-2">
                    {formatEventDate(event.date, event.time)}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
