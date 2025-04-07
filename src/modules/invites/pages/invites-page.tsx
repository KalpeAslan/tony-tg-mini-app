'use client';

import { useState } from 'react';
import { Invites, PackLeaderboard, Progress } from '../components';
import { Button } from '@/components';
import { cn } from '@/lib/utils';
type TTabs = 'invites' | 'missions';

export function InvitesPage() {
  const [tab, setTab] = useState<TTabs>('invites');

  return (
    <div className="w-full h-full items-center justify-start gap-4 flex flex-col pt-[100px]">
      <PackLeaderboard sinceDate={'22/19/2000'} ownPosition={0} totalPositions={0} />
      <Progress current={10} max={100} />
      <div className="flex flex-row gap-2 w-full">
        <div
          className={cn('border-white-translucent border-2 rounded-lg py-2 px-4 w-full text-center', {
            'bg-card': tab === 'invites',
            'opacity-50': tab === 'missions',
          })}
          onClick={() => setTab('invites')}
        >
          Invites
        </div>
        <div
          className={cn('border-white-translucent border-2 rounded-lg py-2 px-4 w-full text-center', {
            'bg-card': tab === 'missions',
            'opacity-50': tab === 'invites',
          })}
          onClick={() => setTab('missions')}
        >
          Missions
        </div>
      </div>

      {tab === 'invites' && <Invites />}
      {/* {tab === 'missions' && <Missions />} */}
    </div>
  );
}
