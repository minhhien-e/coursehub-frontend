import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Bookmark, BookmarksStats } from '../types';
import { bookmarksService } from '../api/bookmarks.service';

interface BookmarksState {
  items: Bookmark[];
  stats: BookmarksStats | null;
  activeFilter: 'All' | 'Courses' | 'Lessons' | 'Collections';
  isCreateModalOpen: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: BookmarksState = {
  items: [],
  stats: null,
  activeFilter: 'All',
  isCreateModalOpen: false,
  isLoading: false,
  error: null,
};

export const fetchBookmarksData = createAsyncThunk(
  'bookmarks/fetchAll',
  async () => {
    const [items, stats] = await Promise.all([
      bookmarksService.getBookmarks(),
      bookmarksService.getStats(),
    ]);
    return { items, stats };
  }
);

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    setCreateModalOpen: (state, action) => {
      state.isCreateModalOpen = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookmarksData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBookmarksData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.items;
        state.stats = action.payload.stats;
      })
      .addCase(fetchBookmarksData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch bookmarks data';
      });
  },
});

export const { setActiveFilter, setCreateModalOpen } = bookmarksSlice.actions;
export const bookmarksReducer = bookmarksSlice.reducer;
