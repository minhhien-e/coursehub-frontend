import { useEffect, useState } from 'react';
import { WelcomeHeader } from '@/features/dashboard/components/WelcomeHeader';
import { StatsOverview } from '@/features/dashboard/components/StatsOverview';
import { ContinueLearningList } from '@/features/dashboard/components/ContinueLearningList';
import { StudyHoursChart } from '@/features/dashboard/components/StudyHoursChart';
import { RecommendedCourses } from '@/features/dashboard/components/RecommendedCourses';
import { UpcomingDeadlines } from '@/features/dashboard/components/UpcomingDeadlines';
import { RecentAchievements } from '@/features/dashboard/components/RecentAchievements';
import { dashboardService, DashboardData } from '@/features/dashboard/api/dashboard.service';

export const Dashboard = () => {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    dashboardService.getDashboardData().then(setData).catch(console.error);
  }, []);

  if (!data) return <div className="p-8 text-center text-textMuted">Loading dashboard...</div>;

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto animate-in fade-in duration-500">
      
      <WelcomeHeader />
      <StatsOverview />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (Main Content) */}
        <div className="lg:col-span-2 flex flex-col">
          <ContinueLearningList courses={data.continueLearning} />
          <StudyHoursChart />
          <RecommendedCourses courses={data.recommendedCourses} />
        </div>

        {/* Right Column (Sidebar) */}
        <div className="flex flex-col">
          <UpcomingDeadlines deadlines={data.deadlines} />
          <RecentAchievements achievements={data.recentAchievements} />
        </div>
      </div>
      
    </div>
  );
};
