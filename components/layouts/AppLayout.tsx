'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/logo';
import { Navigation } from '@/components/navigation/navigation';
import { PurpleLayout } from './purple-layout';
import { YellowLayout } from './yellow-layout';
import { TabName } from '@/lib/types';
import { useTheme } from '@/lib/context/ThemeContext';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

interface AppLayoutProps {
  children: ReactNode;
  activeTab: TabName;
}

export function AppLayout({ 
  children, 
  activeTab
}: AppLayoutProps) {
  const router = useRouter();
  const { theme } = useTheme();
  
  const LayoutComponent = theme === 'purple' ? PurpleLayout : YellowLayout;
  
  const handleTabChange = (tab: string) => {
    if (tab !== activeTab) {
      router.push(tab === 'shack' ? '/' : `/${tab}`);
    }
  };

  return (
    <LayoutComponent>
      {/* Header with Logo and Theme Toggle */}
      <div className="w-full flex justify-between items-center mb-4">
        <Logo />
        <ThemeToggle className="mr-2" />
      </div>
      
      {/* Main content */}
      <div className="w-full max-w-md flex flex-col items-center">
        {children}
      </div>
      
      {/* Bottom navigation */}
      <Navigation
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
    </LayoutComponent>
  );
} 