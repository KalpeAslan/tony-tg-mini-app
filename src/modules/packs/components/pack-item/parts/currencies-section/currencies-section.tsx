import { SectionMessage } from '@/components/ui/SectionMessage';
import { formatNumber } from '@/lib/utils';
import { FC } from 'react';

interface CurrenciesSectionProps {
  tonyCoins: number;
  ton: number;
  starts: number;
}

export const CurrenciesSection: FC<CurrenciesSectionProps> = ({ tonyCoins, ton, starts }) => {
  return (
    <div className="grid grid-cols-12 gap-2 px-2 justify-between">
      <div className="col-span-6 flex justify-end items-center">
        <SectionMessage color="neutral" fullWidth radius="full">
          <div className="px-4">
            <p className="text-2xl">{formatNumber(tonyCoins)}</p>
            <p className="text-sm">Tony Coins</p>
          </div>
        </SectionMessage>
      </div>

      <div className="col-span-3 flex justify-end items-center">
        <SectionMessage color="info" fullWidth radius="full">
          <div className="px-2">
            <p className="text-2xl">{formatNumber(ton)}</p>
            <p className="text-sm">TON</p>
          </div>
        </SectionMessage>
      </div>

      <div className="col-span-3 flex justify-end items-center">
        <SectionMessage color="success" fullWidth radius="full">
          <div className="px-2">
            <p className="text-2xl">{formatNumber(starts)}</p>
            <p className="text-sm">Stars</p>
          </div>
        </SectionMessage>
      </div>
    </div>
  );
};
