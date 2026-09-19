import React, { useState } from 'react';
import { Button } from '../../../components/ui/Button';
import { Switch } from '../../../components/ui/Switch';

export const PrivacyForm = () => {
  const [settings, setSettings] = useState({
    publicProfile: true,
    showLearningActivity: false,
    showAchievements: true,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-[#121814] rounded-xl border border-[#1b251e] p-6 md:p-8 max-w-4xl shadow-sm">
      <h3 className="text-lg font-bold text-zinc-100 mb-6">Privacy Settings</h3>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-zinc-100">Public profile</h4>
            <p className="text-xs text-zinc-400">Allow others to view your profile</p>
          </div>
          <Switch checked={settings.publicProfile} onCheckedChange={() => toggleSetting('publicProfile')} />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-zinc-100">Show learning activity</h4>
            <p className="text-xs text-zinc-400">Display your courses and progress publicly</p>
          </div>
          <Switch checked={settings.showLearningActivity} onCheckedChange={() => toggleSetting('showLearningActivity')} />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-zinc-100">Show achievements</h4>
            <p className="text-xs text-zinc-400">Display your badges and certificates publicly</p>
          </div>
          <Switch checked={settings.showAchievements} onCheckedChange={() => toggleSetting('showAchievements')} />
        </div>
      </div>

      <div className="flex justify-end pt-4 mt-8">
        <Button variant="primary">Save Settings</Button>
      </div>
    </div>
  );
};
