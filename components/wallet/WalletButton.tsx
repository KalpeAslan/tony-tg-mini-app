'use client';

import { Button } from '@/components/button';
import { useWallet } from '@/lib/context/WalletContext';
import { ButtonVariant, ButtonSize } from '@/lib/types';
import { useEffect } from 'react';
import { Spinner } from '@/components/ui/spinner';

interface WalletButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  connectText?: string;
  disconnectText?: string;
}

export function WalletButton({
  variant = 'primary',
  size = 'lg',
  fullWidth = true,
  className = 'mb-4',
  connectText = 'CONNECT WALLET',
  disconnectText = 'DISCONNECT WALLET',
}: WalletButtonProps) {
  const { 
    isConnected, 
    walletAddress, 
    connectWallet, 
    disconnectWallet, 
    isLoading,
    error,
    clearError
  } = useWallet();

  // Clear error after 5 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        clearError();
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [error, clearError]);

  const handleClick = async () => {
    if (isConnected) {
      disconnectWallet();
    } else {
      await connectWallet();
    }
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
        {isLoading ? (
          <div className="flex items-center justify-center">
            <Spinner size="sm" className="mr-2" />
            <span>CONNECTING...</span>
          </div>
        ) : (
          isConnected ? disconnectText : connectText
        )}
      </Button>
      
      {error ? (
        <p className="text-red-500 text-sm mb-2">{error}</p>
      ) : (
        <p className="text-[#a67fc2]">
          {isConnected 
            ? `Connected: ${walletAddress?.slice(0, 6)}...${walletAddress?.slice(-4)}` 
            : 'Wallet Not Connected'}
        </p>
      )}
    </div>
  );
} 