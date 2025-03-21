import { InvitedUser } from '../../models';
import Image from 'next/image';
import { formatNumber } from '@/lib/utils';
import { FC } from 'react';

interface InvitedUsersSectionProps {
  referralPercent: number;
}

const mockInvitedUsers: InvitedUser[] = [
  {
    id: '1',
    name: 'John Doe',
    amount: 123,
    avatarUrl:
      'https://s3-alpha-sig.figma.com/img/1a48/6507/86c2355e0238118cc2eadda577290f80?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AgM2MQCGMpzHWqrJycBU66xw98WGyRj5actJC4zlcH-gQRMxEQhnkVyWQ49ylSc-Q7XpQr3ViT39nBCSnaged9vnorsxPEZ5nBNaN-DLafiIzS~2t9YxdhbuR9qMwMEYmqoa-NuJ~7rVS8mGeCrHxiJ9PohJT-3Nq6dqLIy8-XIGnM4~vklE1CkXL0rffpnAGymHzPdlYnsHsGrkivMue0MDpFRxPP16U6IpFYtWf8bCAP25hEdLWnvVjAuJ8h0o9~AEiIO9NUwSfzSJ9RjCZYJSSMyQg5FSyTGFfeEVWteWQuM0NO9qP1y5k9b4On8GfnstbqoR8bO5Cg2nbUlPiQ__',
  },

  {
    id: '2',
    name: 'John Doe',
    amount: 100000000,
    avatarUrl:
      'https://s3-alpha-sig.figma.com/img/1a48/6507/86c2355e0238118cc2eadda577290f80?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AgM2MQCGMpzHWqrJycBU66xw98WGyRj5actJC4zlcH-gQRMxEQhnkVyWQ49ylSc-Q7XpQr3ViT39nBCSnaged9vnorsxPEZ5nBNaN-DLafiIzS~2t9YxdhbuR9qMwMEYmqoa-NuJ~7rVS8mGeCrHxiJ9PohJT-3Nq6dqLIy8-XIGnM4~vklE1CkXL0rffpnAGymHzPdlYnsHsGrkivMue0MDpFRxPP16U6IpFYtWf8bCAP25hEdLWnvVjAuJ8h0o9~AEiIO9NUwSfzSJ9RjCZYJSSMyQg5FSyTGFfeEVWteWQuM0NO9qP1y5k9b4On8GfnstbqoR8bO5Cg2nbUlPiQ__',
  },
  {
    id: '3',
    name: 'John Doe',
    amount: 49736,
    avatarUrl:
      'https://s3-alpha-sig.figma.com/img/1a48/6507/86c2355e0238118cc2eadda577290f80?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AgM2MQCGMpzHWqrJycBU66xw98WGyRj5actJC4zlcH-gQRMxEQhnkVyWQ49ylSc-Q7XpQr3ViT39nBCSnaged9vnorsxPEZ5nBNaN-DLafiIzS~2t9YxdhbuR9qMwMEYmqoa-NuJ~7rVS8mGeCrHxiJ9PohJT-3Nq6dqLIy8-XIGnM4~vklE1CkXL0rffpnAGymHzPdlYnsHsGrkivMue0MDpFRxPP16U6IpFYtWf8bCAP25hEdLWnvVjAuJ8h0o9~AEiIO9NUwSfzSJ9RjCZYJSSMyQg5FSyTGFfeEVWteWQuM0NO9qP1y5k9b4On8GfnstbqoR8bO5Cg2nbUlPiQ__',
  },
  {
    id: '4',
    name: 'John Doe',
    amount: 234796345,
    avatarUrl:
      'https://s3-alpha-sig.figma.com/img/1a48/6507/86c2355e0238118cc2eadda577290f80?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AgM2MQCGMpzHWqrJycBU66xw98WGyRj5actJC4zlcH-gQRMxEQhnkVyWQ49ylSc-Q7XpQr3ViT39nBCSnaged9vnorsxPEZ5nBNaN-DLafiIzS~2t9YxdhbuR9qMwMEYmqoa-NuJ~7rVS8mGeCrHxiJ9PohJT-3Nq6dqLIy8-XIGnM4~vklE1CkXL0rffpnAGymHzPdlYnsHsGrkivMue0MDpFRxPP16U6IpFYtWf8bCAP25hEdLWnvVjAuJ8h0o9~AEiIO9NUwSfzSJ9RjCZYJSSMyQg5FSyTGFfeEVWteWQuM0NO9qP1y5k9b4On8GfnstbqoR8bO5Cg2nbUlPiQ__',
  },
];

export const InvitedUsersSection: FC<InvitedUsersSectionProps> = ({ referralPercent }) => {
  return (
    <div className="w-full border-white-translucent rounded-3xl bg-card overflow-hidden">
      <div className="w-full p-4 flex flex-col gap-4">
        <p className="text-3xl uppercase">you have invited: 7 dudes</p>
        <p className="font-roboto text-lg">
          Earn {referralPercent}% from each one of you dudes shack and an additional 5% from each
          pack they purchase!
        </p>
      </div>

      <div className="flex flex-col gap-2 overflow-y-auto h-full">
        {mockInvitedUsers.map(user => (
          <InvitedUserItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

const InvitedUserItem = ({ user }: { user: InvitedUser }) => {
  return (
    <div className="flex w-full justify-between align-center p-4 border-t border-tony-whiteBorderMedium">
      <div className="flex items-center gap-2">
        <Image
          src={user.avatarUrl}
          alt={user.name}
          width={50}
          height={50}
          className="rounded-full border-white-translucent"
        />
        <p className="font-roboto text-lg">{user.name}</p>
      </div>

      <div className="flex items-center gap-2">
        <p className="font-roboto italic text-lg font-bold">{formatNumber(user.amount)}</p>
        <Image src="/invites/coin.png" alt={user.name} width={40} height={40} />
      </div>
    </div>
  );
};
