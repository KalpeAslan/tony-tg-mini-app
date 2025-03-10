'use client';

import { useRouter } from 'next/navigation';
import { PurpleLayout } from '@/components/layouts/purple-layout';
import { Navigation } from '@/components/navigation';
import { Logo } from '@/components/logo';
import { Card } from '@/components/card';
import { Button } from '@/components/button';

export default function ShackPage() {
  const router = useRouter();

  return (
    <PurpleLayout>
      {/* Logo */}
      <Logo />

      {/* Main card */}
      <Card>
        <h2 className="text-white text-4xl font-bold leading-tight mb-6">WELCOME TO TONY</h2>

        <p className="text-white text-lg mb-8">
          Your gateway to the Tony ecosystem.
          <br />
          Connect your wallet to get started.
        </p>

        {/* Button */}
        <Button variant="primary" size="lg" fullWidth className="mb-4">
          CONNECT WALLET
        </Button>

        <p className="text-[#a67fc2]">Wallet Not Connected</p>
      </Card>

      {/* Bottom navigation */}
      <Navigation
        activeTab="shack"
        onTabChange={tab => {
          if (tab !== 'shack') {
            router.push(`/${tab}`);
          }
        }}
      />
    </PurpleLayout>
  );
}
