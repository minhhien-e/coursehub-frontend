import api from '@/services/api';
import type { 
  UpcomingDeadline, 
  RecommendedCourse, 
  RecentAchievement, 
  ContinueLearningCourse 
} from '../types';

export interface DashboardData {
  deadlines: UpcomingDeadline[];
  recommendedCourses: RecommendedCourse[];
  recentAchievements: RecentAchievement[];
  continueLearning: ContinueLearningCourse[];
}

export const dashboardService = {
  async getDashboardData(): Promise<DashboardData> {
    const response = await api.get('/dashboard');
    return response.data;
  }
};
