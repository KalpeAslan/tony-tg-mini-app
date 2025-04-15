import { FC } from 'react';
import { DailyMissions, BigOneTimers, Banner } from './parts';
import { Button } from '@/components';
import { useDailyCheckIn } from '../../hooks';
import { useMissions } from '../../hooks/use-missions';

export const Missions: FC = () => {
  const { checkInData, handleCheckIn, isCheckingIn } = useDailyCheckIn();
  const { 
    dailyMissions, 
    oneTimeMissions, 
    isLoading,
    completeMission,
    isCompletingMission 
  } = useMissions();

  const handleDailyCheckIn = async () => {
    if (checkInData?.canCheckIn) {
      await handleCheckIn(checkInData.amount);
    }
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="flex flex-col gap-4 w-full pb-[120px] pt-4">
      {/* <Task
        title="Complete missions"
        description="Earn EXP from completing Check-Ins and Daily Missions!"
        img="/invites/tony-task.png"
        imgSize={84}
      /> */}

      <Banner />

      <div className="flex flex-row gap-2 w-full items-center">
        <div
          style={{
            background:
              'linear-gradient(90deg, rgba(255,255,255,0) 38%, rgba(255,255,255,0.590095413165266) 99%)',
          }}
          className="border-white-translucent border-2 font-roboto font-bold italic rounded-full p-2 flex flex-col text-center w-full"
        >
          <p className="text-xs">You Are On a Streak!</p>
          <p className="text-2xl">{checkInData?.streak || 0} Days</p>
        </div>
        <Button 
          fullWidth 
          variant="green" 
          onClick={handleDailyCheckIn}
          loading={isCheckingIn}
          disabled={!checkInData?.canCheckIn}
        >
          <p className="text-3xl font-bold whitespace-nowrap">Daily Check In</p>
        </Button>
      </div>

      <DailyMissions 
        missions={dailyMissions} 
        onCompleteMission={completeMission}
        isCompletingMission={isCompletingMission}
      />
      <BigOneTimers 
        missions={oneTimeMissions} 
        onCompleteMission={completeMission}
        isCompletingMission={isCompletingMission}
      />
    </div>
  );
};
