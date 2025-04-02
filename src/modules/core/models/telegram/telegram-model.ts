/**
 * Interface for Telegram WebApp authentication request
 */
export interface TelegramAuthWebAppRequest {
  initData: string;
}

/**
 * Interface for Telegram user data as returned by the API
 */
export interface TelegramUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isPremium: boolean;
  telegramId: string;
  telegramUsername: string;
  referralCode: string;
}

/**
 * Interface for Telegram WebApp authentication response
 */
export interface TelegramAuthResponse {
  success: boolean;
  access_token?: string;
  user?: TelegramUser;
  error?: string;
}

/**
 * Interface for Telegram Me endpoint response
 */
export interface TelegramMeResponse {
  success: boolean;
  user?: {
    id: string;
    email: string;
  };
  error?: string;
}

/**
 * Interface for Telegram referral link response
 */
export interface TelegramReferralLinkResponse {
  success: boolean;
  referralLink?: string;
  error?: string;
}

/**
 * Interface for leaderboard entry
 */
export interface LeaderboardEntry {
  userId: string;
  position: number;
  totalBosts: number;
  totalValue: number;
  totalUsers: number;
}

/**
 * Interface for global leaderboard response
 */
export interface TelegramGlobalLeaderboardResponse {
  success: boolean;
  leaderboard: LeaderboardEntry[];
  error?: string;
}

/**
 * Interface for user position in leaderboard response
 */
export interface TelegramLeaderboardPositionResponse {
  success: boolean;
  position?: {
    userId: string;
    position: number;
    totalBosts: number;
    totalValue: number;
    totalUsers: number;
  };
  error?: string;
}

