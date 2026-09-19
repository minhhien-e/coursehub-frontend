export type AssignmentStatus = 'pending' | 'submitted' | 'graded' | 'late';

export interface Assignment {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  status: AssignmentStatus;
  grade?: number;
  totalScore?: number;
  instructorFeedback?: string;
  submissionNotes?: string;
  submittedFiles?: { name: string; url: string }[];
}

export interface AssignmentStatsData {
  activeCount: number;
  activeDueThisWeek: number;
  submittedCount: number;
  gradedCount: number;
  gradedThisMonth: number;
  averageGrade: number;
  averageGradeChange: number;
}
