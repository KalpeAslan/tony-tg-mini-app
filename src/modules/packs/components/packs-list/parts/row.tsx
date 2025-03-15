import { SectionMessage } from '@/components';
import { FC } from 'react';
import Image from 'next/image';
import { PackItem } from '../../../model';
import styles from './row.module.css';

interface RowProps {
  packs: PackItem[];
}

export const Row: FC<RowProps> = ({ packs }) => {
  return (
    <div className={styles.row}>
      {packs.map(pack => (
        <div key={pack.id}>
          <Image src={pack.image} alt={pack.name} width={100} height={100} />
          <SectionMessage>
            <p>{pack.name}</p>
          </SectionMessage>
        </div>
      ))}
    </div>
  );
};
