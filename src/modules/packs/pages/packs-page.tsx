'use client';

import { PackItem } from '../components';
import { Slider } from '@/components/ui';
import { PacksLayout } from '../layouts';
import { useQuery } from '@tanstack/react-query';
import { BoostsApi } from '@/modules/core/models/bosts';

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

  console.log('Boosts data:', boostsData);

  return (
    <PacksLayout>
      {isLoading && <div>Loading boosts...</div>}
      {error && <div>Error loading boosts</div>}

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
