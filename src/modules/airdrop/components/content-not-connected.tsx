'use client';

import { Button } from '@/components';
import Image from 'next/image';
import { FC } from 'react';
import { useTonConnectUI } from '@tonconnect/ui-react';

export const ContentNotConnected: FC = () => {
  const [tonConnectUI] = useTonConnectUI();

  return (
    <div className="flex flex-col items-center justify-center py-8 px-4">
      <h2 className="text-4xl leading-tight mb-2 text-center">
        Connect a wallet <br /> to check your airdrop
      </h2>

      {/* Character */}
      <div className="relative w-full h-[140px]">
        <Image
          className=" absolute m-auto left-0 right-0 top-[-70px]"
          src="/pushups.gif"
          alt="pushups"
          width={200}
          height={200}
        />
      </div>

      <h3 className="text-4xl mb-2">INVITE TO INCREASE CHANCES!</h3>
      <p className="text-sm mb-4 font-roboto">
        Increase your chances of getting a larger
        <br />
        airdrop by inviting more friends to join!
      </p>

      <div className="w-full flex flex-col items-center gap-2">
        <Button onClick={tonConnectUI.openModal}>link $ton wallet</Button>
        <p className="text-sm font-bold text-white opacity-50 font-roboto mt-3">
          Wallet Not Connected
        </p>
      </div>
    </div>
  );
};
