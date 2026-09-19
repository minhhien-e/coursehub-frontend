import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import type { Course } from '../types';
import { coursesService } from '../api/courses.service';

interface CoursesState {
  items: Course[];
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  sortBy: string;
}

const initialState: CoursesState = {
  items: [],
  isLoading: false,
  error: null,
  searchQuery: '',
  sortBy: 'recommended',
};

export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async () => {
    const response = await coursesService.getCourses();
    return response;
  }
);

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch courses';
      });
  },
});

export const { setSearchQuery, setSortBy } = coursesSlice.actions;
export default coursesSlice.reducer;
