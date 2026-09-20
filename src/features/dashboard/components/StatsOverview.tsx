import { BookOpen, Clock, Award, Flame } from 'lucide-react';

const StatCard = ({ title, value, subtext, icon: Icon, colorClass, bgClass }: any) => (
  <div className="bg-surface rounded-xl p-5 border border-borderDim hover:border-borderDim transition-colors">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-textMuted text-sm font-medium mb-1">{title}</p>
        <h3 className="text-3xl font-extrabold text-white mb-2">{value}</h3>
        <p className="text-xs font-medium text-emerald-500">{subtext}</p>
      </div>
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${bgClass} ${colorClass}`}>
        <Icon size={20} />
      </div>
    </div>
  </div>
);

export const StatsOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatCard 
        title="Courses Enrolled" 
        value="6" 
        subtext="+2 this month" 
        icon={BookOpen} 
        colorClass="text-emerald-500"
        bgClass="bg-emerald-500/10 border-emerald-500/20"
      />
      <StatCard 
        title="Hours Learned" 
        value="142" 
        subtext="+14h this week" 
        icon={Clock} 
        colorClass="text-emerald-500"
        bgClass="bg-emerald-500/10 border-emerald-500/20"
      />
      <StatCard 
        title="Certificates" 
        value="3" 
        subtext="+1 this month" 
        icon={Award} 
        colorClass="text-emerald-500"
        bgClass="bg-emerald-500/10 border-emerald-500/20"
      />
      <StatCard 
        title="Day Streak" 
        value="14" 
        subtext="Personal best" 
        icon={Flame} 
        colorClass="text-emerald-500"
        bgClass="bg-emerald-500/10 border-emerald-500/20"
      />
    </div>
  );
};
