'use client';

import { Icon } from '@/components/ui/icon';
import { SectionMessage, BackButton } from '@/lib/components';
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

  return (
    <div className="w-full px-4 pt-[100px]">
      <div className="flex gap-8 items-center w-full h-[55px]">
        <BackButton onClick={() => push(EPages.Invites)} />
        <div className="flex gap-2 items-center w-full">
          {!timeUntilNextPlay && (
            <SectionMessage
              message="Your Tickets"
              value={tickets}
              leftContent={<Icon size="27" name="ticket" />}
            />
          )}
          <SectionMessage message="Plays Left" value={playsLeft} />
          {timeUntilNextPlay && (
            <SectionMessage
              message="Next Play"
              value={`${timeUntilNextPlay.hours}h ${timeUntilNextPlay.minutes}m`}
            />
          )}
        </div>
      </div>
    </div>
  );
};
