'use client';
import { useRouter } from 'next/navigation';
import { YellowLayout } from '@/components/layouts/yellow-layout';
import { Navigation } from '@/components/navigation/navigation';
import { Button } from '@/components/button';
import { BalanceContainer } from '@/components/containers/balance-container';
import { CurrencyContainer } from '@/components/containers/currency-container';
import { PromoContainer } from '@/components/containers/promo-container';
import { PaginationDots } from '@/components/containers/pagination-dots';
import { TonyDevice } from '@/components/tony-device';

export default function PacksPage() {
  const router = useRouter();

  return (
    <YellowLayout>
      {/* Balance */}
      <div className="w-full max-w-md mt-4 mb-6">
        <BalanceContainer balance="99,999" />
      </div>

      {/* Store buttons */}
      <div className="flex gap-4 w-full max-w-md mb-8">
        <Button variant="orange" fullWidth>
          STORE
        </Button>
        <Button variant="orange-outline" fullWidth>
          YOUR PACKS
        </Button>
      </div>

      {/* Tony Device */}
      <div className="flex justify-center mb-8">
        <TonyDevice />
      </div>

      {/* Currency indicators */}
      <div className="w-full max-w-md mb-6">
        <CurrencyContainer />
      </div>

      {/* Promo card */}
      <div className="w-full max-w-md mb-4">
        <PromoContainer
          title="NEWBIES LUCK"
          description="A pack for little cry babies. A small chance for them to make it lol"
          icon={
            <div className="w-16 h-16 bg-[#33b1fc] rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">🎮</span>
            </div>
          }
        />
      </div>

      {/* Pagination dots */}
      <PaginationDots total={7} active={0} />

      {/* Bottom navigation */}
      <Navigation
        activeTab="packs"
        onTabChange={tab => {
          if (tab !== 'packs') {
            router.push(tab === 'shack' ? '/' : `/${tab}`);
          }
        }}
      />
    </YellowLayout>
  );
}
