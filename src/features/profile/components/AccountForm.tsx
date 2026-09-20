import { Button } from '@/components/ui/Button';
import { Label } from '@/components/ui/Label';
import { PasswordInput } from '@/components/ui/PasswordInput';
import { useSettings } from '@/features/profile/hooks/useSettings';

export const AccountForm = () => {
  const { updatePassword, isLoading } = useSettings();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updatePassword({});
  };

  return (
    <div className="bg-surfaceHighlight rounded-xl border border-borderDim p-6 md:p-8 shadow-sm">
      <h3 className="text-lg font-bold text-textMain mb-6">Account Settings</h3>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="currentPassword" required>Current Password</Label>
          <PasswordInput id="currentPassword" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="newPassword" required>New Password</Label>
            <PasswordInput id="newPassword" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" required>Confirm Password</Label>
            <PasswordInput id="confirmPassword" />
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <Button type="submit" variant="primary" disabled={isLoading}>
            {isLoading ? "Updating..." : "Update Password"}
          </Button>
        </div>
      </form>

      <div className="border-t border-borderDim my-8"></div>

      <div className="rounded-lg border border-red-900/50 p-6 bg-red-950/10">
        <h4 className="text-sm font-bold text-red-500 mb-1">Danger Zone</h4>
        <p className="text-xs text-textMuted mb-4">Permanently delete your account and all data.</p>
        <Button 
          type="button" 
          variant="ghost" 
          className="bg-red-500/10 text-red-500 hover:bg-red-500/20 hover:text-red-400 border border-red-500/20"
        >
          Delete Account
        </Button>
      </div>
    </div>
  );
};

