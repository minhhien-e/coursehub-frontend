import type { BillingDetails } from '../types';
import { mockBillingData } from '../data/mockBilling';

export const billingService = {
  async getBillingDetails(): Promise<BillingDetails> {
    return new Promise((resolve) => setTimeout(() => resolve(mockBillingData), 400));
  }
};
