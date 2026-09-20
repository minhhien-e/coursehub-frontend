import { CreditCard, Plus, Trash2 } from 'lucide-react';
import type { PaymentMethod } from '../types';

interface PaymentMethodsListProps {
  methods: PaymentMethod[];
}

export const PaymentMethodsList = ({ methods }: PaymentMethodsListProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white">Payment Methods</h3>
        <button className="flex items-center gap-2 text-sm font-medium text-white bg-borderDim hover:bg-[#233027] px-3 py-1.5 rounded-lg transition-colors">
          <Plus size={16} />
          Add Method
        </button>
      </div>

      <div className="space-y-3">
        {methods.map(method => (
          <div key={method.id} className="bg-surfaceHighlight border border-borderDim rounded-xl p-5 flex items-center justify-between group">
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-zinc-800 rounded flex items-center justify-center">
                <CreditCard size={20} className="text-textMuted" />
              </div>
              <div>
                <p className="font-semibold text-white capitalize">{method.type} Ending In {method.last4}</p>
                <p className="text-xs text-textMuted">Expires {method.expires}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {method.isDefault && (
                <span className="bg-fuchsia-500/20 text-fuchsia-400 px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  Default
                </span>
              )}
              <button className="text-textMuted hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 p-2">
                <Trash2 size={16} />
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
