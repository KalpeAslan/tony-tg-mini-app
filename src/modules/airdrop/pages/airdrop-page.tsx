'use client';

import { ContentNotConnected, ContentConnected } from '../components';
import { useWallet } from '@/modules/core';
import { cn } from '@/lib/utils';
import { Logo } from '@/lib/components';

export function AirdropPage() {
  const { isConnected } = useWallet();

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[900px]">
      <Logo isConnected={isConnected} />

      {/* Main card */}
      <div
        className={cn(
          'rounded-3xl w-full flex flex-col items-center text-center',
          'border-white-translucent overflow-hidden bg-card'
        )}
      >
        {isConnected ? <ContentConnected /> : <ContentNotConnected />}
      </div>
    </div>
  );
}
