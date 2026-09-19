import type { LeaderboardUser, LeaderboardStats } from '../types';
import { mockLeaderboardData, mockLeaderboardStats } from '../data/mockLeaderboard';

export const leaderboardService = {
  async getLeaderboardData(): Promise<{ list: LeaderboardUser[], stats: LeaderboardStats }> {
    return new Promise((resolve) => setTimeout(() => resolve({
      list: mockLeaderboardData,
      stats: mockLeaderboardStats
    }), 400));
  }
};
