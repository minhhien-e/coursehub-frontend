import { ProfileHeader } from './ProfileHeader';
import { ProfileStatsRow } from './ProfileStatsRow';

export const ProfileView = () => {
  return (
    <div className="p-6 md:p-8 max-w-5xl mx-auto animate-in fade-in duration-500">
      
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-white">Profile</h1>
      </div>

      <ProfileHeader />
      <ProfileStatsRow />
      
    </div>
  );
};
