import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Notification } from '../types';
import { notificationsService } from '../api/notifications.service';

interface NotificationsState {
  items: Notification[];
  activeTab: 'All' | 'Unread';
  isLoading: boolean;
  error: string | null;
}

const initialState: NotificationsState = {
  items: [],
  activeTab: 'All',
  isLoading: false,
  error: null,
};

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchAll',
  async () => {
    return await notificationsService.getNotifications();
  }
);

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    markAllAsRead: (state) => {
      state.items.forEach(item => {
        item.isRead = true;
      });
    },
    markAsRead: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.isRead = true;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch notifications';
      });
  },
});

export const { setActiveTab, markAllAsRead, markAsRead } = notificationsSlice.actions;
export const notificationsReducer = notificationsSlice.reducer;
