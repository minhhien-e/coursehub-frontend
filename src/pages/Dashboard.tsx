import React from 'react';
import { BookOpen, Clock, Award, Zap, ChevronRight, FileCode, CheckCircle, Search } from 'lucide-react';

const StatCard = ({ title, value, subtext, icon: Icon, color }: any) => (
  <div className="bg-surface rounded-xl p-5 border border-borderDim">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-textMuted text-sm font-medium">{title}</p>
        <h3 className="text-2xl font-bold mt-1 text-white">{value}</h3>
        <p className={`text-xs mt-1 ${color}`}>{subtext}</p>
      </div>
      <div className="w-10 h-10 rounded-lg bg-surfaceHighlight flex items-center justify-center">
        <Icon size={20} className={color} />
      </div>
    </div>
  </div>
);

export const Dashboard = () => {
  return (
    <div className="space-y-6 pb-12">
      
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Courses Enrolled" value="6" subtext="+2 this month" icon={BookOpen} color="text-primary" />
        <StatCard title="Hours Learned" value="142" subtext="+14h this week" icon={Clock} color="text-primary" />
        <StatCard title="Certificates" value="3" subtext="+1 this month" icon={Award} color="text-primary" />
        <StatCard title="Day Streak" value="14" subtext="Personal best" icon={Zap} color="text-primary" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Continue Learning */}
          <div className="bg-surface rounded-xl p-6 border border-borderDim">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-white">Continue Learning</h3>
              <button className="text-sm text-textMuted hover:text-white flex items-center">
                View all <ChevronRight size={16} />
              </button>
            </div>
            
            <div className="space-y-4">
              {/* Course Item 1 */}
              <div className="flex gap-4 p-4 rounded-lg bg-background border border-borderDim">
                <div className="w-24 h-16 bg-gray-800 rounded flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-white">Advanced React Patterns & Performance</h4>
                    <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">Advanced</span>
                  </div>
                  <p className="text-sm text-textMuted mt-1">Dr. Sarah Mitchell</p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[65%] rounded-full"></div>
                    </div>
                    <span className="text-xs text-textMuted w-24">65% complete</span>
                  </div>
                </div>
              </div>

               {/* Course Item 2 */}
               <div className="flex gap-4 p-4 rounded-lg bg-background border border-borderDim">
                <div className="w-24 h-16 bg-gray-800 rounded flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-white">UI/UX Design Masterclass</h4>
                    <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Intermediate</span>
                  </div>
                  <p className="text-sm text-textMuted mt-1">Marcus Chen</p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[35%] rounded-full"></div>
                    </div>
                    <span className="text-xs text-textMuted w-24">35% complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          
          {/* Upcoming Deadlines */}
          <div className="bg-surface rounded-xl p-6 border border-borderDim">
            <h3 className="text-lg font-bold text-white mb-4">Upcoming Deadlines</h3>
            <div className="space-y-3">
              {[
                { title: 'Build a Compound Component', course: 'Advanced React Patterns', date: 'Jun 5', type: 'assignment' },
                { title: 'Module 3 Assessment', course: 'Advanced React Patterns', date: 'Jun 8', type: 'quiz' },
                { title: 'Design System Project', course: 'UI/UX Design Masterclass', date: 'Jun 12', type: 'assignment' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start p-3 bg-background rounded-lg border border-borderDim">
                  <div className="mt-1">
                    <FileCode size={18} className="text-textMuted" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-white">{item.title}</h4>
                    <p className="text-xs text-textMuted mt-1">{item.course}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded uppercase font-semibold">Due close</span>
                      <span className="text-xs text-textMuted">{item.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
