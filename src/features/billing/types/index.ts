export interface PaymentMethod {
  id: string;
  type: 'visa' | 'mastercard';
  last4: string;
  expires: string;
  isDefault: boolean;
}

export interface BillingHistoryItem {
  id: string;
  date: string;
  description: string;
  amount: number;
  status: 'paid' | 'failed' | 'pending';
}

export interface BillingDetails {
  plan: 'Free' | 'Pro' | 'Enterprise';
  price: number;
  paymentMethods: PaymentMethod[];
  history: BillingHistoryItem[];
}
