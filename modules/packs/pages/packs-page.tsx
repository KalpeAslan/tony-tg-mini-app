'use client';
import { Button } from '@/components/button';
import { TonyDevice } from '@/components/tony-device';
import { AppLayout } from '@/components/layouts/AppLayout';
import { PromoSection, CurrenciesSection, BalanceSection } from '../components';
import { SectionMessage } from '@/components/ui/custom/SectionMessage';

export const PacksPage = () => {
  return (
    <AppLayout activeTab="packs">
      <div className="w-full h-full pb-[40px]">
        {/* Balance */}
        <div className="w-full mt-4 mb-6">
          <BalanceSection />
        </div>

        {/* Store buttons */}
        <div className="flex gap-4 w-full max-w-md mb-8">
          <SectionMessage radius="md" color="warning" fullWidth>
            <p className="flex items-center justify-center">STORE</p>
          </SectionMessage>
          <SectionMessage radius="md" color="transparent" fullWidth>
            <p className="flex items-center justify-center">YOUR PACKS</p>
          </SectionMessage>
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
      </div>
    </AppLayout>
  );
};
