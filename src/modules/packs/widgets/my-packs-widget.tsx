import { PacksList } from '../components';

import { useQuery } from '@tanstack/react-query';

import { initData, useSignal } from '@telegram-apps/sdk-react';
import { Leaderboard } from '../components';
import { BoostsApi } from '@/modules/core/models/bosts/bosts-api';
import { Loader } from '@/components/loader';
import { TelegramApi } from '@/modules/core/models/telegram/telegram-api';

export function MyPacksWidget() {
  const { data: activeBoosts, isLoading: isLoadingBoosts } = useQuery({
    queryKey: ['userActiveBoosts'],
    queryFn: () => BoostsApi.boosts.getUserActive(),
  });

  const { data: positionData, isLoading: isLoadingPosition } = useQuery({
    queryKey: ['leaderboardPosition'],
    queryFn: () => TelegramApi.leaderboard.getPosition(),
  });

  const initDataUser = useSignal(initData.user);

  if (isLoadingBoosts || isLoadingPosition) {
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
        myPosition={positionData?.position?.position || 0}
      />
      <PacksList activeBoosts={activeBoosts?.userBosts || []} />
    </>
  );
}
