'use client';

import { useSignal } from '@telegram-apps/sdk-react';
import { initData } from '@telegram-apps/sdk-react';
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { TelegramAuthResponse, TelegramApi, BoostsApi, ReferralsApi, DailyCheckInApi } from '../../models';
import { FullLoader } from '@/components/ui';
import { useTimeout } from 'usehooks-ts';
import { useMe } from '../../hooks';

export const TgAuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const initDataRaw = useSignal(initData.raw);
  const [showMinLoader, setShowMinLoader] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { refetchUserData, isLoading: isUserLoading } = useMe();

  // Set minimum loader time
  useTimeout(() => {
    setShowMinLoader(false);
  }, 1000);

  // Global Leaderboard Query
  const { isLoading: isGlobalLeaderboardLoading } = useQuery({
    queryKey: ['globalLeaderboard'],
    queryFn: () => TelegramApi.leaderboard.getGlobal(),
    enabled: isAuthenticated,
  });

  // User Position Query
  const { isLoading: isPositionLoading } = useQuery({
    queryKey: ['leaderboardPosition'],
    queryFn: () => TelegramApi.leaderboard.getPosition(),
    enabled: isAuthenticated,
  });

  // All Boosts Query
  const { isLoading: isBoostsLoading } = useQuery({
    queryKey: ['boosts'],
    queryFn: BoostsApi.boosts.getAll,
    enabled: isAuthenticated,
  });

  // User Active Boosts Query
  const { isLoading: isActiveBoostsLoading } = useQuery({
    queryKey: ['userActiveBoosts'],
    queryFn: () => BoostsApi.boosts.getUserActive(),
    enabled: isAuthenticated,
  });

  // Referral Invites Query
  const { isLoading: isInvitesLoading } = useQuery({
    queryKey: ['referralsInvites'],
    queryFn: () => ReferralsApi.invites.getInvites(),
    enabled: isAuthenticated,
  });

  // Daily Check-In Query
  const { isLoading: isDailyCheckInLoading } = useQuery({
    queryKey: ['dailyCheckIn'],
    queryFn: () => DailyCheckInApi.checkIn.get(),
    enabled: isAuthenticated,
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

        // After successful authentication, fetch user data and set authenticated state
        refetchUserData();
        setIsAuthenticated(true);
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
    // Always authenticate with Telegram when initDataRaw is available
    if (initDataRaw) {
      console.log('initDataRaw', initDataRaw);
      authenticateTelegram(initDataRaw);
    }
  }, [initDataRaw]);

  const isDev = process.env.NODE_ENV === 'development';
  const isAuthenticated_ = isDev ? true : isAuthenticated;

  // Check if any query is still loading
  const isLoading = 
    isUserLoading || 
    isGlobalLeaderboardLoading || 
    isPositionLoading || 
    isBoostsLoading || 
    isActiveBoostsLoading || 
    isInvitesLoading ||
    isDailyCheckInLoading;

  const showLoader = isLoading || isPending || !isAuthenticated_ || showMinLoader;

  return <>{showLoader ? <FullLoader isVisible /> : children}</>;
};
