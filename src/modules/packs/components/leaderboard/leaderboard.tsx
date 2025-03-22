import { Icon } from '@/components/ui';
import Image from 'next/image';
import { formatNumber } from '@/lib/utils';
interface LeaderboardProps {
  name: string;
  photoUrl: string;
  myPosition: number;
  allPositions: number;
}

export const Leaderboard = ({ name, photoUrl, myPosition, allPositions }: LeaderboardProps) => {
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
            of <span className="font-roboto color-yellow">{formatNumber(allPositions)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
