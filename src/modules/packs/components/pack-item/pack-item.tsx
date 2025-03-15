import { SectionMessage } from '@/components/ui/SectionMessage';
import { CurrenciesSection, TonyDevice } from './parts';
import { Task } from '@/components/task';
import { PackItem as PackItemType } from '../../model';
import { FC } from 'react';

interface PackItemProps {
  data: PackItemType;
}

export const PackItem: FC<PackItemProps> = ({ data }) => {
  return (
    <div>
      {/* Tony Device */}
      <div className="flex justify-center mb-8">
        <TonyDevice size="l" />
      </div>

      {/* Currency indicators */}
      <div className="w-full max-w-md mb-6">
        <CurrenciesSection tonyCoins={data.tonyCoins} ton={data.ton} starts={data.starts} />
      </div>

      <Task key={data.id} title={data.name} description={data.description} img={data.image} />
    </div>
  );
};
