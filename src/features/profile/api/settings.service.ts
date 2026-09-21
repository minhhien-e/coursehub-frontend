import api from '@/services/api';
import type { UpdateProfilePayload, UpdatePasswordPayload } from '@/features/profile/hooks/useSettings';

export const settingsService = {
  updateProfile: async (payload: UpdateProfilePayload) => {
    const response = await api.put('/users/me', payload);
    return response.data;
  },

  updateNotifications: async (payload: any) => {
    // const response = await api.put('/users/me/notifications', payload);
    // return response.data;
    return { success: true };
  },

  updatePrivacy: async (payload: any) => {
    // const response = await api.put('/users/me/privacy', payload);
    // return response.data;
    return { success: true };
  },

  updatePassword: async (payload: UpdatePasswordPayload) => {
    // const response = await api.put('/users/me/password', payload);
    // return response.data;
    return { success: true };
  }
};
