import { FC, useState } from 'react';
import { DailyMissions, BigOneTimers, Banner } from './parts';
import { SectionMessage } from '@/lib/components';
import { Button } from '@/components';
import { useDailyCheckIn } from '../../hooks';
import { useMissions } from '../../hooks/use-missions';
import { Mission } from '../../models/mission.model';
import Confetti from 'react-confetti';


export const Missions: FC = () => {
  const { checkInData, handleCheckIn, isCheckingIn } = useDailyCheckIn();
  const { dailyMissions, oneTimeMissions, completeMission, isCompletingMission } = useMissions();
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCompleteMission = (missionId: number) => {
    completeMission(missionId);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  }

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
      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        </div>
      )}

      <DailyMissions
        missions={dailyMissions as Mission[] || []}
        onCompleteMission={handleCompleteMission}
        isCompletingMission={isCompletingMission}
      />
      <BigOneTimers
        missions={oneTimeMissions as Mission[] || []}
        onCompleteMission={handleCompleteMission}
        isCompletingMission={isCompletingMission}
      />
    </div>
  );
};
