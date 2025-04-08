import { FC } from 'react';
import { DailyMissions, BigOneTimers, Banner } from './parts';
import { Mission } from '../../models/mission.model';
import { Button } from '@/components';
import { useDailyCheckIn } from '../../hooks';

// Mock data for demonstration
const mockDailyMissions: Mission[] = [
  {
    name: 'Engage In Announcement Channel',
    description: 'Dude... its time to catch up on Tony news and leave a like!',
    type: 'Daily',
    exp: 10,
    url: 'https://t.me/durov',
    isDone: false,
  },
  {
    name: '#notlifier',
    description: 'Check in with Tony on his Instagram Page! Leave a comment or smthn...',
    type: 'Daily',
    exp: 10,
    url: 'https://instagram.com/notlifier',
    isDone: false,
  },
];

const mockBigOneTimers: Mission[] = [
  {
    name: 'Follow Announcements',
    description: 'Follow Tonys Announcement Channel!',
    type: 'Big One Timer',
    exp: 50,
    url: 'https://t.me/durov',
    isDone: false,
  },
  {
    name: 'Follow on X',
    description: 'Follow Tony on X!',
    type: 'Big One Timer',
    exp: 50,
    url: 'https://x.com/tony',
    isDone: false,
  },
  {
    name: 'Follow on Instagram!',
    description: 'Show Tony love on his Insta page!',
    type: 'Big One Timer',
    exp: 50,
    url: 'https://instagram.com/tony',
    isDone: false,
  },
];

export const Missions: FC = () => {
  const { checkInData, handleCheckIn, isCheckingIn } = useDailyCheckIn();

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

      <DailyMissions missions={mockDailyMissions} />
      <BigOneTimers missions={mockBigOneTimers} />
    </div>
  );
};
