import React, { useState } from 'react';
import { X, CreditCard, Lock } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Label } from '@/components/ui/Label';

interface AddPaymentMethodModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddPaymentMethodModal = ({ isOpen, onClose }: AddPaymentMethodModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 animate-in fade-in duration-200">
      <div className="bg-surface border border-borderDim rounded-2xl w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-borderDim flex items-center justify-between bg-surfaceHighlight/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
              <CreditCard className="text-emerald-500" size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-textMain">Add Payment Method</h2>
              <p className="text-xs text-textMuted flex items-center gap-1">
                <Lock size={12} /> Secure encrypted connection
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-textMuted hover:text-textMain transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-borderDim"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="space-y-2">
            <Label>Cardholder Name</Label>
            <Input placeholder="Name on card" required />
          </div>
          
          <div className="space-y-2">
            <Label>Card Number</Label>
            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-textMuted" size={18} />
              <Input className="pl-10" placeholder="0000 0000 0000 0000" required maxLength={19} />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Expiry Date</Label>
              <Input placeholder="MM/YY" required maxLength={5} />
            </div>
            <div className="space-y-2">
              <Label>CVC</Label>
              <Input placeholder="123" required maxLength={4} type="password" />
            </div>
          </div>
          
          <div className="pt-4 flex gap-3">
            <Button type="button" variant="outline" className="flex-1" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white" disabled={isSubmitting}>
              {isSubmitting ? 'Adding...' : 'Add Card'}
            </Button>
          </div>
        </form>

      </div>
    </div>
  );
};
