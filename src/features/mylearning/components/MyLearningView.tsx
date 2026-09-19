import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchEnrolledCourses, setActiveTab } from '../store/mylearningSlice';
import { EnrolledCourseCard } from './EnrolledCourseCard';
import { Loader2 } from 'lucide-react';
import { cn } from '@/utils/cn';

export const MyLearningView = () => {
  const dispatch = useAppDispatch();
  const { courses, activeTab, isLoading, error } = useAppSelector((state) => state.mylearning);

  useEffect(() => {
    dispatch(fetchEnrolledCourses());
  }, [dispatch]);

  const tabs = ['All', 'In Progress', 'Completed'] as const;

  const inProgressCount = courses.filter(c => c.status === 'In Progress').length;
  const completedCount = courses.filter(c => c.status === 'Completed').length;
  
  const getTabLabel = (tab: string) => {
    if (tab === 'All') return `All (${courses.length})`;
    if (tab === 'In Progress') return `In Progress (${inProgressCount})`;
    if (tab === 'Completed') return `Completed (${completedCount})`;
    return tab;
  };

  const filteredCourses = courses.filter(c => {
    if (activeTab === 'All') return true;
    return c.status === activeTab;
  });

  if (isLoading && courses.length === 0) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <Loader2 className="w-10 h-10 text-emerald-500 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-white mb-2">My Learning</h1>
        <p className="text-zinc-400">Track your enrolled courses and pick up where you left off.</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-8 bg-[#121814] p-1.5 rounded-lg border border-[#1b251e] w-fit">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => dispatch(setActiveTab(tab))}
            className={cn(
              "px-4 py-1.5 rounded-md text-sm font-medium transition-colors",
              activeTab === tab
                ? "bg-zinc-800 text-white shadow-sm"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
            )}
          >
            {getTabLabel(tab)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCourses.map(course => (
          <EnrolledCourseCard key={course.id} course={course} />
        ))}
      </div>
      
    </div>
  );
};
