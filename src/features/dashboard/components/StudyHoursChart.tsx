import { MoreHorizontal } from 'lucide-react';

const data = [
  { day: 'Mon', hours: 2.5 },
  { day: 'Tue', hours: 3.8 },
  { day: 'Wed', hours: 1.5 },
  { day: 'Thu', hours: 4.2 },
  { day: 'Fri', hours: 2.8 },
  { day: 'Sat', hours: 5.5 },
  { day: 'Sun', hours: 3.0 },
];

export const StudyHoursChart = () => {
  const maxHours = 8; // fixed scale for UI matching

  return (
    <div className="bg-[#0a0e0c] border border-[#1b251e] rounded-xl p-5 mb-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-white">Weekly Study Hours</h3>
        <button className="text-zinc-500 hover:text-white transition-colors">
          <MoreHorizontal size={20} />
        </button>
      </div>
      
      {/* Chart Area */}
      <div className="h-48 flex items-end gap-2 relative mt-4">
        
        {/* Y-axis lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {[8, 6, 4, 2, 0].map(val => (
            <div key={val} className="w-full flex items-center h-0 border-b border-[#1b251e] border-dashed">
              <span className="absolute -left-6 text-[10px] text-zinc-600 -translate-y-1/2">{val}h</span>
            </div>
          ))}
        </div>

        {/* Bars */}
        <div className="w-full h-full flex justify-between items-end pl-2 relative z-10">
          {data.map(item => {
            const heightPercent = (item.hours / maxHours) * 100;
            return (
              <div key={item.day} className="flex flex-col items-center w-full group relative">
                
                {/* Tooltip on hover (optional) */}
                <div className="absolute -top-8 bg-zinc-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {item.hours}h
                </div>

                <div 
                  className="w-10 bg-zinc-800 group-hover:bg-emerald-500 rounded-t-sm transition-colors duration-300"
                  style={{ height: `${heightPercent}%` }}
                />
                
                <span className="text-[10px] text-zinc-500 mt-3 absolute -bottom-6">
                  {item.day}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Spacer for x-axis labels */}
      <div className="h-6" />
    </div>
  );
};
