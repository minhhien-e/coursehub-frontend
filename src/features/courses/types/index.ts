export interface Course {
  id: string;
  title: string;
  instructor: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  ratingCount: number;
  students: number;
  duration: string; // e.g. "42h 30m"
  lessons: number;
  price: number;
  originalPrice?: number;
  discountBadge?: string; // e.g. "40% OFF"
  imageUrl: string;
}
