import { InvitedUsersSection } from './parts/invited-users-section/invited-users-section';
import { useQuery } from '@tanstack/react-query';
import { WalletApi, ReferralsApi, InviteFriendsButton } from '@/modules/core';
import { Task as TaskComponent } from '@/components/task';

export const Invites = () => {
  const { data: rewardsInfo } = useQuery({
    queryKey: ['walletRewardsInfo'],
    queryFn: () => WalletApi.wallets.rewards.info(),
  });

  const { data: invitesData } = useQuery({
    queryKey: ['referralsInvites'],
    queryFn: () => ReferralsApi.invites.getInvites(),
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
