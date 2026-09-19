import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import type { Course } from '../types';
import { coursesService } from '../api/courses.service';

interface CoursesState {
  items: Course[];
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  sortBy: string;
  selectedCategories: string[];
  selectedLevels: string[];
  isFilterOpen: boolean;
  availableCategories: string[];
  availableLevels: string[];
}

const initialState: CoursesState = {
  items: [],
  isLoading: false,
  error: null,
  searchQuery: '',
  sortBy: 'recommended',
  selectedCategories: [],
  selectedLevels: [],
  isFilterOpen: false,
  availableCategories: [],
  availableLevels: [],
};

export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async () => {
    const response = await coursesService.getCourses();
    return response;
  }
);

export const fetchFilterOptions = createAsyncThunk(
  'courses/fetchFilterOptions',
  async () => {
    const response = await coursesService.getFilterOptions();
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
    setIsFilterOpen: (state, action: PayloadAction<boolean>) => {
      state.isFilterOpen = action.payload;
    },
    toggleCategory: (state, action: PayloadAction<string>) => {
      const category = action.payload;
      if (state.selectedCategories.includes(category)) {
        state.selectedCategories = state.selectedCategories.filter(c => c !== category);
      } else {
        state.selectedCategories.push(category);
      }
    },
    toggleLevel: (state, action: PayloadAction<string>) => {
      const level = action.payload;
      if (state.selectedLevels.includes(level)) {
        state.selectedLevels = state.selectedLevels.filter(l => l !== level);
      } else {
        state.selectedLevels.push(level);
      }
    },
    clearFilters: (state) => {
      state.selectedCategories = [];
      state.selectedLevels = [];
    }
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
      })
      .addCase(fetchFilterOptions.fulfilled, (state, action) => {
        state.availableCategories = action.payload.categories;
        state.availableLevels = action.payload.levels;
      });
  },
});

export const { setSearchQuery, setSortBy, setIsFilterOpen, toggleCategory, toggleLevel, clearFilters } = coursesSlice.actions;
export default coursesSlice.reducer;
