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
    <div className="p-6 md:p-8 max-w-7xl mx-auto animate-in fade-in duration-500">
      <h1 className="text-3xl font-extrabold tracking-tight mb-2 text-white">Settings</h1>
      <p className="text-textMuted mb-6">Manage your account preferences.</p>
      
      <SettingsTabs activeTab={activeTab} onChange={setActiveTab} />
      
      {activeTab === 'Profile' && <ProfileForm />}
      {activeTab === 'Notifications' && <NotificationsForm />}
      {activeTab === 'Privacy' && <PrivacyForm />}
      {activeTab === 'Account' && <AccountForm />}
    </div>
  );
};
