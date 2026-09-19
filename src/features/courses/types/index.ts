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

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isPreview?: boolean;
}

export interface Module {
  id: string;
  title: string;
  duration: string;
  lessons: Lesson[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  date: string;
  rating: number;
  comment: string;
  helpfulCount: number;
}

export interface Instructor {
  id: string;
  name: string;
  title: string;
  avatarUrl: string;
  rating: number;
  students: number;
  courses: number;
  bio: string;
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
