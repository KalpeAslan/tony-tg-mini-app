'use client';

import { ReactNode } from 'react';
import { Navigation } from '@/modules/core';
import { TabName } from '@/lib/types';
import { PurpleLayout } from './purple-layout';
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
        className="w-full h-screen max-w-screen overflow-x-hidden relative flex flex-col items-center justify-between px-3"
      >
        {/* Main content */}
        <div className="w-full">{children}</div>

        {/* Bottom navigation */}
        <div className="w-full min-h-[var(--navigation-height)] relative pb-4">
          <Navigation activeTab={activeTab} className="" />
        </div>
      </div>
    </Layout>
  );
}
