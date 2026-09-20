
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Search, 
  BookOpen, 
  FileText, 
  Calendar, 

  Award,
  Trophy,
  Bookmark,
  BookMarked,
  Bell,
  User,
  Settings,
  CreditCard,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  ChevronsUpDown
} from 'lucide-react';
import { cn } from '@/utils/cn';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Browse Courses', path: '/courses', icon: Search },
  { name: 'My Learning', path: '/my-learning', icon: BookOpen },
  { name: 'Assignments', path: '/assignments', icon: FileText },
  { name: 'Calendar', path: '/calendar', icon: Calendar },

  { name: 'Certificates', path: '/certificates', icon: Award },
  { name: 'Achievements', path: '/achievements', icon: Trophy },
  { name: 'Leaderboard', path: '/leaderboard', icon: Trophy },
  { name: 'Bookmarks', path: '/bookmarks', icon: Bookmark },
  { name: 'Notes', path: '/notes', icon: BookMarked },
  { name: 'Notifications', path: '/notifications', icon: Bell, badge: 3 },
  { name: 'Profile', path: '/profile', icon: User },
  { name: 'Settings', path: '/settings', icon: Settings },
  { name: 'Billing', path: '/billing', icon: CreditCard },
];

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

export const Sidebar = ({ isCollapsed, setIsCollapsed }: SidebarProps) => {
  return (
    <aside 
      className={cn(
        "h-screen bg-background border-r border-borderDim flex flex-col fixed left-0 top-0 overflow-y-auto transition-[width] duration-300 z-50",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo Area */}
      <div className={cn("p-6 flex items-center", isCollapsed ? "justify-center" : "")}>
        <h1 className="text-xl font-bold flex items-center gap-2 text-textMain">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center shrink-0">
            <BookOpen size={20} className="text-white" />
          </div>
          {!isCollapsed && <span className="whitespace-nowrap overflow-hidden">LMS Kit</span>}
        </h1>
      </div>

      {/* User Info */}
      {!isCollapsed && (
        <div className="px-6 pb-6 border-b border-borderDim mb-4">
          <div className="flex items-center gap-3 mb-4">
            <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-semibold text-sm text-textMain">Alex Johnson</p>
              <p className="text-xs text-textMuted">Level 12</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-bold">
              <span className="text-textMuted">4250 XP</span>
              <span className="text-primary flex items-center gap-1">
                🔥 14 day streak
              </span>
            </div>
            <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: '65%' }} />
            </div>
          </div>
        </div>
      )}

      {isCollapsed && <div className="border-b border-borderDim mb-4" />}

      {/* Navigation */}
      <nav className={cn("flex-1 space-y-1 mb-4", isCollapsed ? "px-2" : "px-4")}>
        {!isCollapsed && (
          <button className="w-full px-3 py-2.5 mb-4 bg-surface hover:bg-surfaceHighlight rounded-xl flex items-center justify-between text-textMain transition-colors border border-borderDim group">
            <div className="flex items-center gap-2.5">
              <GraduationCap size={18} className="text-primary" />
              <span className="text-sm font-bold">Student Portal</span>
            </div>
            <ChevronsUpDown size={14} className="text-textMuted group-hover:text-textMain transition-colors" />
          </button>
        )}
        
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 py-2.5 rounded-lg text-sm font-medium transition-colors relative group",
                  isCollapsed ? "justify-center px-0" : "px-3",
                  isActive
                    ? 'bg-surfaceHighlight text-primary border border-primary/20'
                    : 'text-textMuted hover:bg-surface hover:text-textMain'
                )
              }
              title={isCollapsed ? item.name : undefined}
            >
              <Icon size={18} className="shrink-0" />
              {!isCollapsed && <span className="whitespace-nowrap overflow-hidden">{item.name}</span>}
              
              {/* Badge */}
              {item.badge && (
                <span className={cn(
                  "bg-red-500 text-white font-bold rounded-full flex items-center justify-center",
                  isCollapsed 
                    ? "absolute top-1 right-3 w-4 h-4 text-[9px]" 
                    : "ml-auto px-1.5 py-0.5 text-[10px]"
                )}>
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Collapse Toggle */}
      <div className={cn("p-4 mt-auto border-t border-borderDim flex", isCollapsed ? "justify-center" : "justify-start")}>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-8 h-8 rounded-lg flex items-center justify-center border border-borderDim text-textMuted hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-colors"
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>
    </aside>
  );
};
