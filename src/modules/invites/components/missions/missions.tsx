import { FC } from 'react';
import { DailyMissions, BigOneTimers } from './parts';
import { Mission } from '../../models/mission.model';
import Image from 'next/image';

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
  return (
    <div className="flex flex-col gap-4 w-full pb-[120px] pt-4">
      {/* <Task
        title="Complete missions"
        description="Earn EXP from completing Check-Ins and Daily Missions!"
        img="/invites/tony-task.png"
        imgSize={84}
      /> */}

      <div className="bg-card flex w-full min-h-[105px] border-white-translucent rounded-3xl p-6 h-[137px] relative">
        <div>
          <p className="text-2xl font-roboto">Complete missions</p>
          <p className="text-sm font-roboto">
            Earn <span className='color-yellow'>EXP</span> from completing <span className='color-yellow'>Check-Ins</span> and <span className='color-yellow'>Daily Missions</span>!
          </p>
        </div>
        <div className="w-[157px]">
          <Image
            className="absolute right-0 bottom-0"
            src="/invites/tony-task.png"
            alt="tony-task"
            width={157}
            height={157}
          />
        </div>
      </div>

      <DailyMissions missions={mockDailyMissions} />
      <BigOneTimers missions={mockBigOneTimers} />
    </div>
  );
};
