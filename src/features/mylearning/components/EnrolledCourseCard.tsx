import { Star, Users, Clock, PlayCircle } from 'lucide-react';
import type { EnrolledCourse } from '../types';
import { cn } from '@/utils/cn';

interface EnrolledCourseCardProps {
  course: EnrolledCourse;
}

export const EnrolledCourseCard = ({ course }: EnrolledCourseCardProps) => {
  return (
    <div className="bg-surface border border-borderDim rounded-xl overflow-hidden group hover:border-borderDim transition-colors cursor-pointer flex flex-col h-full">
      
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden border-b border-borderDim">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-emerald-500 text-white rounded-full p-3 shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
            <PlayCircle size={24} className="fill-white text-emerald-500" />
          </div>
        </div>
        
        {/* Status Tag */}
        <div className="absolute top-3 right-3">
          <span className={cn("text-[10px] px-2.5 py-1 rounded-full font-bold", course.tagColor)}>
            {course.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-wider text-textMuted mb-2">
          <span>Development</span>
        </div>
        
        <h3 className="font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors line-clamp-2">
          {course.title}
        </h3>
        
        <p className="text-sm text-textMuted mb-4">{course.instructor}</p>
        
        <div className="flex items-center gap-3 text-xs text-textMuted mb-4">
          <div className="flex items-center gap-1">
            <Star size={14} className="fill-orange-400 text-orange-400" />
            <span className="text-white font-medium">{course.rating}</span>
            <span>({course.reviews.toLocaleString()})</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{course.students.toLocaleString()}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 text-xs text-textMuted mb-6">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <PlayCircle size={14} />
            <span>{course.lessons} lessons</span>
          </div>
        </div>

        {/* Progress Section */}
        <div className="mt-auto pt-4 border-t border-borderDim">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium text-textMuted">{course.progress}% complete</span>
          </div>
          <div className="h-1.5 w-full bg-borderDim rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 rounded-full" 
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};
