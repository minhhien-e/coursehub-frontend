import type { Badge, LeaderboardUser, UserProgress } from '../types';
import { mockBadges, mockLeaderboard, mockUserProgress } from '../data/mockAchievements';

export const achievementsService = {
  async getBadges(): Promise<Badge[]> {
    return new Promise((resolve) => setTimeout(() => resolve(mockBadges), 400));
  },
  
  async getLeaderboard(): Promise<LeaderboardUser[]> {
    return new Promise((resolve) => setTimeout(() => resolve(mockLeaderboard), 400));
  },
  
  async getUserProgress(): Promise<UserProgress> {
    return new Promise((resolve) => setTimeout(() => resolve(mockUserProgress), 200));
  }
};
