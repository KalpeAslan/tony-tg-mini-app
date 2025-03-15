import { SectionMessage } from '@/components/ui/section-message';
import { formatNumber } from '@/lib/utils';
import Image from 'next/image';

export const BalanceSection = () => {
  return (
    <div className="flex items-center justify-center">
      <SectionMessage color="warning" radius="full">
        <div className="flex items-center gap-2 pr-10">
          <Image src="/packs/coin.png" alt="Tony Coins" width={37} height={37} />

          <div>
            <p className="text-xs font-bold italic">Your Tony Coins Balance:</p>
            <p className="text-2xl font-bold italic">{formatNumber(99999)}</p>
          </div>
        </div>
      </SectionMessage>
    </div>
  );
};
