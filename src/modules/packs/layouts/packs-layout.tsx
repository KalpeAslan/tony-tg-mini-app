import { SectionMessage } from '@/components/ui';
import { AppLayout } from '@/layouts/AppLayout';
import { FC, PropsWithChildren } from 'react';
import { BalanceSection } from '../components';

export const PacksLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppLayout activeTab="packs">
      <BalanceSection />

      <div className="flex gap-4 w-full max-w-md mb-8 mt-4">
        <SectionMessage radius="md" color="warning" fullWidth>
          <p className="flex items-center justify-center">STORE</p>
        </SectionMessage>
        <SectionMessage radius="md" color="transparent" fullWidth>
          <p className="flex items-center justify-center">YOUR PACKS</p>
        </SectionMessage>
      </div>
      {children}
    </AppLayout>
  );
};
