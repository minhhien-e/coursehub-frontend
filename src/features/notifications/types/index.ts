export type NotificationType = 'lesson' | 'badge' | 'thread' | 'system' | 'report';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timeAgo: string;
  isRead: boolean;
}
