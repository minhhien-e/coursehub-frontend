import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import type { PaymentMethod } from '../types';

interface RemovePaymentMethodModalProps {
  isOpen: boolean;
  onClose: () => void;
  method: PaymentMethod | null;
}

export const RemovePaymentMethodModal = ({ isOpen, onClose, method }: RemovePaymentMethodModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !method) return null;

  const handleRemove = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 animate-in fade-in duration-200">
      <div className="bg-surface border border-borderDim rounded-2xl w-full max-w-sm shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden">
        
        <div className="p-6 space-y-4">
          <h2 className="text-lg font-bold text-textMain">Remove payment method?</h2>
          
          <p className="text-textMuted text-sm leading-relaxed">
            This will remove your {method.type.toLowerCase()} ending in {method.last4} from your account.
          </p>
          
          <div className="pt-4 flex justify-end gap-3">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button 
              type="button" 
              className="bg-red-500/20 text-red-500 hover:bg-red-500/30 hover:text-red-400 border border-transparent shadow-none"
              onClick={handleRemove}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Removing...' : 'Remove'}
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
