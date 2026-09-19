import React from 'react';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { Label } from '../../../components/ui/Label';

export const AccountForm = () => {
  return (
    <div className="bg-[#121814] rounded-xl border border-[#1b251e] p-6 md:p-8 max-w-4xl shadow-sm">
      <h3 className="text-lg font-bold text-zinc-100 mb-6">Account Settings</h3>

      <form className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="currentPassword" required>Current Password</Label>
          <Input id="currentPassword" type="password" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="newPassword" required>New Password</Label>
            <Input id="newPassword" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" required>Confirm Password</Label>
            <Input id="confirmPassword" type="password" />
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <Button type="button" variant="primary">Update Password</Button>
        </div>
      </form>

      <div className="border-t border-[#1b251e] my-8"></div>

      <div className="rounded-lg border border-red-900/50 p-6 bg-red-950/10">
        <h4 className="text-sm font-bold text-red-500 mb-1">Danger Zone</h4>
        <p className="text-xs text-zinc-400 mb-4">Permanently delete your account and all data.</p>
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
