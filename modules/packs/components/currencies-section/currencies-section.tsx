import { SectionMessage } from '@/components/ui/custom/SectionMessage';
import { formatNumber } from '@/lib/utils';

export const CurrenciesSection = () => {
  return (
    <div className="flex gap-3 items-center justify-center gap-x-4">
      <SectionMessage color="neutral" radius="full">
        <div className="px-4">
          <p className="text-2xl">{formatNumber(99999)}</p>
          <p className="text-sm">Tony Coins</p>
        </div>
      </SectionMessage>

      <SectionMessage color="info" radius="full">
        <div className="px-2">
          <p className="text-2xl">{formatNumber(0.1)}</p>
          <p className="text-sm">TON</p>
        </div>
      </SectionMessage>

      <SectionMessage color="success" radius="full">
        <div className="px-2">
          <p className="text-2xl">{formatNumber(5)}</p>
          <p className="text-sm">Stars</p>
        </div>
      </SectionMessage>
    </div>
  );
};
