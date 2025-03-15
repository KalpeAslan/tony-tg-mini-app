'use client';

import { FC, PropsWithChildren } from 'react';
import Link from 'next/link';
import { SectionMessage } from '@/components';
import { useTonConnectUI } from '@tonconnect/ui-react';

export const ContentConnected: FC = () => {
  const [tonConnectUI] = useTonConnectUI();

  return (
    <div className="w-full">
      <WalletStatus>Eligible</WalletStatus>

      <div className="flex flex-col items-center justify-center py-8 px-6">
        {/* Character */}

        <h3 className="text-4xl mb-2">You are eligible!</h3>
        <p className="text-sm font-roboto px-6">
          Soon details on the exact amount of token you wallet will be airdropped, will be revealed
          here! Stay tuned!
        </p>

        <Link href="/invite" className="flex items-center mt-5">
          <p>Invite friends</p>
        </Link>

        {/* <WalletButton className="mt-8" variant="primary" /> */}
        <div className="w-full flex flex-col items-center">
          <SectionMessage color="success">Connected</SectionMessage>
          <p
            onClick={() => tonConnectUI.disconnect()}
            className="text-sm font-bold text-white opacity-50 font-roboto mt-3 cursor-pointer"
          >
            Log Out
          </p>
        </div>
      </div>
    </div>
  );
};

const WalletStatus: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className="h-[150px] flex flex-col justify-center items-center text-center text-white"
      style={{
        background:
          'linear-gradient(0deg, var(--bg-accent), var(--bg-accent)),linear-gradient(32.35deg, rgba(255, 255, 255, 0) 42%, rgba(255, 255, 255, 0.35) 100%)',
      }}
    >
      <p className="font-roboto text-sm">Wallet Status</p>
      <p className="text-7xl">{children}</p>
    </div>
  );
};
