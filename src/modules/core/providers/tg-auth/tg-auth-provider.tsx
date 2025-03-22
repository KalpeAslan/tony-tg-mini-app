'use client';

import { useSignal } from '@telegram-apps/sdk-react';
import { initData } from '@telegram-apps/sdk-react';
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { TelegramAuthResponse, TelegramApi } from '../../models';
import { FullLoader } from '@/components/ui';
import { useTimeout } from 'usehooks-ts';
import { useMe } from '../../hooks';

export const TgAuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const initDataRaw = useSignal(initData.raw);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showMinLoader, setShowMinLoader] = useState(true);

  const { refetchUserData, isLoading } = useMe();

  // Set minimum loader time
  useTimeout(() => {
    setShowMinLoader(false);
  }, 1000);

  // Query for fetching user data

  // Create a mutation for the Telegram WebApp authentication
  const { mutate: authenticateTelegram, isPending } = useMutation({
    mutationFn: async (initData: string) => await TelegramApi.auth.webApp({ initData }),
    onSuccess: (data: TelegramAuthResponse) => {
      console.log('✅ Authentication response received:', { success: data.success });
      console.log('data', data);

      if (data.success && data.access_token) {
        console.log('🔑 Valid JWT token received');
        localStorage.setItem('accessToken', data.access_token);
        console.log('🎉 Authentication successful', {
          userId: data.user?.id,
          username: data.user?.telegramUsername,
          isPremium: data.user?.isPremium,
        });

        // After successful authentication, fetch user data
        refetchUserData();
      }
    },
    onError: error => {
      console.error('❌ Authentication error:', error);
      setIsAuthenticated(false);
    },
    retry: false,
    retryDelay: 0,
    networkMode: 'always',
    gcTime: 0,
  });

  useEffect(() => {
    // Always authenticate with Telegram when initDataRaw is available
    if (initDataRaw) {
      console.log('initDataRaw', initDataRaw);
      authenticateTelegram(initDataRaw);
    }
  }, [initDataRaw]);

  const isDev = process.env.NODE_ENV === 'development';

  const isAuthenticated_ = isDev ? true : isAuthenticated;

  const showLoader = isLoading || isPending || !isAuthenticated_ || showMinLoader;

  return <>{children}</>;
};
