import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WalletState {
  // Connection state
  isConnected: boolean;
  walletAddress: string | null;
  
  // Actions
  setConnected: (connected: boolean) => void;
  setWalletAddress: (address: string | null) => void;
  connect: (address?: string) => void;
  disconnect: () => void;
}

export const useWalletStore = create<WalletState>()(
  persist(
    (set) => ({
      // Initial state
      isConnected: false,
      walletAddress: null,
      
      // Actions
      setConnected: (connected) => set({ isConnected: connected }),
      setWalletAddress: (address) => set({ walletAddress: address }),
      connect: (address = '0x1234567890abcdef1234567890abcdef12345678') => 
        set({ isConnected: true, walletAddress: address }),
      disconnect: () => set({ isConnected: false, walletAddress: null }),
    }),
    {
      name: 'wallet-storage', // name for the localStorage key
    }
  )
); 