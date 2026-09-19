export type BookmarkType = 'Course' | 'Lesson';
export type CollectionTag = 'Favorites' | 'Study Later' | 'Exam Prep';

export interface Bookmark {
  id: string;
  title: string;
  type: BookmarkType;
  parentTitle?: string;
  dateAdded: string;
  progress: number;
  tags: CollectionTag[];
}

export interface BookmarksStats {
  total: number;
  totalGrowth: number;
  coursesSaved: number;
  lessonsSaved: number;
  collections: number;
}
