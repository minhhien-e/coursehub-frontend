import api from '@/services/api';
import type { UpdateProfilePayload, UpdatePasswordPayload } from '@/features/profile/hooks/useSettings';

export const settingsService = {
  updateProfile: async (payload: UpdateProfilePayload) => {
    const response = await api.put('/users/me', payload);
    return response.data;
  },

  updateNotifications: async (_payload: any) => {
    // const response = await api.put('/users/me/notifications', _payload);
    // return response.data;
    return { success: true };
  },

  updatePrivacy: async (_payload: any) => {
    // const response = await api.put('/users/me/privacy', _payload);
    // return response.data;
    return { success: true };
  },

  updatePassword: async (_payload: UpdatePasswordPayload) => {
    // const response = await api.put('/users/me/password', _payload);
    // return response.data;
    return { success: true };
  }
};
