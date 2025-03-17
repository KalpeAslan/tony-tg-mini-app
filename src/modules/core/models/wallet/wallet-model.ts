/**
 * Interface for Wallet Balance response
 */
export interface WalletBalanceResponse {
  success: boolean;
  balance: number;
  error?: string;
}

/**
 * Interface for Wallet Rewards Info response
 */
export interface WalletRewardsInfoResponse {
  success: boolean;
  premiumReward: number;
  regularReward: number;
  referralPercent: number;
  error?: string;
} 