import { mockCourses } from '../data/mockData';
import { mockCourseDetail } from '../data/mockCourseDetail';
import type { Course, CourseDetail } from '../types';

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
  },

  async getCourseById(id: string): Promise<CourseDetail> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === '1') {
          resolve(mockCourseDetail);
        } else {
          // If we had more mock data, we could find it, but we only have mockCourseDetail for id '1'
          reject(new Error('Course not found'));
        }
      }, 600);
    });
  }
};
