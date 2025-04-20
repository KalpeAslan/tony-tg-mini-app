'use client';

import { BackButton } from '@/lib/components';
import { InviteFriendsButton } from '@/modules/core';

interface OutOfPlayProps {
  nextPlayTime?: {
    hours: number;
    minutes: number;
  };
  onClose: () => void;
}

export const OutOfPlay = ({ nextPlayTime, onClose }: OutOfPlayProps) => {
  return (
    <div className="max-w-[280px]">
      <div className="bg-card rounded-3xl p-8 shadow-lg border-white-translucent">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-white mb-4">OUT OF PLAYS BUDDY :(</h2>
          <div className="flex flex-col w-full font-roboto text-sm">
            <p className="text-white mb-6">Invite dudes to get more plays!</p>
            <p className="text-white mb-8">Get 1 play on any game for 1 friend invite!</p>

            {nextPlayTime && (
              <p className="text-sm text-white mb-6">
                Next play in: {nextPlayTime.hours}h {nextPlayTime.minutes}m
              </p>
            )}

            <div className="flex justify-between items-center gap-2">
              <BackButton onClick={onClose} />

              <InviteFriendsButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
