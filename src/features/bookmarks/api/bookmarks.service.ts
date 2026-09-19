import type { Bookmark, BookmarksStats } from '../types';
import { mockBookmarks, mockBookmarksStats } from '../data/mockBookmarks';

export const bookmarksService = {
  async getBookmarks(): Promise<Bookmark[]> {
    return new Promise((resolve) => setTimeout(() => resolve(mockBookmarks), 400));
  },
  async getStats(): Promise<BookmarksStats> {
    return new Promise((resolve) => setTimeout(() => resolve(mockBookmarksStats), 200));
  }
};
