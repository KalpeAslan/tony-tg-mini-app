'use client';

import type React from 'react';
import { TabName } from '@/lib/types';
import { Icon } from '@/components/ui/icon';
import clsx from 'clsx';
import { IconName } from '@/components/ui';
import { useRouter } from 'next/navigation';
interface NavigationProps {
  activeTab: TabName;
  className?: string;
}

export function Navigation({ activeTab, className }: NavigationProps) {
  const router = useRouter();

  const handleTabClick = (tab: string) => {
    if (tab !== activeTab) {
      router.push(tab === 'shack' ? '/' : `/${tab}`);
    }
  };

  return (
    <div
      className={clsx(
        'bg-card border-white-translucent rounded-full p-4 flex justify-around',
        'items-center shadow-lg w-[var(--navigation-width)] h-[var(--navigation-height)]',
        className
      )}
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
    <div className="flex relative h-full flex-col items-center cursor-pointer" onClick={onClick}>
      <div className="relative w-full flex justify-center">
        <Icon
          size={isActive ? 60 : 36}
          name={`${isActive ? ((icon + '-selected') as IconName) : icon}`}
          className={clsx(
            'absolute transition-all duration-300 ease-in-out',
            isActive && 'transform -translate-y-10'
          )}
        />
      </div>
      <span
        className={clsx(
          'text-base absolute bottom-[-10px] mt-1',
          isActive ? 'text-white' : 'text-[var(--nav-text-color)]'
        )}
      >
        {label}
      </span>
    </div>
  );
}
