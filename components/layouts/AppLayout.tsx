'use client';

import { ReactNode } from 'react';
import { Navigation } from '@/components/navigation/navigation';
import { TabName } from '@/lib/types';

interface AppLayoutProps {
  children: ReactNode;
  activeTab: TabName;
}

export function AppLayout({ children, activeTab }: AppLayoutProps) {
  return (
    <div
      data-testid="app-layout"
      className="w-full max-w-screen max-h-screen overflow-x-hidden overflow-y-auto h-full"
    >
      {/* Main content */}
      <div className="w-full flex flex-col items-center">{children}</div>

      {/* Bottom navigation */}
      <Navigation activeTab={activeTab} className="absolute bottom-10 z-20" />
    </div>
  );
}
