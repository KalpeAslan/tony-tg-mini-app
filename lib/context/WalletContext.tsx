'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface WalletContextType {
  isConnected: boolean;
  walletAddress: string | null;
  isLoading: boolean;
  error: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  clearError: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clearError = () => {
    setError(null);
  };

  const connectWallet = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // This is a placeholder for actual wallet connection logic
      // In a real implementation, you would use a library like ethers.js or web3.js
      console.log('Connecting wallet...');
      
      // Simulate successful connection with a delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful connection
      const mockAddress = '0x' + Math.random().toString(16).slice(2, 42);
      setWalletAddress(mockAddress);
      setIsConnected(true);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      setError(error instanceof Error ? error.message : 'Failed to connect wallet');
    } finally {
      setIsLoading(false);
    }
  };

  const disconnectWallet = () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Simulate disconnection process
      setTimeout(() => {
        setIsConnected(false);
        setWalletAddress(null);
        setIsLoading(false);
      }, 500);
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
      setError(error instanceof Error ? error.message : 'Failed to disconnect wallet');
      setIsLoading(false);
    }
  };

  return (
    <WalletContext.Provider
      value={{
        isConnected,
        walletAddress,
        isLoading,
        error,
        connectWallet,
        disconnectWallet,
        clearError,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
} 