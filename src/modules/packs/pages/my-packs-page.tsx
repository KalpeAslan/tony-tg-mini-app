'use client';

import { PacksLayout } from '../layouts';
import { PacksList, Leaderboard } from '../components';
import { useQuery } from '@tanstack/react-query';
import { BoostsApi } from '@/modules/core/models/bosts/bosts-api';
import { FullLoader } from '@/components/ui';
import { useSignal, initData } from '@telegram-apps/sdk-react';
export const MyPacksPage = () => {
  const { data: activeBoosts, isLoading } = useQuery({
    queryKey: ['userActiveBoosts'],
    queryFn: () => BoostsApi.boosts.getUserActive(),
  });

  const initDataUser = useSignal(initData.user);

  return (
    <PacksLayout>
      {/* {isLoading && <FullLoader isVisible={isLoading} />} */}
      <Leaderboard
        photoUrl={initDataUser?.photoUrl || ''}
        name={initDataUser?.username || ''}
        myPosition={1}
        allPositions={15000}
      />
      <PacksList activeBoosts={activeBoosts?.userBosts || []} />
    </PacksLayout>
  );
};
