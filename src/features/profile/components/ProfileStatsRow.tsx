import { Book, Award, Trophy, Flame } from 'lucide-react';

export const ProfileStatsRow = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      
      <div className="bg-[#121814] border border-[#1b251e] rounded-xl p-5 flex flex-col items-center justify-center text-center">
        <Book size={24} className="text-emerald-500 mb-2" />
        <h3 className="text-2xl font-extrabold text-white mb-1">3</h3>
        <p className="text-xs font-medium text-zinc-500">Courses Enrolled</p>
      </div>

      <div className="bg-[#121814] border border-[#1b251e] rounded-xl p-5 flex flex-col items-center justify-center text-center">
        <Award size={24} className="text-emerald-500 mb-2" />
        <h3 className="text-2xl font-extrabold text-white mb-1">3</h3>
        <p className="text-xs font-medium text-zinc-500">Certificates</p>
      </div>

      <div className="bg-[#121814] border border-[#1b251e] rounded-xl p-5 flex flex-col items-center justify-center text-center">
        <Trophy size={24} className="text-emerald-500 mb-2" />
        <h3 className="text-2xl font-extrabold text-white mb-1">7</h3>
        <p className="text-xs font-medium text-zinc-500">Badges</p>
      </div>

      <div className="bg-[#121814] border border-[#1b251e] rounded-xl p-5 flex flex-col items-center justify-center text-center">
        <Flame size={24} className="text-orange-500 mb-2 fill-orange-500/20" />
        <h3 className="text-2xl font-extrabold text-white mb-1">14</h3>
        <p className="text-xs font-medium text-zinc-500">Day Streak</p>
      </div>

    </div>
  );
};
