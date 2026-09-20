import { Book, Trophy, MessageSquare, Settings, TrendingUp, Check } from 'lucide-react';
import type { Notification } from '../types';
import { cn } from '@/utils/cn';

interface NotificationItemProps {
  notification: Notification;
  onMarkRead: (id: string) => void;
}

const typeConfig = {
  lesson: { icon: Book, color: 'text-blue-500' },
  badge: { icon: Trophy, color: 'text-yellow-500' },
  thread: { icon: MessageSquare, color: 'text-purple-500' },
  system: { icon: Settings, color: 'text-textMuted' },
  report: { icon: TrendingUp, color: 'text-emerald-500' },
};

export const NotificationItem = ({ notification, onMarkRead }: NotificationItemProps) => {
  const config = typeConfig[notification.type];
  const Icon = config.icon;

  return (
    <div 
      className={cn(
        "p-5 rounded-xl border transition-all flex gap-4 items-start group cursor-pointer",
        notification.isRead 
          ? "bg-surface border-borderDim" 
          : "bg-surfaceHighlight border-emerald-500/20"
      )}
      onClick={() => !notification.isRead && onMarkRead(notification.id)}
    >
      <div className={cn("w-10 h-10 rounded-lg bg-zinc-900 border border-borderDim flex items-center justify-center shrink-0", config.color)}>
        <Icon size={18} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4 className={cn("font-semibold text-sm", notification.isRead ? "text-textMuted" : "text-white")}>
            {notification.title}
          </h4>
          {!notification.isRead && (
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
          )}
        </div>
        <p className={cn("text-xs leading-relaxed mb-2", notification.isRead ? "text-textMuted" : "text-textMuted")}>
          {notification.message}
        </p>
        <span className="text-[10px] font-medium text-textMuted">
          {notification.timeAgo}
        </span>
      </div>
      
      {!notification.isRead && (
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onMarkRead(notification.id);
          }}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-textMuted hover:text-emerald-500 hover:bg-emerald-500/10 transition-colors opacity-0 group-hover:opacity-100"
          title="Mark as read"
        >
          <Check size={16} />
        </button>
      )}
    </div>
  );
};
