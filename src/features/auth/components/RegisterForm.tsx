import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { PasswordInput } from '@/components/ui/PasswordInput';
import { Checkbox } from '@/components/ui/Checkbox';

export const RegisterForm = () => {
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight mb-2">Create an account</h2>
        <p className="text-textMuted">Start your learning journey today.</p>
      </div>

      <div className="text-sm text-textMuted mb-6">
        Fields marked with <span className="text-red-500">*</span> are required.
      </div>

      <form className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" required>First Name</Label>
            <Input id="firstName" placeholder="Alex" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" required>Last Name</Label>
            <Input id="lastName" placeholder="Johnson" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" required>Email</Label>
          <Input id="email" type="email" placeholder="alex@example.com" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" required>Password</Label>
          <PasswordInput id="password" />
          <p className="text-xs text-textMuted mt-1">Must be at least 8 characters with one number and one special character.</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword" required>Confirm Password</Label>
          <PasswordInput id="confirmPassword" />
        </div>

        <div className="pt-2">
          <Checkbox 
            id="terms" 
            label={
              <span>
                I agree to the <Link to="#" className="text-emerald-500 hover:text-emerald-400">Terms of Service</Link> and <Link to="#" className="text-emerald-500 hover:text-emerald-400">Privacy Policy</Link>
              </span>
            } 
          />
        </div>

        <div className="pt-2">
          <Button type="submit" variant="primary" className="w-full">
            Create Account
          </Button>
        </div>
      </form>

      <div className="mt-8 relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-borderDim"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-background px-4 text-textMuted">or continue with</span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <Button type="button" variant="outline" className="w-full border-borderDim hover:bg-surfaceHighlight">
          Google
        </Button>
        <Button type="button" variant="outline" className="w-full border-borderDim hover:bg-surfaceHighlight">
          GitHub
        </Button>
      </div>

      <p className="mt-8 text-center text-sm text-textMuted">
        Already have an account?{' '}
        <Link to="/login" className="font-medium text-emerald-500 hover:text-emerald-400 transition-colors">
          Sign in
        </Link>
      </p>
    </div>
  );
};

