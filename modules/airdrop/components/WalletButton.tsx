'use client';

import { Button } from '@/components/button';
import { useWalletStore } from '@/lib/store';
import { ButtonVariant, ButtonSize } from '@/lib/types';
import { useEffect, useState } from 'react';
import { Spinner } from '@/components/ui/spinner';

interface WalletButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
}

export function WalletButton({
  variant = 'primary',
  size = 'lg',
  fullWidth = true,
  className,
  onClick,
}: WalletButtonProps) {
  const { isConnected, connect, disconnect } = useWalletStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    if (onClick) {
      onClick();
    }

    if (isConnected) {
      setIsLoading(true);
      try {
        disconnect();
      } catch (err) {
        setError('Failed to disconnect wallet');
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(true);
      try {
        // Simulate wallet connection
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Generate a random wallet address for demo purposes
        const mockAddress = `0x${Array.from({ length: 40 }, () =>
          Math.floor(Math.random() * 16).toString(16)
        ).join('')}`;
        connect(mockAddress);
      } catch (err) {
        setError('Failed to connect wallet');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const renderSubAction = () => {
    if (error) return <p className="text-sm font-bold text-error font-roboto mt-3">{error}</p>;

    if (isConnected)
      return (
        <p
          onClick={disconnect}
          className="text-sm font-bold text-white opacity-50 font-roboto mt-3"
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
    if (isLoading)
      return (
        <div className="flex items-center justify-center">
          <Spinner size="sm" className="mr-2" />
          <span>CONNECTING</span>
        </div>
      );

    if (isConnected) return 'connected';

    return 'link $ton wallet';
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
