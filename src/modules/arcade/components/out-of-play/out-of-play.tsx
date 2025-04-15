'use client';

import { BackButton } from '@/lib/components';
import { EPages } from '@/lib/types';
import { InviteFriendsButton } from '@/modules/core';
import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';

interface OutOfPlayProps {
  nextPlayTime?: {
    hours: number;
    minutes: number;
  };
}

export const OutOfPlay = ({ nextPlayTime }: OutOfPlayProps) => {
  const { push } = useRouter();
  const queryClient = useQueryClient();

  const handleInviteSuccess = () => {
    // Invalidate and refetch all arcade-related queries
    queryClient.invalidateQueries({ queryKey: ['arcade'] });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-card rounded-3xl p-8 shadow-lg border-white-translucent">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-white mb-4">OUT OF PLAYS BUDDY :(</h2>
          <p className="text-white text-lg mb-6">Invite dudes to get more plays!</p>
          <p className="text-white text-lg mb-8">Get 1 play on any game for 1 friend invite!</p>

          {nextPlayTime && (
            <p className="text-sm text-white mb-6">
              Next play in: {nextPlayTime.hours}h {nextPlayTime.minutes}m
            </p>
          )}

          <div className="flex justify-between items-center gap-2">
            {/* <BackButton onClick={() => push(EPages.Invites)} /> */}

            <InviteFriendsButton onSuccess={handleInviteSuccess} />
          </div>
        </div>
      </div>
    </div>
  );
};
