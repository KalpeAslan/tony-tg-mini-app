'use client';

import { useSignal } from '@telegram-apps/sdk-react';
import { initData } from '@telegram-apps/sdk-react';
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { TelegramAuthResponse, TelegramApi } from '../../models';
import { FullLoader } from '@/components/ui';
import { usePathname } from 'next/navigation';
import { useTimeout } from 'usehooks-ts';

export const TgAuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const initDataRaw = useSignal(initData.raw);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showMinLoader, setShowMinLoader] = useState(true);

  // Set minimum loader time
  useTimeout(() => {
    setShowMinLoader(false);
  }, 1000);

  // Query for fetching user data
  const { refetch: refetchUserData, isLoading } = useQuery({
    queryKey: ['telegramMe'],
    queryFn: async () => {
      try {
        const response = await TelegramApi.telegram.me();
        console.log('response', response);

        if (response.success && response.user) {
          console.log('👤 User data fetched successfully:', response.user);
          setIsAuthenticated(true);
        } else {
          console.error('❌ Failed to fetch user data:', response.error);
          setIsAuthenticated(false);
        }

        return response;
      } catch (error) {
        console.error('❌ Error fetching user data:', error);
        setIsAuthenticated(false);
        throw error;
      }
    },
    enabled: false, // Don't run automatically
    retry: false,
  });

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

  return <>{showLoader ? <FullLoader isVisible /> : children}</>;
};
