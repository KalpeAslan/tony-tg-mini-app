'use client';

import { useSignal } from '@telegram-apps/sdk-react';
import { initData } from '@telegram-apps/sdk-react';
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { TelegramApi } from '@/modules/core/api/models/telegram/telegram-api';
import { TelegramAuthResponse } from '@/modules/core/api';
import { isValidJWT } from './util';
export const TgAuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const initDataRaw = useSignal(initData.raw);

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
      }
    },
    onError: error => {
      console.error('❌ Authentication error:', error);
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
      console.log('🔍 Found existing token in localStorage');

      if (isValidJWT(existingToken)) {
        console.log('✅ Existing token is valid');
        // setIsAuthenticated(true);
      } else {
        console.log('❌ Existing token is invalid, removing from localStorage');
        localStorage.removeItem('accessToken');
      }
      return;
    } else {
      if (initDataRaw) {
        authenticateTelegram(initDataRaw);
      }
    }
  }, [initDataRaw]);

  return <>{children}</>;
};
