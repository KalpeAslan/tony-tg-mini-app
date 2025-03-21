'use client';

import { PacksLayout } from '../layouts';
import { PacksList } from '../components';
import { useQuery } from '@tanstack/react-query';
import { BoostsApi } from '@/modules/core/models/bosts/bosts-api';
import { FullLoader } from '@/components/ui';

export const MyPacksPage = () => {
  const { data: activeBoosts, isLoading } = useQuery({
    queryKey: ['userActiveBoosts'],
    queryFn: () => BoostsApi.boosts.getUserActive(),
  });

  return (
    <PacksLayout>
      {/* {isLoading && <FullLoader isVisible={isLoading} />} */}
      <PacksList activeBoosts={activeBoosts?.userBosts || []} />
    </PacksLayout>
  );
};
