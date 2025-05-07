'use client';

import { useSignal } from '@telegram-apps/sdk-react';
import { initData } from '@telegram-apps/sdk-react';
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  TelegramAuthResponse,
  TelegramApi,
  BoostsApi,
  ReferralsApi,
  DailyCheckInApi,
} from '../../models';
import { FullLoader } from '@/lib/components';
import { useTimeout } from 'usehooks-ts';
import { useMe } from '../../hooks';
import { MissionApi } from '@/modules/invites/api/mission-api';
import { storageService } from '../../repository';


export const TgAuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const initDataRaw = useSignal(initData.raw);
  const [showMinLoader, setShowMinLoader] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log('initDataRaw', initDataRaw);

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

  // Missions Query
  const { isLoading: isMissionsLoading } = useQuery({
    queryKey: ['missions'],
    queryFn: () => MissionApi.getAll(),
    enabled: isAuthenticated,
  });

  // Daily Missions Query
  const { isLoading: isDailyMissionsLoading } = useQuery({
    queryKey: ['dailyMissions'],
    queryFn: () => MissionApi.getDaily(),
    enabled: isAuthenticated,
  });

  // One-Time Missions Query
  const { isLoading: isOneTimeMissionsLoading } = useQuery({
    queryKey: ['oneTimeMissions'],
    queryFn: () => MissionApi.getOneTime(),
    enabled: isAuthenticated,
  });

  // Create a mutation for the Telegram WebApp authentication
  const { mutate: authenticateTelegram, isPending } = useMutation({
    mutationFn: async (initData: string) => await TelegramApi.auth.webApp({ initData }),
    onSuccess: (data: TelegramAuthResponse) => {
      if (data.success && data.access_token) {
        storageService.setAccessToken(data.access_token);
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
      storageService.setTelegramMockedData(initDataRaw);
    }
  }, [initDataRaw]);

  const isDev = process.env.NODE_ENV === 'development';
  const isAuthenticated_ = isDev ? true : isAuthenticated;

  // Check if any query is still loading
  const isLoading =
    isUserLoading ||
    isMissionsLoading ||
    isDailyMissionsLoading ||
    isOneTimeMissionsLoading ||
    isGlobalLeaderboardLoading ||
    isPositionLoading ||
    isBoostsLoading ||
    isActiveBoostsLoading ||
    isInvitesLoading ||
    isDailyCheckInLoading;

  const showLoader = isLoading || isPending || !isAuthenticated_ || showMinLoader;

  return <>{showLoader ? <FullLoader isVisible /> : children}</>;
};
