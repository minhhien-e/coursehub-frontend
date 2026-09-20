import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchEvents } from '../store/calendarSlice';
import { CalendarGrid } from './CalendarGrid';
import { UpcomingEvents } from './UpcomingEvents';
import { EventModal } from './EventModal';
import { Loader2 } from 'lucide-react';
import type { CalendarEvent } from '../types';

export const CalendarView = () => {
  const dispatch = useAppDispatch();
  const { events, isLoading, error } = useAppSelector((state) => state.calendar);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <div className="p-6 md:p-8 max-w-[1400px] mx-auto animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-white mb-2">Calendar</h1>
        <p className="text-textMuted">Track your deadlines, live sessions, and quiz dates.</p>
      </div>

      {isLoading && events.length === 0 ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="w-10 h-10 text-emerald-500 animate-spin" />
        </div>
      ) : error ? (
        <div className="flex justify-center items-center py-20 text-red-500">
          {error}
        </div>
      ) : (
        <>
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <CalendarGrid events={events} onEventClick={setSelectedEvent} />
            </div>
            <div>
              <UpcomingEvents events={events} onEventClick={setSelectedEvent} />
            </div>
          </div>
        </>
      )}

      {/* Modal */}
      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          isOpen={true} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
      
    </div>
  );
};
