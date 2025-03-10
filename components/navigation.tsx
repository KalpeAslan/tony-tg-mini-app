'use client';

import type React from 'react';
import { Home, Users, Package, Gift } from 'lucide-react';
import { TabName } from '@/lib/types';

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
    <div className="bg-[#e07a19] rounded-full p-4 w-full max-w-md flex justify-around items-center shadow-lg">
      <NavItem
        icon={<Home className="w-6 h-6 text-white" />}
        label="SHACK"
        isActive={activeTab === 'shack'}
        onClick={() => handleTabClick('shack')}
      />
      <NavItem
        icon={<Users className="w-6 h-6 text-white" />}
        label="INVITES"
        isActive={activeTab === 'invites'}
        onClick={() => handleTabClick('invites')}
      />
      <NavItem
        icon={<Gift className="w-6 h-6 text-white" />}
        label="AIRDROP"
        isActive={activeTab === 'airdrop'}
        onClick={() => handleTabClick('airdrop')}
      />
      <NavItem
        icon={<Package className="w-6 h-6 text-white" />}
        label="PACKS"
        isActive={activeTab === 'packs'}
        onClick={() => handleTabClick('packs')}
      />
    </div>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  highlightColor?: string;
  onClick?: () => void;
}

function NavItem({
  icon,
  label,
  isActive,
  highlightColor = 'bg-[#f8c52c]',
  onClick,
}: NavItemProps) {
  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={onClick}>
      <div className={`p-3 rounded-xl ${isActive ? highlightColor : ''}`}>{icon}</div>
      <span className="text-white text-xs mt-1">{label}</span>
    </div>
  );
}
