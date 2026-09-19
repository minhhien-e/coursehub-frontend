import React, { useState } from 'react';
import { 
  SettingsTabs, 
  ProfileForm, 
  NotificationsForm, 
  PrivacyForm, 
  AccountForm 
} from '@/features/profile';

export const Settings = () => {
  const [activeTab, setActiveTab] = useState('Profile');

  return (
    <div className="min-h-screen bg-[#0A0D0B] text-zinc-100 p-8">
      <div className="max-w-5xl mx-auto pt-4">
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">Settings</h1>
        <p className="text-zinc-400 mb-6">Manage your account preferences.</p>
        
        <SettingsTabs activeTab={activeTab} onChange={setActiveTab} />
        
        {activeTab === 'Profile' && <ProfileForm />}
        {activeTab === 'Notifications' && <NotificationsForm />}
        {activeTab === 'Privacy' && <PrivacyForm />}
        {activeTab === 'Account' && <AccountForm />}
      </div>
    </div>
  );
};
