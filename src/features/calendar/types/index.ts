export type CalendarEventType = 'assignment' | 'live_session' | 'quiz';

export interface CalendarEvent {
  id: string;
  title: string;
  course: string;
  date: string; // ISO string YYYY-MM-DD
  type: CalendarEventType;
  time?: string; // Optional time string e.g., "10:00 AM"
  description?: string;
}
