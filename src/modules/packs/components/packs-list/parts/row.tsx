import { SectionMessage } from '@/components';
import { FC } from 'react';
import Image from 'next/image';
import { BostItem } from '@/modules/core';
import styles from './row.module.css';

interface RowProps {
  packs: BostItem[];
}

export const Row: FC<RowProps> = ({ packs }) => {
  return (
    <div className={styles.row}>
      {packs.map(pack => (
        <div key={pack.id} className="flex flex-col items-center justify-center">
          <Image src={'/packs/card-small.png'} alt={pack.name} width={100} height={100} />
          <SectionMessage size="extra-sm" color="dark">
            <p className="font-6 font-bold">{pack.name}</p>
          </SectionMessage>
        </div>
      ))}
    </div>
  );
};
