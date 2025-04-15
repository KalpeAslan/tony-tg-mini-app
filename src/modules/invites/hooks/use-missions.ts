import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { MissionApi } from '../api/mission-api';

export const useMissions = () => {
  const queryClient = useQueryClient();

  // Missions Query
  const { data: missions, isLoading: isMissionsLoading } = useQuery({
    queryKey: ['missions'],
    queryFn: () => MissionApi.getAll(),
  });

  // User Missions Query
  const { isLoading: isUserMissionsLoading } = useQuery({
    queryKey: ['userMissions'],
    queryFn: () => MissionApi.getUserCompleted(),
  });

  // Daily Missions Query
  const { data: dailyMissions, isLoading: isDailyMissionsLoading } = useQuery({
    queryKey: ['dailyMissions'],
    queryFn: () => MissionApi.getDaily(),
  });

  // One-Time Missions Query
  const { data: oneTimeMissions, isLoading: isOneTimeMissionsLoading } = useQuery({
    queryKey: ['oneTimeMissions'],
    queryFn: () => MissionApi.getOneTime(),
  });

  // User Daily Completed Missions Query
  const { isLoading: isUserDailyCompletedLoading } = useQuery({
    queryKey: ['userDailyCompletedMissions'],
    queryFn: () => MissionApi.getUserDailyCompleted(),
  });

  const completeMissionMutation = useMutation({
    mutationFn: (missionId: number) => MissionApi.complete({ missionId }),
    onSuccess: () => {
      // Invalidate all mission queries to refetch the data
      queryClient.invalidateQueries({ queryKey: ['missions'] });
      queryClient.invalidateQueries({ queryKey: ['userMissions'] });
      queryClient.invalidateQueries({ queryKey: ['dailyMissions'] });
      queryClient.invalidateQueries({ queryKey: ['oneTimeMissions'] });
      queryClient.invalidateQueries({ queryKey: ['userDailyCompletedMissions'] });
    },
  });

  return {
    dailyMissions: dailyMissions || [],
    oneTimeMissions: oneTimeMissions || [],
    isLoading: isMissionsLoading || isUserMissionsLoading || isDailyMissionsLoading || isOneTimeMissionsLoading || isUserDailyCompletedLoading,
    completeMission: completeMissionMutation.mutate,
    isCompletingMission: completeMissionMutation.isPending,
  };
};
