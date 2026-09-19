import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { BillingDetails } from '../types';
import { billingService } from '../api/billing.service';

interface BillingState {
  details: BillingDetails | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: BillingState = {
  details: null,
  isLoading: false,
  error: null,
};

export const fetchBillingDetails = createAsyncThunk(
  'billing/fetchDetails',
  async () => {
    return await billingService.getBillingDetails();
  }
);

const billingSlice = createSlice({
  name: 'billing',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBillingDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBillingDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.details = action.payload;
      })
      .addCase(fetchBillingDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch billing details';
      });
  },
});

export const billingReducer = billingSlice.reducer;
