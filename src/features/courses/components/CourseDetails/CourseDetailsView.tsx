import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchCourseById } from '../../store/coursesSlice';
import { ChevronRight, Star, Users, Globe, Heart, Share2, PlayCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CourseTabs } from './CourseTabs';

export const CourseDetailsView = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { currentCourse: course, isCourseLoading, error } = useAppSelector((state) => state.courses);

  useEffect(() => {
    if (id) {
      dispatch(fetchCourseById(id));
    }
  }, [dispatch, id]);

  if (isCourseLoading || !course) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader2 className="w-10 h-10 text-emerald-500 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <p className="text-red-500">{error}</p>
        <Link to="/courses">
          <Button variant="outline">Back to Courses</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-textMuted mb-6">
        <Link to="/courses" className="hover:text-emerald-500 transition-colors">Courses</Link>
        <ChevronRight size={14} />
        <span className="text-textMain">{course.title}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Column: Hero & Content */}
        <div className="flex-1 min-w-0">
          
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            {course.title}
          </h1>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-surfaceHighlight border border-borderDim mb-6 group">
            <img 
              src={course.imageUrl} 
              alt={course.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Find first preview lesson to link to */}
            {(() => {
              const previewLesson = course.modules.flatMap(m => m.lessons).find(l => l.isPreview);
              if (!previewLesson) return null;
              
              return (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to={`/courses/${course.id}/learn?lessonId=${previewLesson.id}`}>
                    <Button className="rounded-full px-6 py-6 shadow-lg shadow-black/50 hover:scale-105 transition-transform">
                      <PlayCircle className="w-6 h-6 mr-2" />
                      <span className="font-semibold text-lg">Preview Course</span>
                    </Button>
                  </Link>
                </div>
              );
            })()}
          </div>

          {/* Course Meta */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-10 text-sm">
            <div className="flex gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 font-medium">
                {course.level}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-zinc-800 text-textMuted border border-borderDim font-medium">
                {course.category}
              </span>
            </div>
            
            <div className="flex items-center gap-1.5 text-textMuted">
              <Star size={16} className="text-[#f59e0b] fill-[#f59e0b]" />
              <span className="font-semibold text-[#f59e0b]">{course.rating}</span>
              <span className="text-textMuted">({course.ratingCount.toLocaleString()} reviews)</span>
            </div>
            
            <div className="flex items-center gap-1.5 text-textMuted">
              <Users size={16} />
              <span>{course.students.toLocaleString()} students</span>
            </div>

            <div className="flex items-center gap-1.5 text-textMuted">
              <Globe size={16} />
              <span>English</span>
            </div>
          </div>

          {/* Tabs Section */}
          <CourseTabs course={course} />

        </div>

        {/* Right Column: Floating Action Card */}
        <div className="w-full lg:w-[380px] shrink-0">
          <div className="sticky top-24 bg-surfaceHighlight border border-borderDim rounded-2xl p-6 shadow-xl">
            
            {/* Price */}
            <div className="flex items-end gap-3 mb-6">
              <span className="text-3xl font-extrabold text-white">${course.price}</span>
              {course.originalPrice && (
                <span className="text-lg text-textMuted line-through mb-1">${course.originalPrice}</span>
              )}
            </div>

            {/* Progress Bar (if enrolled) */}
            {course.progress !== undefined && (
              <div className="mb-6 space-y-2">
                <div className="flex justify-between text-sm text-textMuted">
                  <span>{course.progress}% complete</span>
                </div>
                <div className="h-1.5 w-full bg-borderDim rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 rounded-full transition-all duration-1000"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Actions */}
            {course.progress !== undefined ? (
              <Link to={`/courses/${course.id}/learn`} className="block mb-4">
                <Button className="w-full h-12 text-base font-semibold">
                  Continue Learning
                </Button>
              </Link>
            ) : (
              <div className="space-y-3 mb-4">
                <Button className="w-full h-12 text-base font-semibold">
                  Enroll Now
                </Button>
                <Button variant="outline" className="w-full h-12 text-base font-semibold border-[#253229] hover:bg-surfaceHighlight">
                  Add to Cart
                </Button>
              </div>
            )}
            
            <div className="flex gap-4 mb-8">
              <Button variant="outline" className="flex-1 h-12 border-[#253229] hover:bg-surfaceHighlight">
                <Heart size={20} className="text-textMuted" />
              </Button>
              <Button variant="outline" className="flex-1 h-12 border-[#253229] hover:bg-surfaceHighlight">
                <Share2 size={20} className="text-textMuted" />
              </Button>
            </div>

            {/* Included Features */}
            <div>
              <h3 className="font-semibold text-white mb-4">This course includes:</h3>
              <ul className="space-y-3">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-textMuted">
                    {/* Choose an icon based on text - simplified for mock */}
                    {feature.includes('video') ? <PlayCircle size={16} /> : 
                     <ChevronRight size={16} />}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
};
