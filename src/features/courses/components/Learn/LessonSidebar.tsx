import { CheckCircle2, PlayCircle, FileText } from 'lucide-react';
import type { CourseDetail } from '../../types';
import { cn } from '@/utils/cn';

interface LessonSidebarProps {
  course: CourseDetail;
  activeLessonId: string;
  onSelectLesson: (id: string) => void;
}

export const LessonSidebar = ({ course, activeLessonId, onSelectLesson }: LessonSidebarProps) => {
  return (
    <div className="h-full flex flex-col bg-[#0d120f] border-l border-borderDim">
      <div className="p-4 border-b border-borderDim">
        <h2 className="font-bold text-white mb-1">Course Content</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {course.modules.map((module) => (
          <div key={module.id} className="space-y-2">
            <h3 className="text-xs font-semibold text-textMuted uppercase tracking-wider mb-3">
              {module.title}
            </h3>
            
            <div className="space-y-1">
              {module.lessons.map((lesson) => {
                const isActive = lesson.id === activeLessonId;
                const isCompleted = lesson.isCompleted;

                return (
                  <button
                    key={lesson.id}
                    onClick={() => onSelectLesson(lesson.id)}
                    className={cn(
                      "w-full text-left px-3 py-2.5 rounded-lg flex items-start gap-3 transition-colors",
                      isActive 
                        ? "bg-emerald-500/10 text-emerald-400" 
                        : "hover:bg-surfaceHighlight text-textMuted"
                    )}
                  >
                    <div className="mt-0.5 shrink-0">
                      {isCompleted ? (
                        <CheckCircle2 size={16} className="text-emerald-500" />
                      ) : (
                        <PlayCircle size={16} className={isActive ? "text-emerald-400" : "text-textMuted"} />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <span className={cn(
                        "block text-sm font-medium line-clamp-2",
                        isActive ? "text-emerald-400" : (isCompleted ? "text-textMuted" : "text-textMuted")
                      )}>
                        {lesson.title}
                      </span>
                      
                      {lesson.resources && lesson.resources.length > 0 && (
                        <div className="flex items-center gap-1 mt-1 text-xs text-textMuted">
                          <FileText size={10} />
                          <span>{lesson.resources.length} resources</span>
                        </div>
                      )}
                    </div>

                    <span className="text-xs text-textMuted shrink-0 ml-2">
                      {lesson.duration}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
