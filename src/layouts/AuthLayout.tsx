import { Outlet, Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

export const AuthLayout = () => {
  return (
    <div className="min-h-screen flex w-full bg-[#0A0D0B] text-zinc-100">
      {/* Left Branding Panel (Hidden on Mobile) */}
      <div className="hidden lg:flex w-1/2 flex-col justify-center items-center bg-[#07130c] border-r border-[#102418] p-12">
        <Link to="/" className="flex flex-col items-center group mb-8">
          <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(16,185,129,0.2)] group-hover:scale-105 transition-transform">
            <GraduationCap className="w-8 h-8 text-[#07130c]" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">LMS Kit</h1>
        </Link>
        <p className="text-zinc-400 text-center max-w-sm mb-16 leading-relaxed">
          The all-in-one learning platform to master new skills, earn certificates, and advance your career.
        </p>

        <div className="grid grid-cols-3 gap-8 text-center border-t border-[#102418] pt-12">
          <div>
            <div className="text-2xl font-bold text-emerald-400 mb-1">342</div>
            <div className="text-xs text-zinc-500">Courses</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-400 mb-1">124K</div>
            <div className="text-xs text-zinc-500">Students</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-400 mb-1">98%</div>
            <div className="text-xs text-zinc-500">Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 sm:p-12 lg:p-24 overflow-y-auto">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
