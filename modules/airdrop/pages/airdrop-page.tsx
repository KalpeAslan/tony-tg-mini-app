'use client';

import { AppLayout } from '@/components/layouts/AppLayout';
import { Logo } from '@/components/logo/logo';
import { useWalletStore } from '@/lib/store';
import { ContentNotConnected, ContentConnected, Card } from '../components';

export function AirdropPage() {
  const { isConnected } = useWalletStore();
  console.log(isConnected);

  return (
    <AppLayout activeTab="airdrop">
      <Logo isConnected={isConnected} />

      {/* Main card */}
      <Card>{isConnected ? <ContentConnected /> : <ContentNotConnected />}</Card>
    </AppLayout>
  );
}
