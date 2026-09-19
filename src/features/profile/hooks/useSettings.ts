import { useState } from 'react';
import { settingsService } from '@/features/profile/api/settings.service';
import { useAppDispatch } from '@/store/hooks';
import { updateUser } from '@/features/auth';

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
  avatarUrl?: string;
}

export interface UpdatePasswordPayload {
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
}

export const useSettings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const updateProfile = async (payload: UpdateProfilePayload) => {
    setIsLoading(true);
    try {
      // Simulate API call
      // const response = await settingsService.updateProfile(payload);
      
      // Split full name back into first and last name for redux
      const nameParts = payload.fullName.trim().split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
      
      // Update Redux state immediately (optimistic update or after mock API)
      dispatch(updateUser({
        firstName,
        lastName,
        email: payload.email,
        avatarUrl: payload.avatarUrl
      }));
      
      return { success: true };
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

