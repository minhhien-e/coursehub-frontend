import { useState } from 'react';
import { Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Link, useSearchParams } from 'react-router-dom';

export const ResetPasswordForm = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Add API call here
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (!token) {
    return (
      <div className="w-full max-w-md bg-surface p-8 rounded-2xl shadow-xl border border-borderDim animate-in fade-in zoom-in-95 duration-300">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Invalid Link</h2>
          <p className="text-textMuted">
            The password reset link is invalid or has expired. Please request a new one.
          </p>
        </div>
        <Link to="/forgot-password">
          <Button variant="primary" className="w-full h-11 text-[15px] font-semibold">
            Request New Link
          </Button>
        </Link>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="w-full max-w-md bg-surface p-8 rounded-2xl shadow-xl border border-borderDim animate-in fade-in zoom-in-95 duration-300">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-emerald-500" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Password Reset</h2>
          <p className="text-textMuted">
            Your password has been successfully reset. You can now use your new password to log in.
          </p>
        </div>
        
        <Link to="/login">
          <Button variant="primary" className="w-full h-11 text-[15px] font-semibold">
            Back to Login
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md bg-surface p-8 rounded-2xl shadow-xl border border-borderDim animate-in fade-in zoom-in-95 duration-300">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Set New Password</h2>
        <p className="text-textMuted">
          Please enter your new password below.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-textMuted group-focus-within:text-primary transition-colors">
              <Lock size={18} />
            </div>
            <Input 
              type="password" 
              placeholder="New password" 
              required
              className="pl-10 h-12 bg-[#0a0f0d] border-borderDim focus:bg-surface"
            />
          </div>

          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-textMuted group-focus-within:text-primary transition-colors">
              <Lock size={18} />
            </div>
            <Input 
              type="password" 
              placeholder="Confirm new password" 
              required
              className="pl-10 h-12 bg-[#0a0f0d] border-borderDim focus:bg-surface"
            />
          </div>
        </div>

        <Button 
          type="submit" 
          variant="primary" 
          className="w-full h-12 text-[15px] font-semibold mt-6 flex items-center justify-center gap-2 group"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              Reset Password
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
};
