import { FC } from 'react';
import { Table } from '../../table/table';
import { Mission } from '../../../models/mission.model';
import { MissionTableRow } from './missionTableRow';

interface DailyMissionsProps {
  missions: Mission[];
}

export const DailyMissions: FC<DailyMissionsProps> = ({ missions }) => {
  return (
    <div className="w-full border-white-translucent rounded-3xl bg-card overflow-hidden">
      <div className="w-full p-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="text-3xl uppercase">Daily Missions:</p>
        </div>
      </div>

      <Table>
        {missions.map((mission, index) => (
          <MissionTableRow key={index} mission={mission} />
        ))}
      </Table>
    </div>
  );
};
