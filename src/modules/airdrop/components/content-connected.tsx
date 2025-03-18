'use client';

import { FC, PropsWithChildren } from 'react';
import { Button, SectionMessage } from '@/components';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { init, shareURL } from '@telegram-apps/sdk';
import { TelegramApi } from '@/modules/core/models/telegram/telegram-api';
import { useMutation } from '@tanstack/react-query';

export const ContentConnected: FC = () => {
  const [tonConnectUI] = useTonConnectUI();

  const getReferralLinkMutation = useMutation({
    mutationFn: TelegramApi.telegram.getReferralLink,
    onSuccess: data => {
      console.log('data', data);
      if (data.success && data.referralLink) {
        console.log('data.referralLink', data.referralLink);
        shareURL(data.referralLink);
      }
    },
    onError: error => {
      console.error('Error getting referral link:', error);
    },
  });

  const handleInvite = () => {
    init();
    getReferralLinkMutation.mutate();
  };

  return (
    <div className="w-full">
      <WalletStatus>Eligible</WalletStatus>

      <div className="flex flex-col items-center justify-center py-8 px-12">
        {/* Character */}

        <h3 className="text-4xl mb-2">You are eligible!</h3>
        <p className="text-sm font-roboto">
          Soon details on the exact amount of token you wallet will be airdropped, will be revealed
          here! Stay tuned!
        </p>

        <Button
          onClick={handleInvite}
          variant="primary"
          size="sm"
          fullWidth
          className="flex items-center mt-5 mb-5 text-3xl"
          loading={getReferralLinkMutation.isPending}
        >
          <p>Invite friends</p>
        </Button>

        {/* <WalletButton className="mt-8" variant="primary" /> */}
        <div className="w-full flex flex-col items-center">
          <Button className="text-3xl" variant="green" fullWidth size="sm" active={false}>
            Connected
          </Button>
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
