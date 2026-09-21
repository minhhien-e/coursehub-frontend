import api from '@/services/api';
import type { EnrolledCourse } from '../types';

export const myLearningService = {
  async getEnrolledCourses(): Promise<EnrolledCourse[]> {
    const response = await api.get('/enrollments/me');
    // Map backend EnrollmentResponse to frontend EnrolledCourse
    return response.data.map((enrollment: any) => ({
      id: enrollment.courseId,
      title: 'Course Title (From API)', // Would need course details join in BE
      instructor: 'Instructor Name',
      rating: 5.0,
      reviews: 120,
      students: 500,
      duration: '10h 30m',
      lessons: 42,
      progress: enrollment.progressPercent,
      status: enrollment.status === 0 ? 'In Progress' : 'Completed',
      tag: 'Development',
      tagColor: 'bg-blue-500/10 text-blue-500',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000'
    }));
  }
};
