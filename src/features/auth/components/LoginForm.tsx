import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { PasswordInput } from '@/components/ui/PasswordInput';
import { Checkbox } from '@/components/ui/Checkbox';

export const LoginForm = () => {
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight mb-2">Welcome back</h2>
        <p className="text-zinc-400">Sign in to continue your learning journey.</p>
      </div>

      <div className="text-sm text-zinc-400 mb-6">
        Fields marked with <span className="text-red-500">*</span> are required.
      </div>

      <form className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email" required>Email</Label>
          <Input id="email" type="email" placeholder="alex@example.com" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" required>Password</Label>
            <Link to="/forgot-password" className="text-xs font-medium text-emerald-500 hover:text-emerald-400 transition-colors">
              Forgot password?
            </Link>
          </div>
          <PasswordInput id="password" />
        </div>

        <div className="pt-1">
          <Checkbox id="rememberMe" label="Remember me" />
        </div>

        <div className="pt-2">
          <Button type="submit" variant="primary" className="w-full">
            Sign In
          </Button>
        </div>
      </form>

      <div className="mt-8 relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#1b251e]"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-[#0A0D0B] px-4 text-zinc-500">or continue with</span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <Button type="button" variant="outline" className="w-full border-zinc-700 hover:bg-zinc-800">
          Google
        </Button>
        <Button type="button" variant="outline" className="w-full border-zinc-700 hover:bg-zinc-800">
          GitHub
        </Button>
      </div>

      <p className="mt-8 text-center text-sm text-zinc-400">
        Don't have an account?{' '}
        <Link to="/register" className="font-medium text-emerald-500 hover:text-emerald-400 transition-colors">
          Sign up
        </Link>
      </p>
    </div>
  );
};

