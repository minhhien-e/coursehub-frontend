import type { Notification } from '../types';

export const mockNotifications: Notification[] = [
  {
    id: 'n1',
    type: 'lesson',
    title: 'New lesson available',
    message: 'Dr. Sarah Mitchell added a new lesson to Advanced React Patterns: "Server Component Patterns"',
    timeAgo: '4 hours ago',
    isRead: false
  },
  {
    id: 'n2',
    type: 'badge',
    title: 'Badge earned!',
    message: 'You\'ve earned the "Two-Week Streak" badge. Keep up the great work!',
    timeAgo: '4 hours ago',
    isRead: false
  },
  {
    id: 'n3',
    type: 'thread',
    title: 'New reply to your thread',
    message: 'Dr. Sarah Mitchell replied to your question about state management',
    timeAgo: '4 hours ago',
    isRead: false
  },
  {
    id: 'n4',
    type: 'system',
    title: 'System maintenance scheduled',
    message: 'Brief maintenance window on June 1st from 2-4 AM PST. No action required.',
    timeAgo: '4 hours ago',
    isRead: true
  },
  {
    id: 'n5',
    type: 'report',
    title: 'Weekly progress report',
    message: 'You studied 12 hours this week — 20% more than last week. Great momentum!',
    timeAgo: '4 hours ago',
    isRead: true
  }
];
