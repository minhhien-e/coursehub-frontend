import { CourseFilters } from './CourseFilters';
import { CourseCard } from './CourseCard';
import { FilterDrawer } from './FilterDrawer';
import { useCourses } from '../hooks/useCourses';
import { Loader2 } from 'lucide-react';

export const BrowseCoursesView = () => {
  const { courses, totalCourses, isLoading, error } = useCourses();

  return (
    <>
      <FilterDrawer />
      <div className="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Browse Courses</h1>
        <p className="text-zinc-400">
          {totalCourses} courses available
        </p>
      </div>

      {/* Filters Toolbar */}
      <CourseFilters />

      {/* Grid */}
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
        </div>
      ) : error ? (
        <div className="text-red-500 text-center py-20">{error}</div>
      ) : courses.length === 0 ? (
        <div className="text-zinc-500 text-center py-20">No courses found matching your criteria.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
      
    </div>
    </>
  );
};
