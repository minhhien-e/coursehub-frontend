import { ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';

import type { ContinueLearningCourse } from '../types';

export const ContinueLearningList = ({ courses }: { courses: ContinueLearningCourse[] }) => {
  return (
    <div className="bg-surface border border-borderDim rounded-xl overflow-hidden mb-6">
      
      <div className="p-5 border-b border-borderDim flex justify-between items-center">
        <h3 className="text-lg font-bold text-white">Continue Learning</h3>
        <button className="text-sm font-medium text-textMuted hover:text-textMain transition-colors flex items-center gap-1">
          View all <ArrowRight size={14} />
        </button>
      </div>

      <div className="divide-y divide-[#1b251e]">
        {courses.map(course => (
          <div key={course.id} className="p-5 flex gap-5 hover:bg-surfaceHighlight transition-colors group cursor-pointer">
            <div className="w-32 h-20 rounded-lg overflow-hidden shrink-0 border border-borderDim">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            
            <div className="flex-1 min-w-0 py-0.5">
              <div className="flex items-start justify-between gap-4 mb-1">
                <h4 className="font-semibold text-white truncate">{course.title}</h4>
                <span className={cn("text-[10px] px-2 py-0.5 rounded-full font-medium border shrink-0", course.tagColor)}>
                  {course.tag}
                </span>
              </div>
              <p className="text-sm text-textMuted mb-3">{course.instructor}</p>
              
              <div className="flex items-center gap-3">
                <div className="flex-1 h-1.5 bg-borderDim rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 rounded-full" 
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-textMuted shrink-0 w-24">
                  {course.progress}% complete
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};
