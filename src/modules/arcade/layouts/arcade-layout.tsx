'use client';
import React, { ReactNode, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useCountdown } from 'usehooks-ts';
import { ArcadeApi } from '../models';
import { ArcadeHeader } from '../components';
import { ArcadeStats, ArcadeNextPlay } from '../models/arcade-model';

interface ArcadeLayoutProps {
  children: ReactNode;
}

interface ArcadeChildProps {
  arcadeStats?: ArcadeStats;
  nextPlayTime?: ArcadeNextPlay;
}

export const ArcadeLayout = ({ children }: ArcadeLayoutProps) => {
  const { data: stats } = useQuery({
    queryKey: ['arcade', 'stats'],
    queryFn: async () => {
      const response = await ArcadeApi.stats.get();
      return response;
    },
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  const { data: nextPlayTime } = useQuery({
    queryKey: ['arcade', 'nextPlay'],
    queryFn: async () => {
      const response = await ArcadeApi.nextPlay.get();
      return response.nextPlay;
    },
    refetchInterval: 60000, // Refetch every minute
  });

  // Calculate total seconds for countdown
  const totalSeconds = stats?.timeUntilNextPlay 
    ? (stats.timeUntilNextPlay.hours * 3600) + (stats.timeUntilNextPlay.minutes * 60)
    : 0;

  const [count, { startCountdown, stopCountdown, resetCountdown }] = useCountdown({
    countStart: totalSeconds,
    intervalMs: 1000, // Update every second
  });

  // Start countdown when tickets are zero and we have timeUntilNextPlay
  useEffect(() => {
    if (stats?.tickets === 0 && totalSeconds > 0) {
      startCountdown();
    } else {
      stopCountdown();
      resetCountdown();
    }
  }, [stats?.tickets, totalSeconds, startCountdown, stopCountdown, resetCountdown]);

  // Calculate hours, minutes and seconds from count
  const hours = Math.floor(count / 3600);
  const minutes = Math.floor((count % 3600) / 60);
  const seconds = count % 60;

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <div className="absolute top-0 left-0 w-full">
        <ArcadeHeader 
          tickets={stats?.tickets ?? 0}
          playsLeft={stats?.playsLeft ?? 0}
          timeUntilNextPlay={stats?.tickets === 0 ? { 
            hours: stats?.timeUntilNextPlay?.hours ?? 0, 
            minutes: stats?.timeUntilNextPlay?.minutes ?? 0 
          } : undefined}
        />
      </div>
      {children && React.isValidElement<ArcadeChildProps>(children) 
        ? React.cloneElement(children, { arcadeStats: stats, nextPlayTime })
        : children
      }
    </div>
  );
};
