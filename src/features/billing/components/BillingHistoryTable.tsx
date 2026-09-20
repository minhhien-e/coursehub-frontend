import { Download } from 'lucide-react';
import type { BillingHistoryItem } from '../types';

interface BillingHistoryTableProps {
  history: BillingHistoryItem[];
}

export const BillingHistoryTable = ({ history }: BillingHistoryTableProps) => {
  return (
    <div className="bg-surfaceHighlight border border-borderDim rounded-xl overflow-hidden">
      <div className="p-6 border-b border-borderDim">
        <h3 className="text-lg font-bold text-white">Billing History</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-borderDim bg-surface/50">
              <th className="py-4 px-6 text-xs font-semibold text-textMuted uppercase tracking-wider">Date</th>
              <th className="py-4 px-6 text-xs font-semibold text-textMuted uppercase tracking-wider">Description</th>
              <th className="py-4 px-6 text-xs font-semibold text-textMuted uppercase tracking-wider">Amount</th>
              <th className="py-4 px-6 text-xs font-semibold text-textMuted uppercase tracking-wider">Status</th>
              <th className="py-4 px-6"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1b251e]">
            {history.map((item) => (
              <tr key={item.id} className="hover:bg-surfaceHighlight/20 transition-colors">
                <td className="py-4 px-6 text-sm text-textMuted font-medium whitespace-nowrap">{item.date}</td>
                <td className="py-4 px-6 text-sm text-textMuted">{item.description}</td>
                <td className="py-4 px-6 text-sm text-white font-medium whitespace-nowrap">${item.amount.toFixed(2)}</td>
                <td className="py-4 px-6 whitespace-nowrap">
                  {item.status === 'paid' && (
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      paid
                    </span>
                  )}
                </td>
                <td className="py-4 px-6 text-right whitespace-nowrap">
                  <button className="text-textMuted hover:text-emerald-500 transition-colors p-2 rounded hover:bg-emerald-500/10 inline-flex" title="Download Invoice">
                    <Download size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
