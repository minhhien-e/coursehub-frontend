import type { EnrolledCourse } from '../types';

export const mockEnrolledCourses: EnrolledCourse[] = [
  {
    id: 'c1',
    title: 'Advanced React Patterns & Performance',
    instructor: 'Dr. Sarah Mitchell',
    rating: 4.8,
    reviews: 3240,
    students: 18500,
    duration: '42h 30m',
    lessons: 156,
    progress: 68,
    status: 'In Progress',
    tag: 'Advanced',
    tagColor: 'text-fuchsia-400 bg-fuchsia-500/20',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 'c2',
    title: 'UI/UX Design Masterclass: From Wireframe to Prototype',
    instructor: 'Marcus Chen',
    rating: 4.9,
    reviews: 2180,
    students: 14200,
    duration: '36h 15m',
    lessons: 128,
    progress: 35,
    status: 'In Progress',
    tag: 'Intermediate',
    tagColor: 'text-pink-400 bg-pink-500/20',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 'c3',
    title: 'Machine Learning Fundamentals with Python',
    instructor: 'Dr. Priya Sharma',
    rating: 4.7,
    reviews: 4560,
    students: 32100,
    duration: '58h 45m',
    lessons: 195,
    progress: 100,
    status: 'Completed',
    tag: 'Beginner',
    tagColor: 'text-purple-400 bg-purple-500/20',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop&q=60'
  }
];
