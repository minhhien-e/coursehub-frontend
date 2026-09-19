import { useState } from 'react';
import { settingsService } from '@/features/profile/api/settings.service';

export interface UpdateProfilePayload {
  fullName: string;
  email: string;
  headline?: string;
  bio?: string;
  location?: string;
  website?: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
  avatarFile?: File;
}

export interface UpdatePasswordPayload {
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
}

export const useSettings = () => {
  const [isLoading, setIsLoading] = useState(false);

  const updateProfile = async (payload: UpdateProfilePayload) => {
    setIsLoading(true);
    try {
      return await settingsService.updateProfile(payload);
    } catch (error) {
      console.error('Failed to update profile', error);
      return { success: false, error };
    } finally {
      setIsLoading(false);
    }
  };

  const updateNotifications = async (payload: any) => {
    setIsLoading(true);
    try {
      return await settingsService.updateNotifications(payload);
    } catch (error) {
      console.error('Failed to update notifications', error);
      return { success: false, error };
    } finally {
      setIsLoading(false);
    }
  };

  const updatePrivacy = async (payload: any) => {
    setIsLoading(true);
    try {
      return await settingsService.updatePrivacy(payload);
    } catch (error) {
      console.error('Failed to update privacy settings', error);
      return { success: false, error };
    } finally {
      setIsLoading(false);
    }
  };

  const updatePassword = async (payload: UpdatePasswordPayload) => {
    setIsLoading(true);
    try {
      return await settingsService.updatePassword(payload);
    } catch (error) {
      console.error('Failed to update password', error);
      return { success: false, error };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    updateProfile,
    updateNotifications,
    updatePrivacy,
    updatePassword,
  };
};

