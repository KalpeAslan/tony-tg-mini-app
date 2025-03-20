import { SectionMessage } from '@/components/ui/section-message';
import { CurrenciesSection, TonyDevice } from './parts';
import { Task } from '@/components/task';
import { BostItem as PackItemType } from '@/modules/core';
import { FC } from 'react';

interface PackItemProps {
  data: PackItemType;
}

export const PackItem: FC<PackItemProps> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      {/* Tony Device */}
      <div className="flex justify-center">
        <TonyDevice size="l" />
      </div>

      {/* Currency indicators */}
      <div className="w-full">
        <CurrenciesSection ton={data.price.ton} starts={Number(data.price.xtr)} />
      </div>

      <Task key={data.id} title={data.name} img={data.image} />
    </div>
  );
};
