import type { CalendarEvent } from '../types';
import { mockEvents } from '../data/mockEvents';

export const calendarService = {
  async getEvents(): Promise<CalendarEvent[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockEvents);
      }, 500);
    });
  }
};
