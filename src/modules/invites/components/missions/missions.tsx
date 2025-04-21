import { FC } from 'react';
import { DailyMissions, BigOneTimers, Banner } from './parts';
import { SectionMessage, Button } from '@/lib/components';
import { useDailyCheckIn } from '../../hooks';
import { useMissions } from '../../hooks/use-missions';
import { Mission } from '../../models/mission.model';

export const Missions: FC = () => {
  const { checkInData, handleCheckIn, isCheckingIn } = useDailyCheckIn();
  const { dailyMissions, oneTimeMissions, completeMission, isCompletingMission } = useMissions();

  const handleCompleteMission = (missionId: number) => {
    completeMission(missionId);
  };

  const handleDailyCheckIn = async () => {
    if (checkInData?.canCheckIn) {
      await handleCheckIn(checkInData.amount);
    }
  };

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
        <SectionMessage message="You Are On a Streak!" value={checkInData?.streak || 0} />
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
        missions={(dailyMissions as Mission[]) || []}
        onCompleteMission={handleCompleteMission}
        isCompletingMission={isCompletingMission}
      />
      <BigOneTimers
        missions={(oneTimeMissions as Mission[]) || []}
        onCompleteMission={handleCompleteMission}
        isCompletingMission={isCompletingMission}
      />
    </div>
  );
};
