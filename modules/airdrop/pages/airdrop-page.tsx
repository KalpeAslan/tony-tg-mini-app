'use client';

import { AppLayout } from '@/layouts/AppLayout';
import { Logo } from '@/components/logo/logo';
import { useWalletStore } from '@/lib/store';
import { ContentNotConnected, ContentConnected, Card } from '../components';

export function AirdropPage() {
  const { isConnected } = useWalletStore();

  return (
    <AppLayout activeTab="airdrop">
      <Logo isConnected={isConnected} />

      {/* Main card */}
      <div className="w-full h-full pb-[70px]">
        <Card>
          <div className="pb-10 w-full">
            {isConnected ? <ContentConnected /> : <ContentNotConnected />}
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}
