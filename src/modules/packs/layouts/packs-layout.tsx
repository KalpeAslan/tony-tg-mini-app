'use client';

import { SectionMessage } from '@/components/ui';
import { AppLayout } from '@/layouts/AppLayout';
import { FC, PropsWithChildren } from 'react';
import { BalanceSection } from '../components';
import { useRouter } from 'next/navigation';

export const PacksLayout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  return (
    <AppLayout activeTab="packs">
      <BalanceSection />

      <div className="flex gap-4 w-full mb-8 mt-4">
        <SectionMessage radius="md" color="warning" fullWidth>
          <p className="flex items-center justify-center">STORE</p>
        </SectionMessage>
        <SectionMessage
          onClick={() => router.push('/packs/my')}
          radius="md"
          color="transparent"
          fullWidth
        >
          <p className="flex items-center justify-center whitespace-nowrap">YOUR PACKS</p>
        </SectionMessage>
      </div>
      {children}
    </AppLayout>
  );
};
