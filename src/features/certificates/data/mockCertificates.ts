import type { Certificate } from '../types';

export const mockCertificates: Certificate[] = [
  {
    id: 'cert_01',
    courseName: 'Machine Learning Fundamentals with Python',
    studentName: 'Alex Johnson',
    instructor: 'Dr. Priya Sharma',
    completedDate: 'Apr 10, 2026',
    credentialId: 'TFK-ML-2026-04021',
    skills: ['Machine Learning', 'Python', 'TensorFlow'],
  },
  {
    id: 'cert_02',
    courseName: 'Business Analytics with Excel & Power BI',
    studentName: 'Alex Johnson',
    instructor: 'James Walker',
    completedDate: 'Feb 28, 2026',
    credentialId: 'TFK-BA-2026-03157',
    skills: ['Excel', 'Power BI', 'Data Analysis'],
  },
  {
    id: 'cert_03',
    courseName: 'Product Design Thinking & Strategy',
    studentName: 'Alex Johnson',
    instructor: 'Sarah Connor',
    completedDate: 'Nov 15, 2025',
    credentialId: 'TFK-PD-2025-11902',
    skills: ['UX Design', 'Product Strategy', 'Figma'],
  }
];
