import api from '@/services/api';
import type { CalendarEvent } from '../types';

export const calendarService = {
  async getEvents(): Promise<CalendarEvent[]> {
    const response = await api.get('/calendar');
    return response.data;
  }
};
