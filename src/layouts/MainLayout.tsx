import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { cn } from '@/utils/cn';

export const MainLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background text-textMain flex w-full font-sans">
      <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />
      <div className={cn(
        "flex-1 flex flex-col min-w-0 w-full transition-[padding] duration-300",
        isSidebarCollapsed ? "pl-20" : "pl-64"
      )}>
        <Header />
        <main className="flex-1 overflow-y-scroll bg-background">
          <div className="hidden max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-in fade-in duration-500" aria-hidden="true"></div>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
