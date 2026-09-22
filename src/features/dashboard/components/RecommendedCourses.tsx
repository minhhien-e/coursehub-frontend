import { ArrowRight, Star, Users, Clock } from 'lucide-react';

import type { RecommendedCourse } from '../types';

export const RecommendedCourses = ({ courses }: { courses: RecommendedCourse[] }) => {
  return (
    <div className="bg-surface border border-borderDim rounded-xl overflow-hidden">
      
      <div className="p-5 border-b border-borderDim flex justify-between items-center">
        <h3 className="text-lg font-bold text-white">Recommended for You</h3>
        <button className="text-sm font-medium text-textMuted hover:text-textMain transition-colors flex items-center gap-1">
          Browse all <ArrowRight size={14} />
        </button>
      </div>

      <div className="divide-y divide-[#1b251e]">
        {courses.map(course => (
          <div key={course.id} className="p-5 flex gap-4 hover:bg-surfaceHighlight transition-colors group cursor-pointer">
            <div className="w-24 h-16 rounded-lg overflow-hidden shrink-0 border border-borderDim">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <h4 className="font-semibold text-white truncate mb-0.5">{course.title}</h4>
              <p className="text-xs text-textMuted mb-2">{course.instructor}</p>
              
              <div className="flex items-center gap-3 text-[11px] text-textMuted font-medium">
                <span className="flex items-center gap-1 text-orange-400">
                  <Star size={12} className="fill-orange-400" />
                  {course.rating}
                </span>
                <span className="flex items-center gap-1">
                  <Users size={12} />
                  {course.students.toLocaleString()}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {course.duration}
                </span>
              </div>
            </div>
            
            <div className="flex flex-col justify-center items-end shrink-0 pl-2">
              <span className="font-bold text-white">${course.price}</span>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};
