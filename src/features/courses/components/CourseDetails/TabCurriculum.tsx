import { useState } from 'react';
import { ChevronDown, ChevronUp, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { CourseDetail } from '../../types';
import { cn } from '@/utils/cn';

interface TabCurriculumProps {
  course: CourseDetail;
}

export const TabCurriculum = ({ course }: TabCurriculumProps) => {
  const [openModules, setOpenModules] = useState<string[]>(
    course.modules.length > 0 ? [course.modules[0].id] : []
  );

  const toggleModule = (id: string) => {
    setOpenModules(prev => 
      prev.includes(id) ? prev.filter(mId => mId !== id) : [...prev, id]
    );
  };

  return (
    <div className="animate-in fade-in duration-300">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-xl font-bold text-white">Course Content</h2>
        <div className="text-zinc-400 text-sm">
          {course.modules.length} modules &middot; {course.lessons} lessons &middot; {course.duration}
        </div>
      </div>

      <div className="space-y-3">
        {course.modules.map((module) => {
          const isOpen = openModules.includes(module.id);

          return (
            <div 
              key={module.id} 
              className={cn(
                "border rounded-xl overflow-hidden transition-colors duration-200",
                isOpen ? "border-[#253229] bg-[#121814]" : "border-[#1b251e] bg-[#0d120f] hover:border-[#253229]"
              )}
            >
              <button
                className="w-full px-5 py-4 flex items-center justify-between text-left"
                onClick={() => toggleModule(module.id)}
              >
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold text-white">{module.title}</h3>
                  <span className="text-xs text-zinc-500 hidden sm:inline-block">
                    {module.lessons.length} lessons &middot; {module.duration}
                  </span>
                </div>
                <div className="text-zinc-500">
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-4 space-y-1">
                  {module.lessons.map((lesson) => (
                    <Link 
                      key={lesson.id}
                      to={`/courses/${course.id}/learn?lessonId=${lesson.id}`}
                      className="flex items-center justify-between py-3 px-2 rounded-lg hover:bg-[#1a231d] transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <PlayCircle size={18} className="text-emerald-500/70 group-hover:text-emerald-400 transition-colors" />
                        <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                          {lesson.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        {lesson.isPreview && (
                          <span className="text-xs font-medium text-white bg-white/10 px-2 py-0.5 rounded">
                            Preview
                          </span>
                        )}
                        <span className="text-xs text-zinc-500">{lesson.duration}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
