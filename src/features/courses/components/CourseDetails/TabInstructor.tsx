import { Star, Users, BookOpen } from 'lucide-react';
import type { CourseDetail } from '../../types';

interface TabInstructorProps {
  course: CourseDetail;
}

export const TabInstructor = ({ course }: TabInstructorProps) => {
  const { instructorDetails } = course;

  return (
    <div className="animate-in fade-in duration-300">
      <div className="bg-[#121814] border border-[#1b251e] rounded-2xl p-8">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-6">
          <img 
            src={instructorDetails.avatarUrl} 
            alt={instructorDetails.name} 
            className="w-24 h-24 rounded-full object-cover border-2 border-[#1b251e]"
          />
          <div>
            <h3 className="text-2xl font-bold text-white">{instructorDetails.name}</h3>
            <p className="text-emerald-500 mb-3">{instructorDetails.title}</p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-300">
              <div className="flex items-center gap-1.5">
                <Star size={16} className="text-[#f59e0b] fill-[#f59e0b]" />
                <span className="font-medium">{instructorDetails.rating}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users size={16} className="text-zinc-400" />
                <span>{instructorDetails.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BookOpen size={16} className="text-zinc-400" />
                <span>{instructorDetails.courses} courses</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-zinc-400 text-sm md:text-base leading-relaxed">
          {instructorDetails.bio}
        </div>
      </div>
    </div>
  );
};
