import type { Assignment, AssignmentStatsData } from '../types';
import { mockAssignments, mockAssignmentStats } from '../data/mockAssignments';

export const assignmentsService = {
  async getAssignments(): Promise<Assignment[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockAssignments);
      }, 600);
    });
  },

  async getAssignmentStats(): Promise<AssignmentStatsData> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockAssignmentStats);
      }, 400);
    });
  }
};
