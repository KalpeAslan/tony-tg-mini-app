import { useClientOnce } from '@/hooks/useClientOnce';
import {
  isTMA,
  type LaunchParams,
  mockTelegramEnv,
  parseInitData,
  retrieveLaunchParams,
} from '@telegram-apps/sdk-react';

/**
 * Mocks Telegram environment in development mode.
 */
export function useTelegramMock(): void {
  
}