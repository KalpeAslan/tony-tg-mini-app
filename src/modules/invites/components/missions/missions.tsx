import { FC } from 'react';
import { DailyMissions, BigOneTimers, Banner } from './parts';
import { Mission } from '../../models/mission.model';
import { Button } from '@/components';
import { useDailyCheckIn } from '../../hooks';
import { SectionMessage } from '@/lib/components';
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

      <DailyMissions missions={mockDailyMissions} />
      <BigOneTimers missions={mockBigOneTimers} />
    </div>
  );
};
