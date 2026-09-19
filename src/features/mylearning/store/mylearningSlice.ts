import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { EnrolledCourse } from '../types';
import { myLearningService } from '../api/mylearning.service';

interface MyLearningState {
  courses: EnrolledCourse[];
  activeTab: 'All' | 'In Progress' | 'Completed';
  isLoading: boolean;
  error: string | null;
}

const initialState: MyLearningState = {
  courses: [],
  activeTab: 'All',
  isLoading: false,
  error: null,
};

export const fetchEnrolledCourses = createAsyncThunk(
  'mylearning/fetchCourses',
  async () => {
    return await myLearningService.getEnrolledCourses();
  }
);

const mylearningSlice = createSlice({
  name: 'mylearning',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEnrolledCourses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchEnrolledCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courses = action.payload;
      })
      .addCase(fetchEnrolledCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch enrolled courses';
      });
  },
});

export const { setActiveTab } = mylearningSlice.actions;
export const mylearningReducer = mylearningSlice.reducer;
