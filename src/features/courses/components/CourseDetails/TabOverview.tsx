import { CheckCircle2 } from 'lucide-react';
import type { CourseDetail } from '../../types';

interface TabOverviewProps {
  course: CourseDetail;
}

export const TabOverview = ({ course }: TabOverviewProps) => {
  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      {/* About */}
      <section>
        <h2 className="text-xl font-bold text-white mb-4">About This Course</h2>
        <p className="text-textMuted leading-relaxed text-sm md:text-base">
          {course.about}
        </p>
      </section>

      {/* What you'll learn */}
      <section>
        <h2 className="text-xl font-bold text-white mb-4">What You'll Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {course.whatYouWillLearn.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-textMuted text-sm md:text-base">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section>
        <h2 className="text-xl font-bold text-white mb-4">Requirements</h2>
        <ul className="list-disc list-inside space-y-2 text-textMuted text-sm md:text-base">
          {course.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </section>

      {/* Who is this for */}
      <section>
        <h2 className="text-xl font-bold text-white mb-4">Who This Course is For</h2>
        <div className="space-y-3">
          {course.whoIsThisFor.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 outline outline-1 outline-emerald-500/30" />
              <span className="text-textMuted text-sm md:text-base">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
