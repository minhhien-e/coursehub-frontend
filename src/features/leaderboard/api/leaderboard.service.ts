import api from '@/services/api';
import type { LeaderboardUser, LeaderboardStats } from '../types';

export const leaderboardService = {
  async getLeaderboardData(): Promise<{ list: LeaderboardUser[], stats: LeaderboardStats }> {
    const listRes = await api.get('/leaderboard');
    const statsRes = await api.get('/leaderboard/stats');
    
    return {
      list: listRes.data,
      stats: statsRes.data
    };
  }
};
