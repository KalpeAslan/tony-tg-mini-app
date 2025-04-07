'use client';

import { useState } from 'react';
import { Invites, Missions, PackLeaderboard, Progress } from '../components';
import { cn, formatDate } from '@/lib/utils';
import { useSound } from '@/lib/hooks';
import { Sound } from '@/lib/constants';
import { useQuery } from '@tanstack/react-query';
import { ReferralsApi, useMe, useLeaderboard } from '@/modules/core';
import { FullLoader } from '@/components';

type TTabs = 'invites' | 'missions';

export function InvitesPage() {
  const [tab, setTab] = useState<TTabs>('invites');
  const { play } = useSound(Sound.CLICK);

  const handleTabClick = (tab: TTabs) => () => {
    play();
    setTab(tab);
  };

  const { data: invitesData, isLoading: isInvitesLoading } = useQuery({
    queryKey: ['referralsInvites'],
    queryFn: () => ReferralsApi.invites.getInvites(),
  });

  const { userData } = useMe();
  const { myPosition, totalPositions, isLoading: isLeaderboardLoading } = useLeaderboard();

  if (isInvitesLoading || !invitesData || isLeaderboardLoading) return <FullLoader />;

  return (
    <div className="w-full h-full items-center justify-start gap-4 flex flex-col pt-[100px]">
      <PackLeaderboard
        sinceDate={formatDate(new Date(userData?.user?.createdAt!))}
        ownPosition={myPosition}
        totalPositions={totalPositions}
      />
      <Progress level={invitesData.invites?.myLevel!} />
      <div className="flex flex-row gap-2 w-full">
        <div
          className={cn(
            'border-white-translucent border-2 rounded-lg py-2 px-4 w-full text-center text-2xl',
            {
              'bg-card': tab === 'invites',
              'opacity-50': tab === 'missions',
            }
          )}
          onClick={handleTabClick('invites')}
        >
          Invites
        </div>
        <div
          className={cn(
            'border-white-translucent border-2 rounded-lg py-2 px-4 w-full text-center text-2xl',
            {
              'bg-card': tab === 'missions',
              'opacity-50': tab === 'invites',
            }
          )}
          onClick={handleTabClick('missions')}
        >
          Missions
        </div>
      </div>

      {tab === 'invites' && <Invites invitesData={invitesData} />}
      {tab === 'missions' && <Missions />}
    </div>
  );
}
