import { FC } from 'react';
import { Table } from '../../table/table';
import { Mission } from '../../../models/mission.model';
import { MissionTableRow } from './missionTableRow';

interface BigOneTimersProps {
  missions: Mission[];
  onCompleteMission: (missionId: number) => void;
  isCompletingMission: boolean;
}

export const BigOneTimers: FC<BigOneTimersProps> = ({ 
  missions, 
  onCompleteMission,
  isCompletingMission 
}) => {
  return (
    <div className="w-full border-white-translucent rounded-3xl bg-card overflow-hidden">
      <div className="w-full p-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="text-3xl uppercase">Big One Timers:</p>
        </div>
      </div>

      <Table>
        {missions.map((mission) => (
          <MissionTableRow 
            key={mission.id} 
            mission={mission} 
            onComplete={() => onCompleteMission(mission.id)}
            isCompleting={isCompletingMission}
          />
        ))}
      </Table>
    </div>
  );
};
