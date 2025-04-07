'use client';

import { useState } from 'react';
import { Invites, Missions, PackLeaderboard, Progress } from '../components';
import { cn } from '@/lib/utils';
import { useSound } from '@/lib/hooks';
import { Sound } from '@/lib/constants';

type TTabs = 'invites' | 'missions';

export function InvitesPage() {
  const [tab, setTab] = useState<TTabs>('invites');
  const { play } = useSound(Sound.CLICK);

  const handleTabClick = (tab: TTabs) => () => {
    play();
    setTab(tab);
  }

  return (
    <div className="w-full h-full items-center justify-start gap-4 flex flex-col pt-[100px]">
      <PackLeaderboard sinceDate={'22/19/2000'} ownPosition={0} totalPositions={0} />
      <Progress current={10} max={100} />
      <div className="flex flex-row gap-2 w-full">
        <div
          className={cn('border-white-translucent border-2 rounded-lg py-2 px-4 w-full text-center text-2xl', {
            'bg-card': tab === 'invites',
            'opacity-50': tab === 'missions',
          })}
          onClick={handleTabClick('invites')}
        >
          Invites
        </div>
        <div
          className={cn('border-white-translucent border-2 rounded-lg py-2 px-4 w-full text-center text-2xl', {
            'bg-card': tab === 'missions',
            'opacity-50': tab === 'invites',
          })}
          onClick={handleTabClick('missions')}
        >
          Missions
        </div>
      </div>

      {tab === 'invites' && <Invites />}
      {tab === 'missions' && <Missions />}
    </div>
  );
}
