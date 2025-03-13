'use client';

import { ReactNode } from 'react';
import { Navigation } from '@/components/navigation/navigation';
import { TabName } from '@/lib/types';
import { PurpleLayout } from './purple-layout/purple-layout';
import { YellowLayout } from './yellow-layout';

interface AppLayoutProps {
  children: ReactNode;
  activeTab: TabName;
}

const pagesWithPurpleLayout = ['airdrop', 'invites', 'shack'];

export function AppLayout({ children, activeTab }: AppLayoutProps) {
  const isPurpleLayout = pagesWithPurpleLayout.includes(activeTab);

  const Layout = isPurpleLayout ? PurpleLayout : YellowLayout;

  return (
    <Layout>
      <div
        data-testid="app-layout"
        className="w-full min-h-screen max-w-screen max-h-screen overflow-x-hidden overflow-y-auto h-full relative px-6 pt-10"
      >
        {/* Main content */}
        <div className="w-full flex flex-col items-center pb-[var(--navigation-height)]">
          {children}
        </div>

        {/* Bottom navigation */}
        <div className="fixed bottom-5 z-20 left-0 right-0 mx-auto px-6">
          <Navigation activeTab={activeTab} className="" />
        </div>
      </div>
    </Layout>
  );
}
