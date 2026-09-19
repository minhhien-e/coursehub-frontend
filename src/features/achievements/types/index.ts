export type BadgeRarity = 'Common' | 'Rare' | 'Epic' | 'Legendary';

export interface Badge {
  id: string;
  title: string;
  rarity: BadgeRarity;
  description: string;
  isEarned: boolean;
  earnedDate?: string;
  requirement?: string;
  iconType: string;
}

export interface LeaderboardUser {
  id: string;
  rank: number;
  name: string;
  avatar: string;
  xp: number;
  level: number;
  badgesCount: number;
  isCurrentUser?: boolean;
}

export interface UserProgress {
  currentLevel: number;
  currentXp: number;
  xpToNextLevel: number;
  totalBadges: number;
  earnedBadges: number;
}
