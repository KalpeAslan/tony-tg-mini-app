import { PackLeaderboard, Avatar } from '@/lib/components';
import { useLeaderboard } from '@/modules/core/hooks';
import { Loader } from '@/components/loader';

interface LeaderboardProps {
  name: string;
  photoUrl: string;
}

export const Leaderboard = ({ name, photoUrl }: LeaderboardProps) => {
  const { myPosition, totalPositions, isLoading } = useLeaderboard();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-4">
        <Loader />
      </div>
    );
  }

  return (
    <div
      className="w-full rounded-3xl p-4 flex flex-col gap-4 border-white-translucent text-center"
      style={{ background: 'var(--bg-neutral)' }}
    >
      <Avatar photoUrl={photoUrl} name={name} />
      <PackLeaderboard ownPosition={myPosition} totalPositions={totalPositions} />
    </div>
  );
};
