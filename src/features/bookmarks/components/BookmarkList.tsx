import type { Bookmark } from '../types';
import { BookmarkItem } from './BookmarkItem';

interface BookmarkListProps {
  bookmarks: Bookmark[];
}

export const BookmarkList = ({ bookmarks }: BookmarkListProps) => {
  return (
    <div className="flex flex-col gap-4 animate-in fade-in duration-300">
      {bookmarks.map(bookmark => (
        <BookmarkItem key={bookmark.id} bookmark={bookmark} />
      ))}
      
      {bookmarks.length === 0 && (
        <div className="text-center py-12 bg-[#121814] border border-[#1b251e] rounded-xl">
          <p className="text-zinc-500">No bookmarks found in this category.</p>
        </div>
      )}
    </div>
  );
};
