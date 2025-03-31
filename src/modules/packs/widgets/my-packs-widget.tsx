import { PacksList } from '../components';

import { useQuery } from '@tanstack/react-query';

import { initData, useSignal } from '@telegram-apps/sdk-react';
import { Leaderboard } from '../components';
import { BoostsApi } from '@/modules/core/models/bosts/bosts-api';
import { Loader } from '@/components/loader';
export function MyPacksWidget() {
  const { data: activeBoosts, isLoading } = useQuery({
    queryKey: ['userActiveBoosts'],
    queryFn: () => BoostsApi.boosts.getUserActive(),
  });

  const initDataUser = useSignal(initData.user);


  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }
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
