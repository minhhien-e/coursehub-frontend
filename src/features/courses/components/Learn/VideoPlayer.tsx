import { Play, SkipBack, SkipForward, Volume2, Maximize, BookmarkPlus, ThumbsUp } from 'lucide-react';

interface VideoPlayerProps {
  title: string;
}

export const VideoPlayer = ({ title }: VideoPlayerProps) => {
  return (
    <div>
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden group mb-6 border border-[#1b251e]">
        {/* Play Icon Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center bg-black/40 hover:bg-white/10 hover:border-white transition-all hover:scale-105">
            <Play className="w-6 h-6 text-white ml-1 fill-white" />
          </button>
        </div>
        
        {/* Title Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-24">
          <span className="text-zinc-300 font-medium">{title}</span>
        </div>

        {/* Video Controls (Bottom) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          
          {/* Progress Bar */}
          <div className="flex items-center gap-2 mb-3">
            <div className="h-1.5 flex-1 bg-white/20 rounded-full cursor-pointer relative">
              <div className="absolute left-0 top-0 bottom-0 w-[30%] bg-emerald-500 rounded-full" />
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-4">
              <button className="hover:text-emerald-400 transition-colors"><SkipBack size={18} /></button>
              <button className="hover:text-emerald-400 transition-colors"><Play size={20} className="fill-current" /></button>
              <button className="hover:text-emerald-400 transition-colors"><SkipForward size={18} /></button>
              <span className="text-sm font-medium ml-2">6:42 / 20:00</span>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="hover:text-emerald-400 transition-colors"><Volume2 size={18} /></button>
              <button className="hover:text-emerald-400 transition-colors"><Maximize size={18} /></button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-between">
        <h1 className="text-2xl font-bold text-white mb-1">{title}</h1>
        <div className="flex items-center gap-3">
          <button className="text-zinc-400 hover:text-white transition-colors">
            <BookmarkPlus size={20} />
          </button>
          <button className="text-zinc-400 hover:text-white transition-colors">
            <ThumbsUp size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
