'use client';

import type React from 'react';
import { EPages } from '@/lib/types';
import { Icon } from '@/components/ui/icon';
import clsx from 'clsx';
import { IconName } from '@/components/ui';
import { useRouter } from 'next/navigation';
import { useSound } from '@/lib/hooks/useSound';
import { Sound } from '@/lib/constants';

interface NavigationProps {
  activeTab: EPages;
  className?: string;
}

export function Navigation({ activeTab, className }: NavigationProps) {
  const router = useRouter();

  const { play } = useSound(Sound.CLICK);

  const handleTabClick = (tab: EPages) => {
    if (tab !== activeTab) {
      play();
      router.push(tab);
    }
  };

  return (
    <div
      className={clsx(
        'bg-card border-white-translucent rounded-3xl flex justify-around text-center',
        'items-center shadow-lg w-[var(--navigation-width)] h-[var(--navigation-height)]',
        className
      )}
    >
      <NavItem
        icon="shack"
        label="SHACK"
        isActive={activeTab === EPages.Shack}
        onClick={() => handleTabClick(EPages.Shack)}
      />
      <NavItem
        icon="invites"
        label="INVITES"
        isActive={activeTab === EPages.Invites}
        onClick={() => handleTabClick(EPages.Invites)}
      />
      <NavItem
        icon="airdrop"
        label="AIRDROP"
        isActive={activeTab === EPages.Airdrop}
        onClick={() => handleTabClick(EPages.Airdrop)}
      />
      <NavItem
        icon="tony-packs"
        label="PACKS"
        isActive={activeTab === EPages.Packs}
        onClick={() => handleTabClick(EPages.Packs)}
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
