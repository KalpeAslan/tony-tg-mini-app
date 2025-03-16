'use client';

import { SectionMessage } from '@/components/ui';
import { AppLayout } from '@/layouts/app-layout';
import { FC, PropsWithChildren } from 'react';
import { BalanceSection } from '../components';
import { useRouter, usePathname } from 'next/navigation';

export const PacksLayout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <AppLayout activeTab="packs">
      <div className="w-full h-full flex flex-col items-center justify-around gap-4 pb-[calc(var(--navigation-height)+50px)] pt-6">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <BalanceSection />

          <div className="flex gap-4 w-full">
            <SectionMessage
              onClick={() => router.push('/packs/store')}
              radius="md"
              color={pathname === '/packs/store' ? 'warning' : 'transparent'}
              fullWidth
            >
              <p className="flex font-cheeky items-center justify-center font-chee">STORE</p>
            </SectionMessage>
            <SectionMessage
              onClick={() => router.push('/packs/my')}
              radius="md"
              color={pathname === '/packs/my' ? 'warning' : 'transparent'}
              fullWidth
            >
              <p className="flex font-cheeky items-center justify-center whitespace-nowrap">
                YOUR PACKS
              </p>
            </SectionMessage>
          </div>
        </div>
        {children}
      </div>
    </AppLayout>
  );
};
