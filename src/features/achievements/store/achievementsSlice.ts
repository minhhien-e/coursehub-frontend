import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Badge, LeaderboardUser, UserProgress } from '../types';
import { achievementsService } from '../api/achievements.service';

interface AchievementsState {
  badges: Badge[];
  leaderboard: LeaderboardUser[];
  progress: UserProgress | null;
  activeTab: 'badges' | 'leaderboard';
  isLoading: boolean;
  error: string | null;
}

const initialState: AchievementsState = {
  badges: [],
  leaderboard: [],
  progress: null,
  activeTab: 'badges',
  isLoading: false,
  error: null,
};

export const fetchAchievementsData = createAsyncThunk(
  'achievements/fetchAll',
  async () => {
    const [badges, leaderboard, progress] = await Promise.all([
      achievementsService.getBadges(),
      achievementsService.getLeaderboard(),
      achievementsService.getUserProgress(),
    ]);
    return { badges, leaderboard, progress };
  }
);

const achievementsSlice = createSlice({
  name: 'achievements',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAchievementsData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAchievementsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.badges = action.payload.badges;
        state.leaderboard = action.payload.leaderboard;
        state.progress = action.payload.progress;
      })
      .addCase(fetchAchievementsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch achievements data';
      });
  },
});

export const { setActiveTab } = achievementsSlice.actions;
export const achievementsReducer = achievementsSlice.reducer;
