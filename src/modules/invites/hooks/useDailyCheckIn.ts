import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { DailyCheckInApi } from '@/modules/core/models/daily-check-in';
import { appConfig } from '@/configs/app.config';
import { useWallet } from '@/modules/core/hooks';

export const useDailyCheckIn = () => {
  const queryClient = useQueryClient();
  const { isConnected, sendTonTxDaily, connect } = useWallet();

  const { data: checkInData, isLoading } = useQuery({
    queryKey: ['dailyCheckIn'],
    queryFn: () => DailyCheckInApi.checkIn.get(),
  });

  const checkInMutation = useMutation({
    mutationFn: () => DailyCheckInApi.checkIn.post(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['dailyCheckIn'] });
    },
  });

  const handleCheckIn = async (amount: number) => {
    try {
      if (!isConnected) {
        connect();
        return;
      }

      // Send TON transaction
      const success = await sendTonTxDaily(
        appConfig.tonAddress,
        amount,
      );

      if (success) {
        // After successful payment, perform the check-in
        await checkInMutation.mutateAsync();
      }
    } catch (error) {
      console.error('Error in daily check-in process:', error);
      throw error;
    }
  };

  return {
    checkInData,
    isLoading,
    handleCheckIn,
    isCheckingIn: checkInMutation.isPending,
  };
};
