import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Certificate } from '../types';
import { certificatesService } from '../api/certificates.service';

interface CertificatesState {
  items: Certificate[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CertificatesState = {
  items: [],
  isLoading: false,
  error: null,
};

export const fetchCertificates = createAsyncThunk(
  'certificates/fetchCertificates',
  async () => {
    return await certificatesService.getCertificates();
  }
);

const certificatesSlice = createSlice({
  name: 'certificates',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCertificates.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCertificates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCertificates.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch certificates';
      });
  },
});

export const certificatesReducer = certificatesSlice.reducer;
