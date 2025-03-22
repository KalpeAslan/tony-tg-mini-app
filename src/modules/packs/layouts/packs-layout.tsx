'use client';

import { SectionMessage } from '@/components/ui';
import { AppLayout } from '@/layouts/app-layout';
import { FC, PropsWithChildren } from 'react';
import { TActiveTab } from '../models';

interface PacksLayoutProps extends PropsWithChildren {
  activeTab: TActiveTab;
  onTabClick: (tab: TActiveTab) => void;
}

export const PacksLayout: FC<PacksLayoutProps> = ({ children, activeTab, onTabClick }) => {
  const handleTabClick = (tab: TActiveTab) => {
    onTabClick(tab);
  };

  return (
    <AppLayout activeTab="packs">
      <div className="w-full h-full justify-start flex flex-col items-center gap-4 pt-20">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <div className="flex gap-4 w-full">
            <SectionMessage
              onClick={() => handleTabClick('store')}
              radius="md"
              color={activeTab === 'store' ? 'warning' : 'transparent'}
              fullWidth
            >
              <p className="flex font-cheeky items-center justify-center font-chee">STORE</p>
            </SectionMessage>
            <SectionMessage
              onClick={() => handleTabClick('my')}
              radius="md"
              color={activeTab === 'my' ? 'warning' : 'transparent'}
              fullWidth
            >
              <p className="flex font-cheeky items-center justify-center whitespace-nowrap">
                YOUR PACKS
              </p>
            </SectionMessage>
          </div>
        </div>
        {children}
      </div>
    </AppLayout>
  );
};
