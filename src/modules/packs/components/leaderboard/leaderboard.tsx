import { Icon } from '@/components/ui';
import Image from 'next/image';
import { formatNumber } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import { TelegramApi } from '@/modules/core/models/telegram/telegram-api';
import { Loader } from '@/components/loader';

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

  const totalUsers = globalData?.leaderboard?.length;

  return (
    <div
      className="w-full rounded-3xl p-4 flex flex-col gap-4 border-white-translucent text-center"
      style={{ background: 'var(--bg-neutral)' }}
    >
      <div className="flex justify-center gap-2 items-center">
        <Image src={photoUrl} alt="photo" width={44} height={44} className="rounded-full" />
        <p className="text-white text-base font-roboto">{name}</p>
      </div>

      <div className="flex gap-2 items-center justify-center">
        <div>
          <Icon name="leaderboard" size={30} />
        </div>

        <div>
          <p className="font-bold font-roboto text-xs">Pack Leaderboard:</p>
          <p className="text-base">
            you ARE <span className="font-roboto color-yellow">{formatNumber(myPosition)}</span> out
            of <span className="font-roboto color-yellow">{totalUsers}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
