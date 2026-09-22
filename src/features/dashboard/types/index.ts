
export interface UpcomingDeadline {
  id: number;
  title: string;
  course: string;
  date: string;
  type: 'assignment' | 'quiz';
}

export interface RecommendedCourse {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  price: number;
  image: string;
}

export interface RecentAchievement {
  id: number;
  title: string;
  rarity: string;
  iconType: string;
  colorClass: string;
  bgClass: string;
}

export interface ContinueLearningCourse {
  id: number;
  title: string;
  instructor: string;
  progress: number;
  tag: string;
  tagColor: string;
  image: string;
}
