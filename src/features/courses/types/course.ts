import type { Module } from './lesson';
import type { Review } from './review';
import type { Instructor } from './instructor';

export interface Course {
  id: string;
  title: string;
  instructor: string;
  category: string;
  level: string;
  rating: number;
  ratingCount: number;
  students: number;
  duration: string;
  lessons: number;
  price: number;
  originalPrice?: number;
  discountBadge?: string;
  imageUrl: string;
}

export interface CourseDetail extends Course {
  progress?: number; // Added for enrolled courses
  features: string[]; // e.g., "42 hours of video", "Certificate of completion"
  about: string;
  whatYouWillLearn: string[];
  requirements: string[];
  whoIsThisFor: string[];
  modules: Module[];
  reviews: Review[];
  instructorDetails: Instructor;
}
