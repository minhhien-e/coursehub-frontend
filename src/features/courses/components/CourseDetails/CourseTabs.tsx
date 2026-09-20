import { useState } from 'react';
import { cn } from '@/utils/cn';
import type { CourseDetail } from '../../types';
import { TabOverview } from './TabOverview';
import { TabCurriculum } from './TabCurriculum';
import { TabReviews } from './TabReviews';
import { TabInstructor } from './TabInstructor';

interface CourseTabsProps {
  course: CourseDetail;
}

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'curriculum', label: 'Curriculum' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'instructor', label: 'Instructor' }
];

export const CourseTabs = ({ course }: CourseTabsProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="mt-8">
      {/* Tab Navigation */}
      <div className="flex space-x-1 p-1 bg-surfaceHighlight border border-borderDim rounded-xl w-fit mb-8">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
              activeTab === tab.id
                ? "bg-surfaceHighlight text-white shadow-sm border border-[#253229]"
                : "text-textMuted hover:text-textMain hover:bg-surfaceHighlight/50 border border-transparent"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === 'overview' && <TabOverview course={course} />}
        {activeTab === 'curriculum' && <TabCurriculum course={course} />}
        {activeTab === 'reviews' && <TabReviews course={course} />}
        {activeTab === 'instructor' && <TabInstructor course={course} />}
      </div>
    </div>
  );
};
