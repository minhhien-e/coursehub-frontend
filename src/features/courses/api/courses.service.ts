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
  },

  async getFilterOptions(): Promise<{ categories: string[]; levels: string[] }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          categories: ['Development', 'Design', 'Business', 'Marketing', 'Data Science', 'Languages', 'Music', 'Photography'],
          levels: ['Beginner', 'Intermediate', 'Advanced'],
        });
      }, 600);
    });
  }
};
