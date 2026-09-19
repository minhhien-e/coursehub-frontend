import type { LeaderboardUser, LeaderboardStats } from '../types';

export const mockLeaderboardStats: LeaderboardStats = {
  currentRank: 5,
  rankChange: 2,
  currentXp: 4250,
  xpChange: 320,
  currentStreak: 14,
  personalBestStreak: 21,
  badgesEarned: 7,
  badgesChange: 1
};

export const mockLeaderboardData: LeaderboardUser[] = [
  {
    id: 'u1',
    rank: 1,
    name: 'Sophia Williams',
    avatar: 'https://i.pravatar.cc/150?img=5',
    level: 18,
    xp: 8450,
    badges: 15,
    courses: 9,
    streak: 42
  },
  {
    id: 'u2',
    rank: 2,
    name: 'Rajesh Patel',
    avatar: 'https://i.pravatar.cc/150?img=12',
    level: 17,
    xp: 7820,
    badges: 13,
    courses: 8,
    streak: 35
  },
  {
    id: 'u3',
    rank: 3,
    name: 'Maria Garcia',
    avatar: 'https://i.pravatar.cc/150?img=9',
    level: 15,
    xp: 6900,
    badges: 11,
    courses: 7,
    streak: 28
  },
  {
    id: 'u4',
    rank: 4,
    name: 'James Liu',
    avatar: 'https://i.pravatar.cc/150?img=14',
    level: 14,
    xp: 5150,
    badges: 10,
    courses: 5,
    streak: 21
  },
  {
    id: 'u5',
    rank: 5,
    name: 'Alex Johnson',
    avatar: 'https://i.pravatar.cc/150?img=11',
    level: 12,
    xp: 4250,
    badges: 7,
    courses: 3,
    streak: 14,
    isCurrentUser: true
  },
  {
    id: 'u6',
    rank: 6,
    name: 'Nina Kowalski',
    avatar: 'https://i.pravatar.cc/150?img=32',
    level: 11,
    xp: 3980,
    badges: 8,
    courses: 4,
    streak: 18
  },
  {
    id: 'u7',
    rank: 7,
    name: 'David Kim',
    avatar: 'https://i.pravatar.cc/150?img=68',
    level: 10,
    xp: 3620,
    badges: 6,
    courses: 3,
    streak: 9
  }
];
