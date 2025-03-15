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
        className="w-full max-w-screen h-screen overflow-x-hidden h-full relative px-6 pt-10"
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
