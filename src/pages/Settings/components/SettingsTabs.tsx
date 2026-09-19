import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SettingsTabsProps {
  activeTab: string;
  onChange: (tab: string) => void;
}

export const SettingsTabs: React.FC<SettingsTabsProps> = ({ activeTab, onChange }) => {
  const tabs = ['Profile', 'Notifications', 'Privacy', 'Account'];

  return (
    <div className="flex space-x-2 pb-4 mb-6 border-b border-[#1b251e]">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={twMerge(
            clsx(
              "px-4 py-1.5 rounded-md text-sm font-medium transition-colors",
              activeTab === tab 
                ? "bg-zinc-800 text-zinc-100" 
                : "text-zinc-400 hover:text-zinc-200"
            )
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
