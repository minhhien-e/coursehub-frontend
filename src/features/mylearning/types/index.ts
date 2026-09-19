export type LearningStatus = 'In Progress' | 'Completed';

export interface EnrolledCourse {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  reviews: number;
  students: number;
  duration: string;
  lessons: number;
  progress: number;
  status: LearningStatus;
  tag: string;
  tagColor: string;
  image: string;
}
