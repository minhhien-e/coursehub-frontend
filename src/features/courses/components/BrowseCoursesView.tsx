import { CourseFilters } from './CourseFilters';
import { CourseCard } from './CourseCard';
import { mockCourses } from '../data/mockData';

export const BrowseCoursesView = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Browse Courses</h1>
        <p className="text-zinc-400">
          {mockCourses.length} courses available across 8 categories
        </p>
      </div>

      {/* Filters Toolbar */}
      <CourseFilters />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      
    </div>
  );
};
