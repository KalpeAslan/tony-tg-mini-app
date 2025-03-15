import { PackItem } from '../../model';
import styles from './packs-list.module.css';
import { Row } from './parts/row';

const mockPacks: PackItem[] = [
  {
    id: '1',
    name: 'Pack 1',
    description: 'Pack 1 description',
    image: '/packs/card-small.png',
    tonyCoins: 100,
    ton: 100,
    starts: 100,
  },
  {
    id: '2',
    name: 'Pack 2',
    description: 'Pack 2 description',
    image: '/packs/card-small.png',
    tonyCoins: 100,
    ton: 100,
    starts: 100,
  },
  {
    id: '3',
    name: 'Pack 3',
    description: 'Pack 3 description',
    image: '/packs/card-small.png',
    tonyCoins: 100,
    ton: 100,
    starts: 100,
  },
];

export const PacksList = () => {
  return (
    <div className="w-full max-w-[340px]">
      <div className={styles.header} />
      <Row packs={mockPacks} />
      <Row packs={mockPacks} />
      <Row packs={mockPacks} />
    </div>
  );
};
