'use client';

import { PackItem } from '../components';
import { mockPacks } from '../model/pack/mocks';
import { Slider } from '@/components/ui';
import { PacksLayout } from '../layouts';

export const PacksPage = () => {
  const packs = mockPacks;

  return (
    <PacksLayout>
      <div className="w-full h-full pb-[40px]">
        <Slider
          items={packs.map(pack => ({
            id: pack.id,
            content: <PackItem key={pack.id} data={pack} />,
          }))}
          autoSlide={false}
        />
      </div>
    </PacksLayout>
  );
};
