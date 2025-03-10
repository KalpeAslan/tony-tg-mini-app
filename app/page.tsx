'use client';

import { AppLayout } from '@/components/layouts/AppLayout';
import { Card } from '@/components/card';
import { WalletButton } from '@/components/wallet/WalletButton';

export default function ShackPage() {
  return (
    <AppLayout activeTab="shack">
      {/* Main card */}
      <Card>
        <h2 className="text-white text-4xl font-bold leading-tight mb-6">WELCOME TO TONY</h2>

        <p className="text-white text-lg mb-8">
          Your gateway to the Tony ecosystem.
          <br />
          Connect your wallet to get started.
        </p>

        {/* Wallet Button */}
        <WalletButton />
      </Card>
    </AppLayout>
  );
}
