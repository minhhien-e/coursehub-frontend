export interface LeaderboardUser {
  id: string;
  rank: number;
  name: string;
  avatar: string;
  level: number;
  xp: number;
  badges: number;
  courses: number;
  streak: number;
  isCurrentUser?: boolean;
}

export interface LeaderboardStats {
  currentRank: number;
  rankChange: number; // positive means up
  currentXp: number;
  xpChange: number;
  currentStreak: number;
  personalBestStreak: number;
  badgesEarned: number;
  badgesChange: number;
}
