'use client';

import { SectionMessage, BackButton, Icon } from '@/lib/components';
import { EPages } from '@/lib/types';
import { useRouter } from 'next/navigation';

interface ArcadeHeaderProps {
  tickets: number;
  playsLeft: number;
  timeUntilNextPlay?: {
    hours: number;
    minutes: number;
  };
}

export const ArcadeHeader = ({ tickets, playsLeft, timeUntilNextPlay }: ArcadeHeaderProps) => {
  const { push } = useRouter();
  const isPlaysLeftEmpty = playsLeft === 0;

  return (
    <div className="w-full px-4 pt-[100px]">
      <div className="flex gap-8 items-center w-full h-[55px]">
        <BackButton onClick={() => push(EPages.Invites)} />
        <div className="flex gap-2 items-center w-full">
          {!isPlaysLeftEmpty && (
            <SectionMessage
              message="Your Tickets"
              value={tickets}
              leftContent={<Icon size="27" name="ticket" />}
            />
          )}
          <SectionMessage message="Plays Left" value={playsLeft} />
          {isPlaysLeftEmpty && timeUntilNextPlay && (
            <SectionMessage
              message="Next Play"
              value={`${timeUntilNextPlay?.hours}h ${timeUntilNextPlay?.minutes}m`}
            />
          )}
        </div>
      </div>
    </div>
  );
};
