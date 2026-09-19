import type { BillingDetails } from '../types';

export const mockBillingData: BillingDetails = {
  plan: 'Pro',
  price: 29,
  paymentMethods: [
    {
      id: 'pm1',
      type: 'visa',
      last4: '4242',
      expires: '08/2028',
      isDefault: true
    },
    {
      id: 'pm2',
      type: 'mastercard',
      last4: '8888',
      expires: '12/2027',
      isDefault: false
    }
  ],
  history: [
    {
      id: 'inv1',
      date: 'May 1, 2026',
      description: 'Pro Plan - Monthly',
      amount: 29.00,
      status: 'paid'
    },
    {
      id: 'inv2',
      date: 'Apr 1, 2026',
      description: 'Pro Plan - Monthly',
      amount: 29.00,
      status: 'paid'
    },
    {
      id: 'inv3',
      date: 'Mar 1, 2026',
      description: 'Pro Plan - Monthly',
      amount: 29.00,
      status: 'paid'
    },
    {
      id: 'inv4',
      date: 'Feb 1, 2026',
      description: 'Pro Plan - Monthly',
      amount: 29.00,
      status: 'paid'
    },
    {
      id: 'inv5',
      date: 'Jan 15, 2026',
      description: 'Course: Advanced React Patterns',
      amount: 89.99,
      status: 'paid'
    },
    {
      id: 'inv6',
      date: 'Dec 20, 2025',
      description: 'Course: ML Fundamentals with Python',
      amount: 99.99,
      status: 'paid'
    }
  ]
};
