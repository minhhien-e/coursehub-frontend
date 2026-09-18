import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Search, 
  BookOpen, 
  FileText, 
  Calendar, 
  TrendingUp, 
  Award,
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Browse Courses', path: '/courses', icon: Search },
  { name: 'My Learning', path: '/my-learning', icon: BookOpen },
  { name: 'Assignments', path: '/assignments', icon: FileText },
  { name: 'Calendar', path: '/calendar', icon: Calendar },
  { name: 'Progress', path: '/progress', icon: TrendingUp },
  { name: 'Certificates', path: '/certificates', icon: Award },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-background border-r border-borderDim flex flex-col fixed left-0 top-0 overflow-y-auto">
      {/* Logo Area */}
      <div className="p-6">
        <h1 className="text-xl font-bold flex items-center gap-2 text-white">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
            <BookOpen size={20} className="text-black" />
          </div>
          LMS Kit
        </h1>
      </div>

      {/* User Info */}
      <div className="px-6 pb-6">
        <div className="flex items-center gap-3">
          <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-semibold text-sm text-white">Alex Johnson</p>
            <p className="text-xs text-textMuted">Level 12</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-surfaceHighlight text-primary border border-primary/20'
                    : 'text-textMuted hover:bg-surface hover:text-white'
                }`
              }
            >
              <Icon size={18} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};
