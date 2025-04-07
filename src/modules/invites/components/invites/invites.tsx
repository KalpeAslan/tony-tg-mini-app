import { FC } from 'react';
import { InvitedUsersSection } from './parts/invited-users-section/invited-users-section';
import { InviteFriendsButton, InvitesResponse, WalletApi } from '@/modules/core';
import { useQuery } from '@tanstack/react-query';

interface InvitesProps {
  invitesData: InvitesResponse;
}

export const Invites: FC<InvitesProps> = ({ invitesData }) => {
  const { data: rewardsInfo } = useQuery({
    queryKey: ['walletRewardsInfo'],
    queryFn: () => WalletApi.wallets.rewards.info(),
  });

  return (
    <>
      <div className="w-full h-full pb-[100px] flex flex-col gap-6">
        {/* <div className="flex flex-col gap-2">
          <TaskComponent
            title="Invite dudes"
            description={`Earn ${rewardsInfo?.regularReward || ''} Tony Coins by inviting friends through you referral link`}
            img="/invites/with-coin.png"
          />

          <TaskComponent
            title="Invite telegram premium dudes"
            description={`Earn ${rewardsInfo?.premiumReward || ''} Tony Coins by inviting friends with Telegram Premium`}
            img="/invites/on-rocket.png"
          />

          <InviteFriendsButton className="flex items-center text-3xl" />
        </div> */}

        <InviteFriendsButton className="flex items-center text-3xl" />

        <InvitedUsersSection
          referralPercent={rewardsInfo?.referralPercent || 0}
          invitedUsers={invitesData?.invites?.invites || []}
        />
      </div>
    </>
  );
};
