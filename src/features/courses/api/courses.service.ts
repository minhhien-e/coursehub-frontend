import { mockCourses } from '../data/mockData';
import type { Course } from '../types';

export const coursesService = {
  async getCourses(): Promise<Course[]> {
    // Simulate API delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockCourses);
      }, 800);
    });
  }
};
