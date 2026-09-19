import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

export const ForgotPasswordForm = () => {
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight mb-2">Forgot password?</h2>
        <p className="text-zinc-400">Enter your email and we'll send you a reset link.</p>
      </div>

      <form className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" required>Email</Label>
          <Input id="email" type="email" placeholder="alex@example.com" />
        </div>

        <div className="pt-2">
          <Button type="submit" variant="primary" className="w-full">
            Send Reset Link
          </Button>
        </div>
      </form>

      <div className="mt-8 flex justify-center">
        <Link 
          to="/login" 
          className="flex items-center text-sm font-medium text-emerald-500 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to sign in
        </Link>
      </div>
    </div>
  );
};

