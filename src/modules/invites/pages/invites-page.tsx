'use client';

import { useState } from 'react';
import { Invites, PackLeaderboard, Progress } from '../components';
import { Button } from '@/components';
type TTabs = 'invites' | 'missions';

export function InvitesPage() {
  // const [tab, setTab] = useState<TTabs>('invites');



  return (
    <div className="w-full h-full items-center justify-start gap-4 flex flex-col pt-[100px]">
      <PackLeaderboard sinceDate={'22/19/2000'} ownPosition={0} totalPositions={0} />
      <Progress current={10} max={100} />
      {/* <div className="flex flex-row gap-2 w-full">
        <Button variant="secondary" fullWidth onClick={() => setTab('invites')}>
          Invites
        </Button>
        <Button variant="secondary" fullWidth onClick={() => setTab('missions')}>
          Missions
        </Button>
      </div> */}

      {/* {tab === 'invites' && <Invites />} */}
      <Invites />
      {/* {tab === 'missions' && <Missions />} */}
    </div>
  );
}
