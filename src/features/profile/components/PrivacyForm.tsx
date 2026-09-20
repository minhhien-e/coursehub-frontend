import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Switch } from '@/components/ui/Switch';
import { useSettings } from '@/features/profile/hooks/useSettings';

export const PrivacyForm = () => {
  const { updatePrivacy, isLoading } = useSettings();
  const [settings, setSettings] = useState({
    publicProfile: true,
    showLearningActivity: true,
    showAchievements: true,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = async () => {
    await updatePrivacy(settings);
  };

  return (
    <div className="bg-surfaceHighlight rounded-xl border border-borderDim p-6 md:p-8 shadow-sm">
      <h3 className="text-lg font-bold text-textMain mb-6">Privacy Settings</h3>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-textMain">Public profile</h4>
            <p className="text-xs text-textMuted">Allow others to view your profile</p>
          </div>
          <Switch checked={settings.publicProfile} onCheckedChange={() => toggleSetting('publicProfile')} />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-textMain">Show learning activity</h4>
            <p className="text-xs text-textMuted">Display your courses and progress publicly</p>
          </div>
          <Switch checked={settings.showLearningActivity} onCheckedChange={() => toggleSetting('showLearningActivity')} />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-textMain">Show achievements</h4>
            <p className="text-xs text-textMuted">Display your badges and certificates publicly</p>
          </div>
          <Switch checked={settings.showAchievements} onCheckedChange={() => toggleSetting('showAchievements')} />
        </div>
      </div>

      <div className="flex justify-end pt-4 mt-8 border-t border-borderDim">
        <Button variant="primary" onClick={handleSave} disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Privacy Settings"}
        </Button>
      </div>
    </div>
  );
};

