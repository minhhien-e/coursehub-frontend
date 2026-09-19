import { useState, useRef, useEffect } from 'react';
import { Search, Bell, Moon, User, Settings, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { storage } from '@/utils/storage';

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsDropdownOpen(false);
    storage.clearAll();
    navigate('/login');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
        <button className="text-textMuted hover:text-white relative mr-2">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-full"
          >
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-8 h-8 rounded-full border border-zinc-700" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-[#0B1410] border border-zinc-800 rounded-lg shadow-xl py-1 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              <div className="px-4 py-3 border-b border-zinc-800">
                <p className="text-sm font-semibold text-zinc-100">Alex Johnson</p>
                <p className="text-xs text-zinc-400 truncate mt-0.5">alex.johnson@example.com</p>
              </div>
              
              <div className="py-1">
                <Link 
                  to="/profile" 
                  className="flex items-center px-4 py-2 text-sm text-zinc-300 hover:bg-[#15231c] hover:text-white transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <User className="w-4 h-4 mr-3" />
                  Profile
                </Link>
                <Link 
                  to="/settings" 
                  className="flex items-center px-4 py-2 text-sm text-zinc-300 hover:bg-[#15231c] hover:text-white transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <Settings className="w-4 h-4 mr-3" />
                  Settings
                </Link>
              </div>
              
              <div className="border-t border-zinc-800 py-1">
                <button 
                  className="flex items-center w-full px-4 py-2 text-sm text-zinc-300 hover:bg-[#15231c] hover:text-white transition-colors text-left"
                  onClick={handleLogout}
                >
                  <LogOut className="w-4 h-4 mr-3" />
                  Log out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
