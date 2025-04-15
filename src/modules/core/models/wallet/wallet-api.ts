import { axiosInstance } from '@/configs/axios.config';
import { WalletBalanceResponse, WalletRewardsInfoResponse } from './wallet-model';

export const WalletApi = {
  wallets: {
    balance: async (): Promise<WalletBalanceResponse> => {
      try {
        const response = await axiosInstance.get('/wallets/balance');
        return response.data;
      } catch (error) {
        console.error('Error fetching wallet balance:', error);
        throw error;
      }
    },
    rewards: {
      info: async (): Promise<WalletRewardsInfoResponse> => {
        try {
          // const response = await axiosInstance.get('/wallets/rewards/info');
          // return response.data;
          return {
            success: true,
            premiumReward: 333333,
            regularReward: 33333,
            referralPercent: 5,
          };
        } catch (error) {
          console.error('Error fetching wallet rewards info:', error);
          throw error;
        }
      },
    },
  },
};
