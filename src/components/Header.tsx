import React from 'react';
import { Search, Bell, Moon } from 'lucide-react';

export const Header = () => {
  return (
    <header className="h-16 flex items-center justify-between px-8 bg-background sticky top-0 z-10 border-b border-borderDim">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-textMuted" size={18} />
          <input 
            type="text" 
            placeholder="Search courses, lessons, discussions..." 
            className="w-full bg-surface border border-borderDim rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary text-textMain"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="text-textMuted hover:text-white">
          <Moon size={20} />
        </button>
        <button className="text-textMuted hover:text-white relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
};
