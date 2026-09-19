export interface Note {
  id: string;
  title: string;
  snippet: string;
  course: string;
  lesson?: string;
  dateAdded: string;
  isPinned: boolean;
  courseTagColor: string;
}

export interface NotesStats {
  total: number;
  totalGrowth: number;
  coursesWithNotes: number;
  thisWeek: number;
  pinned: number;
}
