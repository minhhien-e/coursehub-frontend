import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Note, NotesStats } from '../types';
import { notesService } from '../api/notes.service';

interface NotesState {
  items: Note[];
  stats: NotesStats | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: NotesState = {
  items: [],
  stats: null,
  isLoading: false,
  error: null,
};

export const fetchNotesData = createAsyncThunk(
  'notes/fetchAll',
  async () => {
    const [items, stats] = await Promise.all([
      notesService.getNotes(),
      notesService.getStats(),
    ]);
    return { items, stats };
  }
);

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotesData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNotesData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.items;
        state.stats = action.payload.stats;
      })
      .addCase(fetchNotesData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch notes data';
      });
  },
});

export const notesReducer = notesSlice.reducer;
