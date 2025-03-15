'use client';

import { AppLayout } from '@/layouts/AppLayout';
import { Logo } from '@/components/logo/logo';
import { ContentNotConnected, ContentConnected, Card } from '../components';
import { useTonAddress } from '@tonconnect/ui-react';

export function AirdropPage() {
  const userFriendlyAddress = useTonAddress();
  const isConnected = !!userFriendlyAddress;

  return (
    <AppLayout activeTab="airdrop">
      <div className="w-full">
        <Logo isConnected={isConnected} />

        {/* Main card */}
        <div className="w-full h-full">
          <Card>
            <div className="pb-10 w-full">
              {isConnected ? <ContentConnected /> : <ContentNotConnected />}
            </div>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
