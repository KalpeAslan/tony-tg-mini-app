'use client';

import { Button } from '@/components/ui';
import { ButtonVariant, ButtonSize } from '@/lib/types';
import { useTonAddress, useTonConnectUI } from '@tonconnect/ui-react';

interface WalletButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}

export function WalletButton({
  variant = 'primary',
  size = 'lg',
  fullWidth = true,
  className,
}: WalletButtonProps) {
  const [tonConnectUI] = useTonConnectUI();
  console.log('tonConnectUI', tonConnectUI);

  const isConnected = tonConnectUI.connected;

  const renderSubAction = () => {
    if (isConnected)
      return (
        <p
          onClick={tonConnectUI.disconnect}
          className="text-sm font-bold text-white opacity-50 font-roboto mt-3 cursor-pointer"
        >
          Log Out
        </p>
      );

    return (
      <p className="text-sm font-bold text-white opacity-50 font-roboto mt-3">
        Wallet Not Connected
      </p>
    );
  };

  const renderButtonText = () => {
    if (isConnected) return 'Connected';
    return 'Link TON Wallet';
  };

  const handleClick = async () => {
    tonConnectUI.openModal();
  };

  return (
    <div className="w-full flex flex-col items-center">
      <Button
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        className={className}
        onClick={handleClick}
      >
        {renderButtonText()}
      </Button>

      {renderSubAction()}
    </div>
  );
}
