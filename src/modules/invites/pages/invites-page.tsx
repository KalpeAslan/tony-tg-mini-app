'use client';

import { AppLayout } from '@/layouts/app-layout';
import { InvitedUsersSection } from '../components';
import { Task as TaskComponent } from '@/components/task';
import { useQuery } from '@tanstack/react-query';
import { WalletApi } from '@/modules/core/models/wallet';
import { ReferralsApi } from '@/modules/core/models/referrals';
import { InviteFriendsButton } from '@/modules/core';

export function InvitesPage() {
  const { data: rewardsInfo } = useQuery({
    queryKey: ['walletRewardsInfo'],
    queryFn: () => WalletApi.wallets.rewards.info(),
  });

  const { data: invitesData } = useQuery({
    queryKey: ['referralsInvites'],
    queryFn: () => ReferralsApi.invites.getInvites(),
  });

  return (
    <AppLayout activeTab="invites">
      <div className="w-full h-full items-center justify-start pt-10 gap-6 flex flex-col">
        <div className="flex flex-col gap-2">
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
        </div>

        <div className="w-full h-full overflow-y-auto">
          <InvitedUsersSection
            referralPercent={rewardsInfo?.referralPercent || 0}
            invitedUsers={invitesData?.invites || []}
          />
        </div>
      </div>
    </AppLayout>
  );
}
