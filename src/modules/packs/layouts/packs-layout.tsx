'use client';

import { SectionMessageOld as SectionMessage } from '@/lib/components';
import { FC, PropsWithChildren } from 'react';
import { TActiveTab } from '../models';
import { useSound } from '@/lib/hooks/useSound';
import { Sound } from '@/lib/constants';
interface PacksLayoutProps extends PropsWithChildren {
  activeTab: TActiveTab;
  onTabClick: (tab: TActiveTab) => void;
}

export const PacksLayout: FC<PacksLayoutProps> = ({ children, activeTab, onTabClick }) => {
  const { play } = useSound(Sound.CLICK);

  const handleTabClick = (tab: TActiveTab) => {
    play();
    onTabClick(tab);
  };

  return (
    <div className="w-full h-full justify-start flex flex-col items-center gap-4 pt-[100px] min-h-[800px]">
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
  );
};
