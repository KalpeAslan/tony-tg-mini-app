'use client';

import { AppLayout } from '@/components/layouts/AppLayout';
import { Card } from '@/modules/airdrop/components/card';
import { Character } from '@/components/character';
import { WalletButton } from '@/components/wallet/WalletButton';
import { Logo } from '@/components/logo/logo';
import { useWalletStore } from '@/lib/store';

export function AirdropPage() {
  const { isConnected } = useWalletStore();
  console.log(isConnected);

  return (
    <AppLayout activeTab="airdrop">
      <Logo isConnected={isConnected} />

      {/* Main card */}
      <Card>
        <h2 className="text-tony-heading text-4xl leading-tight mb-2">CONNECT A WALLET</h2>
        <h2 className="text-tony-heading text-4xl leading-tight mb-6">TO CHECK OUR AIRDROP</h2>

        {/* Character */}
        <Character />

        <h3 className="text-tony-heading text-3xl mb-2">INVITE TO INCREASE CHANCES!</h3>
        <p className="text-tony-body text-lg mb-8">
          Increase your chances of getting a larger
          <br />
          airdrop by inviting more friends to join!
        </p>

        {/* Wallet Button */}
        <WalletButton
          variant="primary"
          connectText="LINK $TON WALLET"
          disconnectText="UNLINK $TON WALLET"
        />
      </Card>
    </AppLayout>
  );
}
