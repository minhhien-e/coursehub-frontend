export const WelcomeHeader = () => {
  return (
    <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
          Good morning, Alex!
        </h1>
        <p className="text-textMuted">
          You're on a 14-day streak. Keep the momentum going!
        </p>
      </div>
      <div className="flex items-center gap-4 text-sm font-medium">
        <span className="text-orange-500 flex items-center gap-1.5 bg-orange-500/10 px-3 py-1.5 rounded-lg border border-orange-500/20">
          🔥 14 day streak
        </span>
        <span className="text-textMuted">Level 12</span>
        <span className="text-textMuted">4250 XP</span>
      </div>
    </div>
  );
};
