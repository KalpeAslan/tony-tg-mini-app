import { useQuery } from '@tanstack/react-query';
import { TelegramApi } from '../models/telegram/telegram-api';

export interface LeaderboardData {
  myPosition: number;
  totalPositions: number;
  isLoading: boolean;
  isError: boolean;
}

export const useLeaderboard = (): LeaderboardData => {
  const { data: globalData, isLoading: isGlobalLoading } = useQuery({
    queryKey: ['globalLeaderboard'],
    queryFn: () => TelegramApi.leaderboard.getGlobal(),
  });

  const { data: positionData, isLoading: isPositionLoading } = useQuery({
    queryKey: ['leaderboardPosition'],
    queryFn: () => TelegramApi.leaderboard.getPosition(),
  });

  const isLoading = isGlobalLoading || isPositionLoading;
  const isError = !globalData || !positionData;

  return {
    myPosition: positionData?.position?.position || 0,
    totalPositions: globalData?.leaderboard?.length || 0,
    isLoading,
    isError,
  };
}; 