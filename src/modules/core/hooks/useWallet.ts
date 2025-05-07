'use client';

import { useTonConnectUI, useTonAddress } from '@tonconnect/ui-react';
import { useState } from 'react';
import { SendTransactionRequest } from '@tonconnect/sdk';
import { beginCell } from '@ton/ton';
import { useLaunchParams } from '@telegram-apps/sdk-react';
/**
 * Custom hook for wallet-related operations
 */

const genratePaymentLink = (address: string, amount: number, text: string) => {
  return `https://ton.app/pay/transfer/${address}?amount=${amount * 1000000000}&text=${text}`;
};
export const useWallet = () => {
  const [tonConnectUI] = useTonConnectUI();
  const userFriendlyAddress = useTonAddress();
  const [loading, setLoading] = useState(false);
  const lp = useLaunchParams();
  const isIOS = true;

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
  const sendTonTransaction = async (
    address: string,
    amount: number,
    bostId: string,
    userId: string
  ) => {
    try {
      setLoading(true);
      const nanoTons = Math.pow(10, 9);

      const comment = beginCell()
        .storeUint(0, 32)
        .storeStringTail(JSON.stringify({ bostId, userId }))
        .endCell();

      // For iOS, we need to generate a payment link instead of direct transaction
      if (isIOS) {
        // Generate payment link with the transaction details
        const text = JSON.stringify({ bostId, userId });
        const paymentLink = genratePaymentLink(address, amount, encodeURIComponent(text));
        console.log('paymentLink', paymentLink);
        window.open(paymentLink, '_blank');
        return true;
      }

      // For other platforms, proceed with direct transaction
      const transaction: SendTransactionRequest = {
        validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes
        messages: [
          {
            address: address,
            amount: (amount * nanoTons).toString(),
            payload: comment.toBoc().toString('base64'),
          },
        ],
      };

      await tonConnectUI.sendTransaction(transaction);
      return true;
    } catch (error) {
      console.error(`Error sending TON transaction: ${error}`, error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const sendTonTxDaily = async (address: string, amount: number) => {
    try {
      setLoading(true);
      const nanoTons = Math.pow(10, 9);

      // For iOS, we need to generate a payment link instead of direct transaction
      if (isIOS) {
        const paymentLink = `https://ton.app/pay/${address}?amount=${amount * nanoTons}`;
        window.open(paymentLink, '_blank');
        return true;
      }

      const transaction: SendTransactionRequest = {
        validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes
        messages: [
          {
            address: address,
            amount: (amount * nanoTons).toString(),
          },
        ],
      };

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
    sendTonTransaction,
    sendTonTxDaily,
    isIOS,
  };
};
