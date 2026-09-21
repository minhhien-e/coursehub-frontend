// import api from '@/services/api'; // (To be used when cross-course assignment API is ready)
import type { Assignment, AssignmentStatsData } from '../types';

export const assignmentsService = {
  async getAssignments(): Promise<Assignment[]> {
    // Currently BE only supports get by course ID. 
    // Ideally we would call an endpoint like /assignments/me to get all across courses.
    // For now we will return an empty list or we can call a generic endpoint if added later.
    // const response = await api.get('/assignments/course/00000000-0000-0000-0000-000000000000');
    // return response.data;
    
    // Simulating empty API response for now since we don't have a cross-course endpoint
    return [];
  },

  async getAssignmentStats(): Promise<AssignmentStatsData> {
    // Stats usually come from a dedicated BE endpoint, returning zeroed stats for now
    return {
      activeCount: 0,
      activeDueThisWeek: 0,
      submittedCount: 0,
      gradedCount: 0,
      gradedThisMonth: 0,
      averageGrade: 0,
      averageGradeChange: 0
    };
  }
};
