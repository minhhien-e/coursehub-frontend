import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Switch } from '@/components/ui/Switch';

export const NotificationsForm = () => {
  const [settings, setSettings] = useState({
    courseUpdates: true,
    achievementAlerts: true,
    communityReplies: true,
    weeklyDigest: false,
    marketingEmails: false,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-[#121814] rounded-xl border border-[#1b251e] p-6 md:p-8 max-w-4xl shadow-sm">
      <h3 className="text-lg font-bold text-zinc-100 mb-6">Notification Preferences</h3>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-zinc-100">Course updates</h4>
            <p className="text-xs text-zinc-400">New lessons, assignments, and announcements</p>
          </div>
          <Switch checked={settings.courseUpdates} onCheckedChange={() => toggleSetting('courseUpdates')} />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-zinc-100">Achievement alerts</h4>
            <p className="text-xs text-zinc-400">Badges, level ups, and milestones</p>
          </div>
          <Switch checked={settings.achievementAlerts} onCheckedChange={() => toggleSetting('achievementAlerts')} />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-zinc-100">Community replies</h4>
            <p className="text-xs text-zinc-400">Replies to your discussions and threads</p>
          </div>
          <Switch checked={settings.communityReplies} onCheckedChange={() => toggleSetting('communityReplies')} />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-zinc-100">Weekly digest</h4>
            <p className="text-xs text-zinc-400">Summary of your learning activity</p>
          </div>
          <Switch checked={settings.weeklyDigest} onCheckedChange={() => toggleSetting('weeklyDigest')} />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-zinc-100">Marketing emails</h4>
            <p className="text-xs text-zinc-400">New courses, promotions, and events</p>
          </div>
          <Switch checked={settings.marketingEmails} onCheckedChange={() => toggleSetting('marketingEmails')} />
        </div>
      </div>

      <div className="flex justify-end pt-4 mt-8">
        <Button variant="primary">Save Preferences</Button>
      </div>
    </div>
  );
};
