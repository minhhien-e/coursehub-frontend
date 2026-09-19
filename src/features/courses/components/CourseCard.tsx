import { Star, Users, Clock, PlayCircle } from 'lucide-react';
import type { Course } from '../types';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link to={`/courses/${course.id}`} className="block h-full group">
      <div className="bg-[#121814] rounded-2xl overflow-hidden border border-[#1b251e] shadow-sm hover:border-emerald-500/50 hover:shadow-emerald-900/20 transition-all duration-300 cursor-pointer flex flex-col h-full">
      
      {/* Thumbnail */}
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={course.imageUrl} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {course.discountBadge && (
            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md">
              {course.discountBadge}
            </span>
          )}
        </div>
        
        <div className="absolute top-3 right-3 flex gap-2">
          <span className="bg-pink-500 text-white text-[10px] font-bold px-2 py-1 rounded-md">
            {course.level}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-2">
          <span className="text-[10px] font-medium px-2 py-1 border border-zinc-700 rounded-md text-zinc-300">
            {course.category}
          </span>
        </div>
        
        <h3 className="font-bold text-zinc-100 text-[15px] leading-snug mb-1 line-clamp-2 group-hover:text-emerald-400 transition-colors">
          {course.title}
        </h3>
        
        <p className="text-zinc-400 text-xs mb-3">
          {course.instructor}
        </p>

        {/* Stats */}
        <div className="space-y-2 mt-auto mb-4">
          <div className="flex items-center text-xs text-zinc-400 gap-3">
            <div className="flex items-center text-yellow-500 gap-1">
              <Star size={12} className="fill-current" />
              <span className="font-semibold">{course.rating}</span>
            </div>
            <span>({course.ratingCount.toLocaleString()})</span>
            
            <div className="flex items-center gap-1 ml-1">
              <Users size={12} />
              <span>{course.students.toLocaleString()}</span>
            </div>
          </div>
          
          <div className="flex items-center text-xs text-zinc-400 gap-3">
            <div className="flex items-center gap-1">
              <Clock size={12} />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <PlayCircle size={12} />
              <span>{course.lessons} lessons</span>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-end gap-2 mt-auto pt-4 border-t border-[#1b251e]">
          <span className="text-lg font-bold text-white">${course.price.toFixed(2)}</span>
          {course.originalPrice && (
            <span className="text-sm text-zinc-500 line-through mb-0.5">
              ${course.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
      </div>
    </Link>
  );
};
