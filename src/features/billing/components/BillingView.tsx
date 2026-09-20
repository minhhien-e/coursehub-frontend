import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchBillingDetails } from '../store/billingSlice';
import { CurrentPlanCard } from './CurrentPlanCard';
import { PaymentMethodsList } from './PaymentMethodsList';
import { BillingHistoryTable } from './BillingHistoryTable';
import { Loader2 } from 'lucide-react';

export const BillingView = () => {
  const dispatch = useAppDispatch();
  const { details, isLoading, error } = useAppSelector((state) => state.billing);

  useEffect(() => {
    dispatch(fetchBillingDetails());
  }, [dispatch]);

  if (isLoading && !details) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <Loader2 className="w-10 h-10 text-emerald-500 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-red-500">
        {error}
      </div>
    );
  }

  if (!details) return null;

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto animate-in fade-in duration-500">
      
      {/* Current Plan */}
      <CurrentPlanCard plan={details.plan} price={details.price} />

      {/* Payment Methods */}
      <PaymentMethodsList methods={details.paymentMethods} />

      {/* Billing History */}
      <BillingHistoryTable history={details.history} />
      
    </div>
  );
};
