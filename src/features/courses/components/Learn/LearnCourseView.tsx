import { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchCourseById } from '../../store/coursesSlice';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';
import { LessonSidebar } from './LessonSidebar';
import { LessonTabs } from './LessonTabs';

export const LearnCourseView = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { currentCourse: course, isCourseLoading, error } = useAppSelector((state) => state.courses);

  const initialLessonId = searchParams.get('lessonId');
  const [activeLessonId, setActiveLessonId] = useState<string | null>(initialLessonId);

  useEffect(() => {
    if (id) {
      dispatch(fetchCourseById(id));
    }
  }, [dispatch, id]);

  // If no initial lesson is provided, default to the first lesson when course loads
  useEffect(() => {
    if (course && !activeLessonId && course.modules.length > 0 && course.modules[0].lessons.length > 0) {
      setActiveLessonId(course.modules[0].lessons[0].id);
    }
  }, [course, activeLessonId]);

  // Find the active lesson and module
  const activeLessonData = useMemo(() => {
    if (!course || !activeLessonId) return null;
    
    for (const module of course.modules) {
      const lesson = module.lessons.find(l => l.id === activeLessonId);
      if (lesson) {
        return { module, lesson };
      }
    }
    return null;
  }, [course, activeLessonId]);

  if (isCourseLoading || !course) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#09090b]">
        <Loader2 className="w-10 h-10 text-emerald-500 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#09090b] space-y-4">
        <p className="text-red-500">{error}</p>
        <Link to={`/courses/${id}`} className="text-emerald-500 hover:underline">Back to Course</Link>
      </div>
    );
  }

  const handleSelectLesson = (lessonId: string) => {
    setActiveLessonId(lessonId);
    setSearchParams({ lessonId });
  };

  return (
    <div className="flex flex-col h-screen bg-[#09090b] text-zinc-300">
      
      {/* Top Header */}
      <header className="h-14 flex items-center justify-between px-4 border-b border-[#1b251e] bg-[#121814] shrink-0">
        <div className="flex items-center gap-4">
          <Link 
            to={`/courses/${id}`} 
            className="flex items-center gap-1.5 text-sm font-medium hover:text-white transition-colors"
          >
            <ChevronLeft size={16} />
            <span>Back to course</span>
          </Link>
          <div className="w-px h-4 bg-zinc-800" />
          <h1 className="text-sm font-semibold text-white hidden sm:block">{course.title}</h1>
        </div>
        
        {course.progress !== undefined && (
          <div className="flex items-center gap-4">
            <div className="w-32 h-1.5 bg-[#1b251e] rounded-full overflow-hidden hidden sm:block">
              <div 
                className="h-full bg-emerald-500 rounded-full"
                style={{ width: `${course.progress}%` }}
              />
            </div>
            <span className="text-sm text-zinc-400 font-medium">{course.progress}%</span>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Side: Video + Details */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          <div className="p-4 md:p-6 lg:p-8 max-w-5xl mx-auto w-full">
            
            {activeLessonData ? (
              <>
                <VideoPlayer title={activeLessonData.lesson.title} />
                
                <div className="mt-2 text-sm text-zinc-400 mb-8">
                  {activeLessonData.module.title} &middot; {activeLessonData.lesson.title}
                </div>

                <LessonTabs lesson={activeLessonData.lesson} />

                {/* Bottom Nav */}
                <div className="flex justify-between items-center py-6 mt-6 border-t border-[#1b251e]">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#253229] bg-[#121814] hover:bg-[#1a231d] transition-colors text-sm font-medium">
                    <ChevronLeft size={16} /> Previous
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black transition-colors text-sm font-medium">
                    Next <ChevronRight size={16} />
                  </button>
                </div>
              </>
            ) : (
              <div className="py-20 text-center text-zinc-500">
                Select a lesson from the sidebar to begin.
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Sidebar */}
        <div className="w-80 shrink-0 border-l border-[#1b251e] hidden md:block">
          <LessonSidebar 
            course={course} 
            activeLessonId={activeLessonId || ''} 
            onSelectLesson={handleSelectLesson} 
          />
        </div>
      </div>
    </div>
  );
};
