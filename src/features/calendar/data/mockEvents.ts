import type { CalendarEvent } from '../types';

// Helper to generate dates for the current month so the calendar is always populated
const getRelativeDateStr = (day: number) => {
  const date = new Date();
  date.setDate(day);
  return date.toISOString().split('T')[0];
};

export const mockEvents: CalendarEvent[] = [
  {
    id: 'e1',
    title: 'React Performance Masterclass',
    course: 'Advanced React Patterns',
    date: getRelativeDateStr(2),
    time: '2:00 PM',
    type: 'live_session',
    description: 'Watch Sarah optimize a real-world React application live.',
  },
  {
    id: 'e2',
    title: 'Build a Compound Component Library',
    course: 'Advanced React Patterns',
    date: getRelativeDateStr(5),
    type: 'assignment',
  },
  {
    id: 'e3',
    title: 'Building a Design System from Scratch',
    course: 'UI/UX Design Masterclass',
    date: getRelativeDateStr(5),
    time: '10:00 AM',
    type: 'live_session',
  },
  {
    id: 'e4',
    title: 'Module 3 Assessment',
    course: 'Advanced React Patterns',
    date: getRelativeDateStr(8),
    time: '10:00 AM',
    type: 'quiz',
  },
  {
    id: 'e5',
    title: 'Build a REST API with tRPC',
    course: 'Full-Stack TypeScript',
    date: getRelativeDateStr(8),
    type: 'assignment',
  },
  {
    id: 'e6',
    title: 'Data Visualization Dashboard',
    course: 'Data Visualization with D3.js',
    date: getRelativeDateStr(11),
    type: 'assignment',
  },
  {
    id: 'e7',
    title: 'Design System Project',
    course: 'UI/UX Design Masterclass',
    date: getRelativeDateStr(12),
    type: 'assignment',
  },
  {
    id: 'e8',
    title: 'Midterm Exam',
    course: 'UI/UX Design Masterclass',
    date: getRelativeDateStr(15),
    type: 'quiz',
  },
  {
    id: 'e9',
    title: 'SEO Audit Report',
    course: 'Content Strategy & SEO Mastery',
    date: getRelativeDateStr(15),
    type: 'assignment',
  },
  {
    id: 'e10',
    title: 'AMA: Breaking into Tech',
    course: 'Career Development',
    date: getRelativeDateStr(18),
    time: '4:00 PM',
    type: 'live_session',
  },
  {
    id: 'e11',
    title: 'Neural Network Implementation',
    course: 'Machine Learning Fundamentals',
    date: getRelativeDateStr(20),
    type: 'assignment',
  },
  {
    id: 'e12',
    title: 'Final Exam: Data Structures',
    course: 'Computer Science 101',
    date: getRelativeDateStr(22),
    type: 'quiz',
  },
  {
    id: 'e13',
    title: 'Marketing Analytics Workshop',
    course: 'Digital Marketing & Growth Strategy',
    date: getRelativeDateStr(25),
    time: '1:00 PM',
    type: 'live_session',
  },
  {
    id: 'e14',
    title: 'Module 5 Quiz',
    course: 'Data Visualization with D3.js',
    date: getRelativeDateStr(28),
    type: 'quiz',
  }
];
