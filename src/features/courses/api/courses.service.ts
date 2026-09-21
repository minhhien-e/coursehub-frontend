import api from '../../services/api';
import type { Course, CourseDetail } from '../types';

export const coursesService = {
  async getCourses(): Promise<Course[]> {
    const response = await api.get('/courses');
    return response.data;
  },

  async getFilterOptions(): Promise<{ categories: string[]; levels: string[] }> {
    // Usually fetched from an endpoint like /courses/filters. 
    // Hardcoded for now since BE doesn't have a specific filter endpoint yet.
    return {
      categories: ['Development', 'Design', 'Business', 'Marketing', 'Data Science', 'Languages', 'Music', 'Photography'],
      levels: ['Beginner', 'Intermediate', 'Advanced'],
    };
  },

  async getCourseById(id: string): Promise<CourseDetail> {
    const response = await api.get(`/courses/${id}`);
    return response.data;
  }
};
