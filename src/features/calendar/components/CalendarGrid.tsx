import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';
import { cn } from '@/utils/cn';
import type { CalendarEvent, CalendarEventType } from '../types';

interface CalendarGridProps {
  events: CalendarEvent[];
  onEventClick?: (event: CalendarEvent) => void;
}

const typeConfig: Record<CalendarEventType, { label: string; colorClass: string; bgClass: string }> = {
  assignment: { label: 'Assignment', colorClass: 'text-emerald-500', bgClass: 'bg-emerald-500/20 text-emerald-500' },
  live_session: { label: 'Live Session', colorClass: 'text-blue-500', bgClass: 'bg-blue-500/20 text-blue-400' },
  quiz: { label: 'Quiz', colorClass: 'text-orange-500', bgClass: 'bg-orange-500/20 text-orange-500' },
};

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const CalendarGrid = ({ events, onEventClick }: CalendarGridProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  // Generate calendar days
  const calendarDays = useMemo(() => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const days = [];
    // Empty slots before first day
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    // Days in current month
    for (let i = 1; i <= daysInMonth; i++) {
      const dateStr = new Date(year, month, i, 12, 0, 0).toISOString().split('T')[0];
      const dayEvents = events.filter(e => e.date === dateStr);
      days.push({ day: i, dateStr, events: dayEvents });
    }
    return days;
  }, [year, month, events]);

  const monthName = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  return (
    <div className="bg-[#121814] border border-[#1b251e] rounded-xl overflow-hidden flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-[#1b251e] flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-white">{monthName}</h2>
        
        <div className="flex items-center gap-2">
          <button onClick={handlePrevMonth} className="p-1.5 rounded bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-zinc-800">
            <ChevronLeft size={16} />
          </button>
          <button onClick={handleToday} className="px-3 py-1.5 rounded text-sm font-medium bg-zinc-800/50 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors border border-zinc-800">
            Today
          </button>
          <button onClick={handleNextMonth} className="p-1.5 rounded bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-zinc-800">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="px-6 py-4 border-b border-[#1b251e] flex items-center gap-6">
        {(Object.entries(typeConfig) as [CalendarEventType, typeof typeConfig[CalendarEventType]][]).map(([key, config]) => (
          <div key={key} className="flex items-center gap-2">
            <Circle size={10} className={cn("fill-current", config.colorClass)} />
            <span className="text-sm text-zinc-400">{config.label}</span>
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="flex-1 p-1">
        <div className="grid grid-cols-7 gap-px bg-[#1b251e]">
          {/* Day Headers */}
          {daysOfWeek.map(day => (
            <div key={day} className="bg-[#121814] py-3 text-center text-xs font-medium text-zinc-500">
              {day}
            </div>
          ))}
          
          {/* Day Cells */}
          {calendarDays.map((dayObj, index) => {
            if (!dayObj) {
              return <div key={`empty-${index}`} className="bg-[#121814] min-h-[120px]" />;
            }
            
            const isToday = dayObj.dateStr === new Date().toISOString().split('T')[0];
            
            return (
              <div 
                key={dayObj.dateStr} 
                className="bg-[#121814] min-h-[120px] p-2 flex flex-col gap-1.5 transition-colors hover:bg-[#1a231d]/50"
              >
                <div className="flex justify-between items-center px-1">
                  <span className={cn(
                    "text-sm font-medium w-6 h-6 flex items-center justify-center rounded-full",
                    isToday ? "bg-emerald-500 text-black" : "text-zinc-300"
                  )}>
                    {dayObj.day}
                  </span>
                </div>
                
                <div className="flex flex-col gap-1 overflow-y-auto max-h-[85px] no-scrollbar">
                  {dayObj.events.map(event => {
                    const config = typeConfig[event.type];
                    return (
                      <div 
                        key={event.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          onEventClick?.(event);
                        }}
                        className={cn("text-[10px] px-1.5 py-1 rounded truncate cursor-pointer hover:opacity-80 transition-opacity", config.bgClass)}
                        title={event.title}
                      >
                        {event.title}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
