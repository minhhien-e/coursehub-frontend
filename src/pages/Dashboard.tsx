import { WelcomeHeader } from '@/features/dashboard/components/WelcomeHeader';
import { StatsOverview } from '@/features/dashboard/components/StatsOverview';
import { ContinueLearningList } from '@/features/dashboard/components/ContinueLearningList';
import { StudyHoursChart } from '@/features/dashboard/components/StudyHoursChart';
import { RecommendedCourses } from '@/features/dashboard/components/RecommendedCourses';
import { UpcomingDeadlines } from '@/features/dashboard/components/UpcomingDeadlines';
import { RecentAchievements } from '@/features/dashboard/components/RecentAchievements';

export const Dashboard = () => {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto animate-in fade-in duration-500">
      
      <WelcomeHeader />
      <StatsOverview />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (Main Content) */}
        <div className="lg:col-span-2 flex flex-col">
          <ContinueLearningList />
          <StudyHoursChart />
          <RecommendedCourses />
        </div>

        {/* Right Column (Sidebar) */}
        <div className="flex flex-col">
          <UpcomingDeadlines />
          <RecentAchievements />
        </div>
      </div>
      
    </div>
  );
};
