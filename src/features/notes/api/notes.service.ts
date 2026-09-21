import api from '@/services/api';
import type { Note, NotesStats } from '../types';

export const notesService = {
  async getNotes(): Promise<Note[]> {
    const response = await api.get('/notes');
    return response.data;
  },
  async getStats(): Promise<NotesStats> {
    const response = await api.get('/notes/stats');
    return response.data;
  }
};
