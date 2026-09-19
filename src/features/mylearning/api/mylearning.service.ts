import type { EnrolledCourse } from '../types';
import { mockEnrolledCourses } from '../data/mockMyLearning';

export const myLearningService = {
  async getEnrolledCourses(): Promise<EnrolledCourse[]> {
    return new Promise((resolve) => setTimeout(() => resolve(mockEnrolledCourses), 400));
  }
};
