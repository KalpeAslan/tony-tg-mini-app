import { TableCell, TableRow } from '../../table';
import { Mission } from '../../../models/mission.model';
import { Icon } from '@/lib/components';
import { useSound } from '@/lib/hooks';
import { Sound } from '@/lib/constants';
import { useState } from 'react';
import Confetti from 'react-confetti';
interface MissionTableRowProps {
  mission: Mission;
  onComplete: () => void;
  isCompleting: boolean;
}

export const MissionTableRow = ({ mission, onComplete, isCompleting }: MissionTableRowProps) => {
  const { play } = useSound(Sound.CLICK);
  const [showConfetti, setShowConfetti] = useState(false);

  // setShowConfetti(true);
  // setTimeout(() => setShowConfetti(false), 5000);

  const handleClick = () => {
    play();

    if (!mission.isCompleted && !isCompleting) {
      onComplete();
    }

    setShowConfetti(true);
    setTimeout(() => {
      window.open(mission.url, '_blank');
      setShowConfetti(false);
    }, 1000);
  };

  return (
    <TableRow>
      <TableCell>
        <div className="flex items-center gap-2 font-roboto">
          <div className="flex flex-col items-center justify-center text-center gap-2 pr-4">
            <Icon size={45} name="mission-icon" />
            <TableCell className="text-right">
              <span className="text-xs text-[var(--exp-color)] whitespace-nowrap">
                +{mission.expReward} EXP
              </span>
            </TableCell>
          </div>
          <div>
            <p className="text-lg italic font-bold mb-2">{mission.title}</p>
            <p className="text-sm">{mission.description}</p>
          </div>
        </div>
      </TableCell>
      <TableCell className="text-right">
        <div
          onClick={handleClick}
          className={`rounded-full border-white-translucent h-[42px] w-[42px] flex items-center justify-center ${
            isCompleting
              ? 'opacity-50 cursor-not-allowed'
              : mission.isCompleted
                ? 'opacity-50 cursor-not-allowed'
                : 'cursor-pointer'
          }`}
        >
          <Icon size={16} name={mission.isCompleted ? 'checkMark' : 'play'} />
        </div>
      </TableCell>

      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <Confetti gravity={0.700} numberOfPieces={935} width={window.innerWidth} height={window.innerHeight} />
        </div>
      )}
    </TableRow>
  );
};
