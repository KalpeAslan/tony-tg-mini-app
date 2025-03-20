'use client';

import { PackItem } from '../components';
import { FullLoader, Slider } from '@/components/ui';
import { PacksLayout } from '../layouts';
import { useQuery } from '@tanstack/react-query';
import { BoostsApi } from '@/modules/core';

export const PacksPage = () => {
  // Using Tanstack Query to fetch boosts data
  const {
    data: boostsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['boosts'],
    queryFn: BoostsApi.boosts.getAll,
  });

  return (
    <PacksLayout>
      {isLoading && <FullLoader isVisible={isLoading} />}

      {boostsData?.success && (
        <Slider
          className="flex flex-col items-center justify-around"
          items={boostsData.bosts.map(boost => ({
            id: boost.id,
            content: <PackItem key={boost.id} data={boost} />,
          }))}
          autoSlide={false}
        />
      )}
    </PacksLayout>
  );
};
