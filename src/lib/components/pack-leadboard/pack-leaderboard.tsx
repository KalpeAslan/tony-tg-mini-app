import { Icon } from '@/components/ui/icon';
import { formatNumber } from '@/lib/utils';

interface PackLeaderboardProps {
  ownPosition: number;
  totalPositions: number;
  dark?: boolean;
}

export const PackLeaderboard = ({ ownPosition, totalPositions, dark = false }: PackLeaderboardProps) => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <div>
        <Icon color={dark ? '#2C2C2C' : '#FFFFFF'} name="leaderboard" size={30} />
      </div>

      <div>
        <p className="font-bold font-roboto text-xs">Pack Leaderboard:</p>
        <p className="text-base">
          you ARE <span className="font-roboto color-yellow">{formatNumber(ownPosition)}</span> out
          of <span className="font-roboto color-yellow">{totalPositions}</span>
        </p>
      </div>
    </div>
  );
};
