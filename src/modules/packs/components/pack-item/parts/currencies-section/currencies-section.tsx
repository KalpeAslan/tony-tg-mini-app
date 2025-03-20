import { SectionMessage } from '@/components/ui/section-message';
import { formatNumber } from '@/lib/utils';
import { FC } from 'react';

interface CurrenciesSectionProps {
  ton: number;
  starts: number;
}

export const CurrenciesSection: FC<CurrenciesSectionProps> = ({ ton, starts }) => {
  return (
    <div className="flex justify-between px-2 gap-2">
      <div className="flex w-full justify-end items-center">
        <SectionMessage className="!px-[15px]" size="extra-sm" color="info" fullWidth radius="full">
          <div className="px-2">
            <p className="text-xl">{formatNumber(ton)}</p>
            <p className="text-xs">TON</p>
          </div>
        </SectionMessage>
      </div>

      <div className="flex w-full justify-end items-center">
        <SectionMessage
          className="!px-[15px]"
          size="extra-sm"
          color="success"
          fullWidth
          radius="full"
        >
          <div className="px-2">
            <p className="text-xl">{formatNumber(starts)}</p>
            <p className="text-xs">Stars</p>
          </div>
        </SectionMessage>
      </div>
    </div>
  );
};
