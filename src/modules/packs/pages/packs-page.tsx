'use client';

import { PackItem } from '../components';
import { mockPacks } from '../model/pack/mocks';
import { Slider } from '@/components/ui';
import { PacksLayout } from '../layouts';
import { AutoScale } from '@/modules/core';

export const PacksPage = () => {
  const packs = mockPacks;

  return (
    <PacksLayout>
      <Slider
        className="flex flex-col items-center justify-around"
        items={packs.map(pack => ({
          id: pack.id,
          content: <PackItem key={pack.id} data={pack} />,
        }))}
        autoSlide={false}
      />
    </PacksLayout>
  );
};
