import { FC, useState, useEffect, useRef } from 'react';
import { DailyMissions, BigOneTimers, Banner } from './parts';
import { SectionMessage, Button } from '@/lib/components';
import { useDailyCheckIn } from '../../hooks';
import { useMissions } from '../../hooks/use-missions';
import { Mission } from '../../models/mission.model';
import Confetti from 'react-confetti';

const PENDING_CONFETTI_KEY = 'pendingConfetti';

export const Missions: FC = () => {
  const { checkInData, handleCheckIn, isCheckingIn } = useDailyCheckIn();
  const { dailyMissions, oneTimeMissions, completeMission, isCompletingMission } = useMissions();
  const [showConfetti, setShowConfetti] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up intersection observer to detect when missions component is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Check for pending confetti when the component becomes visible
            const pendingConfetti = localStorage.getItem(PENDING_CONFETTI_KEY);
            if (pendingConfetti === 'true') {
              setShowConfetti(true);
              localStorage.removeItem(PENDING_CONFETTI_KEY);
              setTimeout(() => setShowConfetti(false), 5000);
            }
          }
        });
      },
      { threshold: 0.1 } // Trigger when at least 10% of the component is visible
    );

    // Start observing the container
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      // Clean up observer on component unmount
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleCompleteMission = (missionId: number) => {
    // completeMission(missionId);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  }

  const setPendingConfetti = () => {
    // Set pending confetti in localStorage before navigating away
    setTimeout(() => {
      localStorage.setItem(PENDING_CONFETTI_KEY, 'true');
    }, 1000)
  };

  const handleDailyCheckIn = async () => {
    if (checkInData?.canCheckIn) {
      await handleCheckIn(checkInData.amount);
    }
  };

  return (
    <div ref={containerRef} className="flex flex-col gap-4 w-full pb-[120px] pt-4">
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
        setPendingConfetti={setPendingConfetti}
      />
      <BigOneTimers
        missions={oneTimeMissions as Mission[] || []}
        onCompleteMission={handleCompleteMission}
        isCompletingMission={isCompletingMission}
        setPendingConfetti={setPendingConfetti}
      />
    </div>
  );
};
