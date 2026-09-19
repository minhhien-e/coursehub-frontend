import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { LeaderboardUser, LeaderboardStats } from '../types';
import { leaderboardService } from '../api/leaderboard.service';

interface LeaderboardState {
  list: LeaderboardUser[];
  stats: LeaderboardStats | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: LeaderboardState = {
  list: [],
  stats: null,
  isLoading: false,
  error: null,
};

export const fetchLeaderboard = createAsyncThunk(
  'leaderboard/fetchData',
  async () => {
    return await leaderboardService.getLeaderboardData();
  }
);

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeaderboard.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchLeaderboard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload.list;
        state.stats = action.payload.stats;
      })
      .addCase(fetchLeaderboard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch leaderboard data';
      });
  },
});

export const leaderboardReducer = leaderboardSlice.reducer;
