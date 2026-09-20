import { MapPin, Calendar, Globe, MessageCircle, Briefcase, Code, Edit2 } from 'lucide-react';

export const ProfileHeader = () => {
  return (
    <div className="bg-surfaceHighlight border border-borderDim rounded-xl p-8 mb-6 relative">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        
        {/* Avatar */}
        <div className="w-32 h-32 rounded-full overflow-hidden shrink-0 border-4 border-[#0a0e0c]">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60" 
            alt="Alex Johnson" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Alex Johnson</h2>
              <p className="text-textMuted font-medium">Full-Stack Developer & Lifelong Learner</p>
            </div>
            
            <button className="flex items-center gap-2 text-sm font-medium text-white bg-borderDim hover:bg-[#233027] px-4 py-2 rounded-lg transition-colors shrink-0">
              <Edit2 size={16} />
              Edit Profile
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-textMuted mb-4">
            <span className="flex items-center gap-1.5">
              <MapPin size={16} /> San Francisco, CA
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={16} /> Joined Sep 2025
            </span>
            <span className="bg-fuchsia-500/20 text-fuchsia-400 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">
              Pro Plan
            </span>
          </div>

          <p className="text-sm text-textMuted leading-relaxed mb-6 max-w-2xl">
            Passionate about web development and design. Currently learning advanced React patterns and system design.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="w-8 h-8 rounded bg-borderDim flex items-center justify-center text-textMuted hover:text-emerald-500 hover:bg-emerald-500/10 transition-colors">
              <Globe size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded bg-borderDim flex items-center justify-center text-textMuted hover:text-emerald-500 hover:bg-emerald-500/10 transition-colors">
              <MessageCircle size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded bg-borderDim flex items-center justify-center text-textMuted hover:text-emerald-500 hover:bg-emerald-500/10 transition-colors">
              <Briefcase size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded bg-borderDim flex items-center justify-center text-textMuted hover:text-emerald-500 hover:bg-emerald-500/10 transition-colors">
              <Code size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
