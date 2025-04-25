import { FC, useState, useEffect } from 'react';
import { DailyMissions, BigOneTimers, Banner } from './parts';
import { SectionMessage, Button } from '@/lib/components';
import { useDailyCheckIn } from '../../hooks';
import { useMissions } from '../../hooks/use-missions';
import { Mission } from '../../models/mission.model';
import Confetti from 'react-confetti';

export const Missions: FC = () => {
  const { checkInData, handleCheckIn, isCheckingIn } = useDailyCheckIn();
  const { dailyMissions, oneTimeMissions, completeMission, isCompletingMission } = useMissions();
  const [pendingMissionId, setPendingMissionId] = useState<number | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  // Check localStorage on mount for completed mission (case: tab was closed and reopened)
  useEffect(() => {
    const completedMissionId = localStorage.getItem('completedMissionId');
    if (completedMissionId && !showConfetti) {
      console.log('Showing confetti on page load due to completed mission in localStorage');
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
        localStorage.removeItem('completedMissionId'); // Clear after showing confetti
        console.log('Confetti cleared, localStorage reset');
      }, 3000); // Confetti duration
    }
  }, []);

  // Handle mission completion
  const handleCompleteMission = async (missionId: number) => {
    try {
      console.log('Completing mission:', missionId);
      // await completeMission(missionId); // Mark mission as completed
      setTimeout(() => {
        localStorage.setItem('completedMissionId', missionId.toString()); // Save for closed tab case
        setPendingMissionId(missionId); // Set for open tab case
      }, 500);
    } catch (error) {
      console.error('Failed to complete mission:', error);
      localStorage.removeItem('completedMissionId'); // Clear on error
      setPendingMissionId(null);
    }
  };

  // Detect user return to tab (case: tab remains open)
  useEffect(() => {
    const handleFocus = () => {
      if (pendingMissionId !== null && !showConfetti) {
        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
          setPendingMissionId(null);
          localStorage.removeItem('completedMissionId'); // Clear after showing confetti
        }, 3000); // Confetti duration
      }
    };

    window.addEventListener('focus', handleFocus);
    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, [pendingMissionId, showConfetti]);

  const handleDailyCheckIn = async () => {
    if (checkInData?.canCheckIn) {
      await handleCheckIn(checkInData.amount);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full pb-[120px] pt-4">
      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <Confetti
            gravity={0.7}
            numberOfPieces={500}
            width={window.innerWidth}
            height={window.innerHeight}
          />
        </div>
      )}
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
