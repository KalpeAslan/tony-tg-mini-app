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
      router.push(tab === 'airdrop' ? '/' : `/${tab}`);
    }
  };

  return (
    <div
      className={clsx(
        'bg-card border-white-translucent rounded-full flex justify-around text-center',
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
        icon="tony-packs"
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
    <div className="relative h-full cursor-pointer pb-[25px]" onClick={onClick}>
      <div
        className={clsx(
          'relative w-full flex justify-center max-h-[48px] h-full',
          isActive ? 'bottom-0' : 'bottom-[-16px]'
        )}
      >
        <Icon
          width={isActive ? 60 : 36}
          height={isActive ? 48 : 28}
          name={`${isActive ? ((icon + '-selected') as IconName) : icon}`}
          className={clsx('transition-all duration-300 ease-in-out bottom-0', {
            '-translate-y-[15px]': isActive,
          })}
        />
      </div>
      <span className={clsx('text-base', isActive ? 'text-white' : 'text-[var(--nav-text-color)]')}>
        {label}
      </span>
    </div>
  );
}
