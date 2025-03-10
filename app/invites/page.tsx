'use client';

import { useRouter } from 'next/navigation';
import { PurpleLayout } from '@/components/layouts/purple-layout';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/button';
import { ParachuteIcon } from '@/components/parachute-icon';
import { CharacterIcon } from '@/components/character-icon';
import { InviteCard } from '@/components/containers/invite-card';
import {
  InvitedUsersSection,
  InvitedUserItem,
} from '@/components/containers/invited-users-section';

export default function InvitesPage() {
  const router = useRouter();

  // Mock data for invited users
  const invitedUsers = [
    {
      id: 1,
      name: 'Frank',
      amount: '1,000,000,000,000',
      avatarUrl: '/placeholder.svg?height=40&width=40',
    },
    {
      id: 2,
      name: 'Frank',
      amount: '1,000,000,000,000',
      avatarUrl: '/placeholder.svg?height=40&width=40',
    },
    {
      id: 3,
      name: 'Frank',
      amount: '1,000,000,000,000',
      avatarUrl: '/placeholder.svg?height=40&width=40',
    },
    {
      id: 4,
      name: 'Frank',
      amount: '1,000,000,000,000',
      avatarUrl: '/placeholder.svg?height=40&width=40',
    },
    {
      id: 5,
      name: 'Frank',
      amount: '1,000,000,000,000',
      avatarUrl: '/placeholder.svg?height=40&width=40',
    },
    {
      id: 6,
      name: 'Frank',
      amount: '1,000,000,000,000',
      avatarUrl: '/placeholder.svg?height=40&width=40',
    },
  ];

  return (
    <PurpleLayout>
      {/* Top section with parachute and balance */}
      <div className="w-full max-w-md flex justify-between items-start mt-4 mb-2">
        <ParachuteIcon />
        <div className="bg-[#6d3e95] rounded-full py-2 px-6 text-white font-bold text-lg shadow-md">
          1,000,000,000,000
        </div>
      </div>

      {/* Claim button */}
      <div className="w-full max-w-md mb-6">
        <Button variant="green" size="lg" fullWidth>
          CLAIM
        </Button>
      </div>

      {/* Invite cards */}
      <InviteCard
        title="INVITE DUDES"
        description="Tony Coins by inviting friends through you referral link"
        highlight="33,333"
        icon={<CharacterIcon variant="blue" />}
      />

      <InviteCard
        title="INVITE TELEGRAM PREMIUM DUDES"
        description="Tony Coins by inviting friends with Telegram Premium"
        highlight="333,333"
        icon={<CharacterIcon variant="green" />}
      />

      {/* Invited users section */}
      <InvitedUsersSection count={7}>
        {invitedUsers.map(user => (
          <InvitedUserItem
            key={user.id}
            name={user.name}
            amount={user.amount}
            avatarUrl={user.avatarUrl}
          />
        ))}
      </InvitedUsersSection>

      {/* Bottom navigation */}
      <Navigation
        activeTab="invites"
        onTabChange={tab => {
          if (tab !== 'invites') {
            router.push(tab === 'shack' ? '/' : `/${tab}`);
          }
        }}
      />
    </PurpleLayout>
  );
}
