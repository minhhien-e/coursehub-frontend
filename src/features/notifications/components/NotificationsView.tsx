import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchNotifications, setActiveTab, markAllAsRead, markAsRead } from '../store/notificationsSlice';
import { NotificationItem } from './NotificationItem';
import { Check, Loader2 } from 'lucide-react';
import { cn } from '@/utils/cn';

export const NotificationsView = () => {
  const dispatch = useAppDispatch();
  const { items, activeTab, isLoading, error } = useAppSelector((state) => state.notifications);

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  const unreadCount = items.filter(n => !n.isRead).length;
  const filteredItems = activeTab === 'All' ? items : items.filter(n => !n.isRead);

  if (isLoading && items.length === 0) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <Loader2 className="w-10 h-10 text-emerald-500 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2">Notifications</h1>
          <p className="text-zinc-400">{unreadCount} unread notifications</p>
        </div>
        <button 
          onClick={() => dispatch(markAllAsRead())}
          disabled={unreadCount === 0}
          className="bg-transparent border border-zinc-700 hover:bg-zinc-800 text-zinc-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Check size={16} />
          Mark all as read
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6 bg-[#121814] p-1.5 rounded-lg border border-[#1b251e] w-fit">
        <button
          onClick={() => dispatch(setActiveTab('All'))}
          className={cn(
            "px-4 py-1.5 rounded-md text-sm font-medium transition-colors",
            activeTab === 'All'
              ? "bg-zinc-800 text-white shadow-sm"
              : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
          )}
        >
          All ({items.length})
        </button>
        <button
          onClick={() => dispatch(setActiveTab('Unread'))}
          className={cn(
            "px-4 py-1.5 rounded-md text-sm font-medium transition-colors",
            activeTab === 'Unread'
              ? "bg-zinc-800 text-white shadow-sm"
              : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
          )}
        >
          Unread ({unreadCount})
        </button>
      </div>

      {/* List */}
      <div className="space-y-3">
        {filteredItems.map(notification => (
          <NotificationItem 
            key={notification.id} 
            notification={notification} 
            onMarkRead={(id) => dispatch(markAsRead(id))}
          />
        ))}

        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-[#0a0e0c] border border-[#1b251e] rounded-xl">
            <p className="text-zinc-500">No notifications here.</p>
          </div>
        )}
      </div>
      
    </div>
  );
};
