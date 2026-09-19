import { useState } from 'react';
import { GraduationCap, Moon } from 'lucide-react';
import { PricingCard } from './PricingCard';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

export const PricingView = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const features = [
    { text: 'Access to free courses', included: true },
    { text: 'Community forum access', included: true },
    { text: 'Basic progress tracking', included: true },
    { text: 'Certificate of completion', included: false },
    { text: 'Downloadable resources', included: false },
    { text: 'Live session access', included: false },
    { text: 'Priority support', included: false },
    { text: 'Team management', included: false },
  ];

  const proFeatures = [
    { text: 'All courses unlimited', included: true },
    { text: 'Community forum access', included: true },
    { text: 'Advanced analytics', included: true },
    { text: 'Certificates of completion', included: true },
    { text: 'Downloadable resources', included: true },
    { text: 'Live session access', included: true },
    { text: 'Priority support', included: false },
    { text: 'Team management', included: false },
  ];

  const enterpriseFeatures = [
    { text: 'Everything in Pro', included: true },
    { text: 'Custom learning paths', included: true },
    { text: 'Admin dashboard', included: true },
    { text: 'SSO & SCIM provisioning', included: true },
    { text: 'Dedicated account manager', included: true },
    { text: 'Custom integrations', included: true },
    { text: 'Priority support', included: true },
    { text: 'Team management', included: true },
  ];

  return (
    <div className="min-h-screen bg-[#0a0e0c] flex flex-col animate-in fade-in duration-500">
      
      {/* Public Header */}
      <header className="h-16 border-b border-[#1b251e] flex items-center justify-between px-6 md:px-10">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-emerald-500 p-1.5 rounded-lg text-white">
              <GraduationCap size={20} />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">LMS Kit</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link to="/courses" className="text-zinc-400 hover:text-white transition-colors">Courses</Link>
            <Link to="/pricing" className="text-white">Pricing</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-zinc-400 hover:text-white transition-colors">
            <Moon size={18} />
          </button>
          <Link to="/login" className="text-sm font-bold text-zinc-300 hover:text-white transition-colors">
            Sign In
          </Link>
          <Link to="/register" className="text-sm font-bold bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-colors shadow-lg shadow-emerald-500/20">
            Get Started
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center pt-20 pb-24 px-6">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Simple, transparent pricing</h1>
          <p className="text-zinc-400 text-lg mb-10">Choose the plan that's right for you and start learning today.</p>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={cn("text-sm font-bold", !isAnnual ? "text-white" : "text-zinc-500")}>Monthly</span>
            <button 
              className="w-12 h-6 rounded-full bg-[#1b251e] border border-zinc-700 relative transition-colors"
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <div className={cn(
                "absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform",
                isAnnual && "translate-x-6"
              )} />
            </button>
            <div className="flex items-center gap-2">
              <span className={cn("text-sm font-bold", isAnnual ? "text-white" : "text-zinc-500")}>Annual</span>
              <span className="bg-fuchsia-500/20 text-fuchsia-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          <PricingCard 
            title="Free"
            price="$0"
            period="/mo"
            description="Get started with free courses and community access"
            buttonText="Get Started"
            features={features}
          />
          <PricingCard 
            title="Pro"
            price={isAnnual ? "$23" : "$29"}
            period="/mo"
            description="Unlimited access to all courses and premium features"
            buttonText="Start Pro Trial"
            features={proFeatures}
            isPopular
          />
          <PricingCard 
            title="Enterprise"
            price={isAnnual ? "$79" : "$99"}
            period="/mo"
            description="For teams and organizations with advanced needs"
            buttonText="Contact Sales"
            features={enterpriseFeatures}
          />
        </div>
        
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
        </div>

      </main>
    </div>
  );
};
