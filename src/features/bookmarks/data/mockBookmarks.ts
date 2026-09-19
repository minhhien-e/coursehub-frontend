import type { Bookmark, BookmarksStats } from '../types';

export const mockBookmarks: Bookmark[] = [
  {
    id: 'bm1',
    title: 'Advanced React Patterns',
    type: 'Course',
    dateAdded: 'Jul 28, 2026',
    progress: 68,
    tags: ['Favorites'],
  },
  {
    id: 'bm2',
    title: 'Compound Components Deep Dive',
    type: 'Lesson',
    parentTitle: 'Advanced React Patterns',
    dateAdded: 'Jul 25, 2026',
    progress: 100,
    tags: ['Study Later'],
  },
  {
    id: 'bm3',
    title: 'UI/UX Design Masterclass',
    type: 'Course',
    dateAdded: 'Jul 22, 2026',
    progress: 32,
    tags: ['Favorites'],
  }
];

export const mockBookmarksStats: BookmarksStats = {
  total: 12,
  totalGrowth: 3,
  coursesSaved: 6,
  lessonsSaved: 6,
  collections: 3,
};
