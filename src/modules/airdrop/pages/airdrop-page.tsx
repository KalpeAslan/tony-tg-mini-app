'use client';

import { AppLayout } from '@/layouts/app-layout';
import { Logo } from '@/components/logo/logo';
import { ContentNotConnected, ContentConnected } from '../components';
import { useTonAddress } from '@tonconnect/ui-react';
import { cn } from '@/lib/utils';

export function AirdropPage() {
  const userFriendlyAddress = useTonAddress();
  const isConnected = !!userFriendlyAddress;

  return (
    <AppLayout activeTab="airdrop">
      <div className="w-full flex flex-col items-center justify-center gap-4 pb-[calc(var(--navigation-height)+50px)]">
        <Logo isConnected={isConnected} />

        {/* Main card */}
        <div
          className={cn(
            'rounded-3xl w-full flex flex-col items-center text-center ',
            'border-white-translucent overflow-hidden'
          )}
          style={{
            background:
              'linear-gradient(15deg, rgba(80,29,124,0.9878545168067226) 63%, rgba(80,29,124,0.6209077380952381) 100%)',
          }}
        >
          {isConnected ? <ContentConnected /> : <ContentNotConnected />}
        </div>
      </div>
    </AppLayout>
  );
}
