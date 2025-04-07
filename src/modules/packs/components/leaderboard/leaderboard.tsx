import { useQuery } from '@tanstack/react-query';
import { TelegramApi } from '@/modules/core/models/telegram/telegram-api';
import { Loader } from '@/components/loader';
import { PackLeaderboard, Avatar } from '@/lib/components';

interface LeaderboardProps {
  name: string;
  photoUrl: string;
  myPosition: number;
}

export const Leaderboard = ({ name, photoUrl, myPosition }: LeaderboardProps) => {
  const { data: globalData, isLoading } = useQuery({
    queryKey: ['globalLeaderboard'],
    queryFn: () => TelegramApi.leaderboard.getGlobal(),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-4">
        <Loader />
      </div>
    );
  }

  const totalUsers = globalData?.leaderboard?.length!;

  return (
    <div
      className="w-full rounded-3xl p-4 flex flex-col gap-4 border-white-translucent text-center"
      style={{ background: 'var(--bg-neutral)' }}
    >
      <Avatar photoUrl={photoUrl} name={name} />
      <PackLeaderboard ownPosition={myPosition} totalPositions={totalUsers} />
    </div>
  );
};
