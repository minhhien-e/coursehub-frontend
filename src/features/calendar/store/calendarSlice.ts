import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { CalendarEvent } from '../types';
import { calendarService } from '../api/calendar.service';

interface CalendarState {
  events: CalendarEvent[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CalendarState = {
  events: [],
  isLoading: false,
  error: null,
};

export const fetchEvents = createAsyncThunk(
  'calendar/fetchEvents',
  async () => {
    const data = await calendarService.getEvents();
    return data;
  }
);

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch calendar events';
      });
  },
});

export const calendarReducer = calendarSlice.reducer;
