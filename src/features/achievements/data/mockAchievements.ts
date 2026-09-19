import type { Badge, LeaderboardUser, UserProgress } from '../types';

export const mockBadges: Badge[] = [
  {
    id: 'b1',
    title: 'First Steps',
    rarity: 'Common',
    description: 'Complete your first lesson',
    isEarned: true,
    earnedDate: 'Sep 10, 2025',
    iconType: 'footprints'
  },
  {
    id: 'b2',
    title: 'Week Warrior',
    rarity: 'Common',
    description: 'Maintain a 7-day learning streak',
    isEarned: true,
    earnedDate: 'Sep 22, 2025',
    iconType: 'flame'
  },
  {
    id: 'b3',
    title: 'Course Conqueror',
    rarity: 'Rare',
    description: 'Complete your first course',
    isEarned: true,
    earnedDate: 'Jan 15, 2026',
    iconType: 'trophy'
  },
  {
    id: 'b4',
    title: 'Quiz Whiz',
    rarity: 'Rare',
    description: 'Score 100% on any quiz',
    isEarned: true,
    earnedDate: 'Feb 10, 2026',
    iconType: 'brain'
  },
  {
    id: 'b5',
    title: 'Two-Week Streak',
    rarity: 'Rare',
    description: 'Maintain a 14-day streak',
    isEarned: true,
    earnedDate: 'Mar 5, 2026',
    iconType: 'zap'
  },
  {
    id: 'b6',
    title: 'Helpful Hand',
    rarity: 'Rare',
    description: 'Get 10 upvotes on forum answers',
    isEarned: true,
    earnedDate: 'Mar 20, 2026',
    iconType: 'heart'
  },
  {
    id: 'b7',
    title: 'Triple Threat',
    rarity: 'Epic',
    description: 'Complete 3 courses',
    isEarned: true,
    earnedDate: 'Apr 10, 2026',
    iconType: 'medal'
  },
  {
    id: 'b8',
    title: 'Month Master',
    rarity: 'Epic',
    description: 'Maintain a 30-day streak',
    isEarned: false,
    requirement: '30-day streak',
    iconType: 'calendar'
  },
  {
    id: 'b9',
    title: 'Knowledge Guru',
    rarity: 'Epic',
    description: 'Complete 5 courses',
    isEarned: false,
    requirement: 'Complete 5 courses',
    iconType: 'book'
  },
  {
    id: 'b10',
    title: 'Perfect Scholar',
    rarity: 'Epic',
    description: 'Achieve 90%+ on 10 quizzes',
    isEarned: false,
    requirement: '90%+ on 10 quizzes',
    iconType: 'star'
  },
  {
    id: 'b11',
    title: 'Community Leader',
    rarity: 'Epic',
    description: 'Create 5 discussion threads with 20+ replies',
    isEarned: false,
    requirement: '5 popular threads',
    iconType: 'users'
  },
  {
    id: 'b12',
    title: 'Legend',
    rarity: 'Legendary',
    description: 'Complete 10 courses with an average rating of 90%+ on all quizzes',
    isEarned: false,
    requirement: 'Complete 10 courses + 90% quiz avg',
    iconType: 'crown'
  }
];

export const mockLeaderboard: LeaderboardUser[] = [
  { id: 'u1', rank: 1, name: 'Sophia Williams', avatar: 'https://i.pravatar.cc/150?u=1', xp: 8450, level: 18, badgesCount: 15 },
  { id: 'u2', rank: 2, name: 'Rajesh Patel', avatar: 'https://i.pravatar.cc/150?u=2', xp: 7820, level: 17, badgesCount: 13 },
  { id: 'u3', rank: 3, name: 'Maria Garcia', avatar: 'https://i.pravatar.cc/150?u=3', xp: 6900, level: 15, badgesCount: 11 },
  { id: 'u4', rank: 4, name: 'James Liu', avatar: 'https://i.pravatar.cc/150?u=4', xp: 5150, level: 14, badgesCount: 10 },
  { id: 'u5', rank: 5, name: 'Alex Johnson (You)', avatar: 'https://i.pravatar.cc/150?u=5', xp: 4250, level: 12, badgesCount: 7, isCurrentUser: true },
  { id: 'u6', rank: 6, name: 'Nina Kowalski', avatar: 'https://i.pravatar.cc/150?u=6', xp: 3980, level: 11, badgesCount: 8 },
  { id: 'u7', rank: 7, name: 'David Kim', avatar: 'https://i.pravatar.cc/150?u=7', xp: 3620, level: 10, badgesCount: 6 },
  { id: 'u8', rank: 8, name: 'Aisha Mohammed', avatar: 'https://i.pravatar.cc/150?u=8', xp: 3100, level: 9, badgesCount: 5 },
];

export const mockUserProgress: UserProgress = {
  currentLevel: 12,
  currentXp: 4250,
  xpToNextLevel: 250,
  totalBadges: 12,
  earnedBadges: 7,
};
