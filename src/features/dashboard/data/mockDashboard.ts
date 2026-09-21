import { Medal, Heart, Zap, Brain } from 'lucide-react';
import type { UpcomingDeadline, RecommendedCourse, RecentAchievement, ContinueLearningCourse } from '../types';

export const mockDeadlines: UpcomingDeadline[] = [
  { 
    id: 1,
    title: 'Build a Compound Component', 
    course: 'Advanced React Patterns', 
    date: 'Jun 5', 
    type: 'assignment' 
  },
  { 
    id: 2,
    title: 'Module 3 Assessment', 
    course: 'Advanced React Patterns', 
    date: 'Jun 8', 
    type: 'quiz' 
  },
  { 
    id: 3,
    title: 'Design System Project', 
    course: 'UI/UX Design Masterclass', 
    date: 'Jun 12', 
    type: 'assignment' 
  },
  { 
    id: 4,
    title: 'Midterm Exam', 
    course: 'UI/UX Design Masterclass', 
    date: 'Jun 18', 
    type: 'quiz' 
  },
];

export const mockRecommendedCourses: RecommendedCourse[] = [
  {
    id: 1,
    title: 'Digital Marketing & Growth Strategy',
    instructor: 'James Walker',
    rating: 4.8,
    students: 21300,
    duration: '23h 20m',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 2,
    title: 'Full-Stack TypeScript: Next.js, tRPC & Prisma',
    instructor: 'Dr. Sarah Mitchell',
    rating: 4.9,
    students: 9800,
    duration: '45h 10m',
    price: 94.99,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60'
  }
];

export const mockRecentAchievements: RecentAchievement[] = [
  { id: 1, title: 'Triple Threat', rarity: 'Epic', icon: Medal, colorClass: 'text-emerald-400', bgClass: 'bg-emerald-500/10 border-emerald-500/20' },
  { id: 2, title: 'Helpful Hand', rarity: 'Rare', icon: Heart, colorClass: 'text-blue-400', bgClass: 'bg-blue-500/10 border-blue-500/20' },
  { id: 3, title: 'Two-Week Streak', rarity: 'Rare', icon: Zap, colorClass: 'text-blue-400', bgClass: 'bg-blue-500/10 border-blue-500/20' },
  { id: 4, title: 'Quiz Whiz', rarity: 'Rare', icon: Brain, colorClass: 'text-blue-400', bgClass: 'bg-blue-500/10 border-blue-500/20' },
];

export const mockContinueLearning: ContinueLearningCourse[] = [
  {
    id: 1,
    title: 'Advanced React Patterns & Performance',
    instructor: 'Dr. Sarah Mitchell',
    progress: 68,
    tag: 'Advanced',
    tagColor: 'text-fuchsia-400 bg-fuchsia-500/20 border-fuchsia-500/20',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 2,
    title: 'UI/UX Design Masterclass: From Wireframe to Prototype',
    instructor: 'Marcus Chen',
    progress: 35,
    tag: 'Intermediate',
    tagColor: 'text-pink-400 bg-pink-500/20 border-pink-500/20',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60'
  }
];
