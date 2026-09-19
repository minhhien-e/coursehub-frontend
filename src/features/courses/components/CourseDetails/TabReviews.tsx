import { Star } from 'lucide-react';
import type { CourseDetail } from '../../types';

interface TabReviewsProps {
  course: CourseDetail;
}

export const TabReviews = ({ course }: TabReviewsProps) => {
  return (
    <div className="animate-in fade-in duration-300">
      {/* Big Rating Summary */}
      <div className="mb-10">
        <h2 className="text-4xl font-extrabold text-white mb-2">{course.rating.toFixed(1)}</h2>
        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star 
              key={star} 
              size={20} 
              className={star <= Math.round(course.rating) ? "fill-[#f59e0b] text-[#f59e0b]" : "fill-zinc-700 text-zinc-700"} 
            />
          ))}
        </div>
        <p className="text-zinc-400 text-sm">{course.ratingCount.toLocaleString()} reviews</p>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {course.reviews.map((review) => (
          <div key={review.id} className="bg-[#121814] border border-[#1b251e] rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <img 
                  src={review.userAvatar} 
                  alt={review.userName} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-medium">{review.userName}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          size={12} 
                          className={star <= review.rating ? "fill-[#f59e0b] text-[#f59e0b]" : "fill-zinc-700 text-zinc-700"} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-zinc-500">{review.date}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-zinc-300 text-sm leading-relaxed mb-4">
              {review.comment}
            </p>
            
            <p className="text-xs text-zinc-500">
              {review.helpfulCount} people found this helpful
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
