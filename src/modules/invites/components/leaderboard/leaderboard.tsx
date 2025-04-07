import { PackLeaderboard as PackLeaderboardComponent, Avatar } from '@/lib/components';
import { initData, useSignal } from '@telegram-apps/sdk-react';
interface PackLeaderboardProps {
  sinceDate: string;
  ownPosition: number;
  totalPositions: number;
}

export const PackLeaderboard = ({ sinceDate, ownPosition, totalPositions }: PackLeaderboardProps) => {
  const initDataUser = useSignal(initData.user);
  return <div className="bg-card border-white-translucent rounded-3xl p-4 w-full">
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2 justify-between align-center">
        <Avatar photoUrl={initDataUser?.photoUrl || ''} name={initDataUser?.username || ''} />
        <div className="flex flex-col gap-1">
          <p className="text-white text-base font-roboto"> Since {sinceDate}</p>
        </div>
      </div>
      <PackLeaderboardComponent totalPositions={totalPositions} ownPosition={ownPosition} />
    </div>
  </div>;
};
