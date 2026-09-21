import api from '@/services/api';
import type { Badge, LeaderboardUser, UserProgress } from '../types';

export const achievementsService = {
  async getBadges(): Promise<Badge[]> {
    const response = await api.get('/achievements/badges');
    return response.data;
  },
  
  async getLeaderboard(): Promise<LeaderboardUser[]> {
    const response = await api.get('/leaderboard');
    return response.data;
  },
  
  async getUserProgress(): Promise<UserProgress> {
    const response = await api.get('/achievements/progress');
    return response.data;
  }
};
