import type { Note, NotesStats } from '../types';
import { mockNotes, mockNotesStats } from '../data/mockNotes';

export const notesService = {
  async getNotes(): Promise<Note[]> {
    return new Promise((resolve) => setTimeout(() => resolve(mockNotes), 400));
  },
  async getStats(): Promise<NotesStats> {
    return new Promise((resolve) => setTimeout(() => resolve(mockNotesStats), 200));
  }
};
