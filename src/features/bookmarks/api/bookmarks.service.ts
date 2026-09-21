import api from '@/services/api';
import type { Bookmark, BookmarksStats } from '../types';

export const bookmarksService = {
  async getBookmarks(): Promise<Bookmark[]> {
    const response = await api.get('/bookmarks');
    return response.data;
  },
  async getStats(): Promise<BookmarksStats> {
    const response = await api.get('/bookmarks/stats');
    return response.data;
  }
};
