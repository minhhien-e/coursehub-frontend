import type { Notification } from '../types';
import { mockNotifications } from '../data/mockNotifications';

export const notificationsService = {
  async getNotifications(): Promise<Notification[]> {
    return new Promise((resolve) => setTimeout(() => resolve(mockNotifications), 400));
  }
};
