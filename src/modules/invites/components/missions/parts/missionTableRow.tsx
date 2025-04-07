import { TableCell, TableRow } from '../../table';
import { Mission } from '../../../models/mission.model';
import { Icon } from '@/components';
import { useSound } from '@/lib/hooks';
import { Sound } from '@/lib/constants';

interface MissionTableRowProps {
  mission: Mission;
}

export const MissionTableRow = ({ mission }: MissionTableRowProps) => {

  const { play } = useSound(Sound.CLICK);


  const handleClick = () => {
    play();
    window.open(mission.url, '_blank');
  }

  return (
    <TableRow>
      <TableCell>
        <div className="flex items-center gap-2 font-roboto">
          <div className="flex flex-col items-center justify-center text-center gap-2 pr-4">
            <Icon size={45} name="mission-icon" />
            <TableCell className="text-right">
              <span className="text-xs text-[var(--exp-color)] whitespace-nowrap">+{mission.exp} EXP</span>
            </TableCell>
          </div>
          <div>
            <p className="text-lg italic font-bold mb-2">{mission.name}</p>
            <p className="text-sm">{mission.description}</p>
          </div>
        </div>
      </TableCell>
      <TableCell className="text-right">
        <div onClick={handleClick} className='rounded-full border-white-translucent h-[42px] w-[42px] flex items-center justify-center'>
          <Icon size={16} name="play" />
        </div>
      </TableCell>
    </TableRow>
  );
};
