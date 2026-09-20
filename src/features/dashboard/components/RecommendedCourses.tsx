import { ArrowRight, Star, Users, Clock } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Digital Marketing & Growth Strategy',
    instructor: 'James Walker',
    rating: 4.8,
    students: 21300,
    duration: '23h 20m',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 2,
    title: 'Full-Stack TypeScript: Next.js, tRPC & Prisma',
    instructor: 'Dr. Sarah Mitchell',
    rating: 4.9,
    students: 9800,
    duration: '45h 10m',
    price: 94.99,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60'
  }
];

export const RecommendedCourses = () => {
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
