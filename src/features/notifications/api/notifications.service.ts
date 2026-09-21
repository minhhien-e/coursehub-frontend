import api from '@/services/api';
import type { Notification } from '../types';

export const notificationsService = {
  async getNotifications(): Promise<Notification[]> {
    const response = await api.get('/notifications');
    return response.data;
  }
};
