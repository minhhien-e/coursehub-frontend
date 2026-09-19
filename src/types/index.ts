export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'Student' | 'Instructor' | 'Admin';
}

export interface UserProfile extends User {
  fullName?: string;
  avatarUrl?: string;
  headline?: string;
  bio?: string;
  location?: string;
  website?: string;
  twitter?: string;
  linkedIn?: string;
  gitHub?: string;
}

export interface UserSettings {
  userId: string;
  // Notification Preferences
  courseUpdates: boolean;
  achievementAlerts: boolean;
  communityReplies: boolean;
  weeklyDigest: boolean;
  marketingEmails: boolean;
  
  // Privacy Settings
  publicProfile: boolean;
  showLearningActivity: boolean;
  showAchievements: boolean;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  isSuccess: boolean;
}

export interface PaginatedResult<T> {
  items: T[];
  totalCount: number;
  pageNumber: number;
  totalPages: number;
}
