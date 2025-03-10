'use client';

import { useRouter } from 'next/navigation';
import { PurpleLayout } from '@/components/layouts/purple-layout';
import { Navigation } from '@/components/navigation';
import { Logo } from '@/components/logo';
import { Card } from '@/components/card';
import { Character } from '@/components/character';
import { Button } from '@/components/button';

export default function AirdropPage() {
  const router = useRouter();

  return (
    <PurpleLayout>
      {/* Logo */}
      <Logo />

      {/* Main card */}
      <Card>
        <h2 className="text-white text-4xl font-bold leading-tight mb-2">CONNECT A WALLET</h2>
        <h2 className="text-white text-4xl font-bold leading-tight mb-6">TO CHECK OUR AIRDROP</h2>

        {/* Character */}
        <Character />

        <h3 className="text-white text-3xl font-bold mb-2">INVITE TO INCREASE CHANCES!</h3>
        <p className="text-white text-lg mb-8">
          Increase your chances of getting a larger
          <br />
          airdrop by inviting more friends to join!
        </p>

        {/* Button */}
        <Button variant="primary" size="lg" fullWidth className="mb-4">
          LINK $TON WALLET
        </Button>

        <p className="text-[#a67fc2]">Wallet Not Connected</p>
      </Card>

      {/* Bottom navigation */}
      <Navigation
        activeTab="airdrop"
        onTabChange={tab => {
          if (tab !== 'airdrop') {
            router.push(tab === 'shack' ? '/' : `/${tab}`);
          }
        }}
      />
    </PurpleLayout>
  );
}
