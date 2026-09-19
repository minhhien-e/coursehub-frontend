import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import type { Assignment, AssignmentStatsData } from '../types';
import { assignmentsService } from '../api/assignments.service';

interface AssignmentsState {
  items: Assignment[];
  stats: AssignmentStatsData | null;
  statusFilter: 'all' | 'active' | 'submitted' | 'graded';
  isLoading: boolean;
  error: string | null;
}

const initialState: AssignmentsState = {
  items: [],
  stats: null,
  statusFilter: 'all',
  isLoading: false,
  error: null,
};

export const fetchAssignments = createAsyncThunk(
  'assignments/fetchAssignments',
  async () => {
    const data = await assignmentsService.getAssignments();
    return data;
  }
);

export const fetchAssignmentStats = createAsyncThunk(
  'assignments/fetchAssignmentStats',
  async () => {
    const data = await assignmentsService.getAssignmentStats();
    return data;
  }
);

const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    setStatusFilter(state, action: PayloadAction<'all' | 'active' | 'submitted' | 'graded'>) {
      state.statusFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAssignments.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAssignments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchAssignments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch assignments';
      })
      .addCase(fetchAssignmentStats.fulfilled, (state, action) => {
        state.stats = action.payload;
      });
  },
});

export const { setStatusFilter } = assignmentsSlice.actions;
export const assignmentsReducer = assignmentsSlice.reducer;
