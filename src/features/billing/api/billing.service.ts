import api from '@/services/api';
import type { BillingDetails } from '../types';

export const billingService = {
  async getBillingDetails(): Promise<BillingDetails> {
    const response = await api.get('/billing');
    return response.data;
  }
};
