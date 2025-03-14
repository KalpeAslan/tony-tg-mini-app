'use client';

import { Button } from '@/components/ui';
import { ButtonVariant, ButtonSize } from '@/lib/types';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { useState } from 'react';

interface WalletButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  showWarning?: boolean;
}

export function WalletButton({
  variant = 'primary',
  size = 'lg',
  fullWidth = true,
  className,
  onClick,
  showWarning = false,
}: WalletButtonProps) {
  const [tonConnectUI] = useTonConnectUI();

  const [isLoading, setIsLoading] = useState(false);

  // Show warning message if requested and wallet is not connected
  // if (!isConnected && showWarning) {
  //   return (
  //     <div>
  //       <SectionMessage fullWidth color="warning">
  //         To display the data related to the TON Connect, it is required to connect your wallet
  //       </SectionMessage>
  //     </div>
  //   );
  // }

  const renderSubAction = () => {
    // if (isConnected)
    //   return (
    //     <p
    //       onClick={disconnect}
    //       className="text-sm font-bold text-white opacity-50 font-roboto mt-3 cursor-pointer"
    //     >
    //       Log Out
    //     </p>
    //   );

    return (
      <p className="text-sm font-bold text-white opacity-50 font-roboto mt-3">
        Wallet Not Connected
      </p>
    );
  };

  const renderButtonText = () => {
    if (isLoading)
      return (
        <div className="flex items-center justify-center">
          <span>CONNECTING</span>
        </div>
      );

    // if (isConnected) return `Connected: ${address?.slice(0, 6)}...${address?.slice(-4)}`;

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
        disabled={isLoading}
      >
        {renderButtonText()}
      </Button>

      {renderSubAction()}
    </div>
  );
}
