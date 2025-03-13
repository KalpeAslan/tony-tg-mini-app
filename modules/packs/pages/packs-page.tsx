'use client';
import { YellowLayout } from '@/components/layouts/yellow-layout';
import { Button } from '@/components/button';
import { PaginationDots } from '@/components/containers/pagination-dots';
import { TonyDevice } from '@/components/tony-device';
import { AppLayout } from '@/components/layouts/AppLayout';
import { PromoSection, CurrenciesSection, BalanceSection } from '../components';

export const PacksPage = () => {
  return (
    <AppLayout activeTab="packs">
      <YellowLayout>
        {/* Balance */}
        <div className="w-full mt-4 mb-6">
          <BalanceSection />
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
          <TonyDevice size="l" />
        </div>

        {/* Currency indicators */}
        <div className="w-full max-w-md mb-6">
          <CurrenciesSection />
        </div>

        <PromoSection />
        {/* Pagination dots */}
        <PaginationDots total={7} active={0} />
      </YellowLayout>
    </AppLayout>
  );
};
