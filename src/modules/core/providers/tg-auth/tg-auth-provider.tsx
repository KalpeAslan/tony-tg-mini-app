'use client';

import { useSignal } from '@telegram-apps/sdk-react';
import { initData } from '@telegram-apps/sdk-react';
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { TelegramAuthResponse, TelegramApi } from '../../models';
import { isValidJWT } from './util';

export const TgAuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const initDataRaw = useSignal(initData.raw);
  const telegramUser = useSignal(initData.user);
  const startAppParam = useSignal(initData.startParam);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [processedStartParam, setProcessedStartParam] = useState(false);

  // Query for fetching user data
  const { refetch: refetchUserData } = useQuery({
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
          localStorage.removeItem('accessToken');
          setIsAuthenticated(false);
        }

        return response;
      } catch (error) {
        console.error('❌ Error fetching user data:', error);
        localStorage.removeItem('accessToken');
        setIsAuthenticated(false);
        throw error;
      }
    },
    enabled: false, // Don't run automatically
    retry: false,
  });

  // Create a mutation for processing startapp parameter
  const { mutate: processStartApp } = useMutation({
    mutationFn: TelegramApi.telegram.processStartApp,
    onSuccess: data => {
      console.log('✅ StartApp parameter processed successfully:', data);
      setProcessedStartParam(true);
    },
    onError: error => {
      console.error('❌ Error processing StartApp parameter:', error);
    },
  });

  // Create a mutation for the Telegram WebApp authentication
  const { mutate: authenticateTelegram } = useMutation({
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
    // Check if we already have a token in localStorage
    const existingToken = localStorage.getItem('accessToken');

    if (existingToken) {
      if (isValidJWT(existingToken)) {
        refetchUserData();
      } else {
        localStorage.removeItem('accessToken');

        if (initDataRaw) {
          console.log('initDataRaw', initDataRaw);
          authenticateTelegram(initDataRaw);
        }
      }
    } else {
      if (initDataRaw) {
        console.log('initDataRaw', initDataRaw);
        authenticateTelegram(initDataRaw);
      }
    }
  }, [initDataRaw]);

  // Process startapp parameter if it exists and user is authenticated
  useEffect(() => {
    if (isAuthenticated && startAppParam && telegramUser?.id && !processedStartParam) {
      console.log('📱 Processing startapp parameter:', startAppParam);
      processStartApp({
        telegramId: telegramUser.id.toString(),
        startAppParam: startAppParam,
      });
    }
  }, [isAuthenticated, startAppParam, telegramUser, processedStartParam]);

  const isDev = process.env.NODE_ENV === 'development';

  const isAuthenticated_ = isDev ? true : isAuthenticated;

  return <>{isAuthenticated_ ? children : <div>Not authenticated</div>}</>;
};
