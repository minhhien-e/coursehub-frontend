import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Switch } from '@/components/ui/Switch';
import { useSettings } from '@/features/profile/hooks/useSettings';

export const NotificationsForm = () => {
  const { updateNotifications, isLoading } = useSettings();
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

  const handleSave = async () => {
    await updateNotifications(settings);
  };

  return (
    <div className="bg-surfaceHighlight rounded-xl border border-borderDim p-6 md:p-8 shadow-sm">
      <h3 className="text-lg font-bold text-textMain mb-6">Notification Preferences</h3>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-textMain">Course updates</h4>
            <p className="text-xs text-textMuted">New lessons, assignments, and announcements</p>
          </div>
          <Switch checked={settings.courseUpdates} onCheckedChange={() => toggleSetting('courseUpdates')} />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-textMain">Achievement alerts</h4>
            <p className="text-xs text-textMuted">Badges, level ups, and milestones</p>
          </div>
          <Switch checked={settings.achievementAlerts} onCheckedChange={() => toggleSetting('achievementAlerts')} />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-textMain">Community replies</h4>
            <p className="text-xs text-textMuted">Replies to your discussions and threads</p>
          </div>
          <Switch checked={settings.communityReplies} onCheckedChange={() => toggleSetting('communityReplies')} />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-textMain">Weekly digest</h4>
            <p className="text-xs text-textMuted">Summary of your learning activity</p>
          </div>
          <Switch checked={settings.weeklyDigest} onCheckedChange={() => toggleSetting('weeklyDigest')} />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-textMain">Marketing emails</h4>
            <p className="text-xs text-textMuted">New courses, promotions, and events</p>
          </div>
          <Switch checked={settings.marketingEmails} onCheckedChange={() => toggleSetting('marketingEmails')} />
        </div>
      </div>

      <div className="flex justify-end pt-6 mt-8 border-t border-borderDim">
        <Button variant="primary" onClick={handleSave} disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Preferences"}
        </Button>
      </div>
    </div>
  );
};

