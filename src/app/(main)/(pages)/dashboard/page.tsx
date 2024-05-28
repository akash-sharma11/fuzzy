import { ModeToggle } from '@/components/global/mode-toggle';
import React from 'react';

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-4 relative">
      <div className="sticky top-0 z-[10] flex justify-between items-center p-6 bg-background/50 backdrop-blur-lg border-b">
        <h1 className="text-4xl">Dashboard</h1>
        <ModeToggle />
      </div>
    </div>
  );
};

export default DashboardPage;
