import { Check, X } from 'lucide-react';
import { cn } from '@/utils/cn';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  isPopular?: boolean;
}

export const PricingCard = ({ 
  title, 
  price, 
  period, 
  description, 
  features, 
  buttonText,
  isPopular = false
}: PricingCardProps) => {
  return (
    <div className={cn(
      "rounded-2xl p-8 border flex flex-col transition-transform hover:-translate-y-1 duration-300",
      isPopular 
        ? "bg-surfaceHighlight border-emerald-500 shadow-xl shadow-emerald-500/10 relative" 
        : "bg-surface border-borderDim"
    )}>
      
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
          Most Popular
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <div className="flex items-center justify-center gap-1 mb-4">
          <span className="text-5xl font-extrabold text-white">{price}</span>
          {price !== '$0' && price !== 'Custom' && (
            <span className="text-textMuted font-medium">{period}</span>
          )}
        </div>
        <p className="text-sm text-textMuted h-10">{description}</p>
      </div>

      <button className={cn(
        "w-full py-3 rounded-xl font-bold mb-8 transition-colors",
        isPopular 
          ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20" 
          : "bg-transparent border border-borderDim hover:bg-surfaceHighlight text-white"
      )}>
        {buttonText}
      </button>

      <div className="flex-1 space-y-4">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3">
            {feature.included ? (
              <Check size={18} className="text-emerald-500 shrink-0" />
            ) : (
              <X size={18} className="text-borderDim shrink-0" />
            )}
            <span className={cn(
              "text-sm font-medium",
              feature.included ? "text-textMuted" : "text-textMuted"
            )}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
};
