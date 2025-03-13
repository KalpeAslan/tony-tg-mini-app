'use client';

import { AppLayout } from '@/components/layouts/AppLayout';
import { Logo } from '@/components/logo/logo';
import { useWalletStore } from '@/lib/store';
import { ContentNotConnected, ContentConnected, Card } from '../components';
import { PurpleLayout } from '@/components/layouts/purple-layout';

export function AirdropPage() {
  const { isConnected } = useWalletStore();

  return (
    <AppLayout activeTab="airdrop">
      <PurpleLayout>
        <Logo isConnected={isConnected} />

        {/* Main card */}
        <div className="pb-[var(--navigation-height)] w-full">
          <Card>
            <div className="pb-10 w-full">
              {isConnected ? <ContentConnected /> : <ContentNotConnected />}
            </div>
          </Card>
        </div>
      </PurpleLayout>
    </AppLayout>
  );
}
