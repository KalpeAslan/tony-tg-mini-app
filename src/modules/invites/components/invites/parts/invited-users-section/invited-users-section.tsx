import Image from 'next/image';
import { FC } from 'react';
import { Invite } from '@/modules/core';

interface InvitedUsersSectionProps {
  referralPercent: number;
  invitedUsers: Invite[];
}

export const InvitedUsersSection: FC<InvitedUsersSectionProps> = ({
  referralPercent,
  invitedUsers,
}) => {
  return (
    <div className="w-full border-white-translucent rounded-3xl bg-card overflow-hidden">
      <div className="w-full p-4 flex flex-col gap-4">
        <p className="text-3xl uppercase">
          you have invited: <span className="font-bold font-roboto">{invitedUsers.length}</span>{' '}
          dudes
        </p>
        <p className="font-roboto text-lg">
          Earn {referralPercent}% from each one of you dudes shack and an additional 5% from each
          pack they purchase!
        </p>
      </div>

      <div className="flex flex-col gap-2 overflow-y-auto max-h-[300px]">
        {invitedUsers.map(user => (
          <InvitedUserItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

const InvitedUserItem = ({ user }: { user: Invite }) => {
  return (
    <div className="flex w-full justify-between align-center p-4 border-t border-tony-whiteBorderMedium">
      <div className="flex items-center gap-2">
        <Image
          src={user.invitee?.photoUrl || ''}
          alt={user.telegramUsername || ''}
          width={50}
          height={50}
          className="rounded-full border-white-translucent"
        />
        <p className="font-roboto text-lg">{user.invitee?.telegramUsername}</p>
      </div>

      <div className="flex items-center gap-2 italic text-base">
        {user.invitee?.isPremium ? 'Premium' : 'Regular'}
        {/* <p className="font-roboto italic text-lg font-bold">
          {user.rewardAmount ? formatNumber(+user.rewardAmount) : '0'}
        </p> */}
        {/* <Image
          src="/invites/coin.png"
          alt={user.invitee?.telegramUsername || 'Unknown User'}
          width={40}
          height={40}
        /> */}
      </div>
    </div>
  );
};
