import { PacksList } from '../components';

import { useQuery } from '@tanstack/react-query';

import { initData, useSignal } from '@telegram-apps/sdk-react';
import { Leaderboard } from '../components';
import { BoostsApi } from '@/modules/core/models/bosts/bosts-api';

export function MyPacksWidget() {
  const { data: activeBoosts } = useQuery({
    queryKey: ['userActiveBoosts'],
    queryFn: () => BoostsApi.boosts.getUserActive(),
  });

  const initDataUser = useSignal(initData.user);
  return (
    <>
      <Leaderboard
        photoUrl={initDataUser?.photoUrl || ''}
        name={initDataUser?.username || ''}
        myPosition={1}
        allPositions={15000}
      />
      <PacksList activeBoosts={activeBoosts?.userBosts || []} />
    </>
  );
}
