import Image from 'next/image';
import { FC } from 'react';
import { Invite } from '@/modules/core';
import { Table, TableRow, TableCell } from '../../../table/table';

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

      <Table>
        {invitedUsers.map(user => (
          <TableRow key={user.id}>
            <TableCell>
              <Image
                src={user.invitee?.photoUrl || ''}
                alt={user.telegramUsername || ''}
                width={50}
                height={50}
                className="rounded-full border-white-translucent"
              />
              <p className="font-roboto text-lg">{user.invitee?.telegramUsername}</p>
            </TableCell>
            <TableCell className="italic text-base">
              {user.invitee?.isPremium ? 'Premium' : 'Regular'}
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </div>
  );
};
