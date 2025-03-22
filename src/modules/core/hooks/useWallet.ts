'use client';

import { useTonConnectUI, useTonAddress } from '@tonconnect/ui-react';
import { useState } from 'react';
import { SendTransactionRequest } from '@tonconnect/sdk';
import { beginCell } from '@ton/ton';
/**
 * Custom hook for wallet-related operations
 */
export const useWallet = () => {
  const [tonConnectUI] = useTonConnectUI();
  const userFriendlyAddress = useTonAddress();
  const [loading, setLoading] = useState(false);
  
  // Check if wallet is connected
  const isConnected = !!userFriendlyAddress;
  
  // Connect wallet
  const connect = () => {
    if (!isConnected) {
      tonConnectUI.openModal();
    }
  };
  
  // Disconnect wallet
  const disconnect = () => {
    tonConnectUI.disconnect();
  };
  
  // Send TON transaction
  const sendTonTransaction = async (address: string, amount: number, bostId: string, userId: string) => {

    
    try {
      setLoading(true);
      const nanoTons = Math.pow(10, 9);

      const comment1 = beginCell()
       .storeUint(0, 32)
       .storeStringTail(JSON.stringify({bostId, userId}))
       .endCell();
      
      const transaction: SendTransactionRequest = {
        validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes
        messages: [
          {
            address: address,
            amount: (amount * nanoTons).toString(),
            payload: comment1.toBoc().toString('base64'),
          },
        ],
      };
      
      console.log('transaction', transaction);
      await tonConnectUI.sendTransaction(transaction);
      return true;
    } catch (error) {
      console.error(`Error sending TON transaction: ${error}`, error);
      return false;
    } finally {
      setLoading(false);
    }
  };
  
  return {
    isConnected,
    userFriendlyAddress,
    loading,
    connect,
    disconnect,
    sendTonTransaction
  };
}; 