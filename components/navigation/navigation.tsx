'use client';

import type React from 'react';
import { TabName } from '@/lib/types';
import { Icon } from '@/components/ui/icon';
import clsx from 'clsx';
import { IconName } from '../ui/icons';

interface NavigationProps {
  activeTab: TabName;
  onTabChange?: (tab: string) => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const handleTabClick = (tab: string) => {
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div
      className={`bg-tony-orange border-white-translucent rounded-full p-4 flex justify-around 
        items-center shadow-lg w-[var(--navigation-width)] h-[var(--navigation-height)]`}
    >
      <NavItem
        icon="shack"
        label="SHACK"
        isActive={activeTab === 'shack'}
        onClick={() => handleTabClick('shack')}
      />
      <NavItem
        icon="invites"
        label="INVITES"
        isActive={activeTab === 'invites'}
        onClick={() => handleTabClick('invites')}
      />
      <NavItem
        icon="airdrop"
        label="AIRDROP"
        isActive={activeTab === 'airdrop'}
        onClick={() => handleTabClick('airdrop')}
      />
      <NavItem
        icon="packs"
        label="PACKS"
        isActive={activeTab === 'packs'}
        onClick={() => handleTabClick('packs')}
      />
    </div>
  );
}

interface NavItemProps {
  icon: IconName;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

function NavItem({ icon, label, isActive, onClick }: NavItemProps) {
  return (
    <div className="flex relative flex-col items-center cursor-pointer" onClick={onClick}>
      <Icon
        size={isActive ? 60 : 36}
        name={`${isActive ? ((icon + '-selected') as IconName) : icon}`}
      />
      <span className={clsx('text-base mt-1 text-[var(--nav-text-color)]')}>{label}</span>
    </div>
  );
}
