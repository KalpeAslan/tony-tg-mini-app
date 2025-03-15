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

