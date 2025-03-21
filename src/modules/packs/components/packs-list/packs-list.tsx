import styles from './packs-list.module.css';
import { BostItem } from '@/modules/core';
import { Row } from './parts/row';

interface PacksListProps {
  activeBoosts: BostItem[];
}

export const PacksList = ({ activeBoosts }: PacksListProps) => {
  const numRows = activeBoosts.length ? Math.ceil(activeBoosts.length / 3) : 0;

  const rows = Array.from({ length: numRows }, (_, index) => (
    <Row key={index} packs={activeBoosts.slice(index * 3, (index + 1) * 3)} />
  ));

  return (
    <div className="w-full max-w-[390px]">
      <div className={styles.header} />
      <div className="flex flex-col">{activeBoosts.length ? rows : <Row packs={[]} />}</div>
    </div>
  );
};
