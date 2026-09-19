import type { Assignment, AssignmentStatsData } from '../types';

export const mockAssignments: Assignment[] = [
  {
    id: 'a1',
    title: 'Build a Compound Component Library',
    course: 'Advanced React Patterns',
    dueDate: 'Jun 5, 2026',
    status: 'pending',
  },
  {
    id: 'a2',
    title: 'Create a Design System',
    course: 'UI/UX Design Masterclass',
    dueDate: 'Jun 12, 2026',
    status: 'submitted',
  },
  {
    id: 'a3',
    title: 'Neural Network Implementation',
    course: 'Machine Learning Fundamentals',
    dueDate: 'May 20, 2026',
    status: 'graded',
    grade: 92,
    totalScore: 100,
    instructorFeedback: 'Excellent work on the backpropagation implementation. The gradient descent optimization was well thought out. Minor improvement: consider using mini-batch gradient descent for faster convergence.',
    submissionNotes: 'Complete neural network implementation with backpropagation.',
    submittedFiles: [
      { name: 'neural_net.py', url: '#' },
      { name: 'report.pdf', url: '#' }
    ]
  },
  {
    id: 'a4',
    title: 'Marketing Campaign Analysis',
    course: 'Digital Marketing & Growth Strategy',
    dueDate: 'May 25, 2026',
    status: 'graded',
    grade: 85,
    totalScore: 100,
  },
  {
    id: 'a5',
    title: 'Build a REST API with tRPC',
    course: 'Full-Stack TypeScript',
    dueDate: 'Jun 8, 2026',
    status: 'pending',
  },
  {
    id: 'a6',
    title: 'Wireframe & Prototype Project',
    course: 'UI/UX Design Masterclass',
    dueDate: 'May 10, 2026',
    status: 'late',
    grade: 72,
    totalScore: 100,
  },
  {
    id: 'a7',
    title: 'SEO Audit Report',
    course: 'Content Strategy & SEO Mastery',
    dueDate: 'Jun 15, 2026',
    status: 'pending',
  },
  {
    id: 'a8',
    title: 'Data Visualization Dashboard',
    course: 'Data Visualization with D3.js',
    dueDate: 'Jun 10, 2026',
    status: 'submitted',
  },
  {
    id: 'a9',
    title: 'Authentication System Design',
    course: 'Full-Stack TypeScript',
    dueDate: 'May 5, 2026',
    status: 'graded',
    grade: 98,
    totalScore: 100,
  },
  {
    id: 'a10',
    title: 'Customer Segmentation Model',
    course: 'Machine Learning Fundamentals',
    dueDate: 'Apr 28, 2026',
    status: 'graded',
    grade: 89,
    totalScore: 100,
  }
];

export const mockAssignmentStats: AssignmentStatsData = {
  activeCount: 3,
  activeDueThisWeek: 2,
  submittedCount: 2,
  gradedCount: 4,
  gradedThisMonth: 2,
  averageGrade: 86.4,
  averageGradeChange: 3.2,
};
