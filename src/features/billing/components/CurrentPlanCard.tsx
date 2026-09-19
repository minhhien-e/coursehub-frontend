import { CheckCircle2 } from 'lucide-react';

interface CurrentPlanCardProps {
  plan: string;
  price: number;
}

export const CurrentPlanCard = ({ plan, price }: CurrentPlanCardProps) => {
  return (
    <div className="bg-[#121814] border border-[#1b251e] rounded-xl p-6 mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
            <CheckCircle2 size={24} className="text-emerald-500" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{plan} Plan</h3>
            <p className="text-sm text-zinc-400">Unlimited access to all courses and premium features</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="text-2xl font-extrabold text-white">${price}<span className="text-sm font-medium text-zinc-500">/mo</span></p>
          </div>
          <button className="bg-transparent border border-zinc-700 hover:bg-zinc-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Change Plan
          </button>
        </div>

      </div>
    </div>
  );
};
